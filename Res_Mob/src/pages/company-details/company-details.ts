import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Platform } from 'ionic-angular';
import{File} from '@ionic-native/file';
import{FileTransfer} from '@ionic-native/file-transfer';
import{DocumentViewer,DocumentViewerOptions} from '@ionic-native/document-viewer';

/**
 * Generated class for the CompanyDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company-details',
  templateUrl: 'company-details.html',
})
export class CompanyDetailsPage {
  CompanyITem={};
  CallerObject:Observable<any>;
  Reports:Array<any>=[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private document:DocumentViewer,
  private file:File,
  private transfer:FileTransfer,
  private platform:Platform,
  public httpClient:HttpClient
  
  ) {
    this.CompanyITem=navParams.get("CompanyITem");

  }

  ionViewDidLoad() {
    //debugger;
    this.CallerObject=this.httpClient.get("https://researchwebapi.azurewebsites.net/api/reports/"+this.CompanyITem["Comp_id"]);
    this.CallerObject
    .subscribe(data => {
      console.log('my Reports: ', data);
      this.Reports = data;
    });
  
  }

  OpenPDF($event,MyFile){


    debugger;
    const options:DocumentViewerOptions={
        title:MyFile["Rep_Name"]
    }
  this.document.viewDocument(MyFile["Rep_Location"],"application/pdf",options)
  }


  DownloadPDF($event,MyFile){

          debugger;

          //Get Local path to download file on it
          let path=null;
          if(this.platform.is('ios')){
            path=this.file.documentsDirectory;
          }
          else if(this.platform.is('android')){
          path=this.file.dataDirectory;
          }else{
          path=this.file.dataDirectory;
            
          }

          //Download File
          const transferObj=this.transfer.create();
          const url =MyFile["Rep_Location"];
          transferObj.download(url, path + MyFile["Rep_Name"]).then((entry) => {
            let localURL=entry.toURL();
            console.log('download complete: ' + localURL);
            
            //Display the file
            const options:DocumentViewerOptions={
              title:MyFile["Rep_Name"]
          }
            this.document.viewDocument(localURL,'application/pdf',options);
        }, (error) => {
          // handle error
        }).catch(reason=>{console.log("reason is:"+reason)});

        debugger;
        const options2:DocumentViewerOptions={
          title:MyFile["Rep_Name"]
      }
      this.document.viewDocument(MyFile["Rep_Location"],"application/pdf",options2)

  }


}
