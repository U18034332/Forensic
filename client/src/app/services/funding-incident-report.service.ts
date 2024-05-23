import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FundingIncidentReportService {

  private apiUrl = 'http://localhost:8080/api/v1/incident-report/funding';
  private authToken = this.authService.getToken();

  constructor(private http: HttpClient,private authService: AuthenticationService) { }

  // Function to send GET request with authentication
  getData(): Observable<JSON> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });

    return this.http.get<any>(`${this.apiUrl}/get/all`, { headers });
  }

  // Function to send POST request with authentication
  postData(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });

    return this.http.post<any>(`${this.apiUrl}/create`, data, { headers });
  }
}
