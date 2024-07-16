import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-funding-reports',
  templateUrl: './funding-reports.component.html',
  styleUrls: ['./funding-reports.component.scss']
})
export class FundingReportsComponent implements OnInit {
  fundingReports = new MatTableDataSource([
    { reportid: 1, decision: 'not recommended', datereported: '2024-01-01', user: 'User 1', firm: 'firm 1', reason: 'why', status: 'closed', channel: 'Hotline',casetype: 'Theft', priority: 'Simple' },
    
    // Add more data as needed
  ]);
  displayedColumns: string[] = ['reportid', 'decision','user','firm','reason', 'datereported','status','channel','casetype','priority',];


  constructor() {}

  ngOnInit(): void {}
}
