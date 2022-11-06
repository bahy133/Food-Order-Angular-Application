import { AuthService } from './../../../Services/auth.service';
import { User } from './../../../Models/user';
import { Router } from '@angular/router';
import { UserService } from './../../../Services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguagedirService } from './../../../Services/languagedir.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  userReg: FormGroup;
  user!: User;
  error: boolean = false;
  constructor(
    private fb: FormBuilder,
    public lang: LanguagedirService,
    public translate: TranslateService,
    private userser: UserService,
    private router: Router,
    private auth: AuthService
  ) {
    this.userReg = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      id: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{11}')]],
      address: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      type: 'U',
      cart: null,
      cardData: this.fb.group({
        cardnumber: [
          '',
          [Validators.required, Validators.pattern('[0-9]{16}')],
        ],
        cardexpiary: ['', [Validators.required]],
        cvv: ['', [Validators.required, Validators.pattern('[0-9]{3}')]],
      }),
    });
  }
  Register() {
    this.userser.addUsers(this.userReg.value).subscribe();
    this.auth.Login(this.userReg.get('id')?.value);
    this.router.navigate(['/Home']);
  }
  ngOnInit(): void {}
}
