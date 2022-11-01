import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appCustomCart]',
})
export class CustomCartDirective implements OnChanges {
  @Input() lang!: string;
  constructor(private elm: ElementRef) {
    if (localStorage.getItem('language') == 'ar') {
      this.elm.nativeElement.style.left = '850px';
    } else {
      this.elm.nativeElement.style.left = '800px';
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (localStorage.getItem('language') == 'ar') {
      this.elm.nativeElement.style.left = '850px';
    } else {
      this.elm.nativeElement.style.left = '800px';
    }
  }
}
