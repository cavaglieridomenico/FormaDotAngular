import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightBaseDirective } from './highlight-base/highlight-base.directive';
import { HighlightIntermedioDirective } from './highlight-intermedio/highlight-intermedio.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightBaseDirective,
    HighlightIntermedioDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
