import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import {AngularFireModule} from 'angularfire2';

//import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../pages/login/login';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';


export const firebaseConfig={
  apiKey: "AIzaSyCQynWh7xpt6r293QXUDl-jUoKiOioy5ws",
    authDomain: "troca-este-jogo-55393.firebaseapp.com",
    databaseURL: "https://troca-este-jogo-55393.firebaseio.com",
    projectId: "troca-este-jogo-55393",
    storageBucket: "troca-este-jogo-55393.appspot.com",
    messagingSenderId: "830282995777"
}

@NgModule({
  declarations: [
    MyApp,
    LoginPage
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
