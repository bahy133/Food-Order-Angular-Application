import { Router } from '@angular/router';
import { LanguagedirService } from './../../Services/languagedir.service';
import { Food } from './../../Models/food';
import { FoodService } from './../../Services/food.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  foodList!: Food[];

  constructor(
    public translate: TranslateService,
    private food: FoodService,
    public lang: LanguagedirService,
    private router: Router
  ) {
    this.food.getallFood().subscribe((data) => {
      this.foodList = data;
    });
  }
  redirectToDetails(id: string) {
    this.router.navigate(['/Food/FoodDetails/', id]);
  }
  ngOnInit(): void {}
}
