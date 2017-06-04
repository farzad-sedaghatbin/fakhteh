import { Component } from '@angular/core';

import { NavController, App } from 'ionic-angular';
import { FilterPage } from '../filter/filter';
import { ProductPage } from '../product/product';
import { Discover } from '../../model/discover';
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
    this.myService.loading();
    setTimeout(() => {
      let discover = new Discover();
      discover.id=1;
      discover.title = 'دوربین عکاسی';
      discover.price = 1000;
      discover.image = 'assets/images/discover-img.jpg';
      this.model.push(discover);
      let discover2 = new Discover();
      discover2.id = 2;
      discover2.title = 'دوربین عکاسی';
      discover2.price = 1000;
      discover2.image = 'assets/images/discover-img3.jpg';
      this.model.push(discover2);
      let discover3 = new Discover();
      discover3.id=3;
      discover3.title = 'دوربین عکاسی';
      discover3.price = 1000;
      discover3.image = 'assets/images/discover-img5.jpg';
      this.model2.push(discover3);
      let discover4 = new Discover();
      discover4.id=4;
      discover4.title = 'دوربین عکاسی';
      discover4.price = 1000;
      discover4.image = 'assets/images/discover-img2.jpg';
      this.model2.push(discover4);
      let discover5 = new Discover();
      discover5.id=5;
      discover5.title = 'دوربین عکاسی';
      discover5.price = 1000;
      discover5.image = 'assets/images/discover-img4.jpg';
      this.model2.push(discover5);
      let discover6 = new Discover();
      discover6.id=6
      discover6.title = 'دوربین عکاسی';
      discover6.price = 1000;
      discover6.image = 'assets/images/discover-img.jpg';
      this.model.push(discover6);
      this.showResults()
      this.myService.stopLoading();
    }, 3000);
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
