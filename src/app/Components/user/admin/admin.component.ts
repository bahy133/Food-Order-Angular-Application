import { FoodService } from './../../../Services/food.service';
import { Food } from './../../../Models/food';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  foodForm!: FormGroup;
  food!: Food;
  constructor(
    fb: FormBuilder,
    public translate: TranslateService,
    private foodser: FoodService
  ) {
    this.foodForm = fb.group({
      id: ['', [Validators.required]],
      fnameInAr: ['', [Validators.required]],
      rating: 0,
      numUser: 0,
      price: ['', [Validators.required, Validators.pattern('[0-9]{1,}')]],
      store: ['', [Validators.required]],
      imgURL: ['', [Validators.required]],
      description: ['', [Validators.required]],
      comments: [],
      quantity: 1,
    });
  }
  Submit() {
    this.food.id = this.foodForm.get('id')?.value;
    this.food.rating = this.foodForm.get('rating')?.value;
    this.food.numUser = this.foodForm.get('numUser')?.value;
    this.food.price = this.foodForm.get('price')?.value;
    this.food.store = this.foodForm.get('store')?.value;
    this.food.imgURL = this.foodForm.get('imgURL')?.value;
    this.food.description = this.foodForm.get('description')?.value;
    this.food.comments = this.foodForm.get('comments')?.value;
    this.food.quantity = this.foodForm.get('quantity')?.value;
    this.foodser.addFood(this.food);
  }

  ngOnInit(): void {}
}
