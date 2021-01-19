import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ComponentService} from '../../service/component.service';
import {ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'app-component-create',
  templateUrl: './component-create.component.html',
})

export class ComponentCreateComponent implements OnInit {
  form: FormGroup;
  id: number;
  names: {} = [];
  constructor(private componentService: ComponentService, private formBuilder: FormBuilder,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      period: '',
      periodAllowed: '',
      turnOn: '',
      cyklus: '',
      topic: ''
    });

    this.id = this.route.snapshot.params.id;

    this.names = this.getNames();

  }

  getNames(): any{
    return [
      {id: '1', name: 'light'},
      {id: '2', name: 'thermometer'},
      {id: '3', name: 'feeding'},
    ];
  }

  submit(): void {
    const time = new Date(this.form.controls.period.value);
    const data = {aquariumId: this.id, name: this.form.controls.name.value, topic: this.form.controls.topic.value,
    period: time.getTime(), periodAllowed: this.form.controls.periodAllowed.value,
    turnOn: this.form.controls.turnOn.value, cyklus: this.form.controls.cyklus.value };

    this.componentService.post(data).subscribe(
      res => this.router.navigate(['/component', this.id])
    );
  }

}
