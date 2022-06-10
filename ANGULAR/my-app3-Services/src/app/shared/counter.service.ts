import { Injectable } from '@angular/core';
import { LogService } from '../log.service';
import { Utente } from './utente.model';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  utenti: Utente[] = []


  constructor(private logService: LogService) {
    this.utenti = logService.utenti;
   }


  conta(){
    for (let index = 0; index < 10; index++) {
      console.log(index);
    }
  }

  contaUtenti(){
    //conta il numero di users
    for(let i = 0 ; i < this.utenti.length; i++){
    console.log(  this.utenti[i] );
    }
  }
}
