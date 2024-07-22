import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NonFundingIncidentReportData } from '../../dto/non-funding-report.interface';
import { MatDialog } from '@angular/material/dialog';
import { InvestigationDialogComponent } from '../investigation-dialog/investigation-dialog.component';
import { NotRecommendedDialogComponent } from '../not-recommended-dialog/not-recommended-dialog.component';

@Component({
  selector: 'app-assessment-non-funding',
  templateUrl: './assessment-non-funding.component.html',
  styleUrls: ['./assessment-non-funding.component.scss']
})
export class AssessmentNonFundingComponent implements OnInit {
  @Input() dataSource: NonFundingIncidentReportData[] = [];

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
  openNotRecommendedDialog(): void {
    const dialogRef = this.dialog.open(NotRecommendedDialogComponent);
    

    dialogRef.afterClosed().subscribe(result => {
      if (result.action === 'submit') {
        console.log('Reason for not recommending:', result.reason);
        // Handle the reason here (e.g., save to the database or perform other actions)
      }
    });
  }
}