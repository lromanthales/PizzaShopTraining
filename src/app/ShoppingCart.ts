import { Pizza } from './pizza';
import { Injectable } from '@angular/core';
import { PizzalistComponent } from './pizzalist/pizzalist.component';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCart {
  PizzasToBeOrdered: Pizza[];
  deliveryDate: Date;
  name: string;
  address: string;
  total: number;
  numberOfItemsToBeOrdered: number;
  additionalComments?:string;

  constructor() {
    this.PizzasToBeOrdered = [];
    this.numberOfItemsToBeOrdered = 0;
  }

  addToCart(pizza: Pizza) {
    const pizzaName = this.PizzasToBeOrdered.find(val => val.name === pizza.name)
    if(pizzaName)
    {
      this.numberOfItemsToBeOrdered +=1;
      pizza.numberOfPizzas += 1;
      this.calculateTotal();
    } else {
          this.PizzasToBeOrdered.push(pizza);
          pizza.numberOfPizzas = 1;
          this.numberOfItemsToBeOrdered +=1;
          this.calculateTotal();
           } 
  }

  removeFromCart(pizza: Pizza) {
    let pizzaId = pizza.id;
    const index = this.PizzasToBeOrdered.findIndex(val => val.id === pizzaId);

    if (index === -1) {
      return;
    }

    const item = this.PizzasToBeOrdered[index];

    if (item.numberOfPizzas > 1) {
      this.PizzasToBeOrdered[index].numberOfPizzas--;
    } else {
      this.PizzasToBeOrdered.splice(index, 1);
    }

    this.numberOfItemsToBeOrdered--;
    this.calculateTotal();
  }

  private calculateTotal() {
    const reducer = (total: number, val: Pizza) => total + val.price*val.numberOfPizzas;
    this.total = this.PizzasToBeOrdered.reduce(reducer, 0);

  }

  public getTotal() {
    return this.total;
  }
}