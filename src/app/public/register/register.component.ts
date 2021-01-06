import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {User} from '../../interfaces/user';

// @ts-ignore
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', './../public.component.css']
})

export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
        login: '',
        password: '',
        email: ''
    });
  }

  submit(): void {
    const data = this.form.getRawValue();
    this.authService.register(data).subscribe(
      value => {}
    );
  }
}
