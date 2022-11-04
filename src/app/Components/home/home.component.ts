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
    public lang: LanguagedirService
  ) {
    this.food.getallFood().subscribe((data) => {
      this.foodList = data;
    });
  }

  ngOnInit(): void {}
}
