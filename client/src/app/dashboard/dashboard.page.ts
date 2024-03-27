import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  amountWithHeld: number = 0
  newCases = 0
  closedCases = 0
  issues = 0

  constructor(private dashService: DashboardService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData():void{
    this.dashService.getData()
    .subscribe((response) => {
      this.amountWithHeld = response.amountWithHeld
      this.closedCases = response.closedCases
      this.newCases = response.newCases
      this.issues = response.issues
      console.log('Dashboard response:', response);
      // Redirect to dashboard or handle success
    }, error => {
      console.error('Dashboard failed:', error);
      // Handle error, show error message, etc.
    });
  }
}

