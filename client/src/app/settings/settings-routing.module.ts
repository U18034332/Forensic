import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { StorageSettingsComponent } from './storage-settings/storage-settings.component';
import { ProfilesSettingsComponent } from './profiles-settings/profiles-settings.component';
import { PortalUsersSettingsComponent } from './portal-users-settings/portal-users-settings.component';
import { AuditLogsSettingsComponent } from './audit-logs-settings/audit-logs-settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'Settings', pathMatch: 'full' },
  { path: 'Settings', component: SettingsComponent },
  { path: 'Storage', component: StorageSettingsComponent },
  { path: 'Profiles', component: ProfilesSettingsComponent },
  { path: 'Portal-Users', component: PortalUsersSettingsComponent },
  { path: 'Audit-Logs', component: AuditLogsSettingsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
