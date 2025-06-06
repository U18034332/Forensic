import { Component, Input } from '@angular/core';
import { AssessmentFundedReport, FundingIncidentReportData } from '../../dto/funding-related.interface';
import { MatDialog } from '@angular/material/dialog';
import { FundingRelatedFormComponent } from '../funding-related-form/funding-related-form.component';
import { InvestigationDialogComponent } from '../investigation-dialog/investigation-dialog.component';
import { NotRecommendedDialogComponent } from '../not-recommended-dialog/not-recommended-dialog.component';
import { IncidentReportEvaluation } from '../../models/incident-report-evaluation';
import { FundingRelatedService } from '../../services/funding-related.service';
import { IncidentReportComponent } from '../incident-report.component';
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
    private incidentAssessmentService: FundingRelatedService,
    private incidentReportComponent: IncidentReportComponent
  ) {}


  openFundingRelatedReportDialog(element: any): void {
    this.dialog.open(FundingRelatedFormComponent, {
      width: '30%',
      data: element
    });
    console.log(element);
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
        this.incidentAssessmentService.assessIncidentReport(evaluation).subscribe((res)=> {
          console.log('Successfully evaluated the fundinf related incident:',res);
          this.incidentReportComponent.reloadReports()
        }, err => {
          console.log('Error in the funding report evaluateion:',err);
          
        });
      }
      console.log('Could not capture the allocated user funding related');
    });
  }
  
  openNotRecommendedDialog(element: any): void {
    const dialogRef = this.dialog.open(NotRecommendedDialogComponent);
    console.log(element);
    dialogRef.afterClosed().subscribe(result => {
      if (result.action === 'submit') {
        const evaluation: IncidentReportEvaluation = {
          reportNumber: element.reportNumber,
          allocateTo: '',
          declineReason: result.reason
        };
        this.incidentAssessmentService.assessIncidentReport(evaluation)
          .subscribe((res)=>{
            this.incidentReportComponent.reloadReports()
            console.log(res);
          }, (err)=>{
            console.log('Error assessing incident report:', err);
          })
        console.log('Reason for not recommending:', result.reason);
      }
    });
  }
 
}
