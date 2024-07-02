import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentReportRoutingModule } from './incident-report-routing.module';
import { IncidentReportComponent } from './incident-report.component';
import { AddReportPanelComponent } from './add-report-panel/add-report-panel.component';
import { FundingRelatedFormComponent } from './funding-related-form/funding-related-form.component';
import { NonFundingRelatedFormComponent } from './non-funding-related-form/non-funding-related-form.component';
import { NotRecommendedDialogComponent } from './not-recommended-dialog/not-recommended-dialog.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatSortModule } from '@angular/material/sort'; 

@NgModule({
  declarations: [
    IncidentReportComponent,
    AddReportPanelComponent,
    FundingRelatedFormComponent,
    NonFundingRelatedFormComponent,
    NotRecommendedDialogComponent
  ],
  imports: [
    CommonModule,
    IncidentReportRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    CoreModule,
    MatSelectModule,
    OverlayModule,
    MatMenuModule,
    CdkMenuModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule, 
    MatPaginatorModule,
    MatSortModule,
    MatRadioModule
  ],
})
export class IncidentReportModule { }