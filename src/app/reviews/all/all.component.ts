import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-all",
  templateUrl: "./all.component.html",
  styleUrls: ["./all.component.css"]
})
export class AllComponent implements OnInit {
  param: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot.params["id"]);
    this.param = this.route.snapshot.params["id"];
  }
}
