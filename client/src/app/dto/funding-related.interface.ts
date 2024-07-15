import { MatButton } from "@angular/material/button";

export interface FundingIncidentReportData {
  startDate?: Date;
  dateReported?: Date;
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
  // Add other fields from your form


export interface AssessmentFundedReport extends FundingIncidentReportData {
  status: string;
}
