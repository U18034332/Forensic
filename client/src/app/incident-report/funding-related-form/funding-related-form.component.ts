import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { FundingIncidentReportData } from '../../dto/funding-related.interface';
import { FundingRelatedService } from '../../services/funding-related.service';

@Component({
  selector: 'app-funding-related-form',
  templateUrl: './funding-related-form.component.html',
  styleUrls: ['./funding-related-form.component.scss']
})
export class FundingRelatedFormComponent {
  @Output() formSubmit: EventEmitter<FundingIncidentReportData> = new EventEmitter<FundingIncidentReportData>();

  provinces: string[] = [
    'Eastern Cape', 'Free State', 'Gauteng', 'KwaZulu-Natal', 'Limpopo',
    'Mpumalanga', 'Northern Cape', 'North West', 'Western Cape'
  ];

  caseTypes: string[] = [
    'Fraud', 'Forgery', 'Ethical issues', 'Nepotism', 'Supply chain management',
    'Misappropriation of funds', 'Theft', 'Others'
  ];

  subTypes: string[] = [
    'Falsified Document', 'Fraudulent Document', 'Ghost Employees', 'Ghost Organisation',
    'Identity Theft', 'Hijacked Organization', 'Duplication Organization',
    'Conflict of Interest', 'Irregular Appointment', 'Bribery', 'Nepotism',
    'Procurements Contract', 'Misuse of Funds', 'Misallocation of funds'
  ];

  channels: string[] = [
    'e-Mail', 'Hot-Line', 'Walk-ins', 'Website'
  ];

  priorities: string[] = [
    'Simple', 'Medium', 'Complex'
  ];

  statuses: string[] = [
    'New', 'Closed', 'In Progress', 'Completed'
  ];

  organisations: string[] = [
    'NPO', 'NGO', 'Section 21', 'Public Benefit Trusts', 'Sporting Bodies & Sport Clubs',
    'Educational Institutions', 'Recreational Clubs', 'Cultural Bodies'
  ];

  sourceDetections: string[] = [
    'Non Compliance', 'Highjacked Organizations', 'Non Related NLC Agent',
    'Delinquency (Internal and External)', 'Delinquency Organizations/Directors',
    'Double dipping from funders', 'Fraudulent Financial Statements',
    '2 step verification on directors', 'IP and MAC device detection'
  ];

  allocatedDescriptions: string[] = [
    'Description 1', 'Description 2', 'Description 3'
  ];

  sectors: string[] = [
    'Arts & Culture', 'Sports', 'Miscellaneous', 'Charities'
  ];

  levelsDetected: string[] = [
    'Divisional', 'Departmental', 'Sub Departmental', 'Process'
  ];

  divisionsDetected: string[] = [
    'Finance', 'Office to The Commissioner', 'Regulatory Compliance',
    'ICT', 'Operations', 'Legal'
  ];

  showSubType: boolean = true;

  report: FundingIncidentReportData = {} as FundingIncidentReportData;

  constructor(public dialogRef: MatDialogRef<FundingRelatedFormComponent>, private incidentReportService: FundingRelatedService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  submitForm(form: NgForm): void {
    if (form.valid) {
      console.log(this.report);
      this.incidentReportService.addFundingRelatedReport(this.report)
        .subscribe((response: any) => {
          console.log(response);
          this.formSubmit.emit(this.report);
          this.dialogRef.close();
          form.resetForm();
        }, (error: any) => {
          console.log(error);
        });
    } else {
      console.log("Error in the form.");
    }
  }
  // onCaseTypeChange(event: MatSelectChange): void {
  //   this.selectedCaseType = event.value;
  //   // Add any additional logic needed when the case type changes
  // }
}