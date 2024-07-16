import { MatButton } from "@angular/material/button";

export interface FundingIncidentReportData {
  id?: number;
  reportID: string;
  cases: string;
  startDate: Date;
  status: string;
  priority: string;
  caseType: string;
  province: string;
  channel: string;
  levelDetected: string;
  teams: string;
  lastModified: Date;
  caseEndDate: Date;
  dateReported: string;
 
}
  // Add other fields from your form


export interface AssessmentFundedReport extends FundingIncidentReportData {
  status: string;
}
