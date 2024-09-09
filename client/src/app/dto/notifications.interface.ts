interface Notification {
    incidentReportNumber: string;
    assignedBy: string;
    read: boolean;
    timestamp: Date; // Optional: for sorting or displaying when the notification was received
  }
  