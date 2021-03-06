import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {User} from '../../model/user';
import {MyService} from '../../services/my.service';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  model = new User();

  constructor(private nav: NavController,public myService:MyService) {
  }

  public register() {
    this.myService.showPopup("Success", "Account created.");
  }

  public goToLogin() {
    this.nav.push(LoginPage);
  }
}
