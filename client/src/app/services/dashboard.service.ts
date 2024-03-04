import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiUrl = 'http://localhost:8080/api/dashboard';
  private authToken = this.authService.getToken();

  constructor(private http: HttpClient,private authService: AuthenticationService) { }

  // Function to send GET request with authentication
  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });

    return this.http.get<any>(`${this.apiUrl}/total`, { headers });
  }

  // Function to send POST request with authentication
  postData(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });

    return this.http.post<any>(`${this.apiUrl}/endpoint`, data, { headers });
  }
}
