import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgenciesAndFirmsPage } from './agencies-and-firms.page';

const routes: Routes = [
  {
    path: '',
    component: AgenciesAndFirmsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgenciesAndFirmsPageRoutingModule {}
