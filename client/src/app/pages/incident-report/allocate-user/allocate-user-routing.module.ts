import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllocateUserPage } from './allocate-user.page';

const routes: Routes = [
  {
    path: '',
    component: AllocateUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllocateUserPageRoutingModule {}
