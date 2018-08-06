import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { MatDialog } from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Lucian\'s Pizza';
  data: any;
  pizzalist: any;
  dataFromFirebase: any;

  constructor(private cartService: CartService, 
              private dialog: MatDialog) 
  {
  }

  ngOnInit() {
    this.data = this.cartService.getCart();
  }

  openDialog() {
    const dialogRef = this.dialog.open(CheckoutComponent, {
      width: '700px'
    });
  }
}
