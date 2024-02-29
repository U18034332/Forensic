import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  login(email: string, passcode: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, passcode });
  }

  // Other authentication methods (registration, logout, etc.)
}
