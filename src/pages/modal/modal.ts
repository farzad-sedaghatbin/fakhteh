import { Component } from '@angular/core';
import { NavParams,ViewController } from 'ionic-angular';

@Component({
  selector: 'modal',
  templateUrl: 'modal.html'
})
export class ModalPage {
  content;

  constructor(params: NavParams,public viewCtrl:ViewController) {
    this.content = params.get('content');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }
}
