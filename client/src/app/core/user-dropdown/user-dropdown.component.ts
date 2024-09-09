import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Import the Router service
import { AuthService } from '../../services/auth-service.service';// Import your AuthService
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.scss']
})
export class UserDropdownComponent implements OnInit {
  userInfo: any = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    userID: '123'
  };

  ngOnInit(): void {
    this.getLoggedInUser()
  }
  constructor(private router: Router, private authService: AuthService, private userService: UserService) { }


  getLoggedInUser() {
    this.userService.getCurrentUser().subscribe((response) => {
      this.userInfo = {
        name: response.firstName + ' ' + response.lastName,
        email: response.email,
        role: response.role,
        userID: response.userID
      }
    }, (err) => {
      console.log(err);
      
    });
  }
  

  logout() {
    // Call the logout method from AuthService
    this.authService.logout();

    // Redirect to the login page
    this.router.navigate(['/login']);
  }
}
