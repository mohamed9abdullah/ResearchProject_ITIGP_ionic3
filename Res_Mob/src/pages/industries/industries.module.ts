import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndustriesPage } from './industries';

@NgModule({
  declarations: [
    IndustriesPage,
  ],
  imports: [
    IonicPageModule.forChild(IndustriesPage),
  ],
})
export class IndustriesPageModule {}
