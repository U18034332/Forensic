import { Component, Input, OnInit } from '@angular/core';
import { FundingIncidentReportData } from '../../dto/funding-related.interface';

@Component({
  selector: 'app-assessment-funding',
  templateUrl: './assessment-funding.component.html',
  styleUrls: ['./assessment-funding.component.scss']
})
export class AssessmentFundingComponent implements OnInit {
  @Input() dataSource: FundingIncidentReportData[] = [];

  displayedColumns: string[] = ['caseID', 'cases', 'startDate', 'status', 'priority',
    'caseType', 'province', 'channel', 'levelDetected', 'teams',
    'lastModified', 'caseEndDate', 'actions'];

  ngOnInit(): void {}
}
