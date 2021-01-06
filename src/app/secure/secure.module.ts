import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { NavComponent } from './nav/nav.component';
import {RouterModule} from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ProfileComponent} from './profile/profile.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MeasuramentComponent } from './measurament/measurament.component';
import { AqauriumCreateComponent } from './aqaurium-create/aqaurium-create.component';



@NgModule({
  declarations: [SecureComponent, NavComponent, MenuComponent, ProfileComponent, DashboardComponent, MeasuramentComponent, AqauriumCreateComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class SecureModule { }
