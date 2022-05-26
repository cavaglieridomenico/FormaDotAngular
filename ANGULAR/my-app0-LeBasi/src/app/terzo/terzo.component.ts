import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terzo',
  templateUrl: './terzo.component.html',
  styleUrls: ['./terzo.component.css']
})
export class TerzoComponent implements OnInit {

  numero: number;
  parola: string;

  constructor() {

  }

  ngOnInit(): void {
    this.numero = 3;
    this.parola = "tre";

  }

}
