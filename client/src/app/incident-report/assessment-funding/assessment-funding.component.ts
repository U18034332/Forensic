import { Component, Input, OnInit } from '@angular/core';
import { FundingIncidentReportData } from '../../dto/funding-related.interface';
import { MatDialog } from '@angular/material/dialog';
import { InvestigationDialogComponent } from '../investigation-dialog/investigation-dialog.component';
import { NotRecommendedDialogComponent } from '../not-recommended-dialog/not-recommended-dialog.component';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-assessment-funding',
  templateUrl: './assessment-funding.component.html',
  styleUrls: ['./assessment-funding.component.scss']
})
export class AssessmentFundingComponent implements OnInit {
  @Input() dataSource: FundingIncidentReportData[] = [];

  displayedColumns: string[] = [
    'reportID', 'startDate', 'dateReported', 'status', 'priority', 'view',
    'actions'
  ];

  actionMenuItems: SelectItem[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.actionMenuItems = [
      { label: 'Recommended for Investigation', value: 'recommend' },
      { label: 'Not Recommended for Investigation', value: 'notRecommend' }
    ];
  }

  handleActionChange(event: any): void {
    const selectedAction = event.value;
    if (selectedAction === 'recommend') {
      this.openInvestigationDialog();
    } else if (selectedAction === 'notRecommend') {
      this.openNotRecommendedDialog();
    }
  }

  openInvestigationDialog(): void {
    const dialogRef = this.dialog.open(InvestigationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed with result:', result);
    });
  }

  openNotRecommendedDialog(): void {
    const dialogRef = this.dialog.open(NotRecommendedDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result?.action === 'submit') {
        console.log('Reason for not recommending:', result.reason);
      }
    });
  }
}
