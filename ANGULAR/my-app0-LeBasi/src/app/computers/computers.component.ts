import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit {

  permessoAggComputer = false;

  computerCreation = "";
  nomeComputer = "NuovoPCTest";
  computerCreated = false;

  computers = ['PcMegatron1', 'CompServer'];

  nomeComputer2 = "";

  constructor() {

    setTimeout(() => {
      this.permessoAggComputer = true;
    }, 2000)
   }

  ngOnInit(): void {
  }

  onCreaComputer(){
    this.computerCreation = "Stai creando un Computer nuovo chiamato: " + this.nomeComputer ;
    this.computerCreated = true;
    this.computers.push(this.nomeComputer);

    console.log(this.computerCreation);
    console.log(this.computers);

  }

  onModificaComputer(nome: any) {
    this.nomeComputer = nome.target.value

    console.log(nome);
    console.log((<HTMLInputElement>nome.target).value);
  }
}
