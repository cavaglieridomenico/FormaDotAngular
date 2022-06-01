import { Component, OnInit } from '@angular/core';
import { Recensione } from './recensione.model';

@Component({
  selector: 'app-recensione',
  templateUrl: './recensione.component.html',
  styleUrls: ['./recensione.component.css']
})
export class RecensioneComponent implements OnInit {

  miaRecensione: Recensione;

  constructor() { }

  ngOnInit(): void {
    this.miaRecensione.like();

  }

}
