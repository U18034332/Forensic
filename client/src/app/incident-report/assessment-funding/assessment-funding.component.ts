import { Component, Input, OnInit } from '@angular/core';
import { AssessmentFundedReport, FundingIncidentReportData } from '../../dto/funding-related.interface';
import { MatDialog } from '@angular/material/dialog';
import { FundingRelatedFormComponent } from '../funding-related-form/funding-related-form.component';
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

  }
 
}