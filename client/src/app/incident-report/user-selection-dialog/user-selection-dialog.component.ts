import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-user-selection-dialog',
  templateUrl: './user-selection-dialog.component.html',
  styleUrls: ['./user-selection-dialog.component.scss']
})
export class UserSelectionDialogComponent implements OnInit {
  workloadThreshold = 5; // Define a threshold for workload
  userList: any = [];

  selectedUser: any = null;
  ngOnInit(): void {
    this.getAlltheUsersToAllocateTo()
  }

  constructor(
    public dialogRef: MatDialogRef<UserSelectionDialogComponent>,
    private userService: UserService
  ) {}

  onAllocate(): void {
    if (this.selectedUser) {
      this.dialogRef.close({ action: 'allocate', user: this.selectedUser });
    } else {
      alert('Please select a user to allocate.');
    }
  }

  getAlltheUsersToAllocateTo(): void {
    this.userService.getAllUsers()
      .subscribe((res)=> {
        console.log(res);
        this.userList = res
        console.log(this.userList);
      }, (err)=>{
        console.log(err);
      })
  }

  selectUser(user: any): void {
    this.selectedUser = user;
  }
  
  onCancel(): void {
    this.dialogRef.close({ action: 'cancel' });
  }
}
