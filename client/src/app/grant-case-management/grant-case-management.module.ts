import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrantCaseManagementRoutingModule } from './grant-case-management-routing.module';
import { GrantCaseManagementComponent } from './grant-case-management.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { GrantCaseManagementDigitalFormComponent } from './grant-case-management-digital-form/grant-case-management-digital-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatExpansionModule } from '@angular/material/expansion';
import { CaseDetailsGrantCaseManagementComponent } from './case-details-grant-case-management/case-details-grant-case-management.component';
import { GrantCaseManagementTableComponent } from './grant-case-management-table/grant-case-management-table.component';
import { AnnexureADigitalFormComponent } from './annexures-grant/annexure-a-digital-form/annexure-a-digital-form.component';
import { MatCheckbox } from '@angular/material/checkbox';
import { AnnexureBDigitalFormComponent } from './annexures-grant/annexure-b-digital-form/annexure-b-digital-form.component';
import { AnnexureDDigitalFormComponent } from './annexures-grant/annexure-d-digital-form/annexure-d-digital-form.component';
import { AnnexureEDigitalFormComponent } from './annexures-grant/annexure-e-digital-form/annexure-e-digital-form.component';


@NgModule({
  declarations: [
    GrantCaseManagementComponent,
    GrantCaseManagementDigitalFormComponent,
    CaseDetailsGrantCaseManagementComponent,
    GrantCaseManagementTableComponent,
    AnnexureADigitalFormComponent,
    AnnexureBDigitalFormComponent,
    AnnexureDDigitalFormComponent,
    AnnexureEDigitalFormComponent
  ],
  imports: [
    CommonModule,
    GrantCaseManagementRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatSelectModule,
    MatMenuModule,
    OverlayModule,
    CdkMenuModule,
    MatTabsModule,
    MatRadioModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatCheckbox

  ]
})
export class GrantCaseManagementModule { }
