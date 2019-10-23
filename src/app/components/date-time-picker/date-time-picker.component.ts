import { Component, OnInit, ViewChild } from "@angular/core";
import { Location } from "@angular/common";

import * as moment from "moment";
import { DataService } from "../../services/data.service";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-date-time-picker",
  templateUrl: "./date-time-picker.component.html",
  styleUrls: ["./date-time-picker.component.scss"],
  providers: [DataService]
})
export class DateTimePickerComponent implements OnInit {
  // @ViewChild("roombooking") form: NgForm;
  date: Date = new Date();
  settings = {
    bigBanner: true,
    timePicker: true,
    format: "dd-MM-yyyy",
    defaultOpen: true
  };
  // dateTime: Date = new Date();
  showPicked = false;
  minDate = moment(new Date()).format("YYYY-MM-DD");
  maxDate = "2019-12-31";
  user: null;
  bookings: object = [];
  users: object = [];
  times: object = [];
  bookingDate: Date = new Date();
  bookingTime: null;
  private sub: any;
  roomId: number;
  booking: {};

  // onDateSelect(e) {
  //   console.log(e);
  //   this.dateTime = e;
  //   console.log(this.dateTime);
  //   this.showPicked = true;
  //   this.test();
  // }

  onSubmit = (booking, $event) => {
    $event.preventDefault();
    console.log(booking.user);
    console.log(booking.date);
    console.log(booking.time);

    this.user = booking.user;
    this.bookingDate = booking.date;
    this.bookingTime = booking.time;
    this.showPicked = true;
    this.booking = booking;
    console.log(booking);
  };

  onConfirm() {
    console.log("Confirm clicked");
    this.dataService.createBooking(this.booking).subscribe(dataService => {
      this.booking = dataService;
      console.log(this.booking);
    });
    this.pageRefresh();
  }

  onCancel() {
    console.log("Cancel clicked");
    this.showPicked = false;
    // this.user = null;
    // this.bookingDate = new Date();
    // this.bookingTime = null;
    // this.booking = {};
    // this.form.resetForm();

    // TODO - check how to reset form onCancel and update table onConfirm without having to use pageRefresh
  }

  pageRefresh() {
    location.reload();
  }

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.roomId = +params.id; // (+) converts string 'id' to a number
      console.log(this.roomId);
    });
    this.dataService.getUsers().subscribe(dataService => {
      this.users = dataService;
      console.log(this.users);
    });
    this.dataService.getTimes().subscribe(dataService => {
      this.times = dataService;
      console.log(this.times);
    });
    this.dataService.getBookings(this.roomId).subscribe(dataService => {
      this.bookings = dataService;
      console.log(this.bookings);
      console.log(this.roomId);
    });
  }
}
