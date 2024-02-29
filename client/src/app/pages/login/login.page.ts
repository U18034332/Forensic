import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  login(email: any, passcode: any): void {
    this.authService.login(email, passcode)
      .subscribe((response) => {
        console.log('Login response:', response); // Log the response
        // Redirect to dashboard or handle success
        this.router.navigate(['/dashboard']);
      }, error => {
        console.error('Login failed:', error);
        // Handle error, show error message, etc.
      });
  }
}




