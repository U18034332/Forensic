import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FundingRelatedFormComponent } from '../funding-related-form/funding-related-form.component';
import { NonFundingRelatedFormComponent } from '../non-funding-related-form/non-funding-related-form.component';
@Component({
  selector: 'app-add-report-panel',
  templateUrl: './add-report-panel.component.html',
  styleUrl: './add-report-panel.component.scss'
})
export class AddReportPanelComponent {
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<AddReportPanelComponent>) {}

  openFundingRelatedForm(): void {
    this.dialog.open(FundingRelatedFormComponent);
    this.dialogRef.close();
  }

  openNonFundingRelatedForm(): void {
    this.dialog.open(NonFundingRelatedFormComponent);
    this.dialogRef.close();
  }

}
