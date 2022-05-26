import { Component } from '@angular/core';
//IL component non è nient'altro che un classe decorata con il @Component


@Component({  //DECORATOR
  selector: 'app-root',  //Questo, inserito in delle parentesi <> richiama il component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] //posso avere più di un css
})


export class AppComponent {
  //proprietà di classe
  title = 'Prima App del Corso';

  descrizione = 'Sto utilizzando un tag h1 solo nel mio app.component.html';

  numStudent = 8;

  pausa = "andiamo in pausa";

  docente = {
    nome: "Pippo Rossi",
    materia: "Filosofia"
  };
}
