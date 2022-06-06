import { Component, OnInit } from '@angular/core';
import { Ricetta } from '../ricetta.model';


@Component({
  selector: 'app-lista-ricette',
  templateUrl: './lista-ricette.component.html',
  styleUrls: ['./lista-ricette.component.css']
})
export class ListaRicetteComponent implements OnInit {

  ricette: Ricetta[]
  // = [
  //   new Ricetta("Pasta e Fagioli", "Un tipico piatto all'italiana", "https://via.placeholder.com/150", 12),
  //   new Ricetta("Carbonara", "Da mangiare solo a Roma", "https://via.placeholder.com/150", 13, "Uova"),
  //   new Ricetta("Spaghetti allo scoglio ", "Pietre non comprese", "https://via.placeholder.com/150", 18, "Gamberi"),
  // ]

  constructor() {
    this.ricette = [
      {
        nome: 'Pasta la Pesto',
        descrizione: "da Genova con amore",
        prezzo: 6,
        image: "https://via.placeholder.com/150"
      },
      {
        nome: 'Bagnacauda',
        descrizione: "Piatto antisociale",
        prezzo: 6,
        image: "https://via.placeholder.com/150",
        allergeni: ["aglio", "acciughe", "latte"]
      },
      {
        nome: 'Amatriciana',
        descrizione: "Da Amatrice con Amore",
        prezzo: 12,
        image: "https://via.placeholder.com/150"
      }
    ]
   }

  ngOnInit(): void {
  }

}
