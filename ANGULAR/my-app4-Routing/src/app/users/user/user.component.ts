import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: {id: number, nome: string};

  //Per poter prendere solo l'id che viene scritto nello Url devo iniettare l'ActivatedRoute (built-in)
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.params);
    this.user = {
      id: this.route.snapshot.params['id'],
      nome: this.route.snapshot.params['nome']
    }

    //dato che l'id cambia in base al click sul singolo utente, devo andare a "osservare" il cambiamento del mio ID
    this.route.params
        .subscribe(
          (params: Params) => {
            this.user.id = params['id'];
            this.user.nome = params['nome']
          }
        );

  }

}
