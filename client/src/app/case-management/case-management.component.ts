import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { CaseManagementDigitalFormComponent } from './case-management-digital-form/case-management-digital-form.component';
import { CaseDetailsComponent } from './case-details/case-details.component';
import { AnnexureADigitalFormComponent } from './annexures/annexure-a-digital-form/annexure-a-digital-form.component'; // Import the new component

@Component({
  selector: 'app-case-management',
  templateUrl: './case-management.component.html',
  styleUrls: ['./case-management.component.scss']
})
export class CaseManagementComponent {
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
    const dialogRef = this.dialog.open(CaseManagementDigitalFormComponent, {
      width: '30%'
    });
  }

  openCaseDetails(caseDetails: any) {
    this.selectedCase = caseDetails;
    this.isDetailDialogOpen = true;
    const dialogRef = this.dialog.open(CaseDetailsComponent, {
      width: '30%'
    });
  }

  openAnnexureA() {
    const dialogRef = this.dialog.open(AnnexureADigitalFormComponent, {
      width: '80%',
      maxHeight: '90vh',  // Adjust height to make it scrollable
      
    });
  }
  

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
