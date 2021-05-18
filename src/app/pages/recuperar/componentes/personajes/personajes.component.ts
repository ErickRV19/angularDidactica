import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  items = ['chicas superpoderosas','Spider-Man','Batman','Iron Man','Superman'];

  constructor() { }

  ngOnInit(): void {
  }

}
