import { Component, Input, OnInit } from '@angular/core';
import { AssessmentFundedReport, FundingIncidentReportData } from '../../dto/funding-related.interface';
import { MatDialog } from '@angular/material/dialog';
import { FundingRelatedFormComponent } from '../funding-related-form/funding-related-form.component';
import { InvestigationDialogComponent } from '../investigation-dialog/investigation-dialog.component';
import { NotRecommendedDialogComponent } from '../not-recommended-dialog/not-recommended-dialog.component';
@Component({
  selector: 'app-assessment-funding',
  templateUrl: './assessment-funding.component.html',
  styleUrls: ['./assessment-funding.component.scss']
})
export class AssessmentFundingComponent {
  @Input() dataSource: FundingIncidentReportData[] = [];

  displayedColumns: string[] = [
    'reportID', 'startDate', 'dateReported', 'status', 'priority', 'view',
    'actions'
  ];
  nonFundedAssessmentReports: AssessmentFundedReport[][] = [];

  constructor(
    public dialog: MatDialog,
  ) {}


  openFundingRelatedReportDialog(element: any): void {
    this.dialog.open(FundingRelatedFormComponent, {
      width: '30%',
      data: element
    });
    console.log(element);
  }

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
