import { Component } from '@angular/core';

@Component({
  selector: 'app-audit-logs-settings',
  templateUrl: './audit-logs-settings.component.html',
  styleUrls: ['./audit-logs-settings.component.scss']
})
export class AuditLogsSettingsComponent {
  displayedColumns: string[] = [
    'userId', 
    'username', 
    'documentId', 
    'action', 
    'docType', 
    'recipient', 
    'beforeChange', 
    'afterChange'
  ];

  auditLogs = [
    { userId: '098456', username: 'User 1', documentId: 'PJ-8907', action: 'Referred', docType: 'Final Report', recipient: 'SAPS', beforeChange: 'none', afterChange: 'none' },
    { userId: '890643', username: 'User 7', documentId: 'IR-NF908', action: 'Added', docType: 'Incident Report', recipient: 'Funded Related', beforeChange: 'none', afterChange: 'none' },
    { userId: '44567', username: 'User 50', documentId: 'IR-F90', action: 'Allocated', docType: 'Incident Report', recipient: 'User 6', beforeChange: 'none', afterChange: 'none' },
    { userId: '35622', username: 'User 3', documentId: 'IR-F860', action: 'Allocated', docType: 'Incident Report', recipient: 'To Be Allocated', beforeChange: 'Location: Assessment', afterChange: 'Location: Assessment' },
    { userId: '45673', username: 'User 6', documentId: 'FR-CF860', action: 'Allocated', docType: 'Case', recipient: 'Funding Related', beforeChange: 'Location: Assessment', afterChange: 'Location: Assessment' },
    { userId: '21566', username: 'User 13', documentId: 'NF-CF860', action: 'Referred', docType: 'Case', recipient: 'Non-Funded', beforeChange: 'Location: Assessment', afterChange: 'Location: Assessment' },
    { userId: '90874', username: 'User 40', documentId: 'IR-F860', action: 'Updated', docType: 'Incident Report', recipient: 'none', beforeChange: 'Status: In Progress', afterChange: 'Status: Closed' }
  ];

  dataSource = this.auditLogs;
}
