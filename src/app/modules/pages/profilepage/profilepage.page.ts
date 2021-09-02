import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import {Storage} from '@capacitor/storage'

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.page.html',
  styleUrls: ['./profilepage.page.scss'],
})
export class ProfilepagePage implements OnInit {

  constructor(
    public alertController: AlertController,
    public actionSheetController: ActionSheetController) { }

  ngOnInit() {

  }


  async setPhoto() {

    const actionSheet = await this.actionSheetController.create({
      header: 'Profil Fotoğrafını Düzenle',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Fotoğraf Çek',
        role: 'takePhoto',
        icon: 'camera',
        handler: async () => {
          const image = await Camera.getPhoto({
            quality:100,            
            allowEditing:true,
            resultType:CameraResultType.Uri,
            saveToGallery:true,
            source: CameraSource.Camera

          });
          // let a = (await fetch(image.path)).blob()
          // console.log(a)
        }
      }, {
        text: 'Galeriden Seç',
        role: 'getPhoto',
        icon: 'images',
        handler: async () => {
          const image = await Camera.getPhoto({
            quality:100,            
            allowEditing:true,
            resultType:CameraResultType.Uri,
            source: CameraSource.Photos
          });
        }
      },   {
        text: 'Kapat',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  async logout() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Çıkış Yapılıyor...',
      message: '<strong>Onaylıyor musunuz ?</strong>',
      buttons: [
        {
          text: 'Evet',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Okay');
          }
        }, {
          text: 'Hayır',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });

    await alert.present();
  }

}
