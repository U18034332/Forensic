import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AssessmentFundedReport } from '../dto/funding-related.interface';
import { AssessmentNonFundedReport } from '../dto/non-funding-report.interface';

@Injectable({
  providedIn: 'root'
})
export class IncidentReportService {
  private fundingReportsSubject = new BehaviorSubject<AssessmentFundedReport[]>([]);
  private nonFundingReportsSubject = new BehaviorSubject<AssessmentNonFundedReport[]>([]);

  fundingReports$ = this.fundingReportsSubject.asObservable();
  nonFundingReports$ = this.nonFundingReportsSubject.asObservable();

  constructor() {}

  addFundingReport(report: AssessmentFundedReport): void {
    const currentReports = this.fundingReportsSubject.value;
    this.fundingReportsSubject.next([...currentReports, report]);
  }

  getFundedAssessmentReports(): Observable<AssessmentFundedReport[]> {
    return this.fundingReports$;
  }
}
