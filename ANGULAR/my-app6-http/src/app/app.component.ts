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

  //prende il json di reqres salvato in Firebase
  onPrendiUtenti(){
    this.userService.getData()  //ritorna degli Observable
        .subscribe( utenti => {
          console.log(utenti.body);
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

  onClearUtenti(){
    this.userService.deleteUsers()
    .subscribe(()=>{
      console.log("Hai cancellato tutti gli utenti");
      this.mieiUsers = [];
    })
  }

  onClearSingolo(id: string){
    this.userService.deleteSingoloUser(id)
    .subscribe(()=>{
      console.log('hai eliminato l\'utente con il seguente id: ' + id);
      this.onPrendiMieiUtenti();
    })
  }

}
