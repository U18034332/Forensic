import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-annexure-b-digital-form',
  templateUrl: './annexure-b-digital-form.component.html',
  styleUrls: ['./annexure-b-digital-form.component.scss']
})
export class AnnexureBDigitalFormComponent {
  annexureB: any = {}; // Define annexureB as any type initially

  constructor(public dialogRef: MatDialogRef<AnnexureBDigitalFormComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      // Handle form submission logic here
      console.log('Form submitted successfully!', this.annexureB);
      this.dialogRef.close();
    } else {
      console.log('Error in the form.');
    }
  }
}
