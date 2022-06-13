import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  private servers: [
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

  //Modifica del server, dopo
}
