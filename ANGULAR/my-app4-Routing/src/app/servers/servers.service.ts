import {
  Injectable
} from '@angular/core';
import { Server } from './server/server.model';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  private servers: Server[] =[
    {
      id: 1,
      nome: "Produzione",
      status: "Online"
    },
    {
      id: 2,
      nome: "Sviluppo",
      status: "Offline"
    },
    {
      id: 3,
      nome: "Cloud",
      status: "Online"
    },
    {
      id: 4,
      nome: "IOT",
      status: "Online"
    }
  ]

  constructor() {}

  getServers(){
    return this.servers;
  }

  getServerById(id: number){
    const server = this.servers.find(
      (s) => {
        return s.id === id
      }
    )
    return server;
  }

  aggiornaServer(id: number, serverInfoMod: {nome: string, status: string}){
    const server = this.servers.find(
      (s) => {
        return s.id === id
      }

    );

    if(server){
      server.nome = serverInfoMod.nome;
      server.status = serverInfoMod.status;
    }
  }


}
