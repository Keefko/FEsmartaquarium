import {Component, Input, OnInit} from '@angular/core';
import {User} from '../interfaces/user';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import {Auth} from '../../classes/auth';
import {AquariumService} from '../service/aquarium.service';


@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
})
export class SecureComponent implements OnInit {
  user: User;
  constructor(private authService: AuthService, private aquariumService: AquariumService, private router: Router) { }

  ngOnInit(): void {
    const id = Number(sessionStorage.getItem('id'));
    this.getUser(id);
  }

  getUser(id): void {
    this.authService.getUser(id).subscribe(
      user => { this.user = user; Auth.userEmmiter.emit(user); },
      () => {sessionStorage.clear(); this.router.navigateByUrl('/login').then(); }
    );
  }


}
