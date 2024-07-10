import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { GrantCaseManagementDigitalFormComponent } from './grant-case-management-digital-form/grant-case-management-digital-form.component';
import { CaseDetailsGrantCaseManagementComponent } from './case-details-grant-case-management/case-details-grant-case-management.component';

@Component({
  selector: 'app-grant-case-management',
  templateUrl: './grant-case-management.component.html',
  styleUrls: ['./grant-case-management.component.scss']
})
export class GrantCaseManagementComponent {
  @ViewChild('drawer') drawer!: MatSidenav;

  showFiller = false;
  subFilesExpanded = false;
  sidenavOpen = false;
  selectedCase: any;
  isDetailDialogOpen = false;

  constructor(private router: Router, private dialog: MatDialog) {}

  presentAddFileDialog() {
    console.log('Add File dialog triggered');
    this.router.navigate(['document-management']);
  }

  presentAddCaseDialog() {
    const dialogRef = this.dialog.open(GrantCaseManagementDigitalFormComponent, {
      width: '30%'
    });
  }

  openCaseDetails(caseDetails: any) {
    this.selectedCase = caseDetails;
    this.isDetailDialogOpen = true;
    const dialogRef = this.dialog.open(CaseDetailsGrantCaseManagementComponent, {
      width: '30%',
      data: { caseDetails }
    });
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
