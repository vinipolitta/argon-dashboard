import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  constructor() { }

  public getElement(namePage) {
    var elementRef = document.querySelector(namePage);
    return elementRef.innerHTML;
  }
}
