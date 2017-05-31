import {Injectable} from "@angular/core";
import {Product} from "../model/product";

@Injectable()
export class MyService {
  private product;

  constructor() {}

  getProduct(){
    if (!this.product){
      this.product = new Product();
    }
    return this.product;
  }
}
