import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LezioneElementComponent } from './lezione-element/lezione-element.component';
import { ProvaInputComponent } from './prova-input/prova-input.component';
import { ProvaOutputComponent } from './prova-output/prova-output.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LezioneElementComponent,
    ProvaInputComponent,
    ProvaOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
