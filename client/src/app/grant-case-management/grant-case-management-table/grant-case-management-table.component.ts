import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CaseDetailsGrantCaseManagementComponent } from '../case-details-grant-case-management/case-details-grant-case-management.component';

@Component({
  selector: 'app-grant-case-management-table',
  templateUrl: './grant-case-management-table.component.html',
  styleUrls: ['./grant-case-management-table.component.scss']
})
export class GrantCaseManagementTableComponent implements OnInit {
  isDetailDialogOpen: boolean = false;
  selectedCase: any;
  subFilesExpanded: boolean = false;

  displayedColumns: string[] = ['caseID', 'cases', 'startDate', 'status', 'priority', 'caseType', 'province', 'channel', 'levelDetected', 'teams', 'lastModified', 'action'];
  dataSource: any[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataSource = [
      { caseID: '1', cases: 'Grant Case 1', startDate: '2024-01-01', status: 'Open', priority: 'High', caseType: 'Type A', province: 'Province 1', channel: 'Channel 1', levelDetected: 'Level 1', teams: 'Team 1', lastModified: '2024-01-02' },
      { caseID: '2', cases: 'Grant Case 2', startDate: '2024-02-01', status: 'Closed', priority: 'Low', caseType: 'Type B', province: 'Province 2', channel: 'Channel 2', levelDetected: 'Level 2', teams: 'Team 2', lastModified: '2024-02-02' },
      { caseID: '3', cases: 'Grant Case 3', startDate: '2024-03-01', status: 'In Progress', priority: 'Medium', caseType: 'Type C', province: 'Province 3', channel: 'Channel 3', levelDetected: 'Level 3', teams: 'Team 3', lastModified: '2024-03-02' }
    ];
  }

  openCaseDetails(caseDetails: any) {
    this.selectedCase = caseDetails;
    this.isDetailDialogOpen = true;

    const dialogRef = this.dialog.open(CaseDetailsGrantCaseManagementComponent, {
      width: '30%',
      data: { caseDetails }
    });
  }

  closeCaseDetails() {
    this.isDetailDialogOpen = false;
  }
}
