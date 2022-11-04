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
  @Input() type!: string;
  constructor(private elm: ElementRef) {
    if (this.type == 'langblock') {
      if (localStorage.getItem('language') == 'ar') {
        this.elm.nativeElement.style.left = '20px';
      } else {
        this.elm.nativeElement.style.left = '-23px';
      }
    } else if (this.type == 'searchicon') {
      if (localStorage.getItem('language') == 'ar') {
        this.elm.nativeElement.style.left = '240px';
      } else {
        this.elm.nativeElement.style.left = '-240px';
      }
    } else if (this.type == 'searbar') {
      if (localStorage.getItem('language') == 'ar') {
        this.elm.nativeElement.style.paddingRight = '40px';
      } else {
        this.elm.nativeElement.style.paddingLeft = '-29px';
      }
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('in changes');
    if (this.type == 'langblock') {
      if (localStorage.getItem('language') == 'ar') {
        this.elm.nativeElement.style.left = '20px';
      } else {
        this.elm.nativeElement.style.left = '-23px';
      }
    } else if (this.type == 'searchicon') {
      if (localStorage.getItem('language') == 'ar') {
        this.elm.nativeElement.style.left = '240px';
      } else {
        this.elm.nativeElement.style.left = '-240px';
      }
    } else if (this.type == 'searbar') {
      if (localStorage.getItem('language') == 'ar') {
        this.elm.nativeElement.style.paddingRight = '40px';
      } else {
        this.elm.nativeElement.style.paddingLeft = '-29px';
      }
    }
  }
}
