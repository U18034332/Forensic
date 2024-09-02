import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; // Correct import for MatNativeDateModule
import { GrantCaseManagementModule } from './grant-case-management/grant-case-management.module';
import { AuditTrailModule } from './audit-trail/audit-trail.module';
import { DiscussModule } from './discuss/discuss.module';
import { CalendarModule } from './calendar/calendar.module';
import { AgenciesAndFirmsModule } from './agencies-and-firms/agencies-and-firms.module';
import { DocManagementModule } from './doc-management/doc-management.module';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatRadioModule,
    MatCheckboxModule,
    DragDropModule,
    MatTableModule,
    MatMenuModule,
    AppRoutingModule,
    CoreModule, // Import CoreModule here
    DashboardModule,
    IncidentReportModule,
    CaseManagementModule,
    GrantCaseManagementModule,
    AuditTrailModule,
    DiscussModule,
    CalendarModule,
    AgenciesAndFirmsModule,
    DocManagementModule,
    FullCalendarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CardModule,
    SidebarModule,
    ButtonModule,
    // Ensure MatNativeDateModule is imported here
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
@NgModule({ declarations: [
        // Components
        AppComponent,
        LoginComponent,
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA], imports: [
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
        DragDropModule,
        BrowserModule,
        FullCalendarModule], providers: [
        provideAnimationsAsync(),
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
