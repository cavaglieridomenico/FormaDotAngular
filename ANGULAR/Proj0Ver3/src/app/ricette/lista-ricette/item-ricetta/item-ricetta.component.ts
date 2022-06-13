import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Ricetta } from '../../ricetta.model';
import { RicettaService } from '../../ricetta.service';

@Component({
  selector: 'app-item-ricetta',
  templateUrl: './item-ricetta.component.html',
  styleUrls: ['./item-ricetta.component.css']
})
export class ItemRicettaComponent implements OnInit {
  @Input() ricetta: Ricetta;
  @Input() indice: number;

  constructor(private ricettaService: RicettaService) { }

  ngOnInit(): void {
  }

  onSelected(){
    this.ricettaService.ricettaSelezionata.emit(this.ricetta);
  }
}
