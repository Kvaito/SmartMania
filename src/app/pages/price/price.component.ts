import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PRODUCTS} from "../../data/PRODUCTS";
import {ProductType} from "../../data/ProductType";
import { trigger, transition, animate, style } from '@angular/animations'
@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
  animations: [
    trigger('price', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('2000ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0%)'}),
        animate('2000ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class PriceComponent implements OnInit {

  constructor() { }
  @Output() outClosePrice=new EventEmitter()

  selectedCategory={
    categoryName:'СМАРТФОН',
    services:PRODUCTS,
    iconPath:'../../../assets/images/price/smartphone.png',
    reveal:false
  }
  isCategoryReveal:boolean=false
  public services=PRODUCTS;
  sortedServices=[{
    categoryName:'СМАРТФОН',
    iconPath:'../../../assets/images/price/smartphone.png',
    services:PRODUCTS,
    reveal:false
  },{
    categoryName:'СМАРТ-ЧАСЫ/ФИТНЕС-БРАСЛЕТ/ЭЛ.СИГАРЕТА',
    iconPath:'../../../assets/images/price/watch.png',
    services:PRODUCTS,
    reveal:false
  },{
    categoryName:'ПЛАНШЕТ/НОУТБУК',
    iconPath:'../../../assets/images/price/laptop.png',
    services:PRODUCTS,
    reveal:false
  }]
  ngOnInit(): void {
    this.handleServices()

  }

  handleServices() {
    let categoryCheck=1
    this.sortedServices.forEach((item) =>{
      item.services=this.services.filter(item=>item.categoryCode==categoryCheck);
      categoryCheck++;
    })
    console.log(this.sortedServices)
  }

  selectCategory(category:any){
    this.selectedCategory=category;
    this.isCategoryReveal=true
  }

  closePrice(){
    // this.priceClass='close'
    this.outClosePrice.emit()
    // setTimeout(()=>,1000)
  }

  closeCategory(){
    this.isCategoryReveal=false
  }

}
