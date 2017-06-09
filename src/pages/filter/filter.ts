import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Headers, RequestOptions } from '@angular/http';
import { MyService } from '../../services/my.service';

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

  constructor(public viewCtrl: ViewController,public myService:MyService) {
    this.model = this.myService.getFilter();
  }

  public radioClicked(cat){
    this.model.cat = cat;
  }

  public search(){
    this.myService.loading();
    let url = "https://bebarbiar.cfapps.io/api/1/search";
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // headers.append("Authorization", "Bearer " + this.myService.user.token);
    let options = new RequestOptions({ headers: headers });
    this.myService.post(url,options,this.model)
      .subscribe(
        result => this.success(result),
        error =>  this.myService.myHandleError(error));
  }

  private success(result){
    this.myService.products1 = result.firstList;
    this.myService.products2 = result.secondList;
    this.myService.stopLoading();
    this.viewCtrl.dismiss();
  }
}
