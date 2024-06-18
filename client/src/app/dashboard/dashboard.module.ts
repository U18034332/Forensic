import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FirstWidgetComponent } from './dashboard-widget/first-widget.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    DashboardComponent,
    FirstWidgetComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatSidenavModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
