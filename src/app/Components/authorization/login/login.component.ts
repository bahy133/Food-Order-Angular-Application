import { LanguagedirService } from './../../../Services/languagedir.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    public translate: TranslateService,
    public language: LanguagedirService
  ) {}

  ngOnInit(): void {}
}
