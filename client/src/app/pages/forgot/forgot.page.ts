import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage {

  constructor(private router: Router) { } // Inject Router in the constructor

  sendCode(): void {
    this.router.navigate(['/code-verification']);
  }
}
