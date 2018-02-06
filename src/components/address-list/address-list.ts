import { Input, Component, OnInit } from '@angular/core';

/**
 * Generated class for the AddressListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'address-list',
  templateUrl: 'address-list.html'
})
export class AddressListComponent implements OnInit {

  @Input() addressList;
  @Input() hideList;
  defaultShippingAddress;

  constructor() {
    console.log('Hello AddressListComponent Component');
  }

  ngOnInit() {
    console.log(this.addressList)
  }

}
