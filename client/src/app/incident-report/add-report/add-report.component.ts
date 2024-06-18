import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.scss']
})
export class AddReportComponent implements OnInit {
  onCancel: any;
report: any;
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  // report: { startDate: string; dateReported: string; projectNumber: string; province: string; caseType: string; channel: string; priority: string; status: string; organisation: string; sourceDetection: string; sector: string; levelDetected: string; allocatedDescription: string; divisionDetected: string; };

  constructor() { }

  ngOnInit() {}

}
