import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-level',
  templateUrl: './card-level.component.html',
  styleUrls: ['./card-level.component.css']
})

export class CardLevelComponent implements OnInit  {

    items = [1, 2, 3, 4];
    Arr = Array;

  constructor() { }

  ngOnInit(): void {
  }

}
