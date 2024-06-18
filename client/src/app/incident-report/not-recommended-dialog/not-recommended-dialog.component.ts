import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  reason: string;
}

@Component({
  selector: 'app-not-recommended-dialog',
  templateUrl: './not-recommended-dialog.component.html',
  styleUrls: ['./not-recommended-dialog.component.scss']
})
export class NotRecommendedDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<NotRecommendedDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSubmitClick(): void {
    this.dialogRef.close(this.data.reason);
  }
}
