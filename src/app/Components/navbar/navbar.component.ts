import { trigger_Example } from './../../Animations/Fade.Animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [trigger_Example],
})
export class NavbarComponent implements OnInit {
  currentlang!: string;
  UEmail: string = 'g';

  constructor(public translate: TranslateService, private router: Router) {}

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
  NavigateToAccount() {
    this.router.navigate(['User/Account/', this.UEmail]);
  }
}
