import { Component } from '@angular/core';

import { NavController, App, LoadingController } from 'ionic-angular';
import { FilterPage } from '../filter/filter';
import { ProductPage } from '../product/product';

@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html'
})
export class DiscoverPage {
  public toggled: boolean;
  public showSearchResults: boolean;

  constructor(public nav: NavController, public app: App, public loadingCtrl: LoadingController) {
    this.toggled = false;
    this.showSearchResults = true;
    let loader = this.loadingCtrl.create();
    loader.present();
    setTimeout(() => {
      loader.dismiss();
    }, 100);
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
  public showProduct() {
    console.log('Clicked');
    this.app.getRootNav().push(ProductPage);
  }
  public doInfinite(infiniteScroll) {
    infiniteScroll.complete();
    infiniteScroll.enable(false);
  }
}
