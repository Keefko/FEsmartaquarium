import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NotificationService} from '../../service/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent implements OnInit {
  id: number;
  notifications = [];

  constructor(private route: ActivatedRoute, private notificationService: NotificationService) { }

  ngOnInit(): void {

   this.id =  this.route.snapshot.params.id;

   this.notificationService.get(1).subscribe(
      notifications => this.notifications = notifications
    );

  }

  visibleNotification(id: number): void {
    this.notificationService.delete(id).subscribe();
  }
}
