import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SharedModule } from "../shared/shared.module";
import { ProductsComponent } from './cmponents/products/products.component';
import { RouterModule } from '@angular/router';
import { AdminProductComponent } from './admin-product/admin-product.component';


@NgModule({
    declarations: [
        AllProductsComponent,
        ProductsDetailsComponent,
        ProductsComponent,
        AdminProductComponent,
    ],
    imports: [
        CommonModule,
        FormsModule // Make sure FormsModule is imported here
        ,
        SharedModule,
        RouterModule

    ]
})
export class ProductModule {}
