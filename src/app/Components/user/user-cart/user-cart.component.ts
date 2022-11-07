import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Models/user';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss'],
})
export class UserCartComponent implements OnInit {
  user!: User;
  email!: string;
  total: number = 0;
  constructor(
    private active: ActivatedRoute,
    private userser: UserService,
    translate: TranslateService
  ) {
    this.email = this.active.snapshot.paramMap.get('p')!;
    this.userser.getUser(this.email).subscribe((data) => {
      this.user = data;
      for (let i = 0; i < this.user.cart.length; i++) {
        if (this.user.cart[i].quantity <= 0) {
          this.user.cart.splice(i, 1);
          this.userser.updateUser(this.email, this.user).subscribe();
          continue;
        }
        this.total += this.user.cart[i].price;
        this.total *= this.user.cart[i].quantity;
      }
    });
  }

  ngOnInit(): void {}
  plus(idx: number) {
    this.total += this.user.cart[idx].price;
    this.user.cart[idx].quantity += 1;
    this.userser.updateUser(this.email, this.user).subscribe();
  }
  minus(idx: number) {
    if (this.user.cart[idx].quantity > 0) {
      this.total -= this.user.cart[idx].price;
      this.user.cart[idx].quantity -= 1;
      this.userser.updateUser(this.email, this.user).subscribe();
      if (this.user.cart[idx].quantity <= 0) {
        this.user.cart.splice(idx, 1);
        this.userser.updateUser(this.email, this.user).subscribe();
        location.reload();
      }
    }
  }
}
