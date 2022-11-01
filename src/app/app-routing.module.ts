import { HomeComponent } from './Components/home/home.component';
import { ErrorComponent } from './Components/error/error.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'Home', pathMatch: 'full' },
      { path: 'Home', component: HomeComponent },
      {
        path: 'Food',
        loadChildren: () =>
          import('src/app/Components/food/food.module').then(
            (m) => m.FoodModule
          ),
      },
      {
        path: 'Authorization',
        loadChildren: () =>
          import('src/app/Components/authorization/authorization.module').then(
            (m) => m.AuthorizationModule
          ),
      },
      {
        path: 'User',
        loadChildren: () =>
          import('src/app/Components/user/user.module').then(
            (m) => m.UserModule
          ),
      },
    ],
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
