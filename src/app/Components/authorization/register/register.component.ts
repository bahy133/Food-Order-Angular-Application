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
  constructor(
    private fb: FormBuilder,
    public lang: LanguagedirService,
    public translate: TranslateService
  ) {
    this.userReg = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      type: 'U',
      cart: null,
      cardData: this.fb.group({
        cardnumber: ['', [Validators.required]],
        cardexpiary: ['', [Validators.required]],
        cvv: ['', [Validators.required]],
      }),
    });
  }

  ngOnInit(): void {}
}
