import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

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
  // dateTime: Date = new Date();
  showPicked = false;
  minDate = moment(new Date()).format('YYYY-MM-DD');
  maxDate = '2019-09-30';
  user: null;
  bookingDate: Date = new Date();
  bookingTime: null;

  // onDateSelect(e) {
  //   console.log(e);
  //   this.dateTime = e;
  //   console.log(this.dateTime);
  //   this.showPicked = true;
  //   this.test();
  // }

  onSubmit = booking => {
    // e.preventDefault();
    console.log(booking.user);
    console.log(booking.date);
    console.log(booking.time);

    this.user = booking.user;
    this.bookingDate = booking.date;
    this.bookingTime = booking.time;
    this.showPicked = true;
  };

  constructor() {}

  ngOnInit() {}
}
