import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProfileDTO } from '../dto/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://localhost:8080/api/profiles'; // Modify as necessary

  constructor(private http: HttpClient) {}

  getProfiles(): Observable<ProfileDTO[]> {
    return this.http.get<ProfileDTO[]>(`${this.apiUrl}/getAllProfiles`)
      .pipe(
        catchError(error => {
          throw 'Error in getting profiles: ' + error;
        })
      );
  }
//   assignUserToProfile(userId: string, profileId: string): Observable<AssignProfileResponseDTO> {
//     return this.http.post<AssignProfileResponseDTO>(`api/profiles/${profileId}/assign`, { userId });
//   }
}
