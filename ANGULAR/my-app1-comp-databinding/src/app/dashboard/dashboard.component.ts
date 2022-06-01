import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Lezione } from '../shared/lezione.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //lezTeoCr è un alias, nell'app component espongo l'alias non il nome della mia prop
  @Output('lezTeoCr') lezioneCreataTeo = new EventEmitter<Lezione>();

  @Output('lezFroCr') lezioneCreataFront = new EventEmitter<{nomeLezione: string, contenutoLezione:string}>()

  newNomeLezione = "";
  newDescLezione = "";

  avviso = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddTeorica(){
    let lezione = new Lezione(this.newNomeLezione, this.newDescLezione, 'Lezione Teorica');

    console.log(this.newNomeLezione + ' - ' + this.newDescLezione);
    if(this.newNomeLezione === '' && this.newDescLezione === ''){
      console.log("Non stai aggiungendo nessuna lezione");
      this.avviso = " NOn stai compilando bene i campi";

    }else{
      this.avviso = '';
      this.lezioneCreataTeo.emit(lezione);
  }

  }

  onAddFrontale(){
    if(this.newNomeLezione === '' && this.newDescLezione === ''){
      console.log("Non stai aggiungendo nessuna lezione");
      this.avviso = "Non stai compilando bene i campi";

    }else{
      this.avviso = '';
      this.lezioneCreataFront.emit({
      nomeLezione: this.newNomeLezione,
      contenutoLezione: this.newDescLezione
    })
  }
  }
}
