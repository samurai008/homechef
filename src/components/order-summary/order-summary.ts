import { Component } from '@angular/core';

/**
 * Generated class for the OrderSummaryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'order-summary',
  templateUrl: 'order-summary.html'
})
export class OrderSummaryComponent {

  text: string;

  constructor() {
    console.log('Hello OrderSummaryComponent Component');
    this.text = 'Hello World';
  }

}
