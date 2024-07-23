import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { CaseManagementReportData } from '../../../dto/add-case-management-form.interface';

@Component({
  selector: 'app-annexure-a-digital-form',
  templateUrl: './annexure-a-digital-form.component.html',
  styleUrls: ['./annexure-a-digital-form.component.scss']
})
export class AnnexureADigitalFormComponent {
  @Output() formSubmit: EventEmitter<CaseManagementReportData> = new EventEmitter<CaseManagementReportData>();

  provinces = ['Eastern Cape', 'Free State', 'Gauteng', 'KwaZulu-Natal', 'Limpopo', 'Mpumalanga', 'Northern Cape', 'North West', 'Western Cape'];
  caseTypes = ['Corruption','Fraud', 'Forgery', 'Ethical issues', 'Nepotism', 'Supply Chain management', 'Theft','Non Compliance', 'Misappropriation of funds','Conflict of Interest', 'Collusion', 'Scam(s)','Misconduct', 'Others'];
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
  caseId = ['1','2','3','4']
  caseIds = ['Case ID 1', 'Case ID 2', 'Case ID 3'];

  annexureA : CaseManagementReportData = {} as CaseManagementReportData;

  constructor(public dialogRef: MatDialogRef<AnnexureADigitalFormComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }
  submitForm(form: NgForm) {
    if (form.valid) {
      this.formSubmit.emit(this.annexureA);
      this.dialogRef.close();
    } else {
      console.log('Error in the form.');
    }
  }
}
