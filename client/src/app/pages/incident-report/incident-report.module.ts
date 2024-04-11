import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IncidentReportPage } from './incident-report.page';
import { IncidentReportPageRoutingModule } from './incident-report-routing.module';
import { AddReportPageModule } from './add-report/add-report.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncidentReportPageRoutingModule,
    AddReportPageModule,
  ],
  declarations:[ IncidentReportPage,
                ],})
                
export class IncidentReportPageModule {}
