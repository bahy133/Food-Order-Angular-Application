import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appLogindir]',
})
export class LogindirDirective implements OnChanges {
  @Input() name!: string;
  @Input() dir!: string;
  constructor(private elem: ElementRef) {
    console.log('in constructor login');
    if (localStorage.getItem('language') == 'en') {
      if (this.name == 'email') {
        this.elem.nativeElement.style.Top = '10px';
        this.elem.nativeElement.style.right = '190px';
      } else {
        this.elem.nativeElement.style.Top = '10px';
        this.elem.nativeElement.style.right = '150px';
      }
    } else {
      if (this.name == 'email') {
        this.elem.nativeElement.style.Top = '10px';
        this.elem.nativeElement.style.right = '15px';
      } else {
        this.elem.nativeElement.style.Top = '10px';
        this.elem.nativeElement.style.right = '15px';
      }
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('in changes login');
    if (localStorage.getItem('language') == 'en') {
      if (this.name == 'email') {
        this.elem.nativeElement.style.Top = '10px';
        this.elem.nativeElement.style.right = '190px';
      } else {
        this.elem.nativeElement.style.Top = '10px';
        this.elem.nativeElement.style.right = '150px';
      }
    } else {
      if (this.name == 'email') {
        this.elem.nativeElement.style.Top = '10px';
        this.elem.nativeElement.style.right = '15px';
      } else {
        this.elem.nativeElement.style.Top = '10px';
        this.elem.nativeElement.style.right = '15px';
      }
    }
  }
}
