import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Models/user';
import { AuthService } from 'src/app/Services/auth.service';
import { LanguagedirService } from 'src/app/Services/languagedir.service';
import { UserService } from 'src/app/Services/user.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss'],
})
export class UserAccountComponent implements OnInit {
  userReg: FormGroup;
  user!: User;
  error: boolean = false;
  constructor(
    private fb: FormBuilder,
    public lang: LanguagedirService,
    public translate: TranslateService,
    private userser: UserService,
    private router: Router,
    private auth: AuthService,
    private active: ActivatedRoute
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
    let email: string = this.active.snapshot.paramMap.get('p')!;
    this.userser.updateUser(email, this.userReg.value).subscribe();
    this.router.navigate(['/Home']);
  }
  ngOnInit(): void {
    this.fillForm();
  }

  async fillForm() {
    let email: string = this.active.snapshot.paramMap.get('p')!;
    this.user = (await this.userser.getUser(email).toPromise())!;
    this.userReg.patchValue({
      name: this.user.name,
      id: this.user.id,
      password: this.user.password,
      phone: this.user.phone,
      address: this.user.address,
      gender: this.user.gender,
      type: this.user.type,
      cart: this.user.cart,
      cardData: this.user.cardData,
    });
  }
  NavigatePanel() {
    this.router.navigate(['User/Admin']);
  }
}
