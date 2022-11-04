import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodsComponent } from './foods/foods.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FoodCatComponent } from './food-cat/food-cat.component';
import { FoodStoresComponent } from './food-stores/food-stores.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { MatListModule } from '@angular/material/list';
import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
const routes: Routes = [
  { path: 'Stores', component: FoodStoresComponent },
  { path: 'FoodsList', component: FoodsComponent },
  { path: 'FoodDetails/:id', component: FoodDetailsComponent },
];

@NgModule({
  declarations: [
    FoodsComponent,
    FoodCatComponent,
    FoodStoresComponent,
    FoodDetailsComponent,
  ],
  imports: [
    CommonModule,

    RouterModule.forChild(routes),
    MatListModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: CreateTranslateLoader,
        deps: [HttpClient],
      },
    }),
    NgbModule,
    FormsModule,
  ],
})
export class FoodModule {}
export function CreateTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
