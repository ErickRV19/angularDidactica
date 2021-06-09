import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juegoletras',
  templateUrl: './juegoletras.component.html',
  styleUrls: ['./juegoletras.component.css']
})
export class JuegoletrasComponent implements OnInit {
  service = 'letras';
  constructor() { }

  ngOnInit(): void {
  }

}
