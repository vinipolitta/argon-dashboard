import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-restaurant",
  templateUrl: "./restaurant.component.html",
  styleUrls: ["./restaurant.component.css"],
})
export class RestaurantComponent implements OnInit {
  restaurants = [
    {
      id: "bread-bakery",
      name: "Bread & Bakery",
      category: "Bakery",
      deliveryEstimate: "25m",
      rating: 4.9,
      imagePath: "assets/img/restaurants/breadbakery.png",
      iconStatus: "bg-info",
    },
    {
      id: "burger-house",
      name: "Burger House",
      category: "Hamburgers",
      deliveryEstimate: "100m",
      rating: 3.5,
      imagePath: "assets/img/restaurants/burgerhouse.png",
      iconStatus: "bg-warning",
    },
  ];

  coluns = ["Name", "Rating", "Category", "Delivery Estimate", "Actions"];
  constructor() {}

  ngOnInit(): void {}
}
