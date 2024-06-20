import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth-service.service';


@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-login',
  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private email: string = '';
  private password: string = '';
  private token: string = ''
  

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    
    this.authService.login(this.email, this.password).subscribe(
      response => {
        this.token = response.token
        
        console.log(this.token);

        this.router.navigate(['/dashboard']);
        
      },
      error => {
        console.log(error);
        

      }
    );
  }
}
