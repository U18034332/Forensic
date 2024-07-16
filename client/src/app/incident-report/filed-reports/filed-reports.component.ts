import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-filed-reports',
  templateUrl: './filed-reports.component.html',
  styleUrl: './filed-reports.component.scss'
})
export class FiledReportsComponent {
  @Input() set filedReports(value: any[]) {
    this.dataSource.data = value;
  }

  displayedColumns: string[] = ['reportID', 'actionType', 'details'];
  dataSource = new MatTableDataSource<any>();

  constructor() {}
}