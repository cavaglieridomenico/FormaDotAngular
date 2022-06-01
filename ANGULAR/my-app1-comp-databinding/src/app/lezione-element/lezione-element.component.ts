import { Component, Input, OnInit } from '@angular/core';
import { Lezione } from '../shared/lezione.model';

@Component({
  selector: 'app-lezione-element',
  templateUrl: './lezione-element.component.html',
  styleUrls: ['./lezione-element.component.css']
})
export class LezioneElementComponent implements OnInit {

  // @Input() element: {
  //   nome: string,
  //   descrizione: string,
  //   type: string
  // };

  //Espongo all'esterno il mio Alias NON la proprietà
  // @Input('lezioneEl') element: {
  //   nome: string,
  //   descrizione: string,
  //   type: string
  // };

  //QUando utilizzo il type Lezione, cioè la classe Lezione
  @Input('lezioneEl') element: Lezione;

//posso, tra le parentesi, passare un alias, cioè un nome identificativo
  // @Input('nomeLezione') element: {
  //   nome: string,
  //   descrizione: string,
  //   type: string
  // };

  constructor() {

  }

  ngOnInit(): void {

  }

}
