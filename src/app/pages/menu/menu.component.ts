import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private product:ProductService) { }

  ngOnInit(): void {
  }

  scrollTo(id:string){
    const el = document.getElementById(id);
    // @ts-ignore
    el.scrollIntoView({behavior: "smooth"});
  }

  openPrice(){
    this.product.priceOpen=true
  }
}
