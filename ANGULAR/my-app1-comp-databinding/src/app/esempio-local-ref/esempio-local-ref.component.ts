import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-esempio-local-ref',
  templateUrl: './esempio-local-ref.component.html',
  styleUrls: ['./esempio-local-ref.component.css']
})
export class EsempioLocalRefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Solo local reference
  newParola = '';
  onAddParola(parolaGenerica: HTMLInputElement){
    console.log(parolaGenerica.value);
    this.newParola = parolaGenerica.value;
  }

  //Local Reference + @ViewChild
  @ViewChild('frase') fraseDaGestire: ElementRef;

  onAddFrase(){
    console.log(this.fraseDaGestire.nativeElement.value);

  }

}
