import { Component, Input, OnInit } from '@angular/core';
import { Recensione } from './recensione.model';

@Component({
  selector: 'app-recensione',
  templateUrl: './recensione.component.html',
  styleUrls: ['./recensione.component.css']
})
export class RecensioneComponent implements OnInit {

  @Input() singolaRecensione: Recensione;

  constructor() { }

  ngOnInit(): void {
  }

  onVoteUp(){
    this.singolaRecensione.like();
  }

  onVoteDown(){
    this.singolaRecensione.dislike()
  }

}
