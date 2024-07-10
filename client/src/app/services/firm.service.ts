import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirmService {

  constructor() { }

  // Example method to get firms
  getFirms(): Observable<string[]> {
    const firms = ['Firm1', 'Firm2', 'Firm3']; // Example data, replace with actual API call if needed
    return of(firms);
  }
}
