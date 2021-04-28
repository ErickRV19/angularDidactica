import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css'],
})

export class CardMenuComponent implements OnInit {

  items = ['numeros', 'letras'];

  constructor() { }

  ngOnInit(): void {
  }

}
