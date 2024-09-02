import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserSelectionDialogComponent } from '../user-selection-dialog/user-selection-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FirmsSelectionDialogComponent } from '../firms-selection-dialog/firms-selection-dialog.component';
@Component({
  selector: 'app-investigation-dialog',
  templateUrl: './investigation-dialog.component.html',
  styleUrls: ['./investigation-dialog.component.scss']
})
export class InvestigationDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<InvestigationDialogComponent>,
    public dialog: MatDialog
  ) {}

  onSelect(option: string): void {
    if (option === 'users') {
      this.openUserSelectionDialog();
    } else if (option === 'firms') {
      this.openFirmsSelectionDialog();
    } else {
      this.dialogRef.close(option);
    }
  }

  openUserSelectionDialog(): void {
    const dialogRef = this.dialog.open(UserSelectionDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result.action === 'allocate') {
        console.log('Allocated users:', result.user);
        this.dialogRef.close({allocatedUser: result.user});
      }
    });
  }

  openFirmsSelectionDialog(): void {
    const dialogRef = this.dialog.open(FirmsSelectionDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result.action === 'refer') {
        console.log('Referred firm:', result.firm);
        // Handle the referral logic here
      }
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}