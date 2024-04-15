import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular' ;
import {AddReportPage} from './add-report/add-report.page';
import { FundingIncidentReportService } from 'src/app/services/funding-incident-report.service';
import { Grid, h } from 'gridjs';



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
  grid: Grid 
  

  
   constructor(
    public modalController: ModalController,
    private incidentReportsService: FundingIncidentReportService
  ) {}


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
    this.getFundingIncidentReports()
  }

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
    this.getFundingIncidentReports();
  }

  // Implementation of the methods to handle the report actions
  viewReport(report: any) {
    // Implementation for viewing a report
    console.log('View report:', report);
    // Navigate to the report details or perform an action
  }

  acceptReport(report: any) {
    // Implementation for accepting a report
    console.log('Accept report:', report);
    // Update the status of the report to "Accepted" or perform an action
  }

  declineReport(report: any) {
    // Implementation for declining a report
    console.log('Decline report:', report);
    // Update the status of the report to "Declined" or perform an action
  }
  async presentAddReportDialog() {
    console.log("Add Case button clicked");
    // Replace with your form presentation logic
     const md = await this.modalController.create({
       component: AddReportPage, // Replace with your component
       cssClass: 'your-custom-class' // Use a custom class if needed
     });
     return await md.present();
  }

  getFundingIncidentReports() {
    this.incidentReportsService.getData().subscribe(
      (response) => {
        console.log(response);
        this.assessmentReportCases = response;
  
        // Initialize Grid.js with the fetched data
        this.grid = new Grid({
          columns: [
            'Report Number',
            'Stage',
            'Start Date',
            'Status',
            'Priority',
            'Assessed By',
            {
              name: 'View',
              formatter: (cell, row) => {
                return h('button', {
                  className: 'py-2 mb-4 px-4 border rounded-md text-white bg-blue-600',
                  onClick: () => this.viewReport(row.cells[0].data)
                }, `View ${row.cells[0].data}`);
              }
            },
            {
              name: 'Accept/Decline',
              formatter: (cell, row) => {
              return h('div', {}, [
                h('ion-button', {
                  style: {
                    '--background': '#28A745', // Green color for "Accept" button
                    '--color': '#FFFFFF', // White text color
                    padding: '8px 16px', // Padding for button
                    border: 'none', // Remove border
                    'border-radius': '4px', // Rounded corners
                    cursor: 'pointer' // Show pointer on hover
                  },
                onClick: () => this.acceptReport(row.cells[0].data)
                }, 'Accept'),
                h('ion-button', {
                style: {
                  '--background': '#DC3545', // Red color for "Decline" button
                  '--color': '#FFFFFF', // White text color
                  padding: '8px 16px', // Padding for button
                  border: 'none', // Remove border
                  'border-radius': '4px', // Rounded corners
                  cursor: 'pointer' // Show pointer on hover
                },
                onClick: () => this.declineReport(row.cells[0].data)
                  }, 'Decline')
                ]);
            }

          }
        ],
          data: this.assessmentReportCases.map(report => [
            report.reportNumber,
            report.stage,
            report.startDate,
            report.status,
            report.priority,
            report.assessedBy
          ]),
          pagination: true,
          search: true
    });
  
        // Render the grid to a DOM element
        this.grid.render(document.getElementById('grid-container'));
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
  

  



