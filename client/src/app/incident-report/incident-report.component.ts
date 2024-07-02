import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FundingRelatedFormComponent } from './funding-related-form/funding-related-form.component';
import { NonFundingRelatedFormComponent } from './non-funding-related-form/non-funding-related-form.component';
import { AddReportPanelComponent } from './add-report-panel/add-report-panel.component';
import { ReportService } from './incident-report.service';
import { FundingRelatedReport, NonFundingRelatedReport, FormData } from './incident-report.model';

@Component({
  selector: 'app-incident-report',
  templateUrl: './incident-report.component.html',
  styleUrls: ['./incident-report.component.scss']
})
export class IncidentReportComponent {
  nonFundedDisplayedColumns: string[] = [
    'incidentID', 'incidents', 'reportDate', 'status', 'priority', 'incidentType',
    'location', 'channel', 'levelDetected', 'teams', 'lastModified', 'incidentEndDate'
  ];

  fundedDisplayedColumns: string[] = [
    'incidentID', 'incidents', 'reportDate', 'status', 'priority', 'incidentType',
    'location', 'channel', 'levelDetected', 'teams', 'lastModified', 'incidentEndDate'
  ];

  nonFundedIncidentDataSource: FormData[] = [];
  fundedIncidentDataSource: FormData[] = [];

  nonFundedAssessmentDataSource: FormData[] = [];
  fundedAssessmentDataSource: FormData[] = [];

  constructor(public dialog: MatDialog, private reportService: ReportService) {}

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

    dialogRef.componentInstance.formSubmit.subscribe((formData: FormData) => {
      const fundingReport: FundingRelatedReport = {
        title: formData.title,
        description: formData.description,
        fundingAmount: formData.fundingAmount || 0,
        selectedCaseType: formData.selectedCaseType,
        selectedProvince: formData.selectedProvince,
        selectedStatus: formData.selectedStatus,
        selectedSubType: formData.selectedSubType,
        selectedChannel: formData.selectedChannel,
        selectedPriority: formData.selectedPriority,
        selectedOrganisation: formData.selectedOrganisation,
        selectedSourceDetection: formData.selectedSourceDetection,
        selectedAllocatedDescription: formData.selectedAllocatedDescription,
        selectedSector: formData.selectedSector,
        selectedLevelDetected: formData.selectedLevelDetected,
        selectedDivisionDetected: formData.selectedDivisionDetected,
      };
      this.reportService.saveReport(fundingReport).subscribe(() => {
        this.fundedAssessmentDataSource.push(formData);
      });
    });
  }

  openNonFundingRelatedReportDialog(): void {
    const dialogRef = this.dialog.open(NonFundingRelatedFormComponent, {
      width: '30%'
    });

    dialogRef.componentInstance.formSubmit.subscribe((formData: FormData) => {
      const nonFundingReport: NonFundingRelatedReport = {
        title: formData.title,
        description: formData.description,
        selectedCaseType: formData.selectedCaseType,
        selectedProvince: formData.selectedProvince,
        selectedStatus: formData.selectedStatus,
        selectedSubType: formData.selectedSubType,
        selectedChannel: formData.selectedChannel,
        selectedPriority: formData.selectedPriority,
        selectedOrganisation: formData.selectedOrganisation,
        selectedSourceDetection: formData.selectedSourceDetection,
        selectedAllocatedDescription: formData.selectedAllocatedDescription,
        selectedSector: formData.selectedSector,
        selectedLevelDetected: formData.selectedLevelDetected,
        selectedDivisionDetected: formData.selectedDivisionDetected,
      };
      this.reportService.saveReport(nonFundingReport).subscribe(() => {
        this.nonFundedAssessmentDataSource.push(formData);
      });
    });
  }
}
