import { Rates } from './../../../Models/rates';
import { RatesService } from './../../../Services/rates.service';
import { UserService } from './../../../Services/user.service';
import { User } from './../../../Models/user';
import { AuthService } from './../../../Services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { FoodService } from './../../../Services/food.service';
import { Food } from './../../../Models/food';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss'],
})
export class FoodDetailsComponent implements OnInit {
  food!: Food;
  userrate!: string;
  user!: User;
  Rate!: Rates;
  RateNumber!: number;
  comment!: string;
  constructor(
    private foodser: FoodService,
    private active: ActivatedRoute,
    public translate: TranslateService,
    private authSer: AuthService,
    private userser: UserService,
    private router: Router,
    private rateser: RatesService
  ) {
    let name: string = this.active.snapshot.paramMap.get('id')!;
    this.foodser.getFood(name).subscribe((data) => {
      this.food = data;
    });
  }

  ngOnInit(): void {
    this.rate();
  }
  async addToCart() {
    if (this.authSer.isLoggedIn) {
      this.user = (await this.userser
        .getUser(localStorage.getItem('token')!)
        .toPromise())!;

      this.user.cart.push(this.food);
      this.userser
        .updateUser(localStorage.getItem('token')!, this.user)
        .subscribe();
    } else {
      this.router.navigate(['/Authorization/Login']);
    }
  }
  addrate() {
    if (this.authSer.isLoggedIn) {
      this.food.rating += +this.userrate;
      this.foodser.updateFood(this.food.id, this.food).subscribe();
    } else {
      this.router.navigate(['/Authorization/Login']);
    }
  }
  addComment() {
    if (this.authSer.isLoggedIn) {
      if (
        this.comment != '' ||
        this.comment != undefined ||
        this.comment != null
      ) {
        this.food.comments.push(this.comment);
        this.foodser.updateFood(this.food.id, this.food).subscribe();
        this.comment = '';
      } else {
        this.router.navigate(['/kk']);
      }
    } else {
      this.router.navigate(['/Authorization/Login']);
    }
  }
  async rate() {
    this.Rate = (await this.rateser
      .getRate(localStorage.getItem('token')!)
      .toPromise())!;
    console.log(this.Rate);
    console.log(this.food.id);
    let indx = this.Rate.foodnames.indexOf(this.food.id);
    console.log(indx);
    if (indx >= 0) {
      this.userrate = String(this.Rate.foodrates[indx]);
      console.log('in if condition');
    } else {
      this.userrate = '0';
    }
  }
}
