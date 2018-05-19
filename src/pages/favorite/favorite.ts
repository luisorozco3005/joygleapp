import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RealEstateListingPage } from '../real-estate-listing/real-estate-listing';

/**
 * Generated class for the FavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  tarjetas = [
    {
      title  : '5329 Debbt drive',
      imagen : 'assets/imgs/4.jpg',   
      city : 'Atlanta',
      bedroom : '2',
      bathroom : '3',

  },
{
  title  : '5329 Hyaat Verian',
  imagen : 'assets/imgs/6.jpg',   
  city : 'Heisl',
  bedroom : '3',
  bathroom : '3',

},
];

goToDetail() {
  this.navCtrl.push(RealEstateListingPage);
}

share(card) {

}


favorite(card) {
  
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritePage');
  }

}
