import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CaseAcceptanceService {

  private apiUrl = 'http://localhost:8080/api/v1/incident-report/funding';
  private authToken = this.authService.getToken();

  constructor(private http: HttpClient,private authService: AuthenticationService) { }

  // Function to send POST request with authentication
  postData(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });

    return this.http.post<any>(`${this.apiUrl}/acceptance`, data, { headers });
  }
}
