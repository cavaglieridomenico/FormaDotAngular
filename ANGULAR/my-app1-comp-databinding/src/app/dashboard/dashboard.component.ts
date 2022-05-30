import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  newNomeLezione = "";
  newDescLezione = "";

  constructor() { }

  ngOnInit(): void {
  }

  onAddLezione(){
    console.log(this.newNomeLezione + ' - ' + this.newDescLezione);

  }

  onAddSchema(){

  }
}
