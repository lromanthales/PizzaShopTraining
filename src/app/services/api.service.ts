import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {PIZZAS} from './../mock-pizzas';
import {Pizza} from './../pizza';
 
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getOrder(): Observable<Pizza[]> {
    console.log(this.http.get<Pizza[]>('https://jsonplaceholder.typicode.com/posts'));
    return this.http
      .get<Pizza[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        map(() => PIZZAS)
      );
  }
}