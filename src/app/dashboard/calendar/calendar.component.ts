import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  model = 'today';
  color: any = "y";
  constructor(
    public dialogRef: MatDialogRef<CalendarComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onOKClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {

  }
  onClick() {
   
  }
}
