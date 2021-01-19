import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MeasuramentService} from '../../service/measurament.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BaseChartDirective, ChartsModule, Color, Label} from 'ng2-charts';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';

@Component({
  selector: 'app-measurament',
  templateUrl: './measurament.component.html',
})
export class MeasuramentComponent implements OnInit {
  id: number;
  form: FormGroup;
  measuraments = [];
  properties = [];
  intervals = [];

  constructor(private route: ActivatedRoute, private measuramentService: MeasuramentService,
              private formBuilder: FormBuilder ) { }
  ngOnInit(): void {

    this.id = this.route.snapshot.params.id;
    this.form = this.formBuilder.group({
        properties: '',
        from: '',
        to: '',
        intervals: ''
    });

    this.properties = this.getProperties();
    this.intervals = this.getIntervals();

    const currentDate = new Date();
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + 1);

    this.measuramentService.lastAquariumMeasurament(this.id, currentDate.getTime(),
      nextDate.getTime()).subscribe(
      measuraments => {
        this.measuraments = measuraments;
        console.log(measuraments);
      }
    );
  }

  getIntervals(): any{
    return [
      { id: '1', name: 'hour' },
      { id: '2', name: 'day' },
      { id: '3', name: 'week' },
    ];
  }

  getProperties(): any {
    return [
      { id: '1', name: 'pH' },
      { id: '2', name: 'orp' },
      { id: '3', name: 'temperature' },
    ];
  }

  submit(): void{

  }
}
