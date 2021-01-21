import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MeasuramentService} from '../../service/measurament.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Chart} from 'chart.js';

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
  chart;
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

    this.chart = new Chart(
      'canvas',
      {
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Combo Bar and line Chart'
          },
        },
         type: 'line',
         data: {
           labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
           datasets: [
             {
               type: 'line',
               label: 'My First dataset',
               data: [243, 156, 365, 30, 156, 265, 356, 543],
               backgroundColor: 'rgba(255,0,255,0.4)',
               borderColor: 'rgba(255,0,255,0.4)',
               fill: false,
             }, ]
         },
      }
    );
  }

  addData(chart, label, data): void {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    chart.update();
  }

  removeData(chart): void {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
    chart.update();
  }

  updateChartData(chart, data, dataSetIndex): void{
    chart.data.datasets[dataSetIndex].data = data;
    chart.update();
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
