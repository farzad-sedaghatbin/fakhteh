import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Login} from "../../model/login";
import {MyService} from '../../services/my.service';
import {SQLite} from 'ionic-native';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  model = new Login();

  constructor(private nav: NavController,public myService:MyService) {}

  public createAccount() {
    this.nav.push(RegisterPage);
  }

  public login() {
    let url = "http://app.anijuu.ir/api/1/user_authenticate";
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let model = this.model;
    this.myService.post(url,options,model)
      .subscribe(
        result => this.success(result),
        error =>  this.myService.myHandleError(error,true));
  }
  private success(result){
    this.myService.setUser(result);
    let db = new SQLite();
    db.openDatabase({
      name: "mydb",
      location: "default"
    }).then(() => {
      db.executeSql('INSERT INTO ANIJUU (name, log) VALUES (?, ?)', ["user", JSON.stringify(this.myService.getUser())]).then((data) => {
      });
    });
    this.nav.setRoot(TabsPage)
  }


}
