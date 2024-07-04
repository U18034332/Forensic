import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CaseManagementDigitalFormComponent } from './case-management-digital-form/case-management-digital-form.component';


@Component({
  selector: 'app-case-management',
  templateUrl: './case-management.component.html',
  styleUrls: ['./case-management.component.scss']
})
export class CaseManagementComponent {

  showFiller = false;

  sideNavOpen() {}

  subFilesExpanded = false;
  displayedColumns: string[] = [
    'caseID', 'cases', 'startDate', 'status', 'priority', 'caseType', 
    'province', 'channel', 'levelDetected', 'teams', 'lastModified', 'caseEndDate'
  ];
  dataSource = [
    {caseID: 'F-C-N098', cases: 'Case 4', startDate: '24/06/20', status: 'Open', priority: 'Complex', caseType: 'Fraud', province: 'Gauteng', channel: 'Hot-Line', levelDetected: 'Level 4', teams: 'Team 3', lastModified: '27/08/20', caseEndDate: '?'},
  ];
  annexures = ['Annexure 1', 'Annexure 2', 'Annexure 3'];

  toggleSubFiles() {
    this.subFilesExpanded = !this.subFilesExpanded;
    this.router.navigate(['document-management']);
  }

  presentAddFileDialog() {
    console.log('Add File dialog triggered');
    this.router.navigate(['document-management']);
  }

  presentAddCaseDialog() {
    const dialogRef = this.dialog.open(CaseManagementDigitalFormComponent, {
      width: '30%'
    });
  }

  constructor(private router: Router, private dialog: MatDialog) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
