import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavBarComponent } from '../../components/nav-bar/nav-bar';
import { Http } from '@angular/http';
import { OrderDetailPage } from '../order-detail/order-detail';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  title: string = "Make Payment";
  paymentMethod;
  constructor(public navCtrl: NavController, public navParams: NavParams
  , public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  getPaymentMethod() {
    console.log(`${this.paymentMethod}`);
    let uri: string = "./assets/order-mock-data.json";
    let data;
    this.http.get(uri)
      .subscribe(
        (data) => data = data.json(),
        error => console.log(error),
        () => {
          console.log(`subscription to OrderList observable finished`);
          console.log(`${data}`);
          // this.navCtrl.push(OrderDetailPage, data);
        }
      );
  }

}
