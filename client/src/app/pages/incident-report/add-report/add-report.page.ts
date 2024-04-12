import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FundingIncidentReport } from 'src/app/dto/funding-incident-report.interface';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-report-form', // ensure this selector is correct
  templateUrl: './add-report.page.html',
  styleUrls: ['./add-report.page.scss'],
})
export class AddReportPage {
  constructor(private modal: ModalController) { }
  report: FundingIncidentReport = {} as FundingIncidentReport

  // Function to handle form submission - Renamed to match the HTML template
  onSubmit(form: NgForm) {
    console.log(form.value)
    console.log(this.report)
    this.modal.dismiss()
  }

  // Function to handle cancel action - Added to match the HTML template
  onCancel() {
    console.log('Cancel action triggered')
    this.report = {} as FundingIncidentReport
    this.modal.dismiss()
    
  }
}
