import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguagedirService {
  constructor() {}
  changedir() {
    if (localStorage.getItem('language') == 'ar') {
      return 'rtl';
    }
    return 'ltr';
  }
}
