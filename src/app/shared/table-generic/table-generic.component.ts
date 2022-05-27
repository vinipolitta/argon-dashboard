import { Restaurants } from "./../interfaces/restaurants";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-table-generic",
  templateUrl: "./table-generic.component.html",
  styleUrls: ["./table-generic.component.css"],
})
export class TableGenericComponent implements OnInit {
  @Input() titleTable: string = "Default";
  @Input() isTheme;

  @Input() coluns;

  @Input() restaurants: Restaurants;
  constructor() {}

  ngOnInit(): void {}
}
