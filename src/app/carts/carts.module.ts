import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './componnts/cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { CartAdminComponent } from './components/cart-admin/cart-admin.component';



@NgModule({
  declarations: [
    CartComponent,
    CartAdminComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule // Make sure FormsModule is imported her,

  ]
})
export class CartsModule { }
