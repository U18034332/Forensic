import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsStoragePage } from './ps-storage.page';

const routes: Routes = [
  {
    path: '',
    component: PsStoragePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PsStoragePageRoutingModule {}
