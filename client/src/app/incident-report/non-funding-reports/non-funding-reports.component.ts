import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NonFundedIncidentReportService } from '../../services/non-funded-incident-report.service';
import { NonFundingIncidentReportData } from '../../dto/non-funding-report.interface';

@Component({
  selector: 'app-non-funding-reports',
  templateUrl: './non-funding-reports.component.html',
  styleUrls: ['./non-funding-reports.component.scss']
})
export class NonFundingReportsComponent implements OnInit {
  nonFundingReports = new MatTableDataSource<NonFundingIncidentReportData>([]);
  displayedColumns: string[] = ['reportNumber', 'acceptance', 'user', 'firm', 'declineReason', 'dateReported', 'status', 'channel', 'caseType', 'priority'];

  constructor(private nonFundingRelatedIncidentReportService: NonFundedIncidentReportService) {}

  ngOnInit(): void {
    this.getFilledReports();
  }

  getFilledReports(): void {
    this.nonFundingRelatedIncidentReportService.getFilledIncidentReports()
      .subscribe((res: NonFundingIncidentReportData[]) => {
        console.log(res);
        this.nonFundingReports.data = res;
      }, (err) => {
        console.log(err);
      });
  }
}
