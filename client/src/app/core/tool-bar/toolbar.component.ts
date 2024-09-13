import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  sidebarVisible2: boolean = false;

  constructor(private router: Router) { }

  openNotificationSidePanel() {
    this.sidebarVisible2 = true;
  }

  closeNotificationSidePanel() {
    this.sidebarVisible2 = false;
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
