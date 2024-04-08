import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/forgot/forgot.module').then( m => m.ForgotPageModule)
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
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
