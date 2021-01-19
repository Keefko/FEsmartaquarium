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
import {AquariumSettingsComponent} from './secure/aquarium-settings/aquarium-settings.component';
import {ConnectionComponent} from './secure/connection/connection.component';
import {ComponentComponent} from './secure/component/component.component';
import {NotificationComponent} from './secure/notification/notification.component';
import {AuthGuard} from './guard/auth.guard';
import {HomeComponent} from './home/home/home.component';
import {ComponentEditComponent} from './secure/component-edit/component-edit.component';
import {ComponentCreateComponent} from './secure/component-create/component-create.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', component: PublicComponent, children: [
      {path: 'login' , component: LoginComponent},
      {path: 'register', component: RegisterComponent}
  ]},

  {path: '', component: SecureComponent, canActivate: [AuthGuard], children: [
      {path: 'dashboard' , component: DashboardComponent},
      {path: 'profile', component: ProfileComponent },
      {path: 'measurament/:id', component: MeasuramentComponent},
      {path: 'aquarium/settings/:id', component: AquariumSettingsComponent},
      {path: 'connection/:id', component: ConnectionComponent},
      {path: 'aquarium/create', component: AqauriumCreateComponent},
      {path: 'component/:id', component: ComponentComponent},
      {path: 'notification/:id', component: NotificationComponent},
      {path: 'component/edit/:id', component: ComponentEditComponent},
      {path: 'component/create/:id', component: ComponentCreateComponent}
    ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
