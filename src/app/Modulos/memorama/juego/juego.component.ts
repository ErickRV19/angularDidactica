import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimerComponent } from '../componente/timer/timer.component';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  typeLevel = '';
  level = '';
  numCard = 0;
  minLimit = 0;
  secLimit = 0;
  isStart = false;

  @ViewChild (TimerComponent) timer: TimerComponent;

  constructor(
    private activaRuta: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activaRuta.params.subscribe(params => {
      this.typeLevel = params.typeLevel;
      this.level= params.level;
    })
    this.timeCards(this.level);
  }

  timeCards(le:string){
    switch (le) {
      case '1': {
        //nivel 1
        //1:30
        this.minLimit = 1;
        this.secLimit = 30;
        this.numCard = 3;
        break;
      }
      case '2': {
        //nivel 2
        //1:30
        this.minLimit = 1;
        this.secLimit = 30;
        this.numCard = 4;
        break;
      }
      case '3': {
        //nivel 3
        //1:30
        this.minLimit = 1;
        this.secLimit = 30;
        this.numCard = 5;
        break;
      }
      default:{
        //nivel 4
        //1:30
        this.minLimit = 1;
        this.secLimit = 30;
        this.numCard = 7;
        break;
      }
    }
  }

  endGame(bool: boolean){
    if(bool){
      //Codigo en caso de que el jugador haya ganado
      //console.log('todos match');
      this.timer.stopTimer();
    }else{
      //codigo en caso de que el jugador haya perdido
      //console.log('time over');
    }
  }
  starGame(){
    this.isStart = true;
    if(this.isStart){
      this.timer.startTimer();
    }
  }
}
