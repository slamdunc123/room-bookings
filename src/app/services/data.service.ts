import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getRooms(id) {
    return this.http.get('http://localhost:5000/rooms/' + id);
  }

  getUsers() {
    return this.http.get('http://localhost:5000/users');
  }

  getTimes() {
    return this.http.get('http://localhost:5000/times');
  }
}
