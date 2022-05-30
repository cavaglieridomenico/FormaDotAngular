import { Component } from '@angular/core';
import { Persona } from './prova-input/persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app1-comp-databinding';

  // nomeDocente = "Dario";

  // singole prop
  // nomeDoc = "Dario";
  // cognomeDoc = "Mennillo";
  // etaDoc = 33;

  // intero oggetto
  // docente: Persona = {
  //   nome: "Dario",
  //   cognome: "Mennillo",
  //   eta: 33
  // };

  // studente: Persona ={
  //   nome: "Pippo",
  //   cognome: "Rossi",
  //   eta: 45
  // }

  // docente2 = new Persona("Pippo", "Rossi", 30);

  //Array
  nomiDocenti = ["Dario", "Giovanni", "Danilo"];

  lezioni = [
    {
      nome: "Angular",
      descrizione: "Corso intensivo Angular",
      type: "Lezione Frontale"
    },
    {
      nome: "Html & CSS",
      descrizione: "Rudimenti",
      type: "Lezione Teorica"
    }
  ];


  //metodo per l'output, la proprietà deve essere identica a quella che invio in output
  // onReciveInfo(info: {nomeProg: string, descrizioneProg: string}){
  //   console.log(info);
  //   console.log(info.descrizioneProg);
  //   console.log(info.nomeProg);
  // }

  // Si può anche fare in questo modo
  onReciveInfo(info){
    console.log(info);
    console.log(info.descrizioneProg);
    console.log(info.nomeProg);
  }

  onRiceviDato(dati){
    console.log(dati);

  }
}
