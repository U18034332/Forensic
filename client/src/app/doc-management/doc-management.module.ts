import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DocManagementComponent } from './doc-management.component';
import { DocManagementComponentRoutingModule } from './doc-management-routing.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DocManagementComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, // Import FormsModule for ngModel
    DocManagementComponentRoutingModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
  ]
})
export class DocManagementModule { }
