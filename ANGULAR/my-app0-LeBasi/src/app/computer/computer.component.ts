import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {

  computerID = 3;
  computerStatus: string;


  constructor() {

    this.computerStatus = Math.random() > 0.5 ? 'Online'  : 'Offline'
  }

  ngOnInit(): void {
  }

  getColor() {
    return this.computerStatus === 'Online' ? 'lightgreen' : 'red'
  }

  getComputerStatus(){
    return this.computerStatus;
  }


}
