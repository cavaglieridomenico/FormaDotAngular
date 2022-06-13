import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Server } from '../server/server.model';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  server: Server;
  nomeServer = '';
  statusServer = '';
  modificheSalvate = false;


  constructor(private serverService: ServersService,
            private route: ActivatedRoute,
            private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serverService.getServerById(id);

    this.route.params
        .subscribe(
          (params: Params) => {
            this.server = this.serverService.getServerById(+params['id'])
          }
        );

    this.nomeServer = this.server.nome;
    this.statusServer = this.server.status;

  }

  onAggiornaServer(){
    this.serverService.aggiornaServer(this.server.id, {nome: this.nomeServer, status: this.statusServer});
    console.log('ok, Modifica avvenuta ');
    this.modificheSalvate = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
