import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-case-details-grant-case-management',
  templateUrl: './case-details-grant-case-management.component.html',
  styleUrls: ['./case-details-grant-case-management.component.scss']
})
export class CaseDetailsGrantCaseManagementComponent {
  case: any; // Define the type of your case data here
  panelOpenState = false;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.case = this.data;
  }
}
