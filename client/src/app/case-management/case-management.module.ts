import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseManagementRoutingModule } from './case-management-routing.module';
import { CaseManagementComponent } from './case-management.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CoreModule } from '../core/core.module';
@NgModule({
  declarations: [
    CaseManagementComponent
  ],
  imports: [
    CommonModule,
    CaseManagementRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    CoreModule
  ]
})
export class CaseManagementModule { }
