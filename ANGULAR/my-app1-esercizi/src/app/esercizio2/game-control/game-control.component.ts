import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() num = new EventEmitter<number>();

  ultimoNum = 0;
  go: any;

  constructor() { }

  ngOnInit(): void {
  }

  start(){
    this.go = setInterval(() =>{
      this.num.emit(this.ultimoNum + 1);
      this.ultimoNum++;
    }, 1000)
  }

  stop(){
    clearInterval(this.go);
  }
}
