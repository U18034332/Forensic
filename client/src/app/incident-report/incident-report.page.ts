import { Component, OnInit } from '@angular/core';

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
  origin:string;
  // Add more fields as needed
}

@Component({
  selector: 'app-incident-report',
  templateUrl: './incident-report.page.html',
  styleUrls: ['./incident-report.page.scss'],
})
export class IncidentReportPage implements OnInit {
  selectedSegment: string = 'filedReports';
  
  // Example report cases (these should eventually come from your backend)
  nonFundedReportCase: ReportCase = {
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
    projectNumber:'',
    origin:'',
  };

  fundedReportCase: ReportCase = {
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
    projectNumber:'',
    origin:'',
  };

  constructor() { }

  ngOnInit() {
    // This is where you would fetch your data from the backend
    // and populate nonFundedReportCase and fundedReportCase
  }

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }

  // Add your fetching methods here
}
