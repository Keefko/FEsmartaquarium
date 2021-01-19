import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';




// @ts-ignore
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./../public.component.css']
})

export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
        login: ['', [Validators.required]],
        password: ['', [Validators.required], Validators.minLength(8), Validators.pattern('a-zA-Z')],
        email: ['', [Validators.required, Validators.email]]
    }, {
      validator: ''
    });
  }


  submit(): void {
    const data = this.form.getRawValue();
    this.authService.register(data).subscribe(
      res => this.router.navigate(['/login'])
    );
  }
}
