import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './components/bookings/bookings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { BoardRoomComponent } from './components/board-room/board-room.component';
import { GreenRoomComponent } from './components/green-room/green-room.component';
import { TheCaveComponent } from './components/the-cave/the-cave.component';
import { DateTimePickerComponent } from './components/date-time-picker/date-time-picker.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'board-room', component: BoardRoomComponent },
  { path: 'green-room', component: GreenRoomComponent },
  { path: 'the-cave', component: TheCaveComponent },
  { path: 'rooms/:id', component: RoomsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingsComponent,
    PageNotFoundComponent,
    RoomsComponent,
    BoardRoomComponent,
    GreenRoomComponent,
    TheCaveComponent,
    DateTimePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularDateTimePickerModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
