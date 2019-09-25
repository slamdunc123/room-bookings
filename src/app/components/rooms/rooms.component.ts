import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  providers: [DataService]
})
export class RoomsComponent implements OnInit {
  id: number;
  room: object = {
    id: null,
    name: ''
  };
  private sub: any;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id; // (+) converts string 'id' to a number
    });
    this.dataService.getRooms(this.id).subscribe(dataService => {
      this.room = dataService;
      console.log(this.room);
    });
  }
}
