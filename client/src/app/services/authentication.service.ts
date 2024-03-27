import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private logged = new BehaviorSubject<boolean>(false);
  public isLogged = this.logged.asObservable()

  private apiUrl = 'http://localhost:8080/api/auth';
  private token = ''

  constructor(private http: HttpClient) { }

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  login(email: string, passcode: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, passcode });
  }

  setIsLoggedIn(status: boolean) {
    this.logged.next(status)
  }

  isLoggedIn(): boolean {
    return this.logged.getValue()
  }
}
