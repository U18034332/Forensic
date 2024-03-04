import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'http://localhost:8080/api/auth';
  private token = ''

  constructor(private http: HttpClient) { }

  setToken(token: string): void {
    localStorage.setItem(this.token, token);
  }

  getToken(): any {
    return localStorage.getItem(this.token);
  }

  login(email: string, passcode: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, passcode });
  }
}
