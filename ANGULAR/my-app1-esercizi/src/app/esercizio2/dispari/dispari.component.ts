import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dispari',
  templateUrl: './dispari.component.html',
  styleUrls: ['./dispari.component.css']
})
export class DispariComponent implements OnInit {
  @Input() number: number;

  constructor() { }

  ngOnInit(): void {
  }

}
