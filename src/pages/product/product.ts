import { Component } from '@angular/core';
import { NavController, NavParams,App } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {
  public showSlideView:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

  ionViewWillEnter() {
    this.showSlideView = true;
  }

  ionViewWillLeave() {
    this.showSlideView = false;
  }

  public chat(){
    this.app.getRootNav().push(ChatPage);
  }

}
