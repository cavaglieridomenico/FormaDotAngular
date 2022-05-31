import { Component, Input, OnInit } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-prova-input',
  templateUrl: './prova-input.component.html',
  styleUrls: ['./prova-input.component.css']
})
export class ProvaInputComponent implements OnInit {
  // per ricevere il nome dall'esterno devo "decorare" la propr con il @Input()
  @Input() nome: string;
  // @Input() cognome: string;
  // @Input() eta: number;

  // @Input() persona: Persona;

  // @Input() nomi: string[];



  constructor() { }

  ngOnInit(): void {
  }

}
