import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  loading: boolean = false;
  cartProduct: any[] = [];

  constructor(private service: ProductService) {}
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true;
    this.service.getAllProduct().subscribe(
      (res: any) => {
        this.products = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;

        alert(Error);
      }
    );
  }
  getCategories() {
    this.service.getAllcategories().subscribe(
      (res: any) => {
        this.loading = true;

        this.categories = res;
        console.log(res);
        this.loading = false;
      },
      (error) => {
        alert(Error);
        this.loading = false;
      }
    );
  }
  filterCategpry(event: any) {
    let value = event.target.value;
    value == 'all' ? this.getProducts() : this.getProductsCategogry(value);
  }
  getProductsCategogry(keyword: string) {
    this.loading = true;

    this.service.getAllbycategories(keyword).subscribe((res: any) => {
      this.products = res;
      this.loading = false;
    });
  }
  addToCart(event: any) {
    if (localStorage.getItem("cart")) {
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!);
      let exist = this.cartProduct.find(item => item.item.id == event.item.id);
      if (exist) {
        alert("Product is already in your cart");
      } else {
        this.cartProduct.push(event);
        localStorage.setItem("cart", JSON.stringify(this.cartProduct)); // Store the entire cart array
      }
    } else {
      this.cartProduct.push(event);
      localStorage.setItem("cart", JSON.stringify(this.cartProduct)); // Store the entire cart array
    }
  }


}
