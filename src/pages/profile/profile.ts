import { Component} from '@angular/core';

import { NavController, App} from 'ionic-angular';
import { LoginPage } from '../login/login';
import {EditProfile} from '../edit-pro/edit-pro';
import {MyService} from '../../services/my.service';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public nav: NavController, public app: App,public myService:MyService) {
  }
  public goToLogin() {
    this.app.getRootNav().push(LoginPage);
  }
  public edit(){
    this.app.getRootNav().push(EditProfile);
  }
  public logout(){
    this.myService.logout();
  }
}
