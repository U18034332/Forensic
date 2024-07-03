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
import { GrantCaseManagementModule } from './grant-case-management/grant-case-management.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import { AuditTrailModule } from './audit-trail/audit-trail.module';
import { DiscussModule } from './discuss/discuss.module';
import { CalendarModule } from './calendar/calendar.module';
import { AgenciesAndFirmsModule } from './agencies-and-firms/agencies-and-firms.module';
import { CommonModule } from '@angular/common';
import { DocManagementModule } from './doc-management/doc-management.module';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    LoginComponent
    
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

    BrowserAnimationsModule,
    FormsModule,
    MatIconModule, // Import Angular Material modules here
    MatToolbarModule,
    MatButtonModule,
    MatCard,
    MatCardModule,
    CoreModule,
    
    

    
  ],
  
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
