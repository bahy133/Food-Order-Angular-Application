import { TranslateService } from '@ngx-translate/core';
import { FoodService } from './../../../Services/food.service';
import { Food } from './../../../Models/food';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss'],
})
export class FoodDetailsComponent implements OnInit {
  food!: Food;
  userrate!: string;
  constructor(
    private foodser: FoodService,
    private active: ActivatedRoute,
    public translate: TranslateService
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
}
