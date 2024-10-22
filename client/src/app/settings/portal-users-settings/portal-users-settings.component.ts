import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserListDTO } from '../../dto/user-list.interface';
import { UserAddFormComponent } from './user-add-form/user-add-form.component';
import { ChangeDetectorRef } from '@angular/core';
import { UserRemoveConfirmationComponent } from './user-remove-confirmation/user-remove-confirmation.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-portal-users-settings',
  templateUrl: './portal-users-settings.component.html',
  styleUrls: ['./portal-users-settings.component.scss']
})
export class PortalUsersSettingsComponent implements OnInit {
  users: UserListDTO[] = [];
  displayedColumns: string[] = ['action', 'userID','username', 'email', 'telephone', 'role','profile' ,'invitationStatus', 'workload'];
  expandedElement: UserListDTO | null = null;

  constructor(public dialog: MatDialog, private cdr: ChangeDetectorRef,private snackBar: MatSnackBar,) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    // Initialize with some dummy data
    this.users = [
      {
        userId: '1',
        username: 'testuser',
        email: 'test@example.com',
        telephone: '1234567890',
        role: 'Admin',
        invitationStatus: 'Pending',
        workload: 1, // Set initial workload based on number of cases
        profile: 'Default',
        name: 'Test User',
        userID: '1',
        firstName: 'Test',
        lastName: 'User',
        showCases: false,
        cases: [
          {
            caseId: 'C1',
            severity: 'High',
            startDate: '2024-01-01',
            projectNumber: 'P1234',
            status: 'Open',
            priority: 'High',
            incidentId: 'INC1',
            description: 'Case description goes here',
            username: 'testuser'
          }
        ]
      },
      // Add more users as needed
    ];
  }

  openAddUserForm(): void {
    const dialogRef = this.dialog.open(UserAddFormComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((newUser: UserListDTO) => {
      if (newUser) {
        newUser.showCases = false;
        newUser.workload = newUser.cases?.length || 0;
        this.users = [...this.users, newUser];
        this.snackBar.open('Successfully added user', 'Close', { duration: 3000 });
        this.cdr.detectChanges();
      } else {
        this.snackBar.open('Failed to add user', 'Close', { duration: 3000 });
      }
    });
  }

  openRemoveUserDialog(user: UserListDTO): void {
    const dialogRef = this.dialog.open(UserRemoveConfirmationComponent, {
      width: '400px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onUserRemoved(result);
        this.snackBar.open('Successfully removed user', 'Close', { duration: 3000 });
      } else {
        this.snackBar.open('Failed to remove user', 'Close', { duration: 3000 });
      }
    });
  }


  onUserRemoved(userId: string): void {
    this.users = this.users.filter(user => user.userId !== userId);
    this.cdr.detectChanges(); // Update the UI
  }

  toggleUserCases(user: UserListDTO): void {
    this.expandedElement = this.expandedElement === user ? null : user;
    this.cdr.detectChanges();  // Ensure the UI updates
  }
}
