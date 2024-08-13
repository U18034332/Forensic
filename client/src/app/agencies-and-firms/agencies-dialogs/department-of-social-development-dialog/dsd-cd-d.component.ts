import { MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DSDDialogCaseDetailsDialogComponent } from './dsd-cd-d/dsd-dialog-case-details-dialog.component';

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
  selector: 'app-department-of-social-development-dialog',
  templateUrl: './dsd-cd-d.component.html',
  styleUrl: './dsd-cd-d.component.scss'
})
export class DepartmentOfSocialDevelopmentDialogComponent {
  isDetailDialogOpen: boolean = false;
  selectedCase: any;
  subFilesExpanded: boolean = false;

  displayedColumns: string[] = ['caseID', 'cases', 'startDate', 'status', 'priority', 'caseType', 'province', 'channel', 'levelDetected', 'teams', 'lastModified', 'caseEndDate'];
  dataSource: any[] = CASE_DATA;

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<DepartmentOfSocialDevelopmentDialogComponent>) {}

  openCaseDetails(caseDetails: any) {
    this.selectedCase = caseDetails;
    this.isDetailDialogOpen = true;

    const dialogRef = this.dialog.open(DSDDialogCaseDetailsDialogComponent, {
      data: { caseDetails }
    });

    // Handle dialog close if needed
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed', result);
    });
  }

  closeCaseDetails() {
    this.isDetailDialogOpen = false;
  }
}
