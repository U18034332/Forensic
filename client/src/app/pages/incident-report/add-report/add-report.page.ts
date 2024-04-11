import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-report-form', // ensure this selector is correct
  templateUrl: './add-report.page.html',
  styleUrls: ['./add-report.page.scss'],
})
export class AddReportPage {
  report: any = {};

  // Function to handle form submission - Renamed to match the HTML template
  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  // Function to handle cancel action - Added to match the HTML template
  onCancel() {
    console.log('Cancel action triggered');
  }
}
