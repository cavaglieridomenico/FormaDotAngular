import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightAvanzato2]'
})
export class HighlightAvanzato2Directive {


  @HostBinding('style.backgroundColor') coloreSfondo: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseOver (eventData: Event){
    this.coloreSfondo = 'purple';

    //grazie all'utilizzo dell'HostBinding evito di utilizzare il renderer e l'elementRef
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'purple');
  }

  @HostListener('mouseleave') mouseOut (eventData: Event){
    this.coloreSfondo = 'transparent'
  }
}
