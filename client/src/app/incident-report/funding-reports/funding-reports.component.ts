import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FundingRelatedService } from '../../services/funding-related.service';
import { FundingIncidentReportData } from '../../dto/funding-related.interface';

@Component({
  selector: 'app-funding-reports',
  templateUrl: './funding-reports.component.html',
  styleUrls: ['./funding-reports.component.scss']
})
export class FundingReportsComponent implements OnInit {
  fundingReports = new MatTableDataSource<FundingIncidentReportData>([]);
  displayedColumns: string[] = ['reportNumber', 'acceptance', 'user', 'firm', 'declineReason', 'dateReported', 'status', 'channel', 'caseType', 'priority'];



  constructor(private filledFundingReportsService: FundingRelatedService) {}

  ngOnInit(): void {
    this.getFilledReports()
  }

  getFilledReports(): void {
    this.filledFundingReportsService.getFilledIncidentReports()
      .subscribe((res: FundingIncidentReportData[]) => {
        console.log(res);
        this.fundingReports.data = res;
      }, (err) => {
        console.log(err);
      });
  }
}
