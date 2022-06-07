import { Component, OnInit } from '@angular/core';
import { Ingrediente } from '../shared/ingrediente.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredienti: Ingrediente[] = [
    new Ingrediente('Cipolle', 3),
    new Ingrediente('Pomodori', 5),
    new Ingrediente('Patate', 9)
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientiAggiunti(ingrediente: Ingrediente){
    this.ingredienti.push(ingrediente)
  }
}
