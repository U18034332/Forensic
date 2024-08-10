import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  sidebarVisible2: boolean = false;

  openNotificationSidePanel() {
    this.sidebarVisible2 = true;
  }

  closeNotificationSidePanel() {
    this.sidebarVisible2 = false;
  }
}
