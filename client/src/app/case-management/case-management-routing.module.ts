import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseManagementComponent } from './case-management.component';
import { DocManagementComponent } from '../doc-management/doc-management.component';
import { CaseDetailsComponent } from './case-details/case-details.component';
import { CaseManagementTableComponent } from './case-management-table/case-management-table.component';
import { AnnexureADigitalFormComponent } from './annexures/annexure-a-digital-form/annexure-a-digital-form.component';
import { AnnexureBDigitalFormComponent } from './annexures/annexure-b-digital-form/annexure-b-digital-form.component';
import { AnnexureCDigitalFormComponent } from './annexures/annexure-c-digital-form/annexure-c-digital-form.component';
import { AnnexureDDigitalFormComponent } from './annexures/annexure-d-digital-form/annexure-d-digital-form.component';
import { AnnexureEDigitalFormComponent } from './annexures/annexure-e-digital-form/annexure-e-digital-form.component';
import { AnnexureFDigitalFormComponent } from './annexures/annexure-f-digital-form/annexure-f-digital-form.component';


const routes: Routes = [
  { path: 'case-management', component: CaseManagementComponent },
  { path: 'document-management', component: DocManagementComponent },
  {path: 'case-details', component: CaseDetailsComponent },
  {path: 'case-management-table', component: CaseManagementTableComponent },
  {path: 'annexure-a-digital-form', component: AnnexureADigitalFormComponent },
  {path: 'annexure-b-digital-form', component: AnnexureBDigitalFormComponent },
  {path: 'annexure-c-digital-form', component: AnnexureCDigitalFormComponent },
  {path: 'annexure-d-digital-form', component: AnnexureDDigitalFormComponent },
  {path: 'annexure-e-digital-form', component: AnnexureEDigitalFormComponent },
  {path: 'annexure-f-digital-form', component: AnnexureFDigitalFormComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseManagementRoutingModule { }
