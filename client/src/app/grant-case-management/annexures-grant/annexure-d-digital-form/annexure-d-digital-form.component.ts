import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-annexure-d-digital-form',
  templateUrl: './annexure-d-digital-form.component.html',
  styleUrls: ['./annexure-d-digital-form.component.scss']
})
export class AnnexureDDigitalFormComponent {
  annexureD: any = {}; // Define annexureD as any type initially
  declaration: any = {}; // Declaration object to capture user's declaration details

  constructor(public dialogRef: MatDialogRef<AnnexureDDigitalFormComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      // Handle form submission logic here
      console.log('Form submitted successfully!', this.annexureD);
      this.dialogRef.close();
    } else {
      console.log('Error in the form.');
    }
  }
}
