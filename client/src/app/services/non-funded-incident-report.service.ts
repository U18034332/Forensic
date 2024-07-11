import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap, catchError, throwError } from "rxjs";
import { NonFundingIncidentReportData } from "../models/non-funding-report.interface";
import { AuthService } from "./auth-service.service";

@Injectable({
  providedIn: 'root'
})
export class NonFundedIncidentReportService {

  private apiUrl = 'http://localhost:8080/api/v1/admin-only/incident-report/non-funding';
  private token = this.authService.getToken();

  constructor(private http: HttpClient, private authService: AuthService) { }

  addNonFundingRelatedIncidentReport(incidentReport: NonFundingIncidentReportData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create-report`, incidentReport, { headers: this.getAuthHeaders() })
      .pipe(
        tap((response: any) => {
          console.log('Report submitted successfully', response);
        }),
        catchError(this.handleError)
      );
  }

  getAllToBeAssessedNonFundingRelatedIncidentReports(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get/unassigned`, {headers: this.getAuthHeaders() })
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


