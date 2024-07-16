import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AnnexureADigitalFormComponent } from '../annexures-grant/annexure-a-digital-form/annexure-a-digital-form.component';
import { AnnexureBDigitalFormComponent } from '../annexures-grant/annexure-b-digital-form/annexure-b-digital-form.component';
import { AnnexureDDigitalFormComponent } from '../annexures-grant/annexure-d-digital-form/annexure-d-digital-form.component';
import { AnnexureEDigitalFormComponent } from '../annexures-grant/annexure-e-digital-form/annexure-e-digital-form.component';

@Component({
  selector: 'app-case-details-grant-case-management',
  templateUrl: './case-details-grant-case-management.component.html',
  styleUrls: ['./case-details-grant-case-management.component.scss']
})
export class CaseDetailsGrantCaseManagementComponent {
    case: any; // Define the type of your case data here
    selectedFile: File | null = null;

    constructor(private router: Router, private dialog: MatDialog) {}

  openAnnexureA() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '45%';
    dialogConfig.maxHeight = '90vh';
    // dialogConfig.panelClass = 'custom-dialog-container';

    const dialogRef = this.dialog.open(AnnexureADigitalFormComponent, dialogConfig);
  }

  openAnnexureB() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '45%';
    dialogConfig.maxHeight = '90vh';
    // dialogConfig.panelClass = 'custom-dialog-container';

    const dialogRef = this.dialog.open(AnnexureBDigitalFormComponent, dialogConfig);
  }

  uploadAnnexureC(): void {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.pdf,.doc,.docx'; // Specify the file types you want to accept
    fileInput.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        // Handle the file upload logic here
        console.log('File selected:', file.name);
        // You can also call a service method to upload the file to the server
      }
    };
    fileInput.click(); // Simulate a click on the file input
  }

  openAnnexureD() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '45%';
    dialogConfig.maxHeight = '90vh';
    // dialogConfig.panelClass = 'custom-dialog-container';

    const dialogRef = this.dialog.open(AnnexureDDigitalFormComponent, dialogConfig);
  }

  openAnnexureE() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '45%';
    dialogConfig.maxHeight = '90vh';
    // dialogConfig.panelClass = 'custom-dialog-container';

    const dialogRef = this.dialog.open(AnnexureEDigitalFormComponent, dialogConfig);
  }

  uploadAnnexureF(): void {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.pdf,.doc,.docx'; // Specify the file types you want to accept
    fileInput.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        // Handle the file upload logic here
        console.log('File selected:', file.name);
        // You can also call a service method to upload the file to the server
      }
    };
    fileInput.click(); // Simulate a click on the file input
  }


  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}

  
  
