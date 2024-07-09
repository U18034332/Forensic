export interface FundingIncidentReportData {
  id?: number;
  caseID: string;
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
  // Add other fields from your form
}

export interface AssessmentFundedReport extends FundingIncidentReportData {
  status: string;
}
