import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { CalendarEventDialogComponent } from './calendar-event-dialog/calendar-event-dialog.component';
import { CoreModule } from '../core/core.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatetimepickerModule } from '@mat-datetimepicker/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarEventDialogComponent,
    
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    CoreModule,
    FullCalendarModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDatetimepickerModule,
    MatDatepicker,
    MatCardModule
  ]
})
export class CalendarModule { }
