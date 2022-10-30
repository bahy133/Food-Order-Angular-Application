import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodsComponent } from './foods/foods.component';
import { FoodCatComponent } from './food-cat/food-cat.component';
import { FoodStoresComponent } from './food-stores/food-stores.component';



@NgModule({
  declarations: [
    FoodsComponent,
    FoodCatComponent,
    FoodStoresComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FoodModule { }
