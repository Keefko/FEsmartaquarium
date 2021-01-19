import {Component, Input, OnInit} from '@angular/core';
import {AquariumService} from '../../service/aquarium.service';
import {ProfileService} from '../../service/profile.service';
import {User} from '../../interfaces/user';
import {Auth} from '../../../classes/auth';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {
  aquariums = [];
  @Input() user: User;
  constructor(private aquariumService: AquariumService, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.user.subscribe(
      user => {
        this.user = user;
        this.loadData();
      }
    );
  }

  loadData(): void {
    this.aquariumService.usersAquarium(this.user?.id).subscribe(
      aquariums => this.aquariums = aquariums
    );
  }

}
