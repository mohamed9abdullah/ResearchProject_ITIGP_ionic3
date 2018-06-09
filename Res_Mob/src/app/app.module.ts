import { CompanyDetailsPage } from './../pages/company-details/company-details';
import { CompaniesPage } from './../pages/companies/companies';
import { SectorsPage } from './../pages/sectors/sectors';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HTTP} from '@ionic-native/http';
import { IndustriesPage } from '../pages/industries/industries';

import{File} from '@ionic-native/file';
import{FileTransfer} from '@ionic-native/file-transfer';
import{DocumentViewer} from '@ionic-native/document-viewer';

@NgModule({
  declarations: [
    MyApp,LoginPage,SectorsPage,IndustriesPage,CompaniesPage,CompanyDetailsPage,
    HomePage
  ],
  imports: [
    BrowserModule,HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,LoginPage,SectorsPage,IndustriesPage,CompaniesPage,CompanyDetailsPage,
    HomePage
  ],
  providers: [
    StatusBar,HTTP,DocumentViewer,FileTransfer,File,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
