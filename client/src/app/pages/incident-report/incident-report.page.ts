import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular' ;
import {AddReportPage} from './add-report/add-report.page';
import { Router } from '@angular/router';


// The ReportCase interface should match the structure you plan to receive from your backend
interface ReportCase {
  reportNumber: string;
  acceptDecline: string;
  dateReported: string;
  channel: string;
  province: string;
  caseType: string;
  priority: string;
  status: string;
  division: string;
  levelDetected: string;
  assessmentStage: string;
  startDate: string;
  reportDocument: string;
  actions: string;
  lastModified: string;
  assignedToo: string;
  projectNumber: string;
  organisation: string;
  stage: string;
  assessedBy: string;
}

@Component({
  selector: 'app-incident-report',
  templateUrl: './incident-report.page.html',
  styleUrls: ['./incident-report.page.scss'],
})
export class IncidentReportPage implements OnInit {
  selectedSegment: string = 'filedReports';
  nonFundedReportCase!: ReportCase;
  fundedReportCase!: ReportCase;
  assessmentReportCases!: ReportCase[];
  

  constructor(private modalController: ModalController,
              private router: Router )
              { }


  ngOnInit() {
    // Initialize your example report cases here or fetch them from the backend
    this.nonFundedReportCase = {
      reportNumber: '',
      acceptDecline: '',
      dateReported: '',
      channel: '',
      province: '',
      caseType: '',
      priority: '',
      status: '',
      division: '',
      levelDetected: '',
      assessmentStage: '',
      startDate: '',
      reportDocument: '',
      actions: '',
      lastModified: '',
      assignedToo: '',
      projectNumber: '',
      organisation: '',
      stage: '',
      assessedBy: ''
    };

    this.fundedReportCase = {
      reportNumber: '',
      acceptDecline: '',
      dateReported: '',
      channel: '',
      province: '',
      caseType: '',
      priority: '',
      status: '',
      division: '',
      levelDetected: '',
      assessmentStage: '',
      startDate: '',
      reportDocument: '',
      actions: '',
      lastModified: '',
      assignedToo: '',
      projectNumber: '',
      organisation: '',
      stage: '',
      assessedBy: ''
    };

    this.assessmentReportCases = [
      {
        reportNumber: 'RP-NP-TH098',
        acceptDecline: '',
        dateReported: '',
        channel: '',
        province: '',
        caseType: '',
        priority: 'Complex',
        status: 'In Progress',
        division: '',
        levelDetected: '',
        assessmentStage: 'Stage 1/2',
        startDate: '23/07/20',
        reportDocument: '',
        actions: '',
        lastModified: '',
        assignedToo: 'User 1',
        projectNumber: '',
        organisation: '',
        stage: '',
        assessedBy: 'User 1'
      },
      // ... Add more assessment cases as needed
    ];
  }

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }

  // Implementation of the methods to handle the report actions
  viewReport(report: ReportCase) {
    // Implementation for viewing a report
    console.log('View report:', report);
    // Navigate to the report details or perform an action
  }

  acceptReport(report: ReportCase) {
    // Implementation for accepting a report
    console.log('Accept report:', report);
    // Update the status of the report to "Accepted" or perform an action
  }

  declineReport(report: ReportCase) {
    // Implementation for declining a report
    console.log('Decline report:', report);
    // Update the status of the report to "Declined" or perform an action
  }
  async presentAddReportDialog() {
    console.log("Add Case button clicked");
    // Replace with your form presentation logic
     const modal = await this.modalController.create({
       component: AddReportPage, // Replace with your component
       cssClass: 'your-custom-class' // Use a custom class if needed
     });
     return await modal.present();
  }
  // You can add more methods as needed for your functionality
  
  }
  



