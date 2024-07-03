import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NotRecommendedDialogComponent } from './not-recommended-dialog/not-recommended-dialog.component';
import { AddReportPanelComponent } from './add-report-panel/add-report-panel.component';
import { FundingRelatedFormComponent } from './funding-related-form/funding-related-form.component';

@Component({
  selector: 'app-incident-report',
  templateUrl: './incident-report.component.html',
  styleUrls: ['./incident-report.component.scss']
})
export class IncidentReportComponent {
  showRecommended = false;
  showNotRecommended = false;
  selectedOption: string = '';
  notRecommendedReason: string = '';

  constructor(private router: Router, public dialog: MatDialog) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  openAddReportDialog(): void {
    this.dialog.open(AddReportPanelComponent, {
      width: '250px',
      data: { reason: '' } // Initialize with empty reason
    });
  }

  openFundingRelatedReportDialog(): void {
    const dialogRef = this.dialog.open(FundingRelatedFormComponent, {
      width: '10%', // Set the width to 55% of the viewport width
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The funding related form dialog was closed');
      // Optionally handle the result if needed
    });
  }

  showRecommendedDropdown(): void {
    this.showRecommended = true;
    this.showNotRecommended = false;
  }

  openNotRecommendedDialog(): void {
    const dialogRef = this.dialog.open(NotRecommendedDialogComponent, {
      width: '150px',
      data: { reason: '' } // Initialize with empty reason
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        console.log('Received reason from dialog:', result);
        // Optionally, you can handle the reason here
        this.notRecommendedReason = result; // Update the reason in your component
        this.submitNotRecommendedReason(); // Optionally, submit the reason
      }
    });
  }

  toggleReason(): void {
    this.showNotRecommended = !this.showNotRecommended;
    if (!this.showNotRecommended) {
      this.notRecommendedReason = ''; // Clear the reason if not recommended is toggled off
    }
  }

  submitNotRecommendedReason(): void {
    console.log('Submitting reason:', this.notRecommendedReason);
    // Clear or handle the reason as needed
    this.notRecommendedReason = '';
    this.showNotRecommended = false; // Close the dialog or textarea after submission
  }
}
