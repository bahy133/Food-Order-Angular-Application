import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader } from '@ngx-translate/core';
import { LogindirDirective } from 'src/app/Directives/logindir.directive';
const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Registeration', component: RegisterComponent },
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent, LogindirDirective],
  imports: [
    CommonModule,
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
export class AuthorizationModule {}
export function CreateTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
