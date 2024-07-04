import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { GrantCaseManagementData } from '../dto/grant-case-management.interface';
import { GrantCaseManagementDigitalFormComponent } from './grant-case-management-digital-form/grant-case-management-digital-form.component';
import { MatDialog } from '@angular/material/dialog';

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
  dataSource: GrantCaseManagementData [] = []
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
    const dialogRef = this.dialog.open(GrantCaseManagementDigitalFormComponent, {
      width: '30%'
    });
  }

  constructor(private router: Router, private dialog: MatDialog) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}