import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { CaseManagementReportData } from '../../dto/add-case-management-form.interface';
import { CaseManagementServiceService } from '../../services/case-management-service.service';
import { CaseManagementIncidentDTO } from '../../dto/case-management-incident.interface';

@Component({
  selector: 'app-case-management-digital-form',
  templateUrl: './case-management-digital-form.component.html',
  styleUrls: ['./case-management-digital-form.component.scss']
})
export class CaseManagementDigitalFormComponent implements OnInit {
  @Output() formSubmit: EventEmitter<CaseManagementReportData> = new EventEmitter<CaseManagementReportData>();

  isDisabled: boolean = false;
  incidentReportNumber = '';
  incidentReportNumbers = [''];

  case: CaseManagementReportData = {} as CaseManagementReportData;
  report: CaseManagementIncidentDTO = {} as CaseManagementIncidentDTO;

  constructor(
    public dialogRef: MatDialogRef<CaseManagementDigitalFormComponent>,
    private caseManagementService: CaseManagementServiceService

  ) {}
  ngOnInit(): void {
    this.caseManagementService.getUserIncidentReports().subscribe((response) => {
      this.incidentReportNumbers = response.map((report: { reportNumber: any; }) => report.reportNumber);
    }, (err) => {
      console.log(err);
    });
  }
  

  onReportNumberChange(selectedReportNumber: string) {
    this.caseManagementService.getReport(selectedReportNumber).subscribe(reportDetails => {
      this.report = {
        ...this.report,
        reportNumber: reportDetails.reportNumber || '',
        startDate: reportDetails.startDate || '',
        dateReported: reportDetails.dateReported || '',
        province: reportDetails.province || '',
        caseType: reportDetails.caseType || '',
        caseSubType: reportDetails.caseSubType || '',
        channel: reportDetails.channel || '',
        priority: reportDetails.priority || '',
        status: reportDetails.status || '',
        levelDetected: reportDetails.levelDetected || '',
        divisionDetected: reportDetails.divisionDetected || '',
        allocatedDescription: reportDetails.allocatedDescription || ''
      };
      this.isDisabled = true;
    });
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.formSubmit.emit(this.case);
      console.log(this.case);
      
      this.dialogRef.close();
    } else {
      console.log('Error in the form.');
    }
  }

  onCaseIdChange(): void {
    // if (this.case.caseID) {
    //   this.caseService.getCaseById(this.case.caseID).subscribe((data) => {
    //     this.case = {
    //       ...this.case,
    //       startDate: data.startDate,
    //       dateReported: data.dateReported,
    //       province: data.province,
    //       caseType: data.caseType,
    //       caseSubType: data.caseSubType,
    //       channel: data.channel,
    //       priority: data.priority,
    //       status: data.status,
    //       levelDetected: data.levelDetected,
    //       divisionDetected: data.divisionDetected,
    //       allocatedDescription: data.allocatedDescription,
    //     };
    //   });
    // }
  }
}
