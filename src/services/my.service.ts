import {Injectable} from "@angular/core";
import {Product} from "../model/product";
import {Filter} from "../model/filter";

@Injectable()
export class MyService {
  private product;
  private filter;

  constructor() {}

  getProduct(){
    if (!this.product){
      this.product = new Product();
    }
    return this.product;
  }
  getFilter(){
    if (!this.filter){
      this.filter = new Filter();
    }
    return this.filter;
  }
}
