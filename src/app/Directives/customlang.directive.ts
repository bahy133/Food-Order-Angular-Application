import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomlang]',
})
export class CustomlangDirective {
  @HostListener('mouseover') OnMouseOver() {
    this.elm.nativeElement.style.display = 'none';
  }
  @HostListener('mouseout') OnMouseOut() {
    this.elm.nativeElement.style.display = 'block';
  }
  constructor(private elm: ElementRef) {}
}
