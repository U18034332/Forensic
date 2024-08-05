import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-report-panel',
  templateUrl: './add-report-panel.component.html',
  styleUrls: ['./add-report-panel.component.scss']
})
export class AddReportPanelComponent {

  constructor(
    public dialogRef: MatDialogRef<AddReportPanelComponent>
  ) {}

  onFundingRelatedClick(): void {
    this.dialogRef.close('funding');
  }

  onNonFundingRelatedClick(): void {
    this.dialogRef.close('non-funding');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

