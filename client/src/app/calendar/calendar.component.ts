import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };

  handleDateClick(eventInfo: any) {
    console.log('Date clicked', eventInfo.dateStr);
    // Handle date click logic here
  }

  handleEventClick(eventClickInfo: any) {
    console.log('Event clicked', eventClickInfo.event.title);
    // Handle event click logic here
  }
}
