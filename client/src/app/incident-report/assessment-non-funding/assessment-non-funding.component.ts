import { Component, Input } from '@angular/core';
import { AssessmentNonFundedReport, NonFundingIncidentReportData } from '../../dto/non-funding-report.interface';
import { MatDialog } from '@angular/material/dialog';
import { NonFundingRelatedFormComponent } from '../non-funding-related-form/non-funding-related-form.component';
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

  }
}