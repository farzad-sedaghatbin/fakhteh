import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MyService} from '../../services/my.service';
import {CreateAdModalPage} from "../create-ad-modal/create-ad-modal";

@Component({
  selector: 'page-publish-ad',
  templateUrl: 'publish-ad.html'
})
export class PublishAdPage {

  constructor(public navCtrl: NavController,public myService:MyService) {
  }

  public radioClicked(cat){
    this.myService.product.cat = cat;
  }

  public cancel(){
    const index = this.navCtrl.getActive().index;
    this.navCtrl.remove(index - 1, 1)
    this.navCtrl.pop();
  }

  public submit(){
    alert("Sdfsf")
  }

}
