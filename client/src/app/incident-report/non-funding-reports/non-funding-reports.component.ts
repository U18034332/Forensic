import { Component, Input, input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NonFundedIncidentReportService } from '../../services/non-funded-incident-report.service';
import { NonFundingIncidentReportData } from '../../dto/non-funding-report.interface';

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
