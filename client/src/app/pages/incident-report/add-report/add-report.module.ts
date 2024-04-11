import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddReportPageRoutingModule } from './add-report-routing.module'; // Adjust the import path as needed
import { AddReportPage } from './add-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // Import IonicModule here without forRoot()
    AddReportPageRoutingModule // Make sure routing module is set up if using
  ],
  declarations: [AddReportPage]
})
export class AddReportPageModule {}