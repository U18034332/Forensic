// user-workload.interface.ts
export interface UserWorkloadDTO {
    incidentId: string;        // Identifier for the incident
    caseId: string;            // Identifier for the case
    description: string;       // Description of the workload/case
    status: string;            // Current status of the workload
    username: string;          // Username associated with this workload
    severity: string;          // Severity of the case (e.g., High, Low)
    startDate: string;         // Start date of the case
    projectNumber: string;     // Project number associated with the workload
    priority: string;          // Priority of the case (e.g., High, Medium, Low)
  }
  