import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate: [AuthenticationGuard] 
  },
  {
    path: 'forgot',
<<<<<<< HEAD
    loadChildren: () => import('./pages/forgot/forgot.module').then( m => m.ForgotPageModule)
=======
    loadChildren: () => import('./pages/forgot/forgot.module').then( m => m.ForgotPageModule),
>>>>>>> feature/incidentReport
  },
  {
    path: 'code-verification',
    loadChildren: () => import('./pages/code-verification/code-verification.module').then( m => m.CodeVerificationPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },

  {
    path: 'personal-settings',
<<<<<<< HEAD
    loadChildren: () => import('./pages/personal-settings/personal-settings.module').then( m => m.PersonalSettingsPageModule)
  },
  {
    path: 'ps-storage',
    loadChildren: () => import('./pages/ps-storage/ps-storage.module').then( m => m.PsStoragePageModule)
  },
  {
    path: 'audit-logs',
    loadChildren: () => import('./pages/audit-logs/audit-logs.module').then( m => m.AuditLogsPageModule)
  },
  {
    path: 'portal-users',
    loadChildren: () => import('./pages/portal-users/portal-users.module').then( m => m.PortalUsersPageModule)
  },
  {
    path: 'profiles',
    loadChildren: () => import('./pages/profiles/profiles.module').then( m => m.ProfilesPageModule)
  },
  {
    path: 'incident-report',
    loadChildren: () => import('./pages/incident-report/incident-report.module').then( m => m.IncidentReportPageModule)
  },
  {
    path: 'case-management',
    loadChildren: () => import('./case-management/case-management.module').then( m => m.CaseManagementPageModule)
  },
  {
    path: 'grant-case-management',
    loadChildren: () => import('./pages/grant-case-management/grant-case-management.module').then( m => m.GrantCaseManagementPageModule)
  },
  {
    path: 'doc-management',
    loadChildren: () => import('./pages/doc-management/doc-management.module').then( m => m.DocManagementPageModule)
  },
  {
    path: 'audit-trail',
    loadChildren: () => import('./pages/audit-trail/audit-trail.module').then( m => m.AuditTrailPageModule)
  },
  {
    path: 'discuss',
    loadChildren: () => import('./pages/discuss/discuss.module').then( m => m.DiscussPageModule)
  },
  {
    path: 'calender',
    loadChildren: () => import('./pages/calender/calender.module').then( m => m.CalenderPageModule)
  },
  {
    path: 'agencies-and-firms',
    loadChildren: () => import('./pages/agencies-and-firms/agencies-and-firms.module').then( m => m.AgenciesAndFirmsPageModule)
=======
    loadChildren: () => import('./pages/personal-settings/personal-settings.module').then( m => m.PersonalSettingsPageModule),
    //canActivate: [AuthenticationGuard]
  },
  {
    path: 'ps-storage',
    loadChildren: () => import('./pages/ps-storage/ps-storage.module').then( m => m.PsStoragePageModule),
    //canActivate: [AuthenticationGuard]
  },
  {
    path: 'audit-logs',
    loadChildren: () => import('./pages/audit-logs/audit-logs.module').then( m => m.AuditLogsPageModule),
    //canActivate: [AuthenticationGuard]
  },
  {
    path: 'portal-users',
    loadChildren: () => import('./pages/portal-users/portal-users.module').then( m => m.PortalUsersPageModule),
    //canActivate: [AuthenticationGuard]
  },
  {
    path: 'profiles',
    loadChildren: () => import('./pages/profiles/profiles.module').then( m => m.ProfilesPageModule),
    //canActivate: [AuthenticationGuard]
>>>>>>> feature/incidentReport
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
