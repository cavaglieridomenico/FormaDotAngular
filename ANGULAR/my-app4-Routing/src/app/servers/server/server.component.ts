import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';
import { Server } from './server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  server: Server;

  constructor( private serverService: ServersService,
              private ActRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    // this.server = this.serverService.getServerById(1);
    // vado a prendere dinamicamente il mio id attraverso Activated Route
    const id = +this.ActRoute.snapshot.params['id'];
    //ATT: quando recupero qualcosa da un url recupero sempre string

    this.server = this.serverService.getServerById(id);


    //l'id che sta arrivando è di tipo Observable -> mi serve il .subscribe()
    this.ActRoute.params
        .subscribe(
          (params: Params) =>{
            this.server = this.serverService.getServerById(+params['id'])
          }
        );


  }

  onModServer(){
    this.router.navigate(['edit'], {relativeTo: this.ActRoute});
    //  servers/:id/edit
  }

}
