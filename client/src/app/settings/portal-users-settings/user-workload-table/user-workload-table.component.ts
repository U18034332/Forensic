import { Component, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { UserWorkloadDTO } from '../../../dto/user-workload.interface';

@Component({
  selector: 'app-user-workload-table',
  templateUrl: './user-workload-table.component.html',
  styleUrls: ['./user-workload-table.component.scss']
})
export class UserWorkloadTableComponent implements OnChanges {
  @Input() workload: UserWorkloadDTO[] = []; // Accept an array of workload details
  @Input() userId!: string; // Accept userId as input to fetch specific workload

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['workload']) {
      console.log('Workload changed:', this.workload);
      this.cdr.detectChanges(); // Force change detection
    }

    if (changes['userId']) {
      this.loadWorkload(); // Load workload when userId changes
    }
  }

  loadWorkload(): void {
    // Fetch workload based on userId (implement your fetching logic here)
    // Example:
    // this.workloadService.getWorkloadForUser(this.userId).subscribe(data => {
    //   this.workload = data;
    // });
  }

  getSeverityClass(severity: string): string {
    return severity === 'High' ? 'severity-high' : 'severity-low';
  }
}
