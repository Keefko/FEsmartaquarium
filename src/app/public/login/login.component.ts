import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';
import {User} from '../../interfaces/user';
import {Auth} from '../../../classes/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './../public.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      login: '',
      password: ''
    });
  }

  submit(): void {
    const data = this.form.getRawValue();
    this.authService.login(data).subscribe(
      user => {
        sessionStorage.setItem('id', String(user.id));
        this.router.navigate(['/dashboard']);
      }
    );
  }


}
