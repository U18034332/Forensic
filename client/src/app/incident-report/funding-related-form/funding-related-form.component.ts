import { Component, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-funding-related-form',
  templateUrl: './funding-related-form.component.html',
  styleUrls: ['./funding-related-form.component.scss']
})
export class FundingRelatedFormComponent {
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

  selectedCaseType: string = '';
  selectedProvince: string = '';
  selectedStatus: string = '';
  selectedSubType: string = ''; // Assuming you have a field for subtype
  selectedChannel: string = '';
  selectedPriority: string = '';
  selectedOrganisation: string = '';
  selectedSourceDetection: string = '';
  selectedAllocatedDescription: string = '';
  selectedSector: string = '';
  selectedLevelDetected: string = '';
  selectedDivisionDetected: string = '';

  showSubType: boolean = false;

  formSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor(public dialogRef: MatDialogRef<FundingRelatedFormComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    const formData = {
      selectedCaseType: this.selectedCaseType,
      selectedProvince: this.selectedProvince,
      selectedStatus: this.selectedStatus,
      selectedSubType: this.selectedSubType,
      selectedChannel: this.selectedChannel,
      selectedPriority: this.selectedPriority,
      selectedOrganisation: this.selectedOrganisation,
      selectedSourceDetection: this.selectedSourceDetection,
      selectedAllocatedDescription: this.selectedAllocatedDescription,
      selectedSector: this.selectedSector,
      selectedLevelDetected: this.selectedLevelDetected,
      selectedDivisionDetected: this.selectedDivisionDetected,
      // Add other form fields as needed
    };
    this.formSubmit.emit(formData);
    this.dialogRef.close();
  }

  onCaseTypeChange(event: MatSelectChange): void {
    this.showSubType = ['Fraud', 'Forgery'].includes(event.value);
  }
}