// google-calendar.service.ts
import { Injectable } from '@angular/core';
import { loadGapiInsideDOM, gapi } from 'gapi-script';

@Injectable({
  providedIn: 'root'
})
export class GoogleCalendarService {
  constructor() {
    this.loadGapi();
  }

  private loadGapi() {
    loadGapiInsideDOM().then(() => {
      gapi.load('client:auth2', this.initClient);
    });
  }

  private initClient() {
    gapi.client.init({
      apiKey: 'YOUR_API_KEY',
      clientId: 'YOUR_CLIENT_ID',
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
      scope: 'https://www.googleapis.com/auth/calendar.readonly'
    }).then(() => {
      // Handle successful authentication
    });
  }

  public getEvents(): Promise<any> {
    return gapi.client.calendar.events.list({
      'calendarId': 'primary',
      'timeMin': (new Date()).toISOString(),
      'showDeleted': false,
      'singleEvents': true,
      'maxResults': 10,
      'orderBy': 'startTime'
    });
  }
}
