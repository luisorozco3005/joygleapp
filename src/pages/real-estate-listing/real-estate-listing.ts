import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-real-estate-listing',
  templateUrl: 'real-estate-listing.html',
})
export class RealEstateListingPage {

  estateProperty = {
    name: 'Pretty house',
    description: `Rare find in downtown Forest Park.
                   Home is is zoned GB (General Business) and could be 
                   a number of different businesses. Cash closing only...
                   SOLD AS IS WHERE IS WITH NO SELLER DISCLOSURES.`,
    price: '760000',
    image: 'https://www.smallworks.ca/wp-content/uploads/exterior1-1.jpg',
    style: 'Modern Interior',
    size: '33\' Lot',
    features: [
      {
        icon: 'moon',
        title: 'bedrooms',
        value: '4'
      },
      {
        icon: 'leaf',
        title: 'Bathrooms',
        value: '2'
      },
      {
        icon: 'home',
        title: 'Year Built',
        value: '1'
      }
    ]
  };

  constructor(public navCtrl: NavController) { }

}
