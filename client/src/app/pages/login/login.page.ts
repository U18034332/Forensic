import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  token: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  login(email: any, passcode: any): void {
    this.authService.login(email, passcode)
      .subscribe((response) => {
        const token = response.token;
        this.authService.setToken(token);
        this.token = this.authService.getToken();
        console.log('Login response:', this.token);
        this.authService.setIsLoggedIn(true)
        console.log(this.authService.isLoggedIn())
        // Redirect to dashboard or handle success
        this.router.navigate(['/dashboard']);
      }, error => {
        console.error('Login failed:', error);
        this.authService.setIsLoggedIn(false)
        this.errorMessage = error.error.message;
      });
  }
  forgotPw() : void {
    this.router.navigate(['/forgot'])
  }
}





