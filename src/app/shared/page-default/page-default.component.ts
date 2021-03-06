import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-page-default",
  templateUrl: "./page-default.component.html",
  styleUrls: ["./page-default.component.css"],
})
export class PageDefaultComponent implements OnInit {
  @Input() element_html = `<div>
  <h2>VAMos la</h2>
  </div>`;
  @Input() showTableDark ;
  @Input() showPageContent = false;

  @Input() showCardsCharts = false;

  constructor() {}

  ngOnInit(): void {
    this.showTableDark === 'dark' ? false : true;
  }
}
