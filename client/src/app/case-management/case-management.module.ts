import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseManagementRoutingModule } from './case-management-routing.module';
import { CaseManagementComponent } from './case-management.component';
import { CaseManagementDigitalFormComponent } from "./case-management-digital-form/case-management-digital-form.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CoreModule } from '../core/core.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
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
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CaseDetailsComponent } from './case-details/case-details.component';
import { CaseManagementTableComponent } from './case-management-table/case-management-table.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { AnnexureADigitalFormComponent } from '../case-management/annexures/annexure-a-digital-form/annexure-a-digital-form.component';

@NgModule({
  declarations: [
    CaseManagementComponent,
    CaseManagementDigitalFormComponent,
    CaseDetailsComponent,
    CaseManagementTableComponent,
    AnnexureADigitalFormComponent
  ],
  imports: [
    CommonModule,
    CaseManagementRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    CoreModule,
    MatDialogModule,
    MatButtonModule,
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
    MatCheckboxModule,
    DragDropModule
  ]
})
export class CaseManagementModule {}
