import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserAccountComponent } from './user-account/user-account.component';



@NgModule({
  declarations: [
    UserCartComponent,
    UserAccountComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
