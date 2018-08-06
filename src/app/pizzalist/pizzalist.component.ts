import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from './../services/api.service';

import { MatSnackBar } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material';

import { CartService } from './../services/cart.service';
import { ShoppingCart } from './../ShoppingCart';
import { Pizza } from './../pizza';
import { CheckoutComponent } from './../checkout/checkout.component';

@Component({
  selector: 'pizzalist',
  templateUrl: './pizzalist.component.html',
  styleUrls: ['./pizzalist.component.scss']
})

export class PizzalistComponent implements OnInit {
  closeResult: string;
  pizza: Pizza; //pizza object
  pizzas: Pizza[]; //array of pizza objects
  selectedTab: number;

  mytoppings = new FormControl();
  mybase = new FormControl();
  displayedColumns: string[] = ['numberOfPizzas', 'name', 'delete'];
  data: any;

  toppings: Array <string> = ['Tomatoes','Meat','Chicken', 'Salami', 'Pepper', 
  'Pickles', 'Corn', 'Chilli', 'Hot Sauce', 'SweetCorn', 'Mozzarela', 'Olives'];
  bases: Array <string> =['Fluffy', 'Slim', 'Flour','Medium Fluffy'];

  constructor(
    public shoppingService: ShoppingCart, 
    private apiService: ApiService,
    private cartService: CartService,
    public snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

   getNewPizza() {
    const pizza = new Pizza();
    pizza.numberOfAllowedToppings = 4;

    for(let i = 0; i < pizza.numberOfAllowedToppings; i++) {
      pizza.ingredients.push({name: ''});
    }

    return pizza;
   }

  addToCart(pizza) {
    this.openSnackBar(pizza.name, "added to shopping cart");
    this.cartService.addToCart(pizza);
    this.shoppingService = this.cartService.getCart();
    this.data = new MatTableDataSource(this.shoppingService.PizzasToBeOrdered);

  }

  removeFromCart(pizza){
    this.cartService.removeFromCart(pizza);
    this.shoppingService = this.cartService.getCart();
    this.data = new MatTableDataSource(this.shoppingService.PizzasToBeOrdered);
  }

  ngOnInit() {
    this.selectedTab = 0;
    this.shoppingService = this.cartService.getCart();
    this.data = new MatTableDataSource(this.shoppingService.PizzasToBeOrdered);
    this.getPizzas();
    this.pizza = this.getNewPizza();
    // form send detail
  }

  getPizzas(): void {
    this.apiService.getOrder().subscribe(response => {
      this.pizzas = response;
    });
  }

  handleSubmit() {
    this.calculateValue(this.pizza);
    this.generateIdAndPushIngredients();
    console.log(this.pizza.image);
    this.pizza = this.getNewPizza();
  }

  generateIdAndPushIngredients() {
    if (!this.pizza.id) {
      this.pizza.id = this.pizzas[this.pizzas.length - 1].id + 1;
      this.pizzas.push({
        ...this.pizza,
        ingredients: this.pizza.ingredients.map(val => val.name),
        image: "./../../assets/genericpizza.jpg"
      });
    } else {
      const index = this.pizzas.findIndex(val => val.id === this.pizza.id);
      this.pizzas[index] = this.pizza;
    }
  }

  calculateValue(pizza: Pizza) {
    let basevalue: number = 1;
    switch (pizza.base) {
      case 'Flour':
        basevalue = 10;
        break;
      case 'Fluffy':
        basevalue = 30;
        break;
      case 'Slim':
        basevalue = 15;
        break;
      case 'Medium Fluffy':
        basevalue = 20;
        break;
    }

    pizza.price = pizza.ingredients.length * 5 + basevalue;
    console.log(pizza.price);
    return pizza.price;
  }

  getPizzaIngredients() {
    return this.pizza.ingredients.map(val => val.name);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(CheckoutComponent, {
      width: '700px'
    });
  }

}