import { Component } from '@angular/core';

import { NavController, App } from 'ionic-angular';
import { FilterPage } from '../filter/filter';
import { ProductPage } from '../product/product';
import { Discover } from '../../model/discover';
import { Headers, RequestOptions } from '@angular/http';
import { MyService } from '../../services/my.service';

@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html'
})
export class DiscoverPage {
  public toggled: boolean;
  public showSearchResults: boolean;
  model: Array<Discover> = [];
  model2: Array<Discover> = [];


  constructor(public nav: NavController, public app: App,public myService:MyService) {
    this.clearSearch();
    setTimeout(() => {
      this.myService.loading();
      let url = "https://bebarbiar.cfapps.io/api/1/productList";
      let headers = new Headers({ 'Content-Type': 'application/json' });
      // headers.append("Authorization", "Bearer " + this.myService.user.token);
      let options = new RequestOptions({ headers: headers });
      myService.post(url,options,"")
        .subscribe(
          result => this.success(result),
          error =>  this.myService.myHandleError(error));
    }, 1000);
  }

  private success(result){
    this.model = result;
    this.myService.stopLoading();
  }


  toggleSearch() {
    this.toggled = this.toggled ? false : true;
    this.showSearchResults = this.toggled ? false : true;
  }

  showResults() {
    this.showSearchResults =  true;
  }
  clearSearch() {
    this.showSearchResults =  false;
  }

  public openFilter() {
    this.app.getRootNav().push(FilterPage);
  }
  public showProduct(id) {
    this.myService.setProductId(id);
    this.app.getRootNav().push(ProductPage);
  }
  public doInfinite(infiniteScroll) {
    infiniteScroll.complete();
    infiniteScroll.enable(false);
  }
}
