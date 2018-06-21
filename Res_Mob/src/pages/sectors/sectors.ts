import { IndustriesPage } from './../industries/industries';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Http} from '@angular/http';
/**
 * Generated class for the SectorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sectors',
  templateUrl: 'sectors.html',
})
export class SectorsPage {
Sectors2:Array<any>=[];
CallerObject:Observable<any>;
Sectors:Array<any>=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public httpClient:HttpClient) {

  
    console.log('Constructor: this.Sectors: ', this.Sectors);
   

  
  }


  ionViewWillEnter(){
    
  
    console.log('ionViewWillEnter: this.Sectors: ', this.Sectors);
   
  }
  ionViewDidLoad() {
    this.CallerObject = this.httpClient.get('https://researchwebapi.azurewebsites.net/api/sectors');
    //https://api.github.com/users
    //http://localhost:51683/api/sectors
    this.CallerObject
    .subscribe(data => {
     // this.displaydata(data);
     this.Sectors2 = data;
      console.log('my Sectors: ', data);
      console.log('Constructor(Subscribe) this.Sectors2: ', this.Sectors2);
      
    });
    console.log('ionViewDidLoad: this.Sectors2: ', this.Sectors2);
    
 }


  displaydata(data) {this.Sectors2 = data;}

  itemTapped(event,sector){
    this.navCtrl.push(IndustriesPage,{
      SectorITem:sector
    })//SectorITem the name of the parameter(see IndustriesPage  constructor )
  }
}
/*

*/