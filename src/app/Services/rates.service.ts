import { Rates } from './../Models/rates';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RatesService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic my-auth-token',
    }),
  };
  constructor(private http: HttpClient) {}
  getRate(Fname: string): Observable<Rates> {
    return this.http.get<Rates>(`${environment.ApiLink}/rates/${Fname}`);
  }
  addRate(rate: Rates) {
    return this.http.post(
      `${environment.ApiLink}/rates`,
      JSON.stringify(rate),
      this.httpOptions
    );
  }
  updateRate(Fname: string, rate: Rates) {
    return this.http.put(
      `${environment.ApiLink}/rates/${Fname}`,
      JSON.stringify(rate),
      this.httpOptions
    );
  }
  deleteRate(Fname: string) {
    return this.http.delete(`${environment.ApiLink}/rates/${Fname}`);
  }
}
