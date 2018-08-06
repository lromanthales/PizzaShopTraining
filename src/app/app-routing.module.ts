import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PizzalistComponent } from './pizzalist/pizzalist.component';
import { ThankyouComponent } from './thankyou/thankyou.component'
import { InformationComponent } from './information/information.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pizzalist',
    component: PizzalistComponent
  },
  {
    path: 'thankyou',
    component: ThankyouComponent
  },
  {
    path: 'information',
    component: InformationComponent
  },
  {
    path: 'myaccount',
    component: InformationComponent
  },

  //to be removed

  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: CustomersListComponent },
  { path: 'add', component: CreateCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
