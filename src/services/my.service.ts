import {Injectable} from "@angular/core";
import {Product} from "../model/product";
import {Filter} from "../model/filter";
import {SQLite} from 'ionic-native';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {ModalPage} from '../pages/modal/modal';
import {ModalController, App} from 'ionic-angular';
import {LoginPage} from '../pages/login/login';

@Injectable()
export class MyService {
  private product;
  private filter;
  private username;
  private token;

  constructor(public modalCtrl: ModalController, public app: App,private http: Http) {
  }

  post(url,options,data): Observable<Object> {
    return this.http.post(url, JSON.stringify(data), options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  myHandleError(err, isFromLogin) {
    if (err.status == 401) {
      if (isFromLogin) {
        this.openModal('<div>نام کاربری یا رمز عبور اشتباه می باشد</div>')
      } else {
        this.logout();
        this.openModal('<div>لطفا اطلاعات حساب خود را وارد نمایید</div>')
      }
    } else if (err.status == 0) {
      this.openModal('<div>لطفا اتصال اینترنت خود را بررسی کنید</div>')
    } else if (err.status == 418) {
      this.openModal('<div class="myText" style="padding-bottom: 10px;direction: rtl;text-align: right;line-height: 1.5em">    <div style="direction: rtl;padding-top: 20px;line-height: 3em">' +
        '<span class="myText">خطا بدلیل آپدیت نبودن برنامه، لطفا برنامه را بروزرسانی کنید</span></div>' +
        '<div ng-show="!isAndroid()" style="direction: rtl;padding-top: 20px;line-height: 3em"><i class="icon ion-checkmark" style="color: #F06A21;font-size: medium"></i>' +
        '<a style="color: #F06A21;text-decoration: none" class="myText" href="https://goo.gl/Xqzk1X">اپل استور</a></div>' +
        '<div ng-show="isAndroid()" style="direction: rtl;padding-top: 20px;line-height: 3em"><i class="icon ion-checkmark" style="color: #F06A21;font-size: medium"></i>' +
        '<a style="color: #F06A21;text-decoration: none" class="myText" href="https://goo.gl/IzDMd3">گوگل پلی</a></div>' +
        '<div ng-show="isAndroid()" style="direction: rtl;padding-top: 20px;line-height: 3em"><i class="icon ion-checkmark" style="color: #F06A21;font-size: medium"></i>' +
        '<a style="color: #F06A21;text-decoration: none" class="myText" href="https://goo.gl/Duh3Mn">کافه بازار</a></div></div>')
    } else {
      this.openModal('خطا در ارتباط با سرور');
    }
  };

  private openModal(content) {
    let profileModal = this.modalCtrl.create(ModalPage, {content: content});
    profileModal.present();
  }

  logout() {
    let db = new SQLite();
    db.openDatabase({
      name: "mydb",
      location: "default"
    }).then(() => {
      db.executeSql("DELETE FROM bebarbiar", {}).then((data) => {
        this.app.getRootNav().push(LoginPage);
      });
    });
  }

  getProduct() {
    if (!this.product) {
      this.product = new Product();
    }
    return this.product;
  }

  getFilter() {
    if (!this.filter) {
      this.filter = new Filter();
    }
    return this.filter;
  }

  getUsername() {
    return this.username;
  }

  setUsername(value) {
    this.username = value;
  }

  setToken(value) {
    this.token = value;
  }

  getToken() {
    return this.token;
  }
}
