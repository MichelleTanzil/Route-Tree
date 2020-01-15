import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-author",
  templateUrl: "./author.component.html",
  styleUrls: ["./author.component.css"]
})
export class AuthorComponent implements OnInit {
  param: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot.params["id"]);
    this.param = this.route.snapshot.params["id"];
  }
}
