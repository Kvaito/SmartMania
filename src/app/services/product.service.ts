import { Injectable } from '@angular/core';
import {PRODUCTS} from "../data/PRODUCTS";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  generateId(){
    return new Date().getTime()
  }
}
