import { Component, Input } from '@angular/core';
import { AssessmentNonFundedReport, NonFundingIncidentReportData } from '../../dto/non-funding-report.interface';
import { MatDialog } from '@angular/material/dialog';
import { NonFundingRelatedFormComponent } from '../non-funding-related-form/non-funding-related-form.component';
import { InvestigationDialogComponent } from '../investigation-dialog/investigation-dialog.component';
import { NotRecommendedDialogComponent } from '../not-recommended-dialog/not-recommended-dialog.component';
import { NonFundedIncidentReportService } from '../../services/non-funded-incident-report.service';
import { IncidentReportEvaluation } from '../../models/incident-report-evaluation';
import { IncidentReportComponent } from '../incident-report.component';

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
    private incidentAssessmentService: NonFundedIncidentReportService,
    private incidentReportComponent: IncidentReportComponent,
  ) {}

  openNonFundingRelatedReportDialog(element: any): void {
    this.dialog.open(NonFundingRelatedFormComponent, {
      width: '30%',
      data: element
    });
  }

  openInvestigationDialog(element: any): void {
    const dialogRef = this.dialog.open(InvestigationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result.allocatedUser) {
        const evaluation: IncidentReportEvaluation = {
          reportNumber: element.reportNumber,
          allocateTo: result.allocatedUser.email,
          declineReason: ''
        };
        this.incidentAssessmentService.assessIncidentReport(evaluation).subscribe(response => {
          console.log('Incident report assessed:', response);
          this.incidentReportComponent.reloadReports();
        }, error => {
          console.error('Error assessing incident report:', error);
        });
      }
    });
  }

  openNotRecommendedDialog(element: any): void {
    const dialogRef = this.dialog.open(NotRecommendedDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result.action === 'submit') {
        const evaluation: IncidentReportEvaluation = {
          reportNumber: element.reportNumber,
          allocateTo: '',
          declineReason: result.reason
        };
        this.incidentAssessmentService.assessIncidentReport(evaluation).subscribe(response => {
          console.log('Incident report assessed:', response);
          this.incidentReportComponent.reloadReports();
        }, error => {
          console.error('Error assessing incident report:', error);
        });
      }
    });
  }
}
