import { AppRoutingModule } from 'src/app/app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingSideNavComponent } from './setting-side-nav.component';


@NgModule({
   declarations: [SettingSideNavComponent],
   imports: [
    CommonModule,
    AppRoutingModule // Import AppRoutingModule here
  ],
  exports: [SettingSideNavComponent]
})
export class SettingSideNavModule { }
