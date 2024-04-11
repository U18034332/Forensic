import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IncidentReportPage } from './incident-report.page';
import { IncidentReportPageRoutingModule } from './incident-report-routing.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncidentReportPageRoutingModule,
  ],
  declarations:[ IncidentReportPage,
                ],})
                
export class IncidentReportPageModule {}
