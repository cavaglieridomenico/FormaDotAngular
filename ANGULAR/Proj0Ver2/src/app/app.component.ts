import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proj0Ver2';

  paginaSelezionata: string;

  onNaviga(pagina: string){
    this.paginaSelezionata = pagina
  }


}
