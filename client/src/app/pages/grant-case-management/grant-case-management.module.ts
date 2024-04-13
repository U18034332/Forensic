import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { GrantCaseManagementPageRoutingModule } from './grant-case-management-routing.module';
import { GrantCaseManagementPage } from './grant-case-management.page';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrantCaseManagementPageRoutingModule,
    SharedModule
  ],
  declarations: [GrantCaseManagementPage]
})
export class GrantCaseManagementPageModule {}
