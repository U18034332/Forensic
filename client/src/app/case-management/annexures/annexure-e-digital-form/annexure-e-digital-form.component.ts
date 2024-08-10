import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-annexure-e-digital-form',
  templateUrl: './annexure-e-digital-form.component.html',
  styleUrls: ['./annexure-e-digital-form.component.scss']
})
export class AnnexureEDigitalFormComponent {
  annexureE: any = {}; // Define annexureE as any type initially
  declaration: any = {}; // Declaration object to capture user's declaration details
  confidentiality: any = {}; // Confidentiality object to capture form details

  constructor(public dialogRef: MatDialogRef<AnnexureEDigitalFormComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      // Handle form submission logic here
      console.log('Form submitted successfully!', this.annexureE);
      this.dialogRef.close();
    } else {
      console.log('Error in the form.');
    }
  }
}
