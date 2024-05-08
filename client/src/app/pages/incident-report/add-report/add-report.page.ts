import { Component, EventEmitter, Output } from '@angular/core';
import { FundingIncidentReport } from 'src/app/dto/funding-incident-report.interface';
import { ModalController } from '@ionic/angular';
import { FundingIncidentReportService } from 'src/app/services/funding-incident-report.service';

@Component({
  selector: 'app-report-form',
  templateUrl: './add-report.page.html',
  styleUrls: ['./add-report.page.scss'],
})
export class AddReportPage {
  constructor(
    private reportModal: ModalController,
    private incidentReport: FundingIncidentReportService 
  ) {
    // Initialize FundingIncidentReport object with default values
    this.report = {
      province: '',
      caseType: '',
      channel: '',
      priority: '',
      status: '',
      organisation: '',
      sourceDetection: '',
      sector: '',
      levelDetected: '',
      allocatedDescription: '',
      divisionDetected: '',
      startDate: '',  // Add startDate property
      dateReported: '',  // Add dateReported property
      projectNumber: ''  // Add projectNumber property
    };
  }

  report: FundingIncidentReport;

  onSubmit() {
    console.log(this.report);
    this.incidentReport.postData(this.report)
      .subscribe((response)=> {
        console.log(response);
      }, error => {
        console.log(error.error);
      });
    this.reportModal.dismiss();
  }

  onCancel() {
    console.log('Cancel action triggered');
    this.report = {
    province: '',
      caseType: '',
      channel: '',
      priority: '',
      status: '',
      organisation: '',
      sourceDetection: '',
      sector: '',
      levelDetected: '',
      allocatedDescription: '',
      divisionDetected: '',
      startDate: '',  // Add startDate property
      dateReported: '',  // Add dateReported property
      projectNumber: ''  // Add projectNumber property
    };
    this.reportModal.dismiss();   
  }
}
