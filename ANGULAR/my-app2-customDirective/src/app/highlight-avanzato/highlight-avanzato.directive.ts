import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightAvanzato]'
})
export class HighlightAvanzatoDirective implements OnInit{

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {

  }

  @HostListener('mouseenter') mouseOver(eventData: Event){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
  }


  @HostListener('mouseleave') mouseOut(eventData: Event){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }
}
