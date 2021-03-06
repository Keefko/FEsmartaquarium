import { Component, OnInit } from '@angular/core';
import {AquariumService} from '../../service/aquarium.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../../interfaces/user';
import {Auth} from '../../../classes/auth';
import {ProfileService} from '../../service/profile.service';


@Component({
  selector: 'app-aqaurium-create',
  templateUrl: './aqaurium-create.component.html',

})
export class AqauriumCreateComponent implements OnInit {
  form: FormGroup;
  user: User;
  constructor(private aquariumService: AquariumService, private router: Router, private formBuilder: FormBuilder,
              private profileService: ProfileService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: '',
      name: '',
    });

    this.profileService.user.subscribe(
      user => {
        this.user = user;
      }
    );
  }

  submit(): void{
    const data = {id: this.form.controls.id.value , userId: this.user.id, name: this.form.controls.name.value};
    this.aquariumService.addAquarium(data).subscribe(
        res => {
          this.router.navigateByUrl('/dashboard').then(() => {
            this.router.navigate([this.router.url]);
          });
        }
    );
  }

}
