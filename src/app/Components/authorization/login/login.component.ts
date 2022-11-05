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
  Loginfn() {
    console.log('in login');
    this.userser.getUser(this.email?.value).subscribe((data) => {
      this.userdata = data;
    });
    if (this.userdata) {
      if (this.pass?.value == this.userdata.password) {
        localStorage.setItem('token', this.userdata.email);
        this.router.navigate(['/Home']);
        this.error = false;
      } else {
        this.error = true;
      }
    }
    this.error = true;
  }
  ngOnInit(): void {}
}
