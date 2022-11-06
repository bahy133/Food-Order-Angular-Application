import { User } from './../../../Models/user';
import { UserService } from './../../../Services/user.service';
import { Router } from '@angular/router';
import { LanguagedirService } from './../../../Services/languagedir.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userLogin!: FormGroup;
  userdata!: User;
  error: boolean = false;
  constructor(
    public translate: TranslateService,
    public language: LanguagedirService,
    private fb: FormBuilder,
    private router: Router,
    private userser: UserService
  ) {
    this.userLogin = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  get email() {
    return this.userLogin.get('email');
  }
  get pass() {
    return this.userLogin.get('password');
  }
  async Loginfn() {
    this.userdata = (await this.userser
      .getUser(this.email?.value)
      .toPromise())!;

    if (this.userdata) {
      if (this.pass?.value == this.userdata.password) {
        localStorage.setItem('token', this.userdata.id);
        this.router.navigate(['/Home']);
        this.error = false;
      } else {
        console.log('pass');
        this.error = true;
      }
    } else {
      console.log('email');
      this.error = true;
    }
  }
  ngOnInit(): void {}
}
