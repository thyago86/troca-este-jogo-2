import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth'
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database'
import { Profile } from '../../models/profile';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  profileData: AngularFireObject<Profile>;

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data =>{
      if(data && data.email && data.uid){
      this.toast.create({
        message: `Bem vindo ao TROCA ESTE JOGO, ${data.email}`,
        duration: 3000
      }).present();

      this.profileData = this.afDatabase.object(`profile/${data.uid}`);
    }
    else{
      this.toast.create({
        message: 'Autenticação não encontrada',
        duration: 3000
      }).present();

    }
    })
  }

}
