import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  typeLevel = '';
  level = '';

  constructor(
    private activaRuta: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activaRuta.params.subscribe(params => {
      this.typeLevel = params.typeLevel;
      this.level= params.level;
    })
  }

}
