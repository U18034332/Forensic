import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortalUsersPage } from './portal-users.page';

const routes: Routes = [
  {
    path: '',
    component: PortalUsersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalUsersPageRoutingModule {}
