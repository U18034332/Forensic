import { Component, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserListDTO } from '../../../dto/user-list.interface';
import { ProfileService } from '../../../services/profiles.service';

@Component({
  selector: 'app-user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrls: ['./user-add-form.component.scss']
})
export class UserAddFormComponent {
  @Output() userAdded = new EventEmitter<UserListDTO>();
  profiles: any[] = []; // This will hold the profiles fetched from the backend

  newUser: UserListDTO = {
    userId: '',
    username: '',
    email: '',
    telephone: '',
    role: 'Default',
    invitationStatus: 'Pending',
    workload: 0,
    profile: '',
    name: '',
    userID: '',
    firstName: '',
    lastName: '',
    showCases: false,
    cases: []
  };

  constructor(
    public dialogRef: MatDialogRef<UserAddFormComponent>,
    private cdr: ChangeDetectorRef,
    private profileService: ProfileService // Inject the ProfilesService
  ) {
    this.loadProfiles();
  }

  loadProfiles(): void {
    this.profileService.getProfiles().subscribe(
      profiles => this.profiles = profiles,
      error => console.error('Error fetching profiles', error)
    );
  }

  onSubmit(): void {
    this.userAdded.emit(this.newUser);
    this.dialogRef.close(this.newUser);
    this.cdr.detectChanges(); // Trigger change detection
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
