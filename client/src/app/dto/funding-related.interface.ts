export interface FundingIncidentReportData {
  startDate: string;
  dateReported: string;
  projectNumber: string;
  province: string;
  caseType: string;
  caseSubType: string
  channel: string;
  priority: string;
  status: string;
  organisation: string;
  sourceDetection: string;
  sector: string;
  levelDetected: string;
  allocatedDescription: string;
  divisionDetected: string;
  assessmentStage: number;
}

export interface AssessmentFundedReport extends FundingIncidentReportData {
  status: string;
}
