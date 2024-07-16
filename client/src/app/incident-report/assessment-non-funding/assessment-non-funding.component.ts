import { Component, Input } from '@angular/core';
import { AssessmentNonFundedReport, NonFundingIncidentReportData } from '../../dto/non-funding-report.interface';
import { MatDialog } from '@angular/material/dialog';
import { NonFundingRelatedFormComponent } from '../non-funding-related-form/non-funding-related-form.component';
import { InvestigationDialogComponent } from '../investigation-dialog/investigation-dialog.component';
import { NotRecommendedDialogComponent } from '../not-recommended-dialog/not-recommended-dialog.component';
@Component({
  selector: 'app-assessment-non-funding',
  templateUrl: './assessment-non-funding.component.html',
  styleUrls: ['./assessment-non-funding.component.scss']
})
export class AssessmentNonFundingComponent {
  @Input() dataSource: NonFundingIncidentReportData[] = [];

  displayedColumns: string[] = [
    'reportID', 'startDate', 'dateReported', 'status', 'priority', 'view',
    'actions'
  ];
  nonFundedAssessmentReports: AssessmentNonFundedReport[][] = [];

  constructor(
    public dialog: MatDialog,
  ) {}


  openNonFundingRelatedReportDialog(element: any): void {
    this.dialog.open(NonFundingRelatedFormComponent, {
      width: '30%',
      data: element
    });

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