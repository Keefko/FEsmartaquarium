import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './public/login/login.component';
import {RegisterComponent} from './public/register/register.component';
import {PublicComponent} from './public/public.component';
import {SecureComponent} from './secure/secure.component';
import {DashboardComponent} from './secure/dashboard/dashboard.component';
import {ProfileComponent} from './secure/profile/profile.component';
import {MeasuramentComponent} from './secure/measurament/measurament.component';
import {AqauriumCreateComponent} from './secure/aqaurium-create/aqaurium-create.component';

const routes: Routes = [
  {path: '', component: PublicComponent, children: [
      {path: 'login' , component: LoginComponent},
      {path: 'register', component: RegisterComponent}
  ]},

  {path: '', component: SecureComponent, children: [
      {path: 'dashboard' , component: DashboardComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'measurament/:id', component: MeasuramentComponent, pathMatch: 'full'},
      {path: 'aquarium/create', component: AqauriumCreateComponent}
    ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
