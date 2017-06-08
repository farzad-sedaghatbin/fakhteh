import {Injectable} from "@angular/core";
import {Product} from "../model/product";
import {Filter} from "../model/filter";
import {SQLite} from 'ionic-native';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {ModalPage} from '../pages/modal/modal';
import {ModalController, App, AlertController,LoadingController} from 'ionic-angular';
import {LoginPage} from '../pages/login/login';
import {Discover} from "../model/discover";

@Injectable()
export class MyService {
  private product;
  private filter;
  public user;
  public productId;
  private loader;
  public products1: Array<Discover> = [];
  public products2: Array<Discover> = [];

  constructor(public modalCtrl: ModalController, public app: App, private http: Http, private alertCtrl: AlertController,public loadingCtrl: LoadingController) {
  }

  public post(url, options, data): Observable<Object> {
    return this.http.post(url, JSON.stringify(data), options)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  public myHandleError(err, isFromLogin=false) {
    this.stopLoading();
    if (err.status == 401) {
      if (isFromLogin) {
        this.showPopup('خطا', 'نام کاربری یا رمز عبور اشتباه می باشد');
      } else {
        this.logout();
        this.showPopup('پیغام', 'لطفا اطلاعات حساب خود را وارد نمایید');
      }
    } else if (err.status == 0) {
      this.showPopup('خطا', 'لطفا اتصال اینترنت خود را بررسی کنید');
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
      this.showPopup('خطا', 'خطا در ارتباط با سرور');
    }
  };

  public openModal(content) {
    let profileModal = this.modalCtrl.create(ModalPage, {content: content});
    profileModal.present();
  }

  public showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            alert.dismiss();
          }
        }
      ]
    });
    alert.present();
  }

  public logout() {
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

  public loading(){
    this.loader = this.loadingCtrl.create({dismissOnPageChange:true,showBackdrop:false,spinner:'bubbles'});
    this.loader.present();
  }

  public stopLoading(){
    this.loader.dismiss();
  }

  public getProduct() {
    if (!this.product) {
      this.product = new Product();
    }
    return this.product;
  }

  public getFilter() {
    if (!this.filter) {
      this.filter = new Filter();
    }
    return this.filter;
  }

}
