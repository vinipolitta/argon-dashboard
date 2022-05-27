import { ElementService } from "./../../services/element/element.service";
import { element } from "protractor";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  element_html;
  constructor(private elementService: ElementService, private router: Router) {}

  ngOnInit(): void {
  }

  changePage() {
    this.router.navigateByUrl('/restaurant')
  }
}
