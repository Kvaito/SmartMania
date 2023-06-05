import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PRODUCTS} from "../../data/PRODUCTS";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() category = {
    categoryName: 'СМАРТФОНЫ',
    iconPath:'../../../assets/images/price/smartphone.png',
    services: PRODUCTS,
    reveal: false
  };

  constructor() {
  }

  ngOnInit(): void {
  }


}
