import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

export interface CaseData {
  caseID: string;
  cases: string;
  startDate: string;
  status: string;
  priority: string;
  caseType: string;
  province: string;
  channel: string;
  levelDetected: string;
  teams: string;
  lastModified: string;
}

const CASE_DATA: CaseData[] = [
  { caseID: '123', cases: 'Fraud', startDate: '2024-08-01', status: 'Open', priority: 'High', caseType: 'Financial', province: 'Gauteng', channel: 'Email', levelDetected: 'High', teams: 'Team A', lastModified: '2024-08-07' },
  { caseID: '456', cases: 'Theft', startDate: '2024-07-15', status: 'Closed', priority: 'Medium', caseType: 'Criminal', province: 'Western Cape', channel: 'Phone', levelDetected: 'Low', teams: 'Team B', lastModified: '2024-07-20' },
  // Add more case data as needed
];

@Component({
  selector: 'app-sedupe-and-metja-dialog',
  templateUrl: './sedupe-and-metja-dialog.component.html',
  styleUrls: ['./sedupe-and-metja-dialog.component.scss']
})
export class SedupeAndMetjaDialogComponent {
  displayedColumns: string[] = ['caseID', 'cases', 'startDate', 'status', 'priority', 'caseType', 'province', 'channel', 'levelDetected', 'teams', 'lastModified', 'caseEndDate'];
  dataSource = CASE_DATA;

  constructor(private dialogRef: MatDialogRef<SedupeAndMetjaDialogComponent>) {}

  openCaseDetails(caseData: CaseData) {
    console.log('Opening case details for:', caseData);
  }
}
