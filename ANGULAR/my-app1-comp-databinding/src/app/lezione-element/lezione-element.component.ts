import { Component, Input, OnInit } from '@angular/core';

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

//posso, tra le parentesi, passare un alias, cioè un nome identificativo
  @Input('nomeLezione') element: {
    nome: string,
    descrizione: string,
    type: string
  };

  constructor() {

  }

  ngOnInit(): void {

  }

}
