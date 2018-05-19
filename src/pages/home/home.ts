import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RealEstateListingPage } from '../real-estate-listing/real-estate-listing';
import { CataloguePage } from '../catalogue/catalogue';
import { FavoritePage } from '../favorite/favorite';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  openMenu: boolean = false;
  slides = [
    {
      title  : 'Bienvenido 1',
      imagen : 'assets/imgs/1.jpg',   
      precio : '$75.000',

    },
    {
      title  : 'Bienvenido 2',
      imagen : 'assets/imgs/2.jpg',  
      precio : '$90.000',    

    },
    {
      title  : 'Bienvenido 3',
      imagen : 'assets/imgs/3.jpg',    
      precio : '$125.000',  

    }
    
  ];

  tarjetas = [
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
];

goToDetail() {
  
  this.navCtrl.push(RealEstateListingPage);
}

// Metodo de popup Menu

togglePopupMenu() {
  return this.openMenu = !this.openMenu;
}

goToCatalogue() {
  this.navCtrl.push(CataloguePage);
}

goToFavorite() {
  this.navCtrl.push(FavoritePage);
}

goToAdvanced() {
  alert('Advanced clicked.');
  this.togglePopupMenu();
}

  constructor(public navCtrl: NavController) {

  }

 

}
