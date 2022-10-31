import { Stores } from './../Models/stores';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StoresService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic my-auth-token',
    }),
  };
  constructor(private http: HttpClient) {}
  getallStores(): Observable<Stores[]> {
    return this.http.get<Stores[]>(`${environment.ApiLink}/Store`);
  }
  getStore(Storename: string): Observable<Stores> {
    return this.http.get<Stores>(`${environment.ApiLink}/Store/${Storename}`);
  }
  addStores(stores: Stores) {
    return this.http.post(
      `${environment.ApiLink}/Stores`,
      stores,
      this.httpOptions
    );
  }
  updateStore(storeName: string, store: Stores) {
    return this.http.put(
      `${environment.ApiLink}/Stores/${storeName}`,
      store,
      this.httpOptions
    );
  }
  deleteUser(Storename: string) {
    return this.http.delete(`${environment.ApiLink}/Stores/${Storename}`);
  }
}
