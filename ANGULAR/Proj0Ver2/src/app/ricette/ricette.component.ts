import { Component, OnInit } from '@angular/core';
import { Ricetta } from './ricetta.model';

@Component({
  selector: 'app-ricette',
  templateUrl: './ricette.component.html',
  styleUrls: ['./ricette.component.css']
})
export class RicetteComponent implements OnInit {

  // ricetta: Ricetta;

  ricettaSelez: Ricetta;

  constructor() { }

  ngOnInit(): void {
  }

  // ricettaSelez(ricetta: Ricetta){
  //   this.ricetta = ricetta;
  // }
}
