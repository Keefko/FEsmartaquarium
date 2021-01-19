import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {Auth} from '../../../classes/auth';
import {User} from '../../interfaces/user';
import {Router} from '@angular/router';
import {ProfileService} from '../../service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  user: User;

  constructor(private formBuilder: FormBuilder, private userService: UserService,
              private router: Router, private profileService: ProfileService) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      id: '',
      login: '',
      password: '',
      email: ''
    });

    this.profileService.user.subscribe(
      user => {
        this.form.patchValue(user);
        this.user = user;
      }
    );

  }
  submit(): void{
    const data = this.form.getRawValue();
    this.userService.updateUser(data).subscribe(
      user => {
        Auth.userEmmiter.emit(user);
        this.router.navigate([this.router.url]);
      }
    );
  }

  delete(): void {
      this.userService.deleteUser(this.user.id).subscribe(
        res => this.router.navigateByUrl('/login')
      );
  }

}
