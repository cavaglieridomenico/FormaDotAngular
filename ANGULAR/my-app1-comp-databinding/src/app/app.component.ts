import { Component } from '@angular/core';
import { Persona } from './prova-input/persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app1-comp-databinding';


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

  onAddedFront(lezione: {nomeLezione: string, contenutoLezione: string}){
    this.lezioni.push({
      nome: lezione.nomeLezione,
      descrizione: lezione.contenutoLezione,
      type: "Lezione Frontale"
    })
  }

  onAddedTeo(lezione: {nomeLezione: string, contenutoLezione: string}){
    this.lezioni.push({
      nome: lezione.nomeLezione,
      descrizione: lezione.contenutoLezione,
      type: "Lezione Teorica"
    })
  }

  // Qui sotto ci sono gli esempi singoli
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



  //metodo per l'output, la proprietà deve essere identica a quella che invio in output
  // onReciveInfo(info: {nomeProg: string, descrizioneProg: string}){
  //   console.log(info);
  //   console.log(info.descrizioneProg);
  //   console.log(info.nomeProg);
  // }

  // Si può anche fare in questo modo
  onReciveInfo(info: {descrizioneProg: string, nomeProg:string}){
    // console.log(info);
    // console.log(info.descrizioneProg);
    // console.log(info.nomeProg);
    if(info.descrizioneProg && info.nomeProg){
      console.log("Il corso ha le seguenti informazioni: " + info.descrizioneProg +
      ' ' + info.nomeProg);
    }else{
      console.log("Info non pervenute");
    }
  }

  onRiceviDato(dati: {datiSfusi: string}){
    console.log(dati);
    if(dati.datiSfusi){
      console.log("Questi sono dati Sfusi: " + dati.datiSfusi);
    }else{
      console.log("Dati non pervenuti");
    }

  }
}
