import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
resenia = ['JOYGLE is an online platform that works with a group of specialists in the real estate market, who are highly trained to fulfill your dreams and improve your quality of life. Joygle operates with the most popular applications suites of real estate in the USA. Who are very dedicated and highly trained.']
resenia2 = ['With joygle you can get all the comprehensive advice to purchase, sale, rent financing and much more.']
cita = ['“We are the best choice to provide you with excellent data and knowledge about the place of your dreams; we make it possible to connect with the best local professionals that will help you make your life easier.”']
parnert1 = ['FMLS']
parnert2 = ['GAMLS']
parnert3 = ['HOMESTAR']

items = [
    {
      title: 'Office',
      direction: '3750 venture drive suite D-15 Duluth GA 30096',
       Tel: ' Tel: 1 800 276 0340',
       correo: 'info@joygle.com',
    },
  ]
  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
}
