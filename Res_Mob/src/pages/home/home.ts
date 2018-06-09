import { SectorsPage } from './../sectors/sectors';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController , AlertController } from 'ionic-angular';

//import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

FullName:string;
Password:string;
  constructor(public navCtrl: NavController,public alertCtrl:AlertController) { 
}
  ionViewDidLoad() {
  // Put here the code you want to execute
   

  }
  onLoginClick(){
    if(this.FullName=="Ahmed" && this.Password=="123")
       this.navCtrl.push(SectorsPage);
    
    else{
      
      let alert=this.alertCtrl.create({
                                        
                title:"Login Failed",
                buttons:["OK"],
                subTitle:"This user doesn'y exist please try again",
                message:"Name:Ahmed,,,Password:123"
      });
      alert.present();

       }
  }

}
