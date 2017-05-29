import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {
  public showSlideView:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

  ionViewWillEnter() {
    this.showSlideView = true;
  }

  ionViewWillLeave() {
    this.showSlideView = false;
  }

}
