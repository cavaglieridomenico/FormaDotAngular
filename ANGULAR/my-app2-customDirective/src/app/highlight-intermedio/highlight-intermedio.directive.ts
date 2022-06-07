import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightIntermedio]'
})
export class HighlightIntermedioDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

   }

   ngOnInit(): void {
    //  this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.renderer.setAttribute(this.elementRef.nativeElement, 'class', 'prova');
   }
}
