import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatMenuModule } from '@angular/material/menu';
//new layout starts here 
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { IncidentReportModule } from './incident-report/incident-report.module';
import { CaseManagementModule } from './case-management/case-management.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AuditTrailModule } from './audit-trail/audit-trail.module';
import { DiscussModule } from './discuss/discuss.module';
import { CalendarModule } from './calendar/calendar.module';
import { AgenciesAndFirmsModule } from './agencies-and-firms/agencies-and-firms.module';
import { CommonModule } from '@angular/common';
import { DocManagementModule } from './doc-management/doc-management.module';
import { GrantCaseManagementModule } from './grant-case-management/grant-case-management.module';
import { MatTableModule } from '@angular/material/table';
import { AnnexureADigitalFormComponent } from './case-management/annexures/annexure-a-digital-form/annexure-a-digital-form.component'; // Corrected import path

@NgModule({
  declarations: [
    // Components
    AppComponent,
    LoginComponent,
    
  ],
  imports: [
    // Modules
    AppRoutingModule,
    CommonModule,
    //new layout starts here
    MatMenuModule,
    DashboardModule,
    IncidentReportModule,
    CaseManagementModule,
    GrantCaseManagementModule,
    AuditTrailModule,
    DiscussModule,
    CalendarModule,
    AgenciesAndFirmsModule,
    DocManagementModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule, 
    MatToolbarModule,
    MatButtonModule,
    MatCard,
    MatCardModule,
    MatRadioModule,
    CoreModule,
    MatDialogModule,
    MatTableModule,
    MatCheckboxModule,
    DragDropModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
