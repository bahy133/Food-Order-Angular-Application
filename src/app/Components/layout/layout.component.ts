import { routingAn } from './../../Animations/Routing.Animation';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [routingAn],
})
export class LayoutComponent implements OnInit {
  currentLang!: string;
  constructor(public translate: TranslateService) {
    this.currentLang = localStorage.getItem('language') || 'en';
    this.translate.use(this.currentLang);
  }

  ngOnInit(): void {}
  changeLang() {
    if (localStorage.getItem('language') == 'ar') return 'rtl';
    return 'ltr';
  }
}
