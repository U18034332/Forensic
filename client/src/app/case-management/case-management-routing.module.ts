import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseManagementComponent } from './case-management.component';
import { DocManagementComponent } from '../doc-management/doc-management.component';
import { CaseDetailsComponent } from './case-details/case-details.component';
import { CaseManagementTableComponent } from './case-management-table/case-management-table.component';

const routes: Routes = [
  { path: 'case-management', component: CaseManagementComponent },
  { path: 'document-management', component: DocManagementComponent },
  {path: 'case-details', component: CaseDetailsComponent },
  {path: 'case-management-table', component: CaseManagementTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseManagementRoutingModule { }
