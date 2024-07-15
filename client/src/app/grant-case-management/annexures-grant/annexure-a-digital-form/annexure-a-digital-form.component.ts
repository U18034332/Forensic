import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-annexure-a-digital-form',
  templateUrl: './annexure-a-digital-form.component.html',
  styleUrls: ['./annexure-a-digital-form.component.scss']
})
export class AnnexureADigitalFormComponent {

  constructor(public dialogRef: MatDialogRef<AnnexureADigitalFormComponent>) { }

  onClose(): void {
    this.dialogRef.close();
  }

}
