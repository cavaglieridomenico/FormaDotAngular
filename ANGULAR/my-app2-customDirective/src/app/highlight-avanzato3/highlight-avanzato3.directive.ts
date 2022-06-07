import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightAvanzato3]'
})
export class HighlightAvanzato3Directive implements OnInit{

  @Input() coloreDef: string;
  @Input() coloreHigh: string;
  @HostBinding('style.backgroundColor') coloreSfondo: string;


  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.coloreSfondo = this.coloreDef;
  }

  @HostListener('mouseenter') mouseOver(eventData: Event){
    this.coloreSfondo = this.coloreHigh
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.coloreHigh);
  }

  @HostListener('mouseleave') mouseOut(eventData: Event){
    this.coloreSfondo = this.coloreDef
    let newTxt = this.renderer.createText("Qualcosa");
    this.renderer.appendChild(this.elementRef.nativeElement, newTxt)
  }
}
