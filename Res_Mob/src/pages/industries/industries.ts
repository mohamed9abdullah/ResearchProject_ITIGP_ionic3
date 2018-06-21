import { CompaniesPage } from './../companies/companies';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the IndustriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-industries',
  templateUrl: 'industries.html',
})
export class IndustriesPage {
Sector={};
CallerObject:Observable<any>;
Industries:Array<any>=[];


  constructor(public navCtrl: NavController, public navParams: NavParams , public httpClient:HttpClient) {
    this.Sector=this.navParams.get("SectorITem");
    
    this.CallerObject=this.httpClient.get("https://researchwebapi.azurewebsites.net/SectorIndustries?id="+this.Sector["Sec_id"]);
    this.CallerObject
    .subscribe(data => {
      console.log('my industries: ', data);
      
     // this.displaydata(data);
     //return the industries that has specifiec sector
     console.log(' this.Industries:(Before) '+this.Industries);
      
     this.Industries = data;
     /*this.Industries=this.Industries.map((val)=>{

      if(val["Sec_Name"]==this.Sector["Sec_Name"])
        return val;
      });*/

      console.log('my Industries: '+ data);
     console.log(' this.Industries1:(After) '+this.Industries);
     
     
      
    });
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad IndustriesPage');
  }
  itemTapped(event,industry){
     //debugger;

      this.navCtrl.push(CompaniesPage,{
        IndustryITem:industry
      })//IndustryITem the name of the parameter(see CompaniesPage  constructor )
    }
}
/*

arr2=arr.map((val)=>{
if(val["Sec_Name"]=="FE")
  return val;
})
*/