import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-level',
  templateUrl: './card-level.component.html',
  styleUrls: ['./card-level.component.css']
})
export class CardLevelComponent implements OnInit {
  @Input() nivel: any;
  items = [1, 2, 3, 4];
  arr = Array;
  
  constructor() { }

  ngOnInit(): void {
  }

}
