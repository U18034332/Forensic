import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-verification',
  templateUrl: './code-verification.page.html',
  styleUrls: ['./code-verification.page.scss'],
})
export class CodeVerificationPage implements OnInit {

  constructor() { }

  verifyCode() {
    // Implement code verification logic here
    console.log('Verify Code button clicked');
  }

  ngOnInit() {
  }
  token: string = '';
  errorMessage: string = '';

  
}
