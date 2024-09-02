import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-not-recommended-dialog',
  templateUrl: './not-recommended-dialog.component.html',
  styleUrls: ['./not-recommended-dialog.component.scss']
})
export class NotRecommendedDialogComponent {
  reason: string = '';

  constructor(public dialogRef: MatDialogRef<NotRecommendedDialogComponent>) {}

  onSubmit(): void {
    this.dialogRef.close({ action: 'submit', reason: this.reason });
  }

  onCancel(): void {
    this.dialogRef.close({ action: 'cancel' });
  }
}
