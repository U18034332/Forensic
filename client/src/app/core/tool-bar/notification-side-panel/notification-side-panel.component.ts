import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-notification-side-panel',
  templateUrl: './notification-side-panel.component.html',
  styleUrls: ['./notification-side-panel.component.scss']
})
export class NotificationSidePanelComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NotificationSidePanelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  // Add methods and properties specific to your component

}
