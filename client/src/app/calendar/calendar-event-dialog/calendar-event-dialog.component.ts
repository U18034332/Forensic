import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA ,MatDialogConfig} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calendar-event-dialog',
  templateUrl: './calendar-event-dialog.component.html',
  styleUrls: ['./calendar-event-dialog.component.scss']
})
export class CalendarEventDialogComponent {
  eventForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CalendarEventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required],
      description: ''
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      this.dialogRef.close(this.eventForm.value);
    }
  }
}
