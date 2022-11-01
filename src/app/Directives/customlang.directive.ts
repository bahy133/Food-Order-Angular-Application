import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appCustomlang]',
})
export class CustomlangDirective implements OnChanges {
  @Input() lang!: string;
  constructor(private elm: ElementRef) {
    if (localStorage.getItem('language') == 'ar') {
      this.elm.nativeElement.style.left = '880px';
    } else {
      this.elm.nativeElement.style.left = '824px';
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (localStorage.getItem('language') == 'ar') {
      this.elm.nativeElement.style.left = '880px';
    } else {
      this.elm.nativeElement.style.left = '824px';
    }
  }
}
