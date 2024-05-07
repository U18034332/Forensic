import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IncidentReportPage } from './incident-report.page';
import { IncidentReportPageRoutingModule } from './incident-report-routing.module';
import { SharedModule } from '../../shared.module';
import { AddReportPageModule } from './/add-report/add-report.module'
import { CommonModule } from '@angular/common';





@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    IncidentReportPageRoutingModule,
    SharedModule,
    AddReportPageModule,
    CommonModule 
  ],
  declarations:[ IncidentReportPage,
                ],})
                
export class IncidentReportPageModule {}
