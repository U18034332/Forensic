import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CaseManagementPageRoutingModule } from './case-management-routing.module';
import { CaseManagementPage } from './case-management.page';
import { AddCaseModule } from './add-case/add-case.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // Ensure IonicModule is imported here
    CaseManagementPageRoutingModule,
    AddCaseModule,
  ],
  declarations: [CaseManagementPage]
})
export class CaseManagementPageModule {}
