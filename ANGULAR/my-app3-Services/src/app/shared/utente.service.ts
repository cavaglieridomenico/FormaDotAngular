import { Injectable } from '@angular/core';
import { LogService } from '../log.service';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  //ho iniettato logService dentro utenteService
  //Service dentro un altro Service
  constructor(private logService: LogService) {
  }

  // creo un metodo
  scriviDalServiceUtente(frase: string){
    this.logService.scriviInConsole(frase)
  }
}
