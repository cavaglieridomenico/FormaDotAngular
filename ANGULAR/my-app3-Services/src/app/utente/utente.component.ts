import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { UtenteService } from '../shared/utente.service';

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.css']
})
export class UtenteComponent implements OnInit {

  //posso iniettare quanti servizi mi pare e piace
  constructor(private utenteService: UtenteService, private logService: LogService) {
    this.utenteService.scriviDalServiceUtente("Sono nel component Utente che inietta dal serviceUtente del serviceLog");
   }

  ngOnInit(): void {
  }

  onModTypeUser(){
    this.logService.aggiornaTipo(1, "Ammiraglio");
  }
}
