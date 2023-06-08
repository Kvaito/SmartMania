import { Injectable } from '@angular/core';
import {PRODUCTS} from "../data/PRODUCTS";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  priceOpen:boolean=false

  generateId(){
    return new Date().getTime()
  }
}
