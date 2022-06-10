import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() paginaSelezionata = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(pagina: string){
    this.paginaSelezionata.emit(pagina);
  }
}
