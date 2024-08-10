import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-firms-selection-dialog',
  templateUrl: './firms-selection-dialog.component.html',
  styleUrls: ['./firms-selection-dialog.component.scss']
})
export class FirmsSelectionDialogComponent {
  firmList = [
    { name: 'Firm 1' },
    { name: 'Firm 2' },
    { name: 'Firm 3' },
    { name: 'Firm 4' }
    // Add more firms as needed
  ];

  selectedFirm: any = null;

  constructor(public dialogRef: MatDialogRef<FirmsSelectionDialogComponent>) {}

  selectFirm(firm: any): void {
    this.selectedFirm = firm;
  }

  onRefer(): void {
    if (this.selectedFirm) {
      this.dialogRef.close({ action: 'refer', firm: this.selectedFirm });
    } else {
      alert('Please select a firm to refer.');
    }
  }

  onCancel(): void {
    this.dialogRef.close({ action: 'cancel' });
  }
}