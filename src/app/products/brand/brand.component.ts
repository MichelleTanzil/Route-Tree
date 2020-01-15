import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-brand",
  templateUrl: "./brand.component.html",
  styleUrls: ["./brand.component.css"]
})
export class BrandComponent implements OnInit {
  param: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot.params["brand"]);
    this.param = this.route.snapshot.params["brand"];
  }
}
