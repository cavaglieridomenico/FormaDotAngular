import { Directive, ElementRef, OnInit } from "@angular/core";


//La directive ha il decorator @Directive
@Directive({
  selector: '[appHighlightBase]'
})

export class HighlightBaseDirective implements OnInit{

  //questo è il sistema della Dependency Injection: sto passando al costruttore il riferimento di un elemento, nel quale avverrà l'injection. QUindi sto parlando dell'elemento sul quale applichiamo la Directive
  constructor(private elementRef: ElementRef) {

  }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'lightblue';
  }
}
