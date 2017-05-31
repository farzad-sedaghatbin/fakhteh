import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MyService} from '../../services/my.service';

@Component({
  selector: 'page-publish-ad',
  templateUrl: 'publish-ad.html'
})
export class PublishAdPage {
  public model;

  constructor(public navCtrl: NavController, public navParams: NavParams,public myService:MyService) {
    this.model = this.myService.getProduct();
  }

  public radioClicked(cat){
    this.model.cat = cat;
  }

  public submit(){
    alert("Sdfsf")
  }

}
