import { style } from '@angular/animations';
import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appLangdirReg]',
})
export class LangdirRegDirective implements OnChanges {
  @Input() dir!: string;
  @Input() namedir!: string;
  constructor(private elem: ElementRef) {
    if (localStorage.getItem('language') == 'en') {
      if (this.namedir == 'name') {
        this.elem.nativeElement.style.right = '320px';
      } else if (this.namedir == 'email') {
        this.elem.nativeElement.style.right = '340px';
      } else if (this.namedir == 'password') {
        this.elem.nativeElement.style.right = '320px';
      } else if (this.namedir == 'phone') {
        this.elem.nativeElement.style.right = '340px';
      } else if (this.namedir == 'address') {
        this.elem.nativeElement.style.right = '320px';
      } else if (this.namedir == 'Cno') {
        this.elem.nativeElement.style.right = '50px';
      } else if (this.namedir == 'Cex') {
        this.elem.nativeElement.style.right = '90px';
      } else if (this.namedir == 'cvv') {
        this.elem.nativeElement.style.right = '110px';
      }
    } else {
      if (this.namedir == 'name') {
        this.elem.nativeElement.style.right = '20px';
      } else if (this.namedir == 'email') {
        this.elem.nativeElement.style.right = '20px';
      } else if (this.namedir == 'password') {
        this.elem.nativeElement.style.right = '20px';
      } else if (this.namedir == 'phone') {
        this.elem.nativeElement.style.right = '20px';
      } else if (this.namedir == 'address') {
        this.elem.nativeElement.style.right = '20px';
      } else if (this.namedir == 'Cno') {
        this.elem.nativeElement.style.right = '20px';
      } else if (this.namedir == 'Cex') {
        this.elem.nativeElement.style.right = '20px';
      } else if (this.namedir == 'cvv') {
        this.elem.nativeElement.style.right = '20px';
      }
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('in changes reg');
    if (localStorage.getItem('language') == 'en') {
      if (this.namedir == 'name') {
        this.elem.nativeElement.style.right = '320px';
      } else if (this.namedir == 'email') {
        this.elem.nativeElement.style.right = '340px';
      } else if (this.namedir == 'password') {
        this.elem.nativeElement.style.right = '320px';
      } else if (this.namedir == 'phone') {
        this.elem.nativeElement.style.right = '340px';
      } else if (this.namedir == 'address') {
        this.elem.nativeElement.style.right = '320px';
      } else if (this.namedir == 'Cno') {
        this.elem.nativeElement.style.right = '50px';
      } else if (this.namedir == 'Cex') {
        this.elem.nativeElement.style.right = '90px';
      } else if (this.namedir == 'cvv') {
        this.elem.nativeElement.style.right = '110px';
      }
    } else {
      if (this.namedir == 'name') {
        this.elem.nativeElement.style.right = '20px';
      } else if (this.namedir == 'email') {
        this.elem.nativeElement.style.right = '20px';
      } else if (this.namedir == 'password') {
        this.elem.nativeElement.style.right = '20px';
      } else if (this.namedir == 'phone') {
        this.elem.nativeElement.style.right = '20px';
      } else if (this.namedir == 'address') {
        this.elem.nativeElement.style.right = '20px';
      } else if (this.namedir == 'Cno') {
        this.elem.nativeElement.style.right = '20px';
      } else if (this.namedir == 'Cex') {
        this.elem.nativeElement.style.right = '20px';
      } else if (this.namedir == 'cvv') {
        this.elem.nativeElement.style.right = '20px';
      }
    }
  }
}
