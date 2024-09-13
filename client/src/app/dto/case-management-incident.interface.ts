export interface CaseManagementIncidentDTO {
    reportNumber: string;
    startDate: string;        // Use Date type if you want to handle dates more robustly
    dateReported: string;     // Use Date type if you want to handle dates more robustly
    province: string;
    caseType: string;
    caseSubType: string;
    channel: string;
    priority: string;
    status: string;
    levelDetected: string;
    divisionDetected: string;
    allocatedDescription: string;
  }
  