import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import the Router service
import { AuthService } from '../../services/auth-service.service';// Import your AuthService

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.scss']
})
export class UserDropdownComponent {
  userInfo: any = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin'
  };

  constructor(private router: Router, private authService: AuthService) { }

  logout() {
    // Call the logout method from AuthService
    this.authService.logout();

    // Redirect to the login page
    this.router.navigate(['/login']);
  }
}
