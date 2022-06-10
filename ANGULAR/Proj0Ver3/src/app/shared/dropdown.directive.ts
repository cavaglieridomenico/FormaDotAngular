import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('show()') isOpen = false;

  @HostListener('click') apriChiudi(){
    this.isOpen = !this.isOpen;
    console.log(this);

  }

}
