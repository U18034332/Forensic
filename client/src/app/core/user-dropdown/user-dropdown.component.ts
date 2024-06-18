import { Component } from '@angular/core';

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

  constructor() { }
}
