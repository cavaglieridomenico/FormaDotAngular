import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Il mio APP COmponent viene creato tutte le volte che creo una app
import { AppComponent } from './app.component';
import { PrimoComponent } from './primo/primo.component';

import { TerzoComponent } from './terzo/terzo.component';
import { SecondoComponent } from './secondo/secondo.component';
import { StudenteComponent } from './primo/studente/studente.component';
import { ComputerComponent } from './computer/computer.component';
import { ComputersComponent } from './computers/computers.component';
import { FormsModule } from '@angular/forms';
import { Esercizio2Component } from './esercizio2/esercizio2.component';

@NgModule({
  declarations: [
    //nell'array declarations andranno dichiarati tutti i futuri Component
    AppComponent,
    PrimoComponent,
    TerzoComponent,
    SecondoComponent,
    StudenteComponent,
    ComputerComponent,
    ComputersComponent,
    Esercizio2Component,
  ],
  imports: [
    //nell'array import verranno importati tuttti i moduli accessori
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
