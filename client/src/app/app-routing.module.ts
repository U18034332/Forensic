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
    loadChildren: () => import('./pages/login-pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/login-pages/forgot/forgot.module').then( m => m.ForgotPageModule)
    
  },
  {
    path: 'code-verification',
    loadChildren: () => import('./pages/settings/code-verification/code-verification.module').then( m => m.CodeVerificationPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/login-pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },

  {
    path: 'personal-settings',
    loadChildren: () => import('./pages/settings/personal-settings/personal-settings.module').then( m => m.PersonalSettingsPageModule),
    //canActivate: [AuthenticationGuard]
  },
  {
    path: 'ps-storage',
    loadChildren: () => import('./pages/settings/ps-storage/ps-storage.module').then( m => m.PsStoragePageModule),
    //canActivate: [AuthenticationGuard]
  },
  {
    path: 'audit-logs',
    loadChildren: () => import('./pages/settings/audit-logs/audit-logs.module').then( m => m.AuditLogsPageModule),
    //canActivate: [AuthenticationGuard]
  },
  {
    path: 'audit-trail',
    loadChildren: () => import('./pages/audit-trail/audit-trail.module').then( m => m.AuditTrailPageModule),
    //canActivate: [AuthenticationGuard]
  },
  {
    path: 'portal-users',
    loadChildren: () => import('./pages/settings/portal-users/portal-users.module').then( m => m.PortalUsersPageModule),
    //canActivate: [AuthenticationGuard]
  },
  {
    path: 'profiles',
    loadChildren: () => import('./pages/settings/profiles/profiles.module').then( m => m.ProfilesPageModule),
    //canActivate: [AuthenticationGuard]
  },
  {
    path: 'incident-report',
    loadChildren: () => import('./pages/incident-report/incident-report.module').then( m => m.IncidentReportPageModule),
    
    //canActivate: [AuthenticationGuard]
  },
  {
    path: 'case-management',
    loadChildren: () => import('./pages/case-management/case-management.module').then( m => m.CaseManagementPageModule),
    //canActivate: [AuthenticationGuard]
  },
  {
    path: 'grant-case-management',
    loadChildren: () => import('./pages/grant-case-management/grant-case-management.module').then( m => m.GrantCaseManagementPageModule),
    //canActivate: [AuthenticationGuard]
  },
  {
    path: 'allocate-user',
    loadChildren: () => import('./pages/incident-report/allocate-user/allocate-user.module').then( m => m.AllocateUserPageModule)
  },
  {
    path: 'agencies-and-firms',
    loadChildren: () => import('./pages/agencies-and-firms/agencies-and-firms.module').then( m => m.AgenciesAndFirmsPageModule)
  }, 
  {
    path: 'doc-management',
    loadChildren: () => import('./pages/doc-management/doc-management.module').then( m => m.DocManagementPageModule)
  },
  {
    path: 'calender',
    loadChildren: () => import('./pages/calender/calender.module').then( m => m.CalenderPageModule)
  },
  {
    path: 'discuss',
    loadChildren: () => import('./pages/discuss/discuss.module').then( m => m.DiscussPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
