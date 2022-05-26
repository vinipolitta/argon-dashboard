import { ElementService } from "./../../services/element/element.service";
import { element } from "protractor";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  element_html;
  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    this.getElementPage();
  }
  getElementPage(): void {
    this.element_html = this.elementService.getElement(".pageHome");
  }
}
