import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular' ;
import {AddReportPage} from './add-report/add-report.page';
import { FundingIncidentReportService } from 'src/app/services/funding-incident-report.service';
import { Grid, h } from 'gridjs';
import { CaseAcceptance } from 'src/app/dto/case-acceptance.interface';
import { CaseAcceptanceService } from 'src/app/services/case-acceptance.service';



// The ReportCase interface should match the structure you plan to receive from your backend
interface ReportCase {
  reportNumber: string;
  acceptance: string;
  dateReported: string;
  channel: string;
  province: string;
  caseType: string;
  priority: string;
  status: string;
  detectionDivision: string;
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
    private incidentReportsService: FundingIncidentReportService,
    private caseAcceptanceService: CaseAcceptanceService
  ) {}


  ngOnInit() {
    // Initialize your example report cases here or fetch them from the backend
    this.nonFundedReportCase = {
      reportNumber: '',
      acceptance: '',
      dateReported: '',
      channel: '',
      province: '',
      caseType: '',
      priority: '',
      status: '',
      detectionDivision: '',
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
      acceptance: '',
      dateReported: '',
      channel: '',
      province: '',
      caseType: '',
      priority: '',
      status: '',
      detectionDivision: '',
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
        acceptance: '',
        dateReported: '',
        channel: '',
        province: '',
        caseType: '',
        priority: 'Complex',
        status: 'In Progress',
        detectionDivision: '',
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
    this.getFiledReports()
  }
  caseAcceptance: CaseAcceptance = {} as CaseAcceptance

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
    this.getFundingIncidentReports();
    this.getFiledReports();
  }

  // Implementation of the methods to handle the report actions
  viewReport(report: any) {
    // Implementation for viewing a report
    console.log('View report:', report);
    // Navigate to the report details or perform an action
  }

  acceptReport(reportNumber: any) {
    // Implementation for accepting a report
    this.caseAcceptance.reportNumber = reportNumber
    this.caseAcceptance.acceptance = "Accepted"
    this.caseAcceptance.allocateTo = "user@mail.com"
    this.caseAcceptanceService.postData(this.caseAcceptance)
    .subscribe((response)=> {
      console.log(response);

    }, error => {
      console.log(error)
    }

    )
    console.log('Accept report:', this.caseAcceptance);
    // Update the status of the report to "Accepted" or perform an action
  }

  declineReport(reportNumber: any) {
    this.caseAcceptance.reportNumber = reportNumber
    this.caseAcceptance.acceptance = "Declined"
    this.caseAcceptanceService.postData(this.caseAcceptance)
    .subscribe((response)=> {
      console.log(response);

    }, error => {
      console.log(error)
    }

    )
    console.log('Decline report:', reportNumber);
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
          pagination: {
            limit: 5
          },
          search: true
    });
  
        // Render the grid to a DOM element
        this.grid.render(document.getElementById('assessment-grid'));
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getFiledReports() {
    this.incidentReportsService.getData().subscribe(
      (response) => {
        console.log(response);
        this.assessmentReportCases = response;
  
        // Initialize Grid.js with the fetched data
        this.grid = new Grid({
          columns: [
            'Report Number',
            'Accept/Decline',
            'Date Reported',
            'Channel',
            'Province',
            'Case Type',
            'Case Priority',
            'Status',
            'Division',
            'Level',
            'Assessment Stage',
            'Start Date',
            'Organisation',
            'Project Number',
            'Last Modified',
            'Teams',
            {
              name: 'Actions',
              formatter: (cell, row) => {
                return h('ion-button', {
                  className: 'py-2 mb-4 px-4 border rounded-md text-white bg-blue-600',
                  onClick: () => this.viewReport(row.cells[0].data)
                }, 'View');
              }
            },
          ],
          data: this.assessmentReportCases.map(report => [
            report.reportNumber,
            report.acceptance,
            report.dateReported,
            report.channel,
            report.province,
            report.caseType,
            report.priority,
            report.status,
            report.detectionDivision,
            report.levelDetected,
            report.assessmentStage,
            report.startDate,
            report.organisation,
            report.projectNumber,
            report.lastModified,
            //teams

          ]),
          pagination: {
            limit: 5
          },
          search: true,
          autoWidth: true
    });
  
        // Render the grid to a DOM element
        this.grid.render(document.getElementById('funded-reports-grid'));
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
  

  



