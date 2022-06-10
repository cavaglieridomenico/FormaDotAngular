import { EventEmitter, Injectable } from '@angular/core';

import { Ingrediente } from '../shared/ingrediente.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientiAggiornati = new EventEmitter<Ingrediente[]>()

  private ingredienti: Ingrediente[] = [
    new Ingrediente('Farina', 10),
    new Ingrediente('Acqua', 1)
  ]

  constructor() { }

  getIngredienti(){
    return this.ingredienti;
  }

  //servirà per far arrivare l'ingrediente dal form
  addIngredienteSing(ingrediente: Ingrediente){
    this.ingredienti.push(ingrediente);
    this.ingredientiAggiornati.emit(this.ingredienti);
  }


  addIngredienti(ingredienti: Ingrediente[]){
    // for(let ingrediente of ingredienti){
    //   this.ingredienti.push(ingrediente);
    // }
    this.ingredienti.push(...ingredienti);
    this.ingredientiAggiornati.emit(this.ingredienti);
  }


}
