import { Component } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Forensic System';

  constructor(private router:Router) {}
  isLoggedIn() {
    const currentUrl = this.router.url;
    if (currentUrl === '/'){
      return false;
    }
    return true
  }
}
