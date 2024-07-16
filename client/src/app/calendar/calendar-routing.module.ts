import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar.component'; // Import the CalendarComponent

const routes: Routes = [
  { path: 'calendar', component: CalendarComponent } // Define the route for CalendarComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
