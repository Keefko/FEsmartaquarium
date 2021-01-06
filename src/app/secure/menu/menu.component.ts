import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../interfaces/user';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {Auth} from '../../../classes/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user: User;

  constructor(
    public route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    Auth.userEmmiter.subscribe(
      user => this.user = user
    );
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
