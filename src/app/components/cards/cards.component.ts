import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  items = [1, 4, 3, 2, 3, 2, 4, 1];

  constructor() { }

  ngOnInit(): void {
  }

}
