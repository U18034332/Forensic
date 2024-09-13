import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-funding-reports',
  templateUrl: './funding-reports.component.html',
  styleUrls: ['./funding-reports.component.scss']
})
export class FundingReportsComponent {
  @Input() dataSource: any;
  displayedColumns: string[] = ['reportNumber', 'acceptance', 'user', 'firm', 'declineReason', 'dateReported', 'status', 'channel', 'caseType', 'priority'];

  constructor() {}
}
