import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { NotificationSidePanelComponent } from './notification-side-panel/notification-side-panel.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @ViewChild('drawer') drawer!: MatSidenav;

  constructor(private router: Router, private dialog: MatDialog) {}

  openNotificationSidePanel() {
    const dialogRef = this.dialog.open(NotificationSidePanelComponent, {
      width: '30%'
    });
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
