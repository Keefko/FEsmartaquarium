import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-measurament',
  templateUrl: './measurament.component.html',
  styleUrls: ['./measurament.component.css']
})
export class MeasuramentComponent implements OnInit {
  id: number;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params.id;
  }

}
