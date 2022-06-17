import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
// import {MatButtonModule} from '@angular/material/button';
// import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //sono import per material
    // MatButtonModule,
    // MatIconModule
    MaterialModule,
    FormsModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
