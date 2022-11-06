import { User } from './../../Models/user';
import { UserService } from './../../Services/user.service';
import { AuthService } from './../../Services/auth.service';
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
  // UEmail: string = 'g';
  user!: User;
  constructor(
    public translate: TranslateService,
    private router: Router,
    public auth: AuthService,
    private userser: UserService
  ) {}

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
    this.router.navigate(['User/Account/', localStorage.getItem('token')]);
  }
  NavigateCart() {
    this.router.navigate(['User/Cart/', localStorage.getItem('token')]);
  }
  checkLogin(): boolean {
    if (localStorage.getItem('token')) {
      return false;
    }
    return true;
  }
  // checkCartCount(): number {
  //   if (localStorage.getItem('token')) {
  //     this.userser.getUser(localStorage.getItem('token')!).subscribe((data) => {
  //       this.user = data;
  //     });
  //   }
  //   if (this.user) {
  //     return this.user.cart.length;
  //   }
  //   return 0;
  // }
}
