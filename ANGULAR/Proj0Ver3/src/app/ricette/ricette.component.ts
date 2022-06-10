import { Component, OnInit } from '@angular/core';
import { Ricetta } from './ricetta.model';
import { RicettaService } from './ricetta.service';

@Component({
  selector: 'app-ricette',
  templateUrl: './ricette.component.html',
  styleUrls: ['./ricette.component.css']
})
export class RicetteComponent implements OnInit {

  ricettaSelez: Ricetta;

  constructor(private ricettaService: RicettaService) { }

  ngOnInit(): void {
    this.ricettaService.ricettaSelezionata
        .subscribe(
          //ricetta è ciò che viene emesso da item-ricetta.component, ed ciò che riceviamo dal singolo item
          (ricetta: Ricetta) => {
            this.ricettaSelez = ricetta
          }
        )
  }


}
