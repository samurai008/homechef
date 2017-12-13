import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule }   from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EnterPage } from '../pages/enter/enter';
import { RegisterPage } from '../pages/register/register';
import { SelectPackagePage } from '../pages/select-package/select-package';
import { CompleteProfilePage } from '../pages/complete-profile/complete-profile';
import { RestaurantPage } from '../pages/restaurant/restaurant';

import { NavBarComponent } from '../components/nav-bar/nav-bar';
import { AddToCartComponent } from '../components/add-to-cart/add-to-cart';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EnterPage,
    RegisterPage,
    SelectPackagePage,
    CompleteProfilePage,
    RestaurantPage,

    NavBarComponent,
    AddToCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    EnterPage,
    RegisterPage,
    SelectPackagePage,
    CompleteProfilePage,
    RestaurantPage,

    NavBarComponent,
    AddToCartComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}