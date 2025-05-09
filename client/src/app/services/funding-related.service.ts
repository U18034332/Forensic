import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { AuthService } from "./auth-service.service";
import { FundingIncidentReportData } from "../dto/funding-related.interface";
import { IncidentReportEvaluation } from "../models/incident-report-evaluation";

@Injectable({
  providedIn: 'root'
})
export class FundingRelatedService {

  private apiUrl = 'http://localhost:8080/api/v1/admin-only/incident-report/funding';
  private token: string | null = null; // Initialize token as nullable string

  constructor(private http: HttpClient, private authService: AuthService) {
    this.token = this.authService.getToken() || null; // Assign token or null if getToken() returns null
  }

  addFundingRelatedReport(fundingReport: FundingIncidentReportData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create-report`, fundingReport, { headers: this.getAuthHeaders() })
      .pipe(
        tap((response: any) => {
          console.log('Funding report submitted successfully', response);
        }),
        catchError(this.handleError)
      );
  }

  getAllToBeAssessedFundingRelatedIncidentReports(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get/unassigned`, {headers: this.getAuthHeaders() })
    .pipe(
      tap((response: any) => {
        console.log(response); 
      }),
      catchError(this.handleError)
    );
  }

  getReport(reportNumber: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}get-report/${reportNumber}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getFilledIncidentReports(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get/assessed`, {headers: this.getAuthHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }
  
  assessIncidentReport(incidentReportAssessmentState: IncidentReportEvaluation): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/assessment`,incidentReportAssessmentState ,{headers: this.getAuthHeaders() })
    .pipe(
      tap((res) => {
        console.log("Successfully asssessed the report: ", res)
      }), 
      catchError(this.handleError)
    )
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
    this.token = this.authService.getToken() || null; // Update token or null if getToken() returns null
    console.log('Token in getAuthHeaders:', this.token);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return headers;
  }
}
