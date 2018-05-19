import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import {UserProvider} from '../../providers/user/user';

/**
 * Generated class for the PasswordresetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-passwordreset',
  templateUrl: 'passwordreset.html',
})
export class PasswordresetPage {
  email:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userservice: UserProvider,public alertctrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordresetPage');
  }
  reset(){
      let alert = this.alertctrl.create({
        buttons:['OK']
      });
      
      this.userservice.passwordreset(this.email).then((res:any)=>{
        if(res.success){
          alert.setTitle('email Enviado');
          alert.setSubTitle('Acesse seu e-mail e siga as instruções');
        }
        else{
          alert.setTitle('falhou');
        }
      })
  }

  goback() {
    this.navCtrl.setRoot('LoginPage');
  }

}
