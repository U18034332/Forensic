import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap, catchError, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';

  private loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }

  constructor(private http: HttpClient) {
    this.loggedInSubject.next(!!this.getToken());
  }

  login(email: string, passcode: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, passcode })
      .pipe(
        tap((response: any) => {
          this.storeToken(response.token);
          this.loggedInSubject.next(true);
        }),
        catchError(this.handleError)
      );
  }

  logout(): void {
    this.clearToken();
    this.loggedInSubject.next(false);
  }

  changePassword(username: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/forgot_password`, { username, email, password })
      .pipe(
        catchError(this.handleError)
      );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  private storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private clearToken(): void {
    localStorage.removeItem('token');
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}

