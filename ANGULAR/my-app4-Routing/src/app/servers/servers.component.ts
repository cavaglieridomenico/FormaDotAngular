import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Server } from './server/server.model';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers: Server[];

  constructor(private serversService: ServersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.servers = this.serversService.getServers();
  }

  connesso:boolean = true;

  onMove(idServ:number){
    if(this.connesso){
      this.router.navigate(['login'], {relativeTo: this.route});
    }else{
      this.router.navigate([idServ], {relativeTo: this.route});
    }
  }

}
