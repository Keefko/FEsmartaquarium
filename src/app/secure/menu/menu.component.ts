import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../interfaces/user';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {NotificationService} from '../../service/notification.service';
import {ProfileService} from '../../service/profile.service';
import {Auth} from '../../../classes/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  @Input() user: User;
  notifications = [];
  constructor(
    public route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.profileService.user.subscribe(
        user => {
          this.user = user;
          this.loadNotifications();
        }
    );
  }

  loadNotifications(): void{
    this.notificationService.get(this.user?.id).subscribe(
      notifications => this.notifications = notifications
    );
  }

  logout(): void {
    this.router.navigateByUrl('/login').then(
      () => sessionStorage.clear()
    );
  }

}
