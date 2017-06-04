import { Component } from '@angular/core';
import { NavController, NavParams,App } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { MyService } from '../../services/my.service';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {
  public showSlideView:boolean = false;
  constructor(public myService:MyService, public app: App) {
    setTimeout(() => {
      alert(this.myService.getProductId())
    }, 1000);
  }

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
