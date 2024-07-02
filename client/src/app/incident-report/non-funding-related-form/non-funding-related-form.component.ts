import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NonFundingIncidentReportData } from '../../models/non-funding-report.interface';
import { NgForm } from '@angular/forms';
import { NonFundedIncidentReportService } from '../../services/non-funded-incident-report.service';

@Component({
  selector: 'app-non-funding-related-form',
  templateUrl: './non-funding-related-form.component.html',
  styleUrls: ['./non-funding-related-form.component.scss']
})
export class NonFundingRelatedFormComponent {
  provinces = ['Eastern Cape', 'Free State', 'Gauteng', 'KwaZulu-Natal', 'Limpopo', 'Mpumalanga', 'Northern Cape', 'North West', 'Western Cape'];
  caseTypes = ['Fraud', 'Forgery', 'Ethical issues','Nepotism', 'Supply chain management', 'Misappropriation of funds','Theft', 'Others'];
  subTypes = ['Falsified Document', 'Fraudulent Document', 'Ghost Employees','Ghost Organisation', 'Identity Theft', 'Hijacked Organization','Duplication Organization', 'Confilct of Interest', 'Irregular Appointment','Bribery', 'Nepotism', 'Procurements Contract','Misuse of Funds', 'Misallocation of funds'];
  channels = ['e-Mail', 'Hot-Line', 'Walk-ins', 'Website'];
  priorities = ['Simple', 'Medium', 'Complex'];
  statuses = ['New', 'Closed', 'In Progress', 'Completed'];
  organisations = ['NPO', 'NGO', 'Section 21', 'Public Befefit Trusts', 'Sporting Bodies & Sport Clubs', 'Educational Institutions', 'Recreational Clubs', 'Cultural Bodies'];
  sourceDetections = ['Non Compliance', 'Highjacked Organizations', 'Non Related NLC Agent', 'Delinquency (Internal and External)', 'Delinquency Organizations/Directors', 'Double dipping from funders', 'Fraudulent Financial Statements', '2 step verification on directors', 'IP and MAC device detection'];
  allocatedDescriptions = ['Description 1', 'Description 2', 'Description 3'];
  sectors = ['Arts & Culture', 'Sports', 'Miscellaneous', 'Charities'];
  levelsDetected = ['Divisional', 'Departmental', 'Sub Departmental', 'Process'];
  divisionsDetected = ['Division 1', 'Division 2', 'Division 3'];

  report: NonFundingIncidentReportData = {} as NonFundingIncidentReportData
  

  constructor(public dialogRef: MatDialogRef<NonFundingRelatedFormComponent>,private reportService: NonFundedIncidentReportService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      console.log(this.report);
      this.reportService.addNonFundingRelatedIncidentReport(this.report)
        .subscribe((response) => {
          console.log(response);
          }, (error) => {
            console.log(error);
          }
        )
    } else {
      console.log("Error in the form.");
    }
  }
}
