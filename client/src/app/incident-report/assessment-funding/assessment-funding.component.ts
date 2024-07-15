import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FundingIncidentReportData } from '../../dto/funding-related.interface';
import { MatDialog } from '@angular/material/dialog';
import { InvestigationDialogComponent } from '../investigation-dialog/investigation-dialog.component';

@Component({
  selector: 'app-assessment-funding',
  templateUrl: './assessment-funding.component.html',
  styleUrls: ['./assessment-funding.component.scss']
})
export class AssessmentFundingComponent implements OnInit {
  @Input() dataSource: FundingIncidentReportData[] = [];

  displayedColumns: string[] = [
    'reportID', 'startDate', 'dateReported', 'status', 'priority', 'view',
    'actions'
  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openInvestigationDialog(): void {
    const dialogRef = this.dialog.open(InvestigationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed with result:', result);
      // Handle the result here (e.g., navigate to a specific page or perform an action based on the selection)
    });
  }
}
