import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentReportComponent } from './incident-report.component';
import { AddReportComponent } from './add-report/add-report.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentReportRoutingModule { }
