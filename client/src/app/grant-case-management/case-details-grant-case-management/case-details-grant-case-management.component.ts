import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AnnexureADigitalFormComponent } from '../annexures-grant/annexure-a-digital-form/annexure-a-digital-form.component';

@Component({
  selector: 'app-case-details-grant-case-management',
  templateUrl: './case-details-grant-case-management.component.html',
  styleUrls: ['./case-details-grant-case-management.component.scss']
})
export class CaseDetailsGrantCaseManagementComponent {
    case: any; // Define the type of your case data here

    constructor(private router: Router, private dialog: MatDialog) {}

  openAnnexureA() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '45%';
    dialogConfig.maxHeight = '90vh';
    // dialogConfig.panelClass = 'custom-dialog-container';

    const dialogRef = this.dialog.open(AnnexureADigitalFormComponent, dialogConfig);
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}

  
  
