import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Notification {
  incidentReportNumber: string;
  assignedBy: string;
  read: boolean;
  timestamp: Date;
}

@Component({
  selector: 'app-notification-side-panel',
  templateUrl: './notification-side-panel.component.html',
  styleUrls: ['./notification-side-panel.component.scss']
})
export class NotificationSidePanelComponent {
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  notifications: Notification[] = [
    {
      incidentReportNumber: 'IR001',
      assignedBy: 'John Doe',
      read: false,
      timestamp: new Date()
    },
    {
      incidentReportNumber: 'IR002',
      assignedBy: 'Jane Smith',
      read: true,
      timestamp: new Date()
    },
    {
      incidentReportNumber: 'IR003',
      assignedBy: 'Alice Johnson',
      read: false,
      timestamp: new Date()
    }
  ];

  filteredNotifications = this.notifications;
  userName = 'John Doe';  // Replace with dynamic data if necessary
  closeNotificationSidePanel() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  filterNotifications(filter: string) {
    if (filter === 'all') {
      this.filteredNotifications = this.notifications;
    } else if (filter === 'read') {
      this.filteredNotifications = this.notifications.filter(notification => notification.read);
    } else if (filter === 'unread') {
      this.filteredNotifications = this.notifications.filter(notification => !notification.read);
    }
  }

  addNotification(incidentReportNumber: string, assignedBy: string) {
    const newNotification: Notification = {
      incidentReportNumber,
      assignedBy,
      read: false,
      timestamp: new Date()
    };
    this.notifications.push(newNotification);
    this.filterNotifications('all'); // Optionally refresh the filtered list
  }

  markAsRead(notification: Notification) {
    notification.read = true;
    this.filterNotifications('read'); // Automatically filter to "Read" after marking as read
  }
}
