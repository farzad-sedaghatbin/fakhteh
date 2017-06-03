import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { LoginPage } from '../pages/login/login';
import { DiscoverPage } from '../pages/discover/discover';
import {MyService} from '../services/my.service';
import {SQLite} from 'ionic-native';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;
  constructor(platform: Platform,myService: MyService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.rootPage = LoginPage;
      let db = new SQLite();
      db.openDatabase({
        name: "mydb",
        location: "default"
      }).then(() => {
        db.executeSql("CREATE TABLE IF NOT EXISTS bebarbiar (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, log TEXT)", {}).then((data) => {
        });
        db.executeSql("SELECT d.log FROM bebarbiar d WHERE d.name='user'", {}).then((data) => {
          if(data.rows.length > 0) {
            myService.setUser(JSON.parse(data.rows.item(0).log));
            this.rootPage = LoginPage;
              StatusBar.styleDefault();
              Splashscreen.hide();
          } else {
            this.rootPage = DiscoverPage;
            StatusBar.styleDefault();
            Splashscreen.hide();
          }
        });
      }, (error) => {
        this.rootPage = LoginPage;
      });
    });
  }
}

