import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { AuthenticationDto } from '../../dto/authentication.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  token: string = '';
  errorMessage: string = '';
  authDto: AuthenticationDto = {
    username: '',
    password: ''
  }

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  login(): void {
    // this.authService.login(this.authDto.username, this.authDto.password)
  //   .subscribe((response) => {
  //     const token = response.token;
  //     this.authService.setToken(token);
  //     this.token = this.authService.getToken();
  //     console.log('Login response:', this.token);
  //     this.authService.setIsLoggedIn(true)
  //     console.log(this.authService.isLoggedIn())
  //     // Redirect to dashboard or handle success
  //     this.router.navigate(['/dashboard']);
  //   }, error => {
  //     console.error('Login failed:', error);
  //     this.authService.setIsLoggedIn(false)
  //     this.errorMessage = error.error.message;
  //   });
  this.authService.setIsLoggedIn(true);
  this.router.navigate(['/dashboard']);  // Temporary token bypass !
  }


  forgotPw() : void {
    this.router.navigate(['/forgot'])
  }
}





