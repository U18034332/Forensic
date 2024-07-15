import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, } from '@angular/material/dialog';
import { AnnexureADigitalFormComponent } from '../annexures-grant/annexure-a-digital-form/annexure-a-digital-form.component';

@Component({
  selector: 'app-case-details-grant-case-management',
  templateUrl: './case-details-grant-case-management.component.html',
  styleUrls: ['./case-details-grant-case-management.component.scss']
})
export class CaseDetailsGrantCaseManagementComponent {
    case: any; // Define the type of your case data here

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) {}
  
    presentAddAnnexureADialog(): void {
      const dialogConfig = new MatDialogConfig();
  
      // Initial configuration for dialog
      dialogConfig.width = '80%';
      dialogConfig.maxHeight = '90vh';
      dialogConfig.panelClass = 'custom-dialog-container';
  
      // Open the dialog with initial configuration
      const dialogRef = this.dialog.open(AnnexureADigitalFormComponent, dialogConfig);
  
      // After dialog is opened, adjust its position if needed
      dialogRef.afterOpened().subscribe(() => {
        const dialogContainer = dialogRef.componentInstance.dialogRef['_containerInstance'];
  
        // Ensure dialogContainer and _config are defined before accessing properties
        if (dialogContainer && dialogContainer['_config']) {
          dialogContainer['_config'].position = {
            left: '50px',  // Adjust left position
            top: '50px'    // Adjust top position as needed
          };
  
          dialogRef.updatePosition();  // Update dialog position
        }
      });
    }
  }
  
