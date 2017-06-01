import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MyService} from '../../services/my.service';

/*
  Generated class for the Filter page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html'
})
export class FilterPage {
  public model;

  constructor(public navCtrl: NavController, public navParams: NavParams,public myService:MyService) {
    this.model = this.myService.getFilter();
  }

  public radioClicked(cat){
    this.model.cat = cat;
  }
}
