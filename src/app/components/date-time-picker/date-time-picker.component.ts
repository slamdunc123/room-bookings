import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss'],
  providers: [DataService]
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
  users: object = [];
  times: object = [];
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

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe(dataService => {
      this.users = dataService;
      console.log(this.users);
    });
    this.dataService.getTimes().subscribe(dataService => {
      this.times = dataService;
      console.log(this.times);
    });
  }
}
