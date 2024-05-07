import { AppRoutingModule } from 'src/app/app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav.component';


@NgModule({
   declarations: [SideNavComponent],
   imports: [
    CommonModule,
    AppRoutingModule // Import AppRoutingModule here
  ],
  exports: [SideNavComponent]
})
export class SideNavModule { }
