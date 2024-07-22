import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-selection-dialog',
  templateUrl: './user-selection-dialog.component.html',
  styleUrls: ['./user-selection-dialog.component.scss']
})
export class UserSelectionDialogComponent {
  workloadThreshold = 5; // Define a threshold for workload
  userList = [
    { name: 'User 1', workload: 3 },
    { name: 'User 2', workload: 7 },
    { name: 'User 3', workload: 2 },
    { name: 'User 4', workload: 8 }
    // Add more users with workload data as needed
  ];

  selectedUser: any = null;

  constructor(public dialogRef: MatDialogRef<UserSelectionDialogComponent>) {}

  selectUser(user: any): void {
    this.selectedUser = user;
  }

  onAllocate(): void {
    if (this.selectedUser) {
      this.dialogRef.close({ action: 'allocate', user: this.selectedUser });
    } else {
      alert('Please select a user to allocate.');
    }
  }

  onCancel(): void {
    this.dialogRef.close({ action: 'cancel' });
  }
}
