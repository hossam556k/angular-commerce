import { ProductService } from './../../../product/services/product.service';
import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart-admin',
  templateUrl: './cart-admin.component.html',
  styleUrls: ['./cart-admin.component.css']
})
export class CartAdminComponent implements OnInit{
  carts:any[] = [];
  products:any[] = [];
  total = 0
  form!:FormGroup;
  details:any;
constructor(private service:CartsService , private  bulid:FormBuilder, private productService:ProductService){}
  ngOnInit(): void {
    this.form=this.bulid.group({
      start:[''],
      end:['']
    })
    this.getAllcarts()

  }



getAllcarts(){[
  this.service.getAllcarts().subscribe((res:any)=>{
this.carts=res;
  })
]}
applyFilter(){
let date=this.form.value
  this.service.getAllcarts(date).subscribe((res:any)=>{
    this.carts=res;
      })
}
deleteCart(id:number){
this.service.deletCart(id).subscribe((res)=> {
  this.getAllcarts()

  alert("Cart Delet Sucees")
})
}

view(index:number) {
  this.products = []
  this.details = this.carts[index];
  console.log(this.details)

  for(let x in this.details.products) {
    this.productService.getproductById(this.details.products[x].productId).subscribe((res: any) => {
      this.products.push({item: res , quantity:this.details.products[x].quantity})
    })
  }
  console.log(this.details)
}
}

