import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { NonFundingIncidentReportData } from '../models/non-funding-report.interface';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class CaseManagementServiceService {

  private apiUrl = 'http://localhost:8080/api/v1/case_management/cases';
  private token = this.authService.getToken();

  constructor(private http: HttpClient, private authService: AuthService) { }

  createNewCase(incidentReport: NonFundingIncidentReportData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create-report`, incidentReport, { headers: this.getAuthHeaders() })
      .pipe(
        tap((response: any) => {
          console.log('Report submitted successfully', response);
        }),
        catchError(this.handleError)
      );
  }

  getAllCases(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get/unassigned`, {headers: this.getAuthHeaders() })
    .pipe(
      tap((response: any) => {
        console.log(response); 
      }),
      catchError(this.handleError)
    );
  }

  updateCase(incidentReport: NonFundingIncidentReportData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create-report`, incidentReport, { headers: this.getAuthHeaders() })
      .pipe(
        tap((response: any) => {
          console.log('Report submitted successfully', response);
        }),
        catchError(this.handleError)
      );
  }

  getReport(reportNumber: string): Observable<any> {
    const url = `${this.apiUrl}/get-report`;
    const headers = this.getAuthHeaders();
    const params = new HttpParams().set('reportNumber', reportNumber);

    return this.http.get<any>(url, { headers: headers, params: params }).pipe(
      tap(response => {
        console.log('Response:', response);
      }),
      catchError(this.handleError)
    );
  }

  getUserIncidentReports(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get/user/reports`, {headers: this.getAuthHeaders() })
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
