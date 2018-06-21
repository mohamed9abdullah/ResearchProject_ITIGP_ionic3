import { CompanyDetailsPage } from './../company-details/company-details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CompaniesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-companies',
  templateUrl: 'companies.html',
})
export class CompaniesPage {
  Industry={};
  CallerObject:Observable<any>;
  Companies:Array<any>=[];
  
  
    constructor(public navCtrl: NavController, public navParams: NavParams , public httpClient:HttpClient) {
      //debugger;
      this.Industry=this.navParams.get("IndustryITem");
    }
  
  ionViewDidLoad() {
    //debugger;
    this.CallerObject=this.httpClient.get("https://researchwebapi.azurewebsites.net/Industry_Specifec_Companies?id="+this.Industry["Ind_id"]);
    this.CallerObject
    .subscribe(data => {
      console.log('my companes: ', data);
      this.Companies = data;
    });
  
  }

  
  itemTapped(event,company){
    //debugger;
    this.navCtrl.push(CompanyDetailsPage,{
      CompanyITem:company
    })
  }
}
