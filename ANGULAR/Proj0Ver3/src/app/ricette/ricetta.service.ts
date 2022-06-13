import { EventEmitter, Injectable } from "@angular/core";
import { Ingrediente } from "../shared/ingrediente.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Ricetta } from "./ricetta.model";

@Injectable({
  providedIn: 'root'
})
export class RicettaService{

 ricettaSelezionata = new EventEmitter<Ricetta>();



  private ricette: Ricetta[] = [
    new Ricetta(
      "Pasta al Pesto",
      "Con basilico Genovese",
      "https://via.placeholder.com/150",
      6.50,
      [
        new Ingrediente('Basilico', 2),
        new Ingrediente('Pinoli', 4),
        new Ingrediente('Olio', 8)
      ]
      ),

    new Ricetta(
      "Montanara",
      "Pizza fritta con pomodoro",
      "https://via.placeholder.com/150",
      5.00,
      [
        new Ingrediente('Pomodoro', 1),
        new Ingrediente('Farina', 2),
        new Ingrediente('Mozzarella', 3),

      ]
    ),

    new Ricetta(
      "Carbonara",
      "Da mangiare preferibilmente a Roma",
      "https://via.placeholder.com/150",
      8.50,
      [
        new Ingrediente('Uova', 6),
        new Ingrediente("Guanciale", 10)
      ]
    )
  ];

  constructor(private shopListService: ShoppingListService){

  }

  getRicette(){
    return this.ricette;
  }

  getRicetta(id: number){
    return this.ricette[id];
  }

  addIngredientiToShoppingList(ingredienti: Ingrediente[]){
    //questo metodo aggiunge ingredienti alla lista della spesa
    console.log(ingredienti);
    this.shopListService.addIngredienti(ingredienti);
  }

}
