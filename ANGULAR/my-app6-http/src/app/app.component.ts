import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { Utente } from './utente.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app6-http';

  constructor(private userService: UsersService){}

  onPrendiUtenti(){
    this.userService.getData()  //ritorna degli Observable
        .subscribe( utenti => {
          console.log(utenti);
        })
  }

  onCreaUtente(nome: string, cognome: string){
    this.userService.creaUtente(nome, cognome);
  }

  mieiUsers: Utente[];

  onPrendiMieiUtenti(){
    this.userService.fetchUtenti()
    .subscribe(utenti =>{
      console.log(utenti);
      this.mieiUsers = utenti;
    })
  }


}
