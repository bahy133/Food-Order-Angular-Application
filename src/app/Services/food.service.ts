import { Food } from './../Models/food';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic my-auth-token',
    }),
  };
  constructor(private http: HttpClient) {}
  getallFood(): Observable<Food[]> {
    return this.http.get<Food[]>(`${environment.ApiLink}/Food`);
  }
  getFood(Fname: string): Observable<Food> {
    return this.http.get<Food>(`${environment.ApiLink}/Food/${Fname}`);
  }
  addFood(food: Food) {
    return this.http.post(
      `${environment.ApiLink}/Food`,
      JSON.stringify(food),
      this.httpOptions
    );
  }
  updateFood(Fname: string, food: Food) {
    return this.http.put(
      `${environment.ApiLink}/Food/${Fname}`,
      JSON.stringify(food),
      this.httpOptions
    );
  }
  deleteFood(Fname: string) {
    return this.http.delete(`${environment.ApiLink}/Food/${Fname}`);
  }
}
