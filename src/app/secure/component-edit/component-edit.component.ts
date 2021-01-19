import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ComponentService} from '../../service/component.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Component as Comp} from '../../interfaces/component';

@Component({
  selector: 'app-component-edit',
  templateUrl: './component-edit.component.html',
})

export class ComponentEditComponent implements OnInit {
  id: number;
  names = [];
  form: FormGroup;
  component: Comp;
  constructor(private route: ActivatedRoute, private componentService: ComponentService, private router: Router,
              private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.form = this.formBuilder.group({
      name: '',
      period: '',
      periodAllowed: '',
      turnOn: '',
      cyklus: '',
      topic: ''
    });

    this.names = this.getNames();

    this.componentService.get(this.id).subscribe(
      component => {
        this.component = component;
        this.form.patchValue(component);
      }
    );
  }

  submit(): void {

  }

  getNames(): any{
    return [
      {id: '1', name: 'light'},
      {id: '2', name: 'thermometer'},
      {id: '3', name: 'feeding'},
    ];
  }

}
