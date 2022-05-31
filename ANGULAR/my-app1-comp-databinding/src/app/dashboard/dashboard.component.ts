import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //lezTeoCr è un alias, nell'app component espongo l'alias non il nome della mia prop
  @Output('lezTeoCr') lezioneCreataTeo =
  new EventEmitter<{nomeLezione: string, contenutoLezione:string}>();

  @Output('lezFroCr') lezioneCreataFront = new EventEmitter<{nomeLezione: string, contenutoLezione:string}>()

  newNomeLezione = "";
  newDescLezione = "";

  constructor() { }

  ngOnInit(): void {
  }

  onAddTeorica(){
    console.log(this.newNomeLezione + ' - ' + this.newDescLezione);
    this.lezioneCreataTeo.emit({
      nomeLezione: this.newNomeLezione,
      contenutoLezione: this.newDescLezione
    })

  }

  onAddFrontale(){
    this.lezioneCreataFront.emit({
      nomeLezione: this.newNomeLezione,
      contenutoLezione: this.newDescLezione
    })
  }
}
