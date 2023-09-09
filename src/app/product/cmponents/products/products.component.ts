import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  @Input() data!:Product 
  @Output() item = new EventEmitter();
  addButton:boolean=false
  amount:number=0
  add() {
    this.item.emit({item:this.data , quantity:this.amount})
  }

}
