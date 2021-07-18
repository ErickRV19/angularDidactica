import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsComponent } from '../componente/cards/cards.component';
import { TimerComponent } from '../componente/timer/timer.component';
import { UsuarioService } from '../services/usuario.service';

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
  msgGame = '¿Listo para jugar?';
  time = '';
  id = '';
  exp = 40;
  datos: any;

  @ViewChild(TimerComponent) timer: TimerComponent;
  @ViewChild(CardsComponent) cards: CardsComponent;

  constructor(
    private activaRuta: ActivatedRoute,
    private usuarioSvc: UsuarioService
  ) { }

  ngOnInit(): void {
    this.activaRuta.params.subscribe(({ typeLevel, level, id }) => {
      this.typeLevel = typeLevel;
      this.level = level;
      this.id = id;
    })
    this.usuarioSvc.getOneUsuario(this.id).subscribe(res => {
      this.datos = res;
    })
    this.timeCards(this.level);
  }

  timeCards(le: string) {
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
      default: {
        //nivel 4
        //1:30
        this.minLimit = 1;
        this.secLimit = 30;
        this.numCard = 7;
        break;
      }
    }
  }

  starGame() {
    this.isStart = true;
    if (this.isStart) {
      this.timer.startTimer();
    }
  }

  endGame(bool: boolean) {
    if (bool) {
      //Codigo en caso de que el jugador haya ganado
      this.time = (this.timer.minCount < 10) ? '0' + this.timer.minCount : '' + this.timer.minCount;
      this.time += (this.timer.secCount < 10) ? ':0' + this.timer.secCount : ':' + this.timer.secCount;
      // se obtenien experencia
      this.obtenerExp();
    } else {
      //codigo en caso de que el jugador haya perdido
      this.msgGame = 'Has Perdido!';
      this.time = '';
    }
    this.isStart = false;
    this.timer.stopTimer();
    this.cards.resetGame();
  }

  obtenerExp() {
    //sacar experiencia
    var time = (this.timer.minCount * 60) + this.timer.secCount;
    var exp = Math.round(this.exp * (1-(((100 / 90) * time) / 100)));
    this.msgGame = `Has ganado ${exp} de experencia`;

    //guardar datos
    this.datos.game.push({ exp: exp, level: this.level, time: time, type: this.typeLevel});
    const data = {
      exp: (this.datos.exp + exp),
      game: this.datos.game,
    }
    this.usuarioSvc.updateUsuarioExp(data, this.id);
  }
}
