import { Component } from '@angular/core';

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

  constructor() {
    console.log('Hello ShippingAddressComponent Component');
    this.text = 'Hello World';
  }

}
