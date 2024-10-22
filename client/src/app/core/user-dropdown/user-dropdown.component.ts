import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service.service';
import { UserService } from '../../services/user.service';
import { UserListDTO } from '../../dto/user-list.interface'; // Assuming this is where the user interface is defined

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.scss']
})
export class UserDropdownComponent implements OnInit {
  userInfo: Partial<UserListDTO> = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    userID: '123'
  };

  constructor(private router: Router, private authService: AuthService, private userService: UserService) {}

  ngOnInit(): void {
    this.getLoggedInUser();
  }

  getLoggedInUser(): void {
    this.userService.getCurrentUser().subscribe(
      (response: UserListDTO) => {
        this.userInfo = {
          name: `${response.firstName} ${response.lastName}`,
          email: response.email,
          role: response.role,
          userID: response.userId // Adjust the property name based on UserListDTO's definition
        };
      },
      (err: any) => {
        console.error('Error fetching user info:', err);
      }
    );
  }

  logout(): void {
    // Call the logout method from AuthService
    this.authService.logout();

    // Redirect to the login page
    this.router.navigate(['/login']);
  }
}
