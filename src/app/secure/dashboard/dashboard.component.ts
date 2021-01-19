import {Component, Input, OnInit} from '@angular/core';
import {AquariumService} from '../../service/aquarium.service';
import {Auth} from '../../../classes/auth';
import {Measurament} from '../../interfaces/measurament';
import {MeasuramentService} from '../../service/measurament.service';
import {User} from '../../interfaces/user';
import {Router} from '@angular/router';
import {Aquarium} from '../../interfaces/aquarium';
import {ProfileService} from '../../service/profile.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  aquariums: Aquarium[] = [];
  user: User;
  @Input() measurament: Measurament;
  constructor(private aquariumService: AquariumService, private measuramentService: MeasuramentService,
              private router: Router, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.user.subscribe(
      user => {
        this.user = user;
        this.loadData();
      }
    );
  }

  private loadData(): void {
    this.aquariumService.usersAquarium(this.user?.id).subscribe(
      aquariums => {
        this.aquariums = aquariums;
        this.aquariums.forEach(aq => this.getLastMeasurament(aq));
      }
    );
  }

  delete(id: number): void{
    this.aquariumService.deleteAquarium(id).subscribe(
      res => {
        console.log(res);
        window.location.reload();
      }
    );
  }

  getLastMeasurament(aq: Aquarium): void {
    this.measuramentService.lastMeasurament(aq.id).subscribe(
      measurament => aq.measurament = measurament
    );
  }

}
