export interface CaseManagementReportData {
    caseID: string;
    cases: string;
    startDate: string;
    status: string;
    priority: string;
    caseType: string;
    province: string;
    channel: string;
    levelDetected: string;
    teams: string;
    lastModified: string;
    caseEndDate: string;
    dateReported?: string;
    caseSubType?: string;
    allocatedDescription?: string;
    divisionDetected?: string;
    organisations?: string;
    sourceDetections?: string;
    sectors?: string;
  }
  