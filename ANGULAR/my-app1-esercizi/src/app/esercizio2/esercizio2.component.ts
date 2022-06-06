import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esercizio2',
  templateUrl: './esercizio2.component.html',
  styleUrls: ['./esercizio2.component.css']
})
export class Esercizio2Component implements OnInit {

  numeriPari: number[] = [];
  numeriDisp: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onFiredNum(firedNumber: number){
    console.log(firedNumber);
    if(firedNumber % 2 == 0){
      this.numeriPari.push(firedNumber);
    }else{
      this.numeriDisp.push(firedNumber);
    }

  }
}
