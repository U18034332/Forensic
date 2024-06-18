import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-grant-case-management',
 
 
  templateUrl: './grant-case-management.component.html',
  styleUrls: ['./grant-case-management.component.scss']
})
export class GrantCaseManagementComponent {
  
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
  }

  presentAddFileDialog() {
    // Implement the dialog logic
    console.log('Add File dialog triggered');
  }

  presentAddCaseDialog() {
    // Implement the dialog logic
    console.log('Add Case dialog triggered');
  }

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
