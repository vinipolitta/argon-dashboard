import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  dataTable = [
    {
      title: "Argon Design System",
      img: "../assets/img/theme/bootstrap.jpg",
      budget: "$2,500 USD",
      status: "pending",
      iconStatus:'bg-info',

      complete: '30%'
    },
    {
      title: "teste Design System",
      img: "../assets/img/theme/bootstrap.jpg",
      budget: "$2,500 USD",
      status: "finish",
      iconStatus:'bg-success',

      complete: '60%'
    },
    {
      title: "Argon teste System",
      img: "../assets/img/theme/bootstrap.jpg",
      budget: "$2,500 USD",
      status: "paused",
      iconStatus:'bg-warning',

      complete: '80%'
    },
  ];

  coluns = ["Project", "Budget", "Status", "Completion", "action"];
  constructor() { }

  ngOnInit(): void {
  }

}
