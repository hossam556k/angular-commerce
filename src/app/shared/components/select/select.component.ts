import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input()title:string="";
  @Input()data:any[]=[];
  @Output() selcetedvalue= new EventEmitter;
  constructor(){}

  ngOnInit() {}

  filtering(event:any){
    this.selcetedvalue.emit(event)

  }

}
