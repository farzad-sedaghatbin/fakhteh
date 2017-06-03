import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {MyService} from '../../services/my.service';

@Component({
  selector: 'change-pass',
  templateUrl: 'change-pass.html'
})
export class ChangePass {
  pass;
  newPass;
  newPass2;

  constructor(private nav: NavController,public myService:MyService) {
  }

  public register() {
    this.myService.showPopup("Success", "Account created.");
  }

  public goToLogin() {
    this.nav.push(LoginPage);
  }
}
