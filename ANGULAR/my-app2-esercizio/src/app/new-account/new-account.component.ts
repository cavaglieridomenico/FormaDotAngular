import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  onAddAccount(nome: string, tipo: string, status: string){
    this.accountService.addAccount(nome, tipo, status);
    console.log(this.accountService.accounts);

  }
}
