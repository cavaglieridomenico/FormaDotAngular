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


  // private superUser: Utente = {
  //   nome: "Paperino",
  //   tipo: "Super-User"
  // };

  private superUser: Utente;

  getSuperUser(){
    if(this.superUser){
    return this.superUser;
    }else{
      return null;
    }
  }

  setSuperUser(nome: string, tipo: string){
    this.superUser = {
      nome: nome,
      tipo: tipo
    }
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
