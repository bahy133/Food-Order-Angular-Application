import { LoginAccessGuard } from './../../Gaurds/login-access.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { AdminComponent } from './admin/admin.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'Account/:p',
    component: UserAccountComponent,
    canActivate: [LoginAccessGuard],
  },
  {
    path: 'Cart',
    component: UserCartComponent,
    canActivate: [LoginAccessGuard],
  },
  { path: 'Admin', component: AdminComponent, canActivate: [LoginAccessGuard] },
];

@NgModule({
  declarations: [UserCartComponent, UserAccountComponent, AdminComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserModule {}
