import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ComponentService} from '../../service/component.service';



@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
})
export class ComponentComponent implements OnInit {
  id: number;
  components = [];
  constructor(private route: ActivatedRoute, private componentService: ComponentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.componentService.getAll(this.id).subscribe(
        components => this.components = components
    );
  }

  delete(id: number): void {
    this.componentService.delete(id).subscribe();
  }
}
