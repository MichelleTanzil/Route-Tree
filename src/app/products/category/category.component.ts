import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit {
  param: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot.params["cat"]);
    this.param = this.route.snapshot.params["cat"];
  }
}
