import { Component } from '@angular/core';
import { NonFundingIncidentReportData } from '../../dto/non-funding-report.interface';

@Component({
  selector: 'app-non-funding-related-form',
  templateUrl: './non-funding-related-form.component.html',
  styleUrl: './non-funding-related-form.component.scss'
})
export class NonFundingRelatedFormComponent {
  onCancel: any;
  report: NonFundingIncidentReportData = {} as NonFundingIncidentReportData;
  
  onSubmit() {
    throw new Error('Method not implemented.');
  }

}
