import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseManagementComponent } from './case-management.component';
import { DocManagementComponent } from '../doc-management/doc-management.component';

const routes: Routes = [
  { path: 'case-management', component: CaseManagementComponent },
  { path: 'document-management', component: DocManagementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseManagementRoutingModule { }
