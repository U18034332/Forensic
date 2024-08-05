import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-non-funding-reports',
  templateUrl: './non-funding-reports.component.html',
  styleUrls: ['./non-funding-reports.component.scss']
})
export class NonFundingReportsComponent {

  @Input() dataSource: any;
  displayedColumns: string[] = ['reportNumber', 'acceptance', 'user', 'firm', 'declineReason', 'dateReported', 'status', 'channel', 'caseType', 'priority'];

  constructor() {} 
}
