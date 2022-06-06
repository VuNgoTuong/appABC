import { Component, ElementRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CalendarComponent } from '../dashboard/calendar/calendar.component';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  constructor(private elementRef: ElementRef, private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#DDDDDD';
    this.elementRef.nativeElement.ownerDocument.body.style.width = '100%';
  }

  openCalendarDialog(): void {
    const dialogRef = this.dialog.open(CalendarComponent, {
      height:'180px',
      width: '350px',
      data: { }
    });
  }
}
