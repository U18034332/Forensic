import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './tool-bar/toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { UserDropdownComponent } from './user-dropdown/user-dropdown.component';
import { MatDividerModule } from '@angular/material/divider'
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatDrawerContent } from '@angular/material/sidenav';
import { MatDrawer } from '@angular/material/sidenav';
import { MatDrawerContainer } from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatCard } from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
@NgModule({
  declarations: [
    ToolbarComponent,
    UserDropdownComponent,
    SideNavComponent,
  
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatDrawerContent,
    MatDrawer,
    MatDrawerContainer,
    MatNavList,
    RouterModule,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavModule,
    MatCard,
    MatCardModule
   
  ],
  exports: [
    ToolbarComponent, // If you want to use ToolbarComponent outside CoreModule
    SideNavComponent,
   
  ]
})
export class CoreModule { }
