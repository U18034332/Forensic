import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  notifications = [
    { name: 'Assigned' },
    { name: 'Updated' },
    { name: 'Completed / Reopened' },
    { name: 'Commented On' },
    { name: 'Predecessor task upon completion' },
    { name: 'Cases I Follow are updated or their predecessors are complete' }
  ];
}
