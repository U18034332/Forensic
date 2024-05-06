import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddReportPageRoutingModule } from './add-report-routing.module'; // Adjust the import path as needed
import { AddReportPage } from './add-report.page';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // Import IonicModule here without forRoot()
    AddReportPageRoutingModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AddReportPageRoutingModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatFormFieldModule,
   BrowserAnimationsModule// Make sure routing module is set up if using
  ],
  declarations: [AddReportPage]
})
export class AddReportPageModule {}