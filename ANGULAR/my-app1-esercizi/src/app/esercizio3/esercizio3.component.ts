import { Component, OnInit } from '@angular/core';
import { Recensione } from './recensione/recensione.model';

@Component({
  selector: 'app-esercizio3',
  templateUrl: './esercizio3.component.html',
  styleUrls: ['./esercizio3.component.css']
})
export class Esercizio3Component implements OnInit {

  recensioni: Recensione[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addRecensione(nome: HTMLInputElement, link: HTMLInputElement, immagine: HTMLInputElement ): boolean{
    console.log("nome: " + nome.value + " link: " + link.value + "immagine: " + immagine.value);

    this.recensioni.push(new Recensione(nome.value, link.value, immagine.value, 0));

    nome.value = '';
    link.value = '';
    immagine.value = '';

    console.log(this.recensioni);

    return false;
  }
}
