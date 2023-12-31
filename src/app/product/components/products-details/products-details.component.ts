import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  id:any;
  data:any=[];
  loading:boolean=false;
 constructor(private route: ActivatedRoute , private service:ProductService){
  this.id=this.route.snapshot.paramMap.get("id");
  console.log(this.id)
 }

 ngOnInit(): void {
   this.getProduct()
 }

 getProduct(){
  this.loading=true
  this.service.getproductById(this.id).subscribe((res)=> {
    this.loading=false

    this.data=res
  })
 }

}
