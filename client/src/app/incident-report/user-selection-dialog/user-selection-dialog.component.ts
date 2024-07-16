import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-user-selection-dialog',
  templateUrl: './user-selection-dialog.component.html',
  styleUrl: './user-selection-dialog.component.scss'
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

  constructor(public dialogRef: MatDialogRef<UserSelectionDialogComponent>) {}

  onAllocate(selectedUsers: any): void {
    const selected = selectedUsers.map((option: any) => option.value);
    this.dialogRef.close({ action: 'allocate', users: selected });
  }

  onCancel(): void {
    this.dialogRef.close({ action: 'cancel' });
  }
}