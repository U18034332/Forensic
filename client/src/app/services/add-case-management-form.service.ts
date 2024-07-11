// import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable, throwError } from "rxjs";
// import { tap, catchError } from "rxjs/operators";
// import { CaseManagementReportData } from "../dto/add-case-management-form.interface";
// import { AuthService } from "./auth-service.service";

// @Injectable({
//   providedIn: 'root'
// })
// export class CaseManagementFormService {

//   private apiUrl = 'http://localhost:8080/api/v1/case-management';
//   private token = this.authService.getToken();

//   constructor(private http: HttpClient, private authService: AuthService) { }

//   addCaseManagementReport(caseReport: CaseManagementReportData): Observable<any> {
//     return this.http.post<any>(`${this.apiUrl}/create-report`, caseReport, { headers: this.getAuthHeaders() })
//       .pipe(
//         tap((response: any) => {
//           console.log('Case report submitted successfully', response);
//         }),
//         catchError(this.handleError)
//       );
//   }

//   private handleError(error: HttpErrorResponse): Observable<never> {
//     let errorMessage = 'An unknown error occurred!';
//     if (error.error instanceof ErrorEvent) {
//       // Client-side or network error
//       errorMessage = `Error: ${error.error.message}`;
//     } else {
//       // Backend error
//       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//     }
//     console.error(errorMessage);
//     return throwError(errorMessage);
//   }

//   private getAuthHeaders(): HttpHeaders {
//     this.token = this.authService.getToken();
//     console.log('Token in getAuthHeaders:', this.token);
//     const headers = new HttpHeaders({
//       'Authorization': `Bearer ${this.token}`
//     });
//     return headers;
//   }
// }
