import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notification-side-panel',
  templateUrl: './notification-side-panel.component.html',
  styleUrls: ['./notification-side-panel.component.scss']
})
export class NotificationSidePanelComponent {
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  closeNotificationSidePanel() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
