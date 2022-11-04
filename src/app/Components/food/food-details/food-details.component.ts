import { UserService } from './../../../Services/user.service';
import { User } from './../../../Models/user';
import { AuthService } from './../../../Services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { FoodService } from './../../../Services/food.service';
import { Food } from './../../../Models/food';
import { Component, OnInit } from '@angular/core';
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
  constructor(
    private foodser: FoodService,
    private active: ActivatedRoute,
    public translate: TranslateService,
    private authSer: AuthService,
    private userser: UserService,
    private router: Router
  ) {
    let name: string = this.active.snapshot.paramMap.get('id')!;
    console.log(name);
    console.log(name);
    this.foodser.getFood(name).subscribe((data) => {
      this.food = data;
    });
    console.log(this.food);
  }

  ngOnInit(): void {}
  addToCart() {
    if (this.authSer.isLoggedIn) {
      this.userser.getUser(localStorage.getItem('token')!).subscribe((data) => {
        this.user = data;
      });
      this.user.cart.push(this.food);
      this.userser.updateUser(localStorage.getItem('token')!, this.user);
    } else {
      this.router.navigate(['/Authorization/Login']);
    }
  }
  addrate() {
    if (this.authSer.isLoggedIn) {
      this.food.rating += +this.userrate;
      this.foodser.updateFood(this.food.id, this.food);
    } else {
      this.router.navigate(['/Authorization/Login']);
    }
  }
  addComment(comment: string) {
    if (this.authSer.isLoggedIn) {
      if (comment != '' || comment != undefined || comment != null) {
        this.food.comments.push(comment);
        this.foodser.updateFood(this.food.id, this.food);
      } else {
        this.router.navigate(['/kk']);
      }
    } else {
      this.router.navigate(['/Authorization/Login']);
    }
  }
}
