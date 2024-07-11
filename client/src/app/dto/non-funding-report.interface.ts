export interface NonFundingIncidentReportData {
  startDate: string;
  dateReported: string;
  province: string;
  caseType: string;
  caseSubType: string
  channel: string;
  priority: string;
  status: string;
  levelDetected: string;
  allocatedDescription: string;
  divisionDetected: string;
  id?: number;
  date: Date;
  reportID:string ;
  sector:string;
}
export interface AssessmentNonFundedReport extends NonFundingIncidentReportData {
  status: string;
}
