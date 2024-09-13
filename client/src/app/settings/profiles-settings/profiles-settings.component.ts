import { Component } from '@angular/core';

@Component({
  selector: 'app-profiles-settings',
  templateUrl: './profiles-settings.component.html',
  styleUrls: ['./profiles-settings.component.scss']
})
export class ProfilesSettingsComponent {

  userTypes = [
    { name: 'User', icon: 'person', description: 'General User', contact: '123-456-7890' },
    { name: 'Manager', icon: 'supervisor_account', description: 'System Manager', contact: '098-765-4321' },
    { name: 'Commissioner', icon: 'gavel', description: 'System Commissioner', contact: '112-233-4455' },
    { name: 'Admin', icon: 'admin_panel_settings', description: 'System Administrator', contact: '223-344-5566' },
    { name: 'CAE', icon: 'work', description: 'Chief Audit Executive', contact: '334-455-6677' },
    { name: 'BARC', icon: 'assessment', description: 'Board Audit and Risk Committee', contact: '445-566-7788' },
    { name: 'ACFE', icon: 'security', description: 'Association of Certified Fraud Examiners', contact: '556-677-8899' },
  ];

}
