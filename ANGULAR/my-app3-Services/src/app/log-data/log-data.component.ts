import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { CounterService } from '../shared/counter.service';
import { Utente } from '../shared/utente.model';

@Component({
  selector: 'app-log-data',
  templateUrl: './log-data.component.html',
  styleUrls: ['./log-data.component.css']
})
export class LogDataComponent implements OnInit {

  utenze: Utente[];
  superUser: Utente;

  constructor(private logService: LogService, private counterServ: CounterService) { }

  ngOnInit(): void {
    this.logService.scriviInConsole('component LogData');
    this.logService.condividiDati(); //scrive i dati in console

    this.logService.aggiungiUtnte('Paolo', 'Amministratore');
    this.utenze = this.logService.utenti;

    //per il superUser private
    this.logService.setSuperUser("Mimmo", "Tecnico Specializzato");
    this.superUser = this.logService.getSuperUser();

    this.counterServ.contaUtenti();
  }

  addUserLog(){
    this.logService.aggiungiUtnte("Anna", "Log");
  }

  modUserType(){
    this.logService.aggiornaTipo(0, "Base");
  }
}
