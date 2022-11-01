import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodsComponent } from './foods/foods.component';
import { FoodCatComponent } from './food-cat/food-cat.component';
import { FoodStoresComponent } from './food-stores/food-stores.component';

const routes: Routes = [
  { path: 'Stores', component: FoodStoresComponent },
  { path: 'FoodsList', component: FoodsComponent },
];

@NgModule({
  declarations: [FoodsComponent, FoodCatComponent, FoodStoresComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FoodModule {}
