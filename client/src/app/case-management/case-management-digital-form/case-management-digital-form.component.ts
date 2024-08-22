import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { CaseManagementReportData } from '../../dto/add-case-management-form.interface';

@Component({
  selector: 'app-case-management-digital-form',
  templateUrl: './case-management-digital-form.component.html',
  styleUrls: ['./case-management-digital-form.component.scss']
})
export class CaseManagementDigitalFormComponent {
  @Output() formSubmit: EventEmitter<CaseManagementReportData> = new EventEmitter<CaseManagementReportData>();

  provinces = ['Eastern Cape', 'Free State', 'Gauteng', 'KwaZulu-Natal', 'Limpopo', 'Mpumalanga', 'Northern Cape', 'North West', 'Western Cape'];
  caseTypes = ['Fraud', 'Forgery', 'Ethical issues', 'Nepotism', 'Supply chain management', 'Misappropriation of funds', 'Theft', 'Others'];
  subTypes = ['Falsified Document', 'Fraudulent Document', 'Ghost Employees', 'Ghost Organisation', 'Identity Theft', 'Hijacked Organization', 'Duplication Organization', 'Conflict of Interest', 'Irregular Appointment', 'Bribery', 'Nepotism', 'Procurements Contract', 'Misuse of Funds', 'Misallocation of funds'];
  channels = ['e-Mail', 'Hot-Line', 'Walk-ins', 'Website'];
  priorities = ['Simple', 'Medium', 'Complex'];
  statuses = ['New', 'Closed', 'In Progress', 'Completed'];
  organisations = ['NPO', 'NGO', 'Section 21', 'Public Benefit Trusts', 'Sporting Bodies & Sport Clubs', 'Educational Institutions', 'Recreational Clubs', 'Cultural Bodies'];
  sourceDetections = ['Non Compliance', 'Highjacked Organizations', 'Non Related NLC Agent', 'Delinquency (Internal and External)', 'Delinquency Organizations/Directors', 'Double dipping from funders', 'Fraudulent Financial Statements', '2 step verification on directors', 'IP and MAC device detection'];
  allocatedDescriptions = ['Description 1', 'Description 2', 'Description 3'];
  sectors = ['Arts & Culture', 'Sports', 'Miscellaneous', 'Charities'];
  levelsDetected = ['Divisional', 'Departmental', 'Sub Departmental', 'Process'];
  divisionsDetected = ['Division 1', 'Division 2', 'Division 3'];
  incidentReportNumber = ''
  incidentReportNumbers = ['','Case ID 1', 'Case ID 2', 'Case ID 3'];

  case: CaseManagementReportData = {} as CaseManagementReportData;

  constructor(public dialogRef: MatDialogRef<CaseManagementDigitalFormComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.formSubmit.emit(this.case);
      this.dialogRef.close();
    } else {
      console.log('Error in the form.');
    }
  }
}
