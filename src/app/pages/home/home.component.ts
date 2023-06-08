import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public product:ProductService) { }


  ngOnInit(): void {
    // this.onEntry()
  }

  closePrice(){
    this.product.priceOpen=false
  }
}
