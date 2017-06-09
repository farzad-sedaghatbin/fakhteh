import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { MyService } from '../../services/my.service';
import { Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {
  public show:boolean = false;
  public model;
  constructor(public myService:MyService, public app: App) {
    setTimeout(() => {
      this.myService.loading();
      let url = "https://bebarbiar.cfapps.io/api/1/detail";
      let headers = new Headers({ 'Content-Type': 'application/json' });
      // headers.append("Authorization", "Bearer " + this.myService.user.token);
      let options = new RequestOptions({ headers: headers });
      myService.post(url,options,this.myService.productId)
        .subscribe(
          result => this.success(result),
          error =>  this.myService.myHandleError(error));
    }, 1000);
  }

  private success(result){
    this.model = result.product;
    this.myService.stopLoading();
    this.show = true;
  }

  public chat(){
    this.app.getRootNav().push(ChatPage);
  }

}
