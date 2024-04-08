import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grant-case-management',
  templateUrl: './grant-case-management.page.html',
  styleUrls: ['./grant-case-management.page.scss'],
})
export class GrantCaseManagementPage implements OnInit {
  // Added property to track the expanded state of the Sub Files section
  subFilesExpanded: boolean = false;

  // Added array to list the annexures in the Sub Files section
  annexures: string[] = ['Annexure A', 'Annexure B', 'Annexure C', 'Annexure D', 'Annexure E', 'Annexure F'];

  constructor() { }

  ngOnInit() {
  }

  // Added method to toggle the Sub Files section
  toggleSubFiles(): void {
    this.subFilesExpanded = !this.subFilesExpanded;
  }
}
