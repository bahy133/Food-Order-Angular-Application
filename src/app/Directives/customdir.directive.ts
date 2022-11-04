import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appCustomdir]',
})
export class CustomdirDirective implements OnChanges {
  @Input() lang!: string;

  constructor(private elm: ElementRef) {
    if (localStorage.getItem('language') == 'ar') {
      this.elm.nativeElement.style.paddingRight = '29px';
    } else {
      this.elm.nativeElement.style.paddingLeft = '29px';
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('IN changes');
    if (localStorage.getItem('language') == 'ar') {
      this.elm.nativeElement.style.paddingRight = '29px';
    } else {
      this.elm.nativeElement.style.paddingLeft = '29px';
    }
  }
}
