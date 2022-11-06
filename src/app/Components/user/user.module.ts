import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginAccessGuard } from './../../Gaurds/login-access.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { AdminComponent } from './admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { LangdirRegDirective } from 'src/app/Directives/langdir-reg.directive';
import { SharedModule } from 'src/app/Modules/shared/shared.module';
const routes: Routes = [
  {
    path: 'Account/:p',
    component: UserAccountComponent,
    canActivate: [LoginAccessGuard],
  },
  {
    path: 'Cart/:p',
    component: UserCartComponent,
    canActivate: [LoginAccessGuard],
  },
  { path: 'Admin', component: AdminComponent, canActivate: [LoginAccessGuard] },
];

@NgModule({
  declarations: [UserCartComponent, UserAccountComponent, AdminComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: CreateTranslateLoader,
        deps: [HttpClient],
      },
    }),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UserModule {}
export function CreateTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
