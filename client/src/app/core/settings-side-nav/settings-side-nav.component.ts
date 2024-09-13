import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-side-nav',
  templateUrl: './settings-side-nav.component.html',
  styleUrls: ['./settings-side-nav.component.scss']
})
export class SettingsSideNavComponent {
  @ViewChild('drawer') drawer!: MatDrawer; // Ensure drawer is properly referenced

  constructor(private router: Router) {}

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }

  toggleDrawer() {
    if (this.drawer) {
      console.log('Toggling drawer'); // Add this line
      this.drawer.toggle();
    }
  }
}
