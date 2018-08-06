import {Injectable} from '@angular/core';

import {Pizza} from './../pizza';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ShoppingCart } from '../ShoppingCart';
 
@Injectable({
  providedIn: 'root',
})
export class CartService {
  storage = sessionStorage;
  private dbPath ='/pizzas';
 
  shoppingRef: AngularFireList<ShoppingCart> = null;

constructor(public db: AngularFireDatabase){
            this.shoppingRef = db.list(this.dbPath)
}


createOrder(order: ShoppingCart): void {
  this.shoppingRef.push(order);
}

  getCart() {
    const emptyCart = {
      PizzasToBeOrdered: [],
      deliveryDate: '',
      name: '',
      address: '',
      total: 0,
      numberOfItemsToBeOrdered: 0,
      additionalComments: ''
    };

    const cart = this.storage.getItem('cart');

    if (cart) {
      return JSON.parse(cart);
    }

    return emptyCart;
  }

  addToCart(pizza: Pizza) {
    const cart = this.getCart();
    const index = cart.PizzasToBeOrdered.findIndex(val => val.id === pizza.id && val.base === pizza.base);
    
    if (index >= 0) {
      cart.PizzasToBeOrdered[index].numberOfPizzas += 1;
    } else {
      pizza.numberOfPizzas = 1;
      cart.PizzasToBeOrdered.push(pizza);
    }

    // Calculate totals
    cart.numberOfItemsToBeOrdered = 0;
    cart.total = 0;

    cart.PizzasToBeOrdered.forEach(val => {
      cart.numberOfItemsToBeOrdered += val.numberOfPizzas;
      cart.total += val.numberOfPizzas * val.price;
    });

    this.storage.setItem('cart', JSON.stringify(cart));
  }

  removeFromCart(pizza: Pizza) {
    const cart = this.getCart();
    const index = cart.PizzasToBeOrdered.findIndex(val => val.id === pizza.id && val.base === pizza.base);

    if (index < 0) {
      return;
    }

    const item = cart.PizzasToBeOrdered[index];

    if (item.numberOfPizzas > 1) {
      cart.PizzasToBeOrdered[index].numberOfPizzas--;
    } else {
      cart.PizzasToBeOrdered.splice(index, 1);
    }

    // Calculate totals
    cart.numberOfItemsToBeOrdered -= 1;
    cart.total -= item.price;

    this.storage.setItem('cart', JSON.stringify(cart));
  }


  deleteOrderFromMemory(){
    console.log('clear cart called');
    this.storage.clear();
  }

  CreateOrder () {
    //send order via httpClient to server
    const myShoppingCartToBeSubmitted = this.getCart();
    this.createOrder(myShoppingCartToBeSubmitted);
    //clear cache
    this.deleteOrderFromMemory();
  }

}