import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-settings',
  templateUrl: './personal-settings.page.html',
  styleUrls: ['./personal-settings.page.scss'],
})
export class PersonalSettingsPage {
  notifications = {
    assigned: true,
    // other notifications settings
  };
  profilePicUrl: string = ''; // Explicitly typed as string

  constructor() { }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.readAndSetProfilePic(file);
    }
  }

  readAndSetProfilePic(file: File): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.profilePicUrl = e.target?.result as string; // Typecasting result to string
      // Here, you can upload the file to your server or handle it locally as needed.
    };
    reader.readAsDataURL(file);
  }
}
