import { Component, ElementRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarComponent } from './calendar/calendar.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public name = 'vu';
  constructor(private elementRef: ElementRef,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openCalendarDialog(): void {
    const dialogRef = this.dialog.open(CalendarComponent, {
      height:'169px',
      width: '374px',
      data: { }

    });
  }

}
