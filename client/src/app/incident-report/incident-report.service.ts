// src/app/incident-report/services/report.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FundingRelatedReport, NonFundingRelatedReport } from './incident-report.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiUrl = 'http://your-api-url.com/api/reports'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  saveReport(report: FundingRelatedReport | NonFundingRelatedReport): Observable<any> {
    return this.http.post(this.apiUrl, report);
  }
}
