import {Component, Input, OnInit} from '@angular/core';
import {User} from '../interfaces/user';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import {Auth} from '../../classes/auth';
import {AquariumService} from '../service/aquarium.service';
import {ProfileService} from '../service/profile.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
})
export class SecureComponent implements OnInit {

  constructor(private authService: AuthService, private aquariumService: AquariumService,
              private router: Router, private profileService: ProfileService) { }


  ngOnInit(): void {
    const id = Number(sessionStorage.getItem('id'));
    this.profileService.user = this.authService.getUser(id);
    console.log(this.profileService.user);
  }



}
