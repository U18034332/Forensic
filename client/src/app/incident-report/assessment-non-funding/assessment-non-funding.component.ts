import { Component, Input, OnInit } from '@angular/core';
import { NonFundingIncidentReportData } from '../../dto/non-funding-report.interface';

@Component({
  selector: 'app-assessment-non-funding',
  templateUrl: './assessment-non-funding.component.html',
  styleUrls: ['./assessment-non-funding.component.scss']
})
export class AssessmentNonFundingComponent implements OnInit {
  @Input() dataSource: NonFundingIncidentReportData[] = [];

  displayedColumns: string[] = ['reportID', 'startDate', 'dateReported','status', 'priority',
    'caseType', 'province', 'channel', 'levelDetected', 'divisionDetected', 'allocatedDescription',
    'lastModified', 'actions'];

  ngOnInit(): void {}
}
