import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddressBookComponent } from '../address-book/address-book';

/**
 * Generated class for the ShippingAddressComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'shipping-address',
  templateUrl: 'shipping-address.html'
})
export class ShippingAddressComponent {

  text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello ShippingAddressComponent Component');
    this.text = 'Hello World';
  }

  openAddressBookComponent() {
    this.navCtrl.push(AddressBookComponent);
  }
}
