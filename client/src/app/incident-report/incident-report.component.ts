import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FundingRelatedFormComponent } from './funding-related-form/funding-related-form.component';
import { NonFundingRelatedFormComponent } from './non-funding-related-form/non-funding-related-form.component';
import { AddReportPanelComponent } from './add-report-panel/add-report-panel.component';
import { IncidentReportService } from '../services/incident-report.service';
import { FundingIncidentReportData } from '../dto/funding-related.interface';
import { NonFundingIncidentReportData } from '../dto/non-funding-report.interface';
import { AssessmentFundedReport } from '../dto/funding-related.interface';
import { AssessmentNonFundedReport } from '../dto/non-funding-report.interface';


@Component({
  selector: 'app-incident-report',
  templateUrl: './incident-report.component.html',
  styleUrls: ['./incident-report.component.scss']
})
export class IncidentReportComponent implements OnInit {
fundedAssessmentReports: AssessmentFundedReport[][] = [];
 nonFundedAssessmentReports: AssessmentNonFundedReport[][] = [];


  constructor(
    public dialog: MatDialog,
    private incidentReportService: IncidentReportService
  ) {}


  ngOnInit(): void {
    this.loadAssessmentReports();
  }


  loadAssessmentReports(): void {
    this.incidentReportService.getFundedAssessmentReports().subscribe(reports => {
      this.fundedAssessmentReports = reports.map(report => [report]);
    });


    this.incidentReportService.getNonFundedAssessmentReports().subscribe(reports => {
      this.nonFundedAssessmentReports = reports.map(report => [report]);
    });
  }


  openAddReportDialog(): void {
    const dialogRef = this.dialog.open(AddReportPanelComponent, {
      width: '250px'
    });


    dialogRef.afterClosed().subscribe(result => {
      if (result === 'funding') {
        this.openFundingRelatedReportDialog();
      } else if (result === 'non-funding') {
        this.openNonFundingRelatedReportDialog();
      }
    });
  }


  openFundingRelatedReportDialog(): void {
    const dialogRef = this.dialog.open(FundingRelatedFormComponent, {
      width: '30%'
    });


    dialogRef.componentInstance.formSubmit.subscribe((formData: FundingIncidentReportData) => {
      const fundingReport: AssessmentFundedReport = {
        ...formData,
        id: Date.now(),
        status: 'new'
      };


      this.incidentReportService.addFundingReport(fundingReport);
    });
  }


  openNonFundingRelatedReportDialog(): void {
    const dialogRef = this.dialog.open(NonFundingRelatedFormComponent, {
      width: '30%'
    });


    dialogRef.componentInstance.formSubmit.subscribe((formData: NonFundingIncidentReportData) => {
      const nonFundingReport: AssessmentNonFundedReport = {
        ...formData,
        id: Date.now(),
        status: 'assessment'
      };


      this.incidentReportService.addNonFundingReport(nonFundingReport);
    });
  }
}
