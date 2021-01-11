import {Component, Input, OnInit} from '@angular/core';
import {AquariumService} from '../../service/aquarium.service';
import {Auth} from '../../../classes/auth';
import {Measurament} from '../../interfaces/measurament';
import {MeasuramentService} from '../../service/measurament.service';
import {User} from '../../interfaces/user';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  aquariums = [];
  @Input() user: User;
  @Input() measurament: Measurament;
  constructor(private aquariumService: AquariumService, private measuramentService: MeasuramentService) { }

  ngOnInit(): void {
    // Auth.userEmmiter.subscribe(
    //   user => {
    //     this.user = user;
    //     this.getAquariums(user.id);
    //     }
    // );

    this.aquariumService.usersAquarium(1).subscribe(
      aquariums => this.aquariums = aquariums
    );

  }

  getAquariums(id: number): void{
      this.aquariumService.usersAquarium(id).subscribe(
          aquariums => this.aquariums = aquariums
      );
  }

  delete(id: number): void{
    this.aquariumService.deleteAquarium(id).subscribe();
  }

  getLastMeasurament(id: number): void {
    this.measuramentService.lastMeasurament(id).subscribe(
      measurament => this.measurament = measurament
    );
  }

}
