import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FundingRelatedFormComponent } from './funding-related-form/funding-related-form.component';
import { NonFundingRelatedFormComponent } from './non-funding-related-form/non-funding-related-form.component';
import { AddReportPanelComponent } from './add-report-panel/add-report-panel.component';
import { AssessmentFundedReport, FundingIncidentReportData } from '../dto/funding-related.interface';
import { AssessmentNonFundedReport } from '../dto/non-funding-report.interface';
import { NonFundedIncidentReportService } from '../services/non-funded-incident-report.service';
import { Router } from '@angular/router';
import { FundingRelatedService } from '../services/funding-related.service';
import { NonFundingIncidentReportData } from '../models/non-funding-report.interface';

@Component({
  selector: 'app-incident-report',
  templateUrl: './incident-report.component.html',
  styleUrls: ['./incident-report.component.scss']
})
export class IncidentReportComponent implements OnInit {
  fundedAssessmentReports: AssessmentFundedReport[][] = [];
  nonFundedAssessmentReports: AssessmentNonFundedReport[][] = [];
  fundedReports: FundingIncidentReportData[] = [];
  nonFundedReports: NonFundingIncidentReportData[] = [];

  constructor(
    public dialog: MatDialog,
    private fundingReportService: FundingRelatedService,
    private nonfundingReportService: NonFundedIncidentReportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadReports();
    this.loadAssessmentReports();
  }

  loadReports(): void {
    this.nonfundingReportService.getFilledIncidentReports().subscribe(reports => {
      console.log(reports);
      this.nonFundedReports = reports;
    }, (err) => {
      console.log(err);
      this.navigateTo('/403');
    });

    this.fundingReportService.getFilledIncidentReports().subscribe(reports => {
      console.log(reports);
      this.fundedReports = reports;
    }, (err) => {
      console.log(err);
      this.navigateTo('/403');
    });
  }

  loadAssessmentReports(): void {
    this.nonfundingReportService.getAllToBeAssessedNonFundingRelatedIncidentReports().subscribe(reports => {
      console.log(reports);
      this.nonFundedAssessmentReports = reports.map((report: any) => [report]);
    }, (err) => {
      console.log(err);
      this.navigateTo('/403');
    });

    this.fundingReportService.getAllToBeAssessedFundingRelatedIncidentReports()
    .subscribe(reports => {
      console.log(reports);
      this.fundedAssessmentReports = reports.map((report: any) => [report]);
    }, (err) => {
      console.log(err);
      this.navigateTo('/403');
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

    dialogRef.componentInstance.formSubmit.subscribe(() => {
      this.loadReports();
      this.loadAssessmentReports();
    });
  }

  openNonFundingRelatedReportDialog(): void {
    const dialogRef = this.dialog.open(NonFundingRelatedFormComponent, {
      width: '30%'
    });

    dialogRef.componentInstance.formSubmit.subscribe(() => {
      this.loadReports();
      this.loadAssessmentReports();
    });
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }

  reloadReports(): void {
    this.loadReports();
    this.loadAssessmentReports();
  }
}


