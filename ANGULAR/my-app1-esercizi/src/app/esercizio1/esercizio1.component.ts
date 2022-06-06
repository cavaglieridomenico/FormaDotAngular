import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esercizio1',
  templateUrl: './esercizio1.component.html',
  styleUrls: ['./esercizio1.component.css']
})
export class Esercizio1Component implements OnInit {

  mostraPass = false;

  logs = [];

  frase = 'La pass è : Gennarino'

  constructor() { }

  ngOnInit(): void {
  }

  onMostra(){
    // if(this.mostraPass === false){
      //   this.mostraPass = true
      // }else{
        //   this.mostraPass = false;
        // }
    this.mostraPass = !this.mostraPass;
    // this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());
  }

}
