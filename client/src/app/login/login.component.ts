import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatDrawerContainer } from '@angular/material/sidenav';
// MatSidenavModule, MatDrawerContainer
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(`${username}:${password}`)
    });

    return this.http.get(this.apiUrl, { headers });
  }
}


@Component({
  selector: 'app-login',
  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  showFiller = false;
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor(private router: Router, private authService: AuthService) {}

  // constructor() {
  //   // Manually create HttpClient instance
  //   const http = new HttpClient(/* Provide necessary dependencies here */);
  //   this.authService = new AuthService(http);
  //   this.router = new Router()
  // }

  login() {
    
    this.authService.login(this.email, this.password).subscribe(
      response => {
        this.router.navigate(['/dashboard']);
      },
      error => {

      }
    );
  }
}
