// import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable, throwError } from "rxjs";
// import { catchError, tap } from "rxjs/operators";
// import { AuthService } from "./auth-service.service";
// import { GrantCaseManagementData } from "../dto/grant-case-management.interface";

// @Injectable({
//   providedIn: 'root'
// })
// export class AddGrantCaseService {

//   private apiUrl = 'http://localhost:8080/api/v1/grant-case-management'; // Adjust API URL as per your backend endpoint

//   constructor(private http: HttpClient, private authService: AuthService) { }

//   addGrantCaseManagement(grantCaseData: GrantCaseManagementData): Observable<any> {
//     return this.http.post<any>(`${this.apiUrl}/create-case`, grantCaseData, { headers: this.getAuthHeaders() })
//       .pipe(
//         tap((response: any) => {
//           console.log('Grant case submitted successfully', response);
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
//     const token = this.authService.getToken();
//     const headers = new HttpHeaders({
//       'Authorization': `Bearer ${token}`
//     });
//     return headers;
//   }
// }
