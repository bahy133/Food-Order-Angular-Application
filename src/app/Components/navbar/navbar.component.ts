import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  currentlang!: string;
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}
  transfn(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
    this.currentlang = lang;
  }
  changedir() {
    if (localStorage.getItem('language') == 'ar') {
      return 'rtl';
    }
    return 'ltr';
  }
}
