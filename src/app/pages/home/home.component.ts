import { element } from "protractor";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  element_html;
  constructor() {}

  ngOnInit(): void {
    this.getElementPage();
  }
  getElementPage(): void {
    var elementRef = document.querySelector(".pageHome");
    this.element_html = elementRef.innerHTML;
  }
}
