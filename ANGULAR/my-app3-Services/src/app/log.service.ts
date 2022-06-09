import { Injectable } from "@angular/core";
import { Utente } from "./shared/utente.model";

@Injectable({
  providedIn: 'root'
})

export class LogService {

   utenti: Utente[] = [
    {
      nome: "Dario",
      tipo: "Docente"
    },
    {
      nome: "Pippo",
      tipo: "Amministratore"
    },
    {
      nome: "Pluto",
      tipo: "Base"
    }
  ];


  private superUser: Utente = {
    nome: "Paperino",
    tipo: "Super-User"
  };

  getSuperUser(){
    return this.superUser;
  }

  setSuperUser(nome: string, tipo: string){
    let superU = new Utente(nome, tipo);
    return superU;
  }


  scriviInConsole(parola: string){
    console.log("Ciao dal service nel " + parola);
  }

  condividiDati(){
    console.log(this.utenti);
  }

  aggiungiUtnte(nome: string, tipo: string){
    this.utenti.push({nome: nome, tipo: tipo});
  }

  aggiornaTipo(id: number, tipo: string){
    this.utenti[id].tipo = tipo;
  }

}
