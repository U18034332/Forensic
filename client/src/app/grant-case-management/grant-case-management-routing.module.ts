import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrantCaseManagementPage } from './grant-case-management.page';

const routes: Routes = [
  {
    path: '',
    component: GrantCaseManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrantCaseManagementPageRoutingModule {}
