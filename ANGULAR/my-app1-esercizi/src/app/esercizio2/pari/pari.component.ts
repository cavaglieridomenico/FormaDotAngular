import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pari',
  templateUrl: './pari.component.html',
  styleUrls: ['./pari.component.css']
})
export class PariComponent implements OnInit {

  @Input() number: number;

  constructor() { }

  ngOnInit(): void {
  }

}
