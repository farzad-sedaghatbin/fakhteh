import {Component} from '@angular/core';
import {ViewController, App} from 'ionic-angular';
import {ImagePicker} from '@ionic-native/image-picker';
import {Camera} from '@ionic-native/camera';
import {PublishAdPage} from '../publish-ad/publish-ad';
import {MyService} from '../../services/my.service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-create-ad-modal',
  templateUrl: 'create-ad-modal.html'
})
export class CreateAdModalPage {
  public model;

  constructor(public viewCtrl: ViewController, public app: App, public imagePicker: ImagePicker, public camera: Camera,public myService:MyService,public alertCtrl: AlertController) {
    this.model = this.myService.getProduct();
  }

  public addProduct() {
    // let alert = this.alertCtrl.create({
    //   title: 'New Friend!',
    //   subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
    //   buttons: ['OK']
    // });
    // alert.present();
    this.app.getRootNav().push(PublishAdPage);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  public selectPhotoFromLib() {
    this.imagePicker.getPictures({}).then((results) => {
      console.log('Image URI: ' + results[0]);
      if (this.model.images.length > 4) {
        alert("not allowd");
        return;
      }
      this.model.images.push(results[0])
    }, (err) => {
    });
  }

  public takePhoto() {
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      if (this.model.images.length > 4) {
        alert("not allowd");
        return;
      }
      this.model.images.push(imageData)
    }, (err) => {
      // Handle error
    });
  }

  public changeCoverPhoto(index) {
    if (index != 0) {
      const temp = this.model.images[index];
      this.model.images[index] = this.model.images[0];
      this.model.images[0] = temp;
    }
  }

  public delete(index){
    this.model.images.splice(index,1);
  }

  public checkIndex(index){
    return index == 0;
  }

}
