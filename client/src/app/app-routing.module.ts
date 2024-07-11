import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncidentReportComponent } from './incident-report/incident-report.component';
import { CaseManagementComponent } from './case-management/case-management.component';
import { GrantCaseManagementComponent } from './grant-case-management/grant-case-management.component';
import { DocManagementComponent } from './doc-management/doc-management.component';
import { AuditTrailComponent } from './audit-trail/audit-trail.component';
import { DiscussComponent } from './discuss/discuss.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AgenciesAndFirmsComponent } from './agencies-and-firms/agencies-and-firms.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { CoreModule } from './core/core.module';
import { ForbiddenComponent } from './forbidden/forbidden.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login by default
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'incident-report', component: IncidentReportComponent },
  { path: 'case-management', component: CaseManagementComponent },
  { path: 'grant-case-management', component: GrantCaseManagementComponent },
  { path: 'doc-management', component: DocManagementComponent },
  { path: 'audit-trail', component: AuditTrailComponent },
  { path: 'discuss', component: DiscussComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'agencies-and-firms', component: AgenciesAndFirmsComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent }, // Added Forgot Password route
  { path: '403', component: ForbiddenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CoreModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export { routes };
