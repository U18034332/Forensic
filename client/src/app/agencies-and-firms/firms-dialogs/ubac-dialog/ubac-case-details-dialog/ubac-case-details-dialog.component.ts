import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'; 
import { Router } from '@angular/router';
import { AnnexureADigitalFormComponent } from '../../../../case-management/annexures/annexure-a-digital-form/annexure-a-digital-form.component';
import { AnnexureBDigitalFormComponent } from '../../../../case-management/annexures/annexure-b-digital-form/annexure-b-digital-form.component';
import { AnnexureDDigitalFormComponent } from '../../../../case-management/annexures/annexure-d-digital-form/annexure-d-digital-form.component';
import { AnnexureEDigitalFormComponent } from '../../../../case-management/annexures/annexure-e-digital-form/annexure-e-digital-form.component';

@Component({
  selector: 'app-ubac-case-details-dialog',
  templateUrl: './ubac-case-details-dialog.component.html',
  styleUrl: './ubac-case-details-dialog.component.scss'
})
export class UBACCaseDetailsDialogComponent {

  isDetailDialogOpen: boolean = false;
  selectedCase: any;
  subFilesExpanded: boolean = false;

  displayedColumns: string[] = ['caseID', 'cases', 'startDate', 'status', 'priority', 'caseType', 'province', 'channel', 'levelDetected', 'teams', 'lastModified', 'caseEndDate'];
  dataSource: any[] = [];

  ngOnInit(): void {
    this.dataSource = [
      { caseID: '1', cases: 'Case 1', startDate: '2024-01-01', status: 'Open', priority: 'High', caseType: 'Type A', province: 'Province 1', channel: 'Channel 1', levelDetected: 'Level 1', teams: 'Team 1', lastModified: '2024-01-02', caseEndDate: '2024-01-10' },
      { caseID: '2', cases: 'Case 2', startDate: '2024-02-01', status: 'Closed', priority: 'Low', caseType: 'Type B', province: 'Province 2', channel: 'Channel 2', levelDetected: 'Level 2', teams: 'Team 2', lastModified: '2024-02-02', caseEndDate: '2024-02-10' },
      { caseID: '3', cases: 'Case 3', startDate: '2024-03-01', status: 'In Progress', priority: 'Medium', caseType: 'Type C', province: 'Province 3', channel: 'Channel 3', levelDetected: 'Level 3', teams: 'Team 3', lastModified: '2024-03-02', caseEndDate: '2024-03-10' }
    ];
  }


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

