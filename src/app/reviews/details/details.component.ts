import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class ReviewDetailsComponent implements OnInit {
  param: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot.params["id"]);
    this.param = this.route.snapshot.params["id"];
  }
}
