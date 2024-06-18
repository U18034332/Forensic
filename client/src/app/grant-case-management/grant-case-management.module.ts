import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrantCaseManagementRoutingModule } from './grant-case-management-routing.module';
import { GrantCaseManagementComponent } from './grant-case-management.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
    GrantCaseManagementComponent
  ],
  imports: [
    CommonModule,
    GrantCaseManagementRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTableModule
  ]
})
export class GrantCaseManagementModule { }
