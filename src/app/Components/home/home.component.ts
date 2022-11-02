import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}
  checkdir() {
    if (localStorage.getItem('language') == 'ar') {
      return 'rtl';
    } else {
      return 'ltr';
    }
  }
}
