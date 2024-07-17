import { Component } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarEventDialogComponent } from './calendar-event-dialog/calendar-event-dialog.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  events: EventInput[] = [
    { id: '1', title: 'Event 1', start: '2024-07-16', end: '2024-07-18' },
    { id: '2', title: 'Event 2', start: '2024-07-17T10:00:00', end: '2024-07-17T12:00:00' }
  ];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    events: this.events,
    editable: true,
    selectable: true,
    selectMirror: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventDrop: this.handleEventChange.bind(this),
    eventResize: this.handleEventChange.bind(this),
    dateClick: this.handleDateClick.bind(this)
  };

  constructor(public dialog: MatDialog) {}

  handleDateClick(arg: any) {
    const dialogRef = this.dialog.open(CalendarEventDialogComponent, {
      width: '500px',
      data: { start: arg.dateStr, end: arg.dateStr }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newEvent = {
          id: String(Date.now()),
          title: result.title,
          start: result.start,
          end: result.end,
          description: result.description
        };
        this.events = [...this.events, newEvent];
        this.calendarOptions.events = [...this.events];
      }
    });
  }

  handleEventClick(arg: any) {
    alert('Event clicked: ' + arg.event.title);
  }

  handleDateSelect(selectInfo: any) {
    const dialogRef = this.dialog.open(CalendarEventDialogComponent, {
      width: '45%',
      data: { start: selectInfo.startStr, end: selectInfo.endStr }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newEvent = {
          id: String(Date.now()),
          title: result.title,
          start: result.start,
          end: result.end,
          description: result.description
        };
        this.events = [...this.events, newEvent];
        this.calendarOptions.events = [...this.events];
      }
    });
  }

  handleEventChange(changeInfo: any) {
    alert('Event changed: ' + changeInfo.event.title);
  }

  openEventDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '45%';
    dialogConfig.maxHeight = '90vh';
    // dialogConfig.panelClass = 'custom-dialog-container';

    const dialogRef = this.dialog.open(CalendarEventDialogComponent, dialogConfig);
  

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newEvent = {
          id: String(Date.now()),
          title: result.title,
          start: result.start,
          end: result.end
        };
        this.events = [...this.events, newEvent];
        this.calendarOptions.events = [...this.events];
      }
    });
  }
}
