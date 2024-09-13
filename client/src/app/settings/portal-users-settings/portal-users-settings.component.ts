import { Component } from '@angular/core';

@Component({
  selector: 'app-portal-users-settings',
  templateUrl: './portal-users-settings.component.html',
  styleUrls: ['./portal-users-settings.component.scss']
})
export class PortalUsersSettingsComponent {

  users = [
    {
      username: 'John Doe',
      email: 'john.doe@example.com',
      telephone: '123-456-7890',
      role: 'Manager',
      userId: '1',
      invitationStatus: 'Accepted',
      workload: 20,
      cases: [
        { caseId: 'C1', severity: 'High', startDate: '2023-01-01', projectNumber: 'P1', status: 'Open', priority: 'High' },
        { caseId: 'C2', severity: 'Low', startDate: '2023-02-01', projectNumber: 'P2', status: 'Open', priority: 'Low' },
        { caseId: 'C3', severity: 'High', startDate: '2023-03-01', projectNumber: 'P3', status: 'Open', priority: 'High' },
        { caseId: 'C4', severity: 'Low', startDate: '2023-04-01', projectNumber: 'P4', status: 'Open', priority: 'Low' },
        { caseId: 'C5', severity: 'High', startDate: '2023-05-01', projectNumber: 'P5', status: 'Open', priority: 'High' },
        { caseId: 'C6', severity: 'Low', startDate: '2023-06-01', projectNumber: 'P6', status: 'Open', priority: 'Low' },
        { caseId: 'C7', severity: 'High', startDate: '2023-07-01', projectNumber: 'P7', status: 'Open', priority: 'High' },
        { caseId: 'C8', severity: 'Low', startDate: '2023-08-01', projectNumber: 'P8', status: 'Open', priority: 'Low' },
        { caseId: 'C9', severity: 'High', startDate: '2023-09-01', projectNumber: 'P9', status: 'Open', priority: 'High' },
        { caseId: 'C10', severity: 'Low', startDate: '2023-10-01', projectNumber: 'P10', status: 'Open', priority: 'Low' },
      ]
    },
    // Add more users as needed...
  ];

  displayedColumns: string[] = ['action', 'username', 'email', 'telephone', 'role', 'userId', 'invitationStatus', 'workload'];

  // Function to apply CSS classes based on workload value
  getWorkloadClass(workload: number): string {
    if (workload > 30) {
      return 'workload-high';
    } else if (workload > 15) {
      return 'workload-medium';
    } else {
      return 'workload-low';
    }
  }

  // Function to apply CSS classes based on severity of cases
  getSeverityClass(severity: string): string {
    return severity === 'High' ? 'severity-high' : 'severity-low';
  }

  // Navigate to user popover and display the user’s assigned cases
  navigateToUser(userId: string): void {
    const element = document.getElementById(`user-${userId}`);
    if (element) {
      element.style.display = 'block';  // Ensure popover is visible
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Element not found:', `user-${userId}`);
    }
  }

  // Function to close the popover and return to user list
  closePopover(event: Event): void {
    event.preventDefault();
    const popoverElements = document.querySelectorAll('.popover');
    popoverElements.forEach(popover => {
      popover.setAttribute('style', 'display: none;');
    });
  }
}
