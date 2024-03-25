import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor() { }

<<<<<<< HEAD
  ngOnInit() {
  }

=======
  ngOnInit(): void {
    this.getData()
  }

  getData():void{
    this.dashService.getData()
    .subscribe((response) => {
      this.total = response
      console.log('Dashboard response:', response);
      // Redirect to dashboard or handle success
    }, error => {
      console.error('Dashboard failed:', error);
      // Handle error, show error message, etc.
    });
  }
>>>>>>> origin/login
}
