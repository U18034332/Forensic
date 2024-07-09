import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  // Example method to get users
  getUsers(): Observable<string[]> {
    const users = ['User1', 'User2', 'User3']; // Example data, replace with actual API call if needed
    return of(users);
  }
}
