import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FundingIncidentReportData } from '../dto/funding-related.interface';
import { FundingRelatedReport } from './incident-report.model';
import { NonFundingRelatedReport } from './incident-report.model';
 

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiUrl = 'http://your-api-url.com/api/reports'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  saveReport(report: FundingRelatedReport | NonFundingRelatedReport): Observable<any> {
    return this.http.post(this.apiUrl, report);
  }

  getAssignedReports(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/assigned-reports`);
  }

  getFundingRelatedData(reportId: string): Observable<FundingIncidentReportData> {
    return this.http.get<FundingIncidentReportData>(`${this.apiUrl}/funding-related-data/${reportId}`);
  }
}
