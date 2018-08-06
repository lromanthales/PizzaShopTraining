import { Injectable } from '@angular/core';
import {Pizza} from './pizza';
import {PIZZAS} from './mock-pizzas';
import { Observable, of } from 'rxjs';
import {MessageService} from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private pizzaUrl = 'api/pizzas';

  constructor(private messageService: MessageService,
    private http: HttpClient) { }


  getPizza(id: number) {
    this.log('PizzaService: fetched Pizza with id=${id}');
    return of(PIZZAS.find(pizza => pizza.id === id));
  }

  private log(message: string) {
    this.messageService.add(`PizzaService: ${message}`);
  }

  
}
