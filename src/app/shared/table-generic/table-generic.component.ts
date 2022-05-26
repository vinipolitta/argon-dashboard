import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-table-generic",
  templateUrl: "./table-generic.component.html",
  styleUrls: ["./table-generic.component.css"],
})
export class TableGenericComponent implements OnInit {
  @Input() titleTable: string = "Default";
  @Input() isTheme;

 @Input() coluns = [];

  @Input() dataTable = [];
  constructor() {}

  ngOnInit(): void {
    this.themeTable();
  }

  themeTable() {
    console.log(this.isTheme);
  }
}
