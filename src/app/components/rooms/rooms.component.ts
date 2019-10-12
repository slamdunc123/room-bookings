import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { ActivatedRoute } from "@angular/router";
import { NgSwitchCase } from "@angular/common";

@Component({
  selector: "app-rooms",
  templateUrl: "./rooms.component.html",
  styleUrls: ["./rooms.component.scss"],
  providers: [DataService]
})
export class RoomsComponent implements OnInit {
  id: number;
  room: object = {
    id: null,
    name: ""
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

    let roomId = this.id;
    switch (roomId) {
      case 1: {
        document.body.style.backgroundImage =
          "linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url('../../../assets/img/board.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        break;
      }
      case 2: {
        document.body.style.backgroundImage =
          "linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url('../../../assets/img/green.jpg')";
        break;
      }
      case 3: {
        document.body.style.backgroundImage =
          "linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url('../../../assets/img/cave.jpg')";
        break;
      }
      default: {
        document.body.style.background = "#fff";
        break;
      }
    }

    // if (this.id === 1) {
    //   document.body.style.background = 'yellow';
    // }
  }
}
