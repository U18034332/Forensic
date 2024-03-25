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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
