import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RealEstateListingPage } from '../real-estate-listing/real-estate-listing';

/**
 * Generated class for the CataloguePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-catalogue',
  templateUrl: 'catalogue.html',
})
export class CataloguePage {
  searchQuery: string = '';
  tarjetas: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.iniciarLista();
  }

  iniciarLista(){
  this.tarjetas = [
    {
      title  : '5329 Debbt drive',
      imagen : 'assets/imgs/4.jpg',   
      city : 'Atlanta',
      bedroom : '2',
      bathroom : '3',

  },
  {
    title  : '5329 Stuning Victorian',
    imagen : 'assets/imgs/5.jpg',   
    city : 'clayton',
    bedroom : '4',
    bathroom : '2',
},
{
  title  : '5329 Hyaat Verian',
  imagen : 'assets/imgs/6.jpg',   
  city : 'Heisl',
  bedroom : '3',
  bathroom : '3',
},
{
  title  : '5329 Hyaat Verian',
  imagen : 'https://www.smallworks.ca/wp-content/uploads/exterior1-1.jpg',   
  city : 'Heisl',
  bedroom : '3',
  bathroom : '3',
},
];
}

goToDetail() {  
  this.navCtrl.push(RealEstateListingPage);
}

getItems(ev: any) {
    // Reset items back to all of the items
    this.iniciarLista();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.tarjetas = this.tarjetas.filter((tarjeta) => {
        return (tarjeta.city.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CataloguePage');
  }

}
