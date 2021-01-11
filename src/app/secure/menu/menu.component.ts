import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../interfaces/user';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {Auth} from '../../../classes/auth';
import {NotificationService} from '../../service/notification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  user: User;
  notifications = [];
  constructor(
    public route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    Auth.userEmmiter.subscribe(
      user => this.user = user
    );

    this.notificationService.get(1).subscribe(
      notifications => this.notifications = notifications
    );
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
