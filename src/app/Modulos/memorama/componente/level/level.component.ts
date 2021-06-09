import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {
  
  constructor(private activaRuta: ActivatedRoute) { }
  nivel = '';
  ngOnInit(): void {
    this.activaRuta.params.subscribe(params => {
      this.nivel = params.id;
    })
  }

}
