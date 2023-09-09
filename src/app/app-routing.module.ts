import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './product/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './product/components/products-details/products-details.component';
import { CartComponent } from './carts/componnts/cart/cart.component';
import { CartAdminComponent } from './carts/components/cart-admin/cart-admin.component';

const routes: Routes = [
  {path: 'product',component:AllProductsComponent},
  {path:"details/:id", component:ProductsDetailsComponent},
  {path:'cart', component:CartComponent},
  {path:'admin', component:CartAdminComponent},
  {path:"**", redirectTo:"cart ",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
