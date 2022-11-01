import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { AdminComponent } from './admin/admin.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'Account/:p', component: UserAccountComponent },
  { path: 'Cart', component: UserCartComponent },
  { path: 'Admin', component: AdminComponent },
];

@NgModule({
  declarations: [UserCartComponent, UserAccountComponent, AdminComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserModule {}
