import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrantCaseManagementComponent } from './grant-case-management.component';
import { DocManagementComponent } from '../doc-management/doc-management.component';
import { CaseDetailsGrantCaseManagementComponent } from './case-details-grant-case-management/case-details-grant-case-management.component';
import { GrantCaseManagementTableComponent } from './grant-case-management-table/grant-case-management-table.component';

const routes: Routes = [
  { path: 'grant-case-management', component: GrantCaseManagementComponent },
  { path: 'grant-document-management', component: DocManagementComponent },
  { path: 'grant-case-details', component: CaseDetailsGrantCaseManagementComponent },
  { path: 'grant-case-management-table', component: GrantCaseManagementTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrantCaseManagementRoutingModule { }
