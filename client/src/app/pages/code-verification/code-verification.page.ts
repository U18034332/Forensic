import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-code-verification',
  templateUrl: './code-verification.page.html',
  styleUrls: ['./code-verification.page.scss'],
})
export class CodeVerificationPage {
  codeForm!: FormGroup; // Define a FormGroup to hold our form data
  errorMessage: string = ''; // To display error messages if needed

  constructor(private formBuilder: FormBuilder) { // Inject the FormBuilder service
    this.codeForm = this.formBuilder.group({
      token: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });
  }

  validateCode() {
    if (this.codeForm.valid) {
      // If form is valid, you can proceed with the validation logic
      console.log('Validation code:', this.codeForm.value.token);
      // Implement your validation logic here
    } else {
      // If form is not valid, set an error message
      this.errorMessage = 'Please enter a valid 6-digit code.';
    }
  }

  // Utility function to clear the error message
  clearError() {
    this.errorMessage = '';
  }
}
