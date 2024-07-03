import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discuss',
  templateUrl: './discuss.component.html',
  styleUrl: './discuss.component.scss'
})
export class DiscussComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
