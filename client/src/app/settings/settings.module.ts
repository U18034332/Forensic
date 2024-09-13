import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { StorageSettingsComponent } from './storage-settings/storage-settings.component';
import { ProfilesSettingsComponent } from './profiles-settings/profiles-settings.component';
import { PortalUsersSettingsComponent } from './portal-users-settings/portal-users-settings.component';
import { AuditLogsSettingsComponent } from './audit-logs-settings/audit-logs-settings.component';

import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list'; 
import { MatDividerModule } from '@angular/material/divider'; 
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    SettingsComponent,
    StorageSettingsComponent,
    ProfilesSettingsComponent,
    PortalUsersSettingsComponent,
    AuditLogsSettingsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SettingsRoutingModule,
    MatCardModule,             
    MatSlideToggleModule,      
    MatFormFieldModule,        
    MatSelectModule,           
    MatOptionModule,           
    MatIconModule,             
    MatButtonModule,
    MatTableModule,
    MatMenuModule,            
    MatSidenavModule,
    MatExpansionModule,        
    MatListModule,            
    MatDividerModule,
    MatCheckboxModule          
  ],
  exports: [
    SettingsComponent,
    StorageSettingsComponent,
    ProfilesSettingsComponent,
    PortalUsersSettingsComponent,
    AuditLogsSettingsComponent
  ]
})
export class SettingsModule { }
