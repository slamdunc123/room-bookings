import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss']
})
export class DateTimePickerComponent implements OnInit {
  date: Date = new Date();
  settings = {
    bigBanner: true,
    timePicker: true,
    format: 'dd-MM-yyyy',
    defaultOpen: true
  };
  dateTime: Date = new Date();
  showPicked = false;

  onDateSelect($event) {
    console.log($event);
    this.dateTime = $event;
    console.log(this.dateTime);
    this.showPicked = true;
  }
  constructor() {}

  ngOnInit() {}
}
