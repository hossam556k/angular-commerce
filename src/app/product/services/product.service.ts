import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProduct() {
    return this.http.get('https://fakestoreapi.com/products');
  }
  getAllcategories() {
    return this.http.get('https://fakestoreapi.com/products/categories');
  }
  getAllbycategories(keyword:string){
    return  this.http.get( 'https://fakestoreapi.com/products/category/'+keyword);
  }
  getproductById(id:any){
    return this.http.get('https://fakestoreapi.com/products/'+id);
  }
}
