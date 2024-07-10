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
    report.id = Date.now();
    const currentReports = this.fundingReportsSubject.value;
    this.fundingReportsSubject.next([...currentReports, report]);
  }

  addNonFundingReport(report: AssessmentNonFundedReport): void {
    report.id = Date.now();
    const currentReports = this.nonFundingReportsSubject.value;
    this.nonFundingReportsSubject.next([...currentReports, report]);
  }

  getFundedAssessmentReports(): Observable<AssessmentFundedReport[]> {
    return this.fundingReports$;
  }

  getNonFundedAssessmentReports(): Observable<AssessmentNonFundedReport[]> {
    return this.nonFundingReports$;
  }
}
