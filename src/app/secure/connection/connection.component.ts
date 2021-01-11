import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ConnectionService} from '../../service/connection.service';
import {Connection} from '../../interfaces/connection';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
})
export class ConnectionComponent implements OnInit {
  id: number;
  @Input() connection: Connection;
  constructor(private route: ActivatedRoute, private connectionService: ConnectionService) { }

  ngOnInit(): void {

   this.id = this.route.snapshot.params.id;

   this.connectionService.getByAquarium(this.id).subscribe(
     connection => this.connection = connection
   );

  }

}
