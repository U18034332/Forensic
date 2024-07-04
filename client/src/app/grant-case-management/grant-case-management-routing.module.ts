import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocManagementComponent } from '../doc-management/doc-management.component';
const routes: Routes = [
  { path: 'document-management', component: DocManagementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrantCaseManagementRoutingModule { }
