import {Component, Input, OnInit} from '@angular/core';
import {AquariumService} from '../../service/aquarium.service';
import {Auth} from '../../../classes/auth';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  aquariums = [];
  constructor(private aquariumService: AquariumService) { }

  ngOnInit(): void {

    Auth.userEmmiter.subscribe(
      user =>  this.aquariumService.usersAquarium(user.id).subscribe(
          aquariums => this.aquariums = aquariums
      )
    );

  }

}
