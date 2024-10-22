import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from './auth-service.service';
import { UserListDTO } from '../dto/user-list.interface';
import { NewUserDTO } from '../dto/new-user.interface';
import { AddUserResponseDTO } from '../dto/add-user-response.interface';
import { RemoveUserResponseDTO } from '../dto/remove-user-response.interface';
import { UserWorkloadDTO } from '../dto/user-workload.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private adminApiUrl = 'http://localhost:8080/api/v1/admin-only';
  private userApiUrl = 'http://localhost:8080/api/v1/users';
  private token: string | null = this.authService.getToken();

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Get all users
  getAllUsers(): Observable<UserListDTO[]> {
    return this.http.get<UserListDTO[]>(`${this.adminApiUrl}/users/role/user`, { headers: this.getAuthHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Add a new user
  addUser(newUser: NewUserDTO): Observable<AddUserResponseDTO> {
    return this.http.post<AddUserResponseDTO>(`${this.adminApiUrl}/users`, newUser, { headers: this.getAuthHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Remove a user
  removeUser(userId: string): Observable<RemoveUserResponseDTO> {
    return this.http.delete<RemoveUserResponseDTO>(`${this.adminApiUrl}/users/${userId}`, { headers: this.getAuthHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Get user workload
  getUserWorkload(userId: string): Observable<UserWorkloadDTO[]> {
    return this.http.get<UserWorkloadDTO[]>(`${this.adminApiUrl}/users/${userId}/workload`, { headers: this.getAuthHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Error handling
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  // Get authorization headers
  private getAuthHeaders(): HttpHeaders {
    this.token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
  }

  getCurrentUser(): Observable<UserListDTO> {
    return this.http.get<UserListDTO>(`${this.userApiUrl}/get/user`, { headers: this.getAuthHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }
}
