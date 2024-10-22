import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserListDTO } from '../../../dto/user-list.interface';

@Component({
  selector: 'app-user-remove-confirmation',
  templateUrl: './user-remove-confirmation.component.html',
  styleUrls: ['./user-remove-confirmation.component.scss']
})
export class UserRemoveConfirmationComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public user: UserListDTO,
    private dialogRef: MatDialogRef<UserRemoveConfirmationComponent>
  ) {}

  onConfirmRemove(): void {
    this.dialogRef.close(this.user.userId);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
