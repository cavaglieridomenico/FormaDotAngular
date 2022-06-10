import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //Un tempo senza @Injecatble() nel service dovevo utilizzare i providers
  // providers: [LogService]
})
export class AppComponent implements OnInit{
  title = 'my-app3-Services';

  //Nel costruttore applico il sistema della Dependency Injection
  constructor(private mioService: LogService){
   mioService.scriviInConsole("app Component")
  }

  ngOnInit(): void {
  this.mioService.scriviInConsole('onInit');
  }

  modUserType(){
    this.mioService.aggiornaTipo(2, "Genitore");
  }

}
