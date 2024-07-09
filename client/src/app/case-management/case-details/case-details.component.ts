import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog'; // Import MatDialog
import { AnnexureADigitalFormComponent } from '../annexures/annexure-a-digital-form/annexure-a-digital-form.component'; // Import the new component

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.scss']
})
export class CaseDetailsComponent implements OnInit {
  case: any; // Define the type of your case data here

  panelOpenState = false;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) {} // Inject MatDialog

  ngOnInit(): void {
    this.case = this.data;
  }

  presentAddAnnexureADialog() {
    const dialogRef = this.dialog.open(AnnexureADigitalFormComponent, {
      width: '30%'
    });
  }
}
