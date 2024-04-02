import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocManagementPageRoutingModule } from './doc-management-routing.module';

import { DocManagementPage } from './doc-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocManagementPageRoutingModule
  ],
  declarations: [DocManagementPage]
})
export class DocManagementPageModule {}
