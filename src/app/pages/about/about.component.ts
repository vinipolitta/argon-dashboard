import { Component, OnInit } from '@angular/core';
import { ElementService } from 'src/app/services/element/element.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  element_html;

  constructor(private elementService: ElementService) { }

  ngOnInit(): void {
    this.getElementPage();
  }

  getElementPage(): void {
    this.element_html = this.elementService.getElement(".pageAbout");
  }

}
