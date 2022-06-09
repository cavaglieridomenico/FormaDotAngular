import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  accounts = [
    {
      nome: "Pippo",
      status: "Active",
      tipo: "Amministratore"
    },
    {
      nome: "Pluto",
      status: "Inactive",
      tipo: "Base"
    },
    {
      nome: "Paperino",
      status: "Hidden",
      tipo: "Premium"
    }
  ]

  constructor() { }

  //questo sotto verrà chiamato da new Account
  addAccount(nome: string, tipo: string, status: string){
    this.accounts.push({nome: nome, tipo: tipo, status});
  }

  //questo sotto verrà chiamato da Account e/o AppComponent
  updateStatus(id: number, status: string){
    this.accounts[id].status = status;
  }

}
