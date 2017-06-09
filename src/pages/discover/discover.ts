import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { FilterPage } from '../filter/filter';
import { ProductPage } from '../product/product';
import { Headers, RequestOptions } from '@angular/http';
import { MyService } from '../../services/my.service';

@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html'
})
export class DiscoverPage {
  public toggled: boolean;

  constructor(public nav: NavController, public app: App,public myService:MyService) {
    setTimeout(() => {
      this.myService.loading();
      let url = "https://bebarbiar.cfapps.io/api/1/productList";
      let headers = new Headers({ 'Content-Type': 'application/json' });
      // headers.append("Authorization", "Bearer " + this.myService.user.token);
      let options = new RequestOptions({ headers: headers });
      this.myService.post(url,options,"")
        .subscribe(
          result => this.success(result),
          error =>  this.myService.myHandleError(error));
    }, 1000);
  }

  private success(result){
    this.myService.products1 = result.firstList;
    this.myService.products2 = result.secondList;
    this.myService.stopLoading();
  }

  toggleSearch() {
    this.toggled = this.toggled ? false : true;
  }

  public openFilter() {
    this.app.getRootNav().push(FilterPage);
  }
  public showProduct(id) {
    this.myService.productId = id;
    this.app.getRootNav().push(ProductPage);
  }
  public doInfinite(infiniteScroll) {
    infiniteScroll.complete();
    infiniteScroll.enable(false);
  }
}
