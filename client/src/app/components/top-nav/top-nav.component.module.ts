import { AppRoutingModule } from 'src/app/app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav.component';


@NgModule({
   declarations: [TopNavComponent],
   imports: [
    CommonModule,
    AppRoutingModule // Import AppRoutingModule here
  ],
  exports: [TopNavComponent]
})
export class TopNavModule { }
