import { Component } from '@angular/core';

@Component({
  selector: 'app-allocate-user',
  templateUrl: './allocate-user.page.html',
  styleUrls: ['./allocate-user.page.scss'],
})
export class AllocateUserPage {
  // Define the users array here with a structure that includes a 'color' attribute
  users = [
    { id: 1, name: 'User 1', color: 'red' },
    { id: 2, name: 'User 2', color: 'yellow' },
    { id: 3, name: 'User 3', color: 'green' },
    // ... add more users as needed
  ];

  constructor() { }

  // Your additional methods and logic go here
}
