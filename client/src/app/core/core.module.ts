import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './tool-bar/toolbar.component';
import { UserDropdownComponent } from './user-dropdown/user-dropdown.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { NotificationSidePanelComponent } from './tool-bar/notification-side-panel/notification-side-panel.component';
import { MatCard } from '@angular/material/card';
import { RouterOutlet } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CustomOverlayContainerDirective } from './tool-bar/notification-side-panel/custom-overlay-container.directive';
import { MatCardModule } from '@angular/material/card';
import { OverlayModule } from '@angular/cdk/overlay';




@NgModule({
  declarations: [
    ToolbarComponent,
    UserDropdownComponent,
    SideNavComponent,
    NotificationSidePanelComponent,
    CustomOverlayContainerDirective,
    
    // Include NotificationSidePanelComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatSidenavModule,
    MatDialogModule,
    MatCard,
    RouterOutlet,
    SidebarModule,
    ButtonModule,
    CardModule,
    MatCardModule,
    OverlayModule
  
    
  ],
  exports: [
    ToolbarComponent,
    SideNavComponent,
    NotificationSidePanelComponent // Export NotificationSidePanelComponent for external use
  ]
  
})
export class CoreModule { }
