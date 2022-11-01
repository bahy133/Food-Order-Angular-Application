import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  currentLang!: string;
  constructor(public translate: TranslateService) {
    this.currentLang = localStorage.getItem('language') || 'en';
    this.translate.use(this.currentLang);
  }

  ngOnInit(): void {}
}
