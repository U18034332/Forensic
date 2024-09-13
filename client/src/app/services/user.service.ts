import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private adminApiUrl = 'http://localhost:8080/api/v1/admin-only';
  private userApiUrl = 'http://localhost:8080/api/v1/users';
  private token = this.authService.getToken();

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllAdmins(): Observable<any> {
    return this.http.get<any>(`${this.adminApiUrl}/users/role/admin`, {headers: this.getAuthHeaders() })
    .pipe(
      tap((response: any) => {
        console.log(response); 
      }),
      catchError(this.handleError)
    );
  }

  getCurrentUser(): Observable<any> {
    return this.http.get<any>(`${this.userApiUrl}/get/user`, {headers: this.getAuthHeaders() })
    .pipe(
      tap((response: any) => {
        console.log(response); 
      }),
      catchError(this.handleError)
    );
  }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.adminApiUrl}/users/role/user`, {headers: this.getAuthHeaders() })
    .pipe(
      tap((response: any) => {
        console.log(response); 
      }),
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Backend error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  private getAuthHeaders(): HttpHeaders {
    this.token = this.authService.getToken();
    console.log('Token in getAuthHeaders:', this.token);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return headers;
  }

  
}
