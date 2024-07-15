import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'; 
import { Router } from '@angular/router';
import { AnnexureADigitalFormComponent } from '../annexures/annexure-a-digital-form/annexure-a-digital-form.component';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.scss']
})
export class CaseDetailsComponent {
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
