import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

import { CartService } from './../services/cart.service';
import { ShoppingCart } from './../ShoppingCart';

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './checkout.component.html',
  styleUrls: ['./../pizzalist/pizzalist.component.scss']


})

export class CheckoutComponent implements OnInit {

  public data;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  //Maximum date and minimum date used for limiting the date selection
  maxDate: Date;
  minDate: Date;

  constructor(private cartService: CartService,
              public shoppingService: ShoppingCart,
              public _formBuilder: FormBuilder
               ) 
    {
    this.shoppingService = this.cartService.getCart();
    //Maximum date and minimum date used for limiting the date selection
    this.minDate = new Date();
    this.maxDate = moment(this.minDate).add(1,'M').toDate();
    }

    ngOnInit() {
 
      //create material UI stepper steps
      this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required]
      });
      this.thirdFormGroup = this._formBuilder.group({
        thirdCtrl: ['', Validators.required]
      });
  
      //initialise the cart service
      this.shoppingService = this.cartService.getCart();
      console.log(this.cartService);
    }

    onNoClick(){

    }
}
