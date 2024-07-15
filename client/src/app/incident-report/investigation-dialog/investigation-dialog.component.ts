import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserSelectionDialogComponent } from '../user-selection-dialog/user-selection-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-investigation-dialog',
  templateUrl: './investigation-dialog.component.html',
  styleUrl: './investigation-dialog.component.scss'
})
export class InvestigationDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<InvestigationDialogComponent>,
    public dialog: MatDialog
  ) {}

  onSelect(option: string): void {
    if (option === 'users') {
      this.openUserSelectionDialog();
    } else {
      this.dialogRef.close(option);
    }
  }

  openUserSelectionDialog(): void {
    const dialogRef = this.dialog.open(UserSelectionDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result.action === 'allocate') {
        console.log('Allocated users:', result.users);
        // Handle the allocation logic here
      }
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
