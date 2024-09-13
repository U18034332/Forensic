import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('drawer') drawer!: MatDrawer;

  title = 'Forensic System';
  isSettingsPage: boolean = false;
  
  // Declare showToolbar to manage the visibility of the toolbar
  showToolbar: boolean = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentUrl = this.router.url;

      // Hide the toolbar on the login and forgot-password pages
      this.showToolbar = !(currentUrl === '/login' || currentUrl === '/forgot-password');

      // Logic for showing side navigation based on settings route
      this.isSettingsPage = this.router.url.startsWith('/Settings') ||
                            this.router.url.startsWith('/Storage') ||
                            this.router.url.startsWith('/Profiles') ||
                            this.router.url.startsWith('/Portal-Users') ||
                            this.router.url.startsWith('/Audit-Logs');
    });
  }

  ngAfterViewInit() {
    // Perform actions that depend on drawer being initialized
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };
}
