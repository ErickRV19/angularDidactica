import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CardService } from './../../services/cardService';


export interface CardData {
  id: number;
  imageId: string;
  state: "default" | "flipped" | "matched";
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  animations: [
    trigger("cardFlip", [
      state(
        "default",
        style({
          transform: "none"
        })
      ),
      state(
        "flipped",
        style({
          transform: "rotateY(180deg)"
        })
      ),
      state(
        "matched",
        style({
          //visibility: "none",
          //transform: "scale(0.05)",
          transform: "rotateY(180deg)",
          cursor: "not-allowed",
          boxShadow: "-1px 3px 33px 0px rgba(255,242,0,0.7)"
          
        })
      ),
      transition("default => flipped", [animate("400ms")]),
      transition("flipped => default", [animate("600ms")]),
      transition("* => matched", [animate("400ms")])
    ])
  ]
})
export class CardsComponent implements OnInit {
  @Input() typeLevel: any;
  @Input() numCard: number;

  data: CardData[] = [];

  items: CardData[] = [];
  cardBefore = {
    pos: 1,
    imgId: ''
  };

  countMatch: number= 0;
  @Output() gameStopped: EventEmitter<any> = new EventEmitter();

  constructor(
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    //Cargamos la informacion
    if (this.typeLevel === 'letras') {
      this.data = this.cardService.getAllCardsLyrics(+this.numCard);
    } else {
      this.data = this.cardService.getAllCardsNumbers(this.numCard);
    }

    //Creamos los pares de las tarjetas
    for (let i = 0; i < (this.data.length * 2); i++) {
      if (this.data[i]) {
        this.items.push(this.data[i]);
      } else {
        var parCard: CardData = {
          id: i,
          imageId: this.data[i - this.data.length].imageId,
          state: "default"
        };
        this.items.push(parCard);
      }
    }
    
    //barajeamos
    this.items.sort(() => Math.random() - 0.5);
  }

  cardClicked(pos: number, card: CardData) {
    if(this.items[pos].state != "matched"){
      //si no es match verifica
      this.items[pos].state = (this.items[pos].state === 'default') ? 'flipped' : 'default';
      this.verificarMatch(pos, card);
    }
  }

  verificarMatch(pos: number, card: CardData) {
    //verifica si ya guardaste algo antes
    if (this.cardBefore.imgId === '') {
      //si no hay nada guarda la carta
      this.cardBefore.pos = pos;
      this.cardBefore.imgId = card.imageId;

    } else if (this.cardBefore.pos === pos) {
      //selecciono la misma carta
      //console.log('selecciono la misma');
      //limpia la carta guardada
      this.cardBefore.pos = 0
      this.cardBefore.imgId = '';
    } else {
      //si no se guardo nada antes
      //verifica si las cartas coinciden con su imagen
      if (this.cardBefore.imgId === card.imageId) {
        //cartas concuerdan
        //elimina la carta actual que selecciono y la carta anterior
        this.items[pos].state = "matched";
        this.items[this.cardBefore.pos].state = "matched";
        this.countMatch ++;
        this.endGame();
      } else {
        //si las cartas no concuerdan
        //regresa las cartas a su estado normal
        this.items[pos].state = "flipped";
        this.items[this.cardBefore.pos].state = "default";
        setTimeout(() => {
          this.items[pos].state = "default";
        }, 500);
      }
      //limpia la carta guardada
      this.cardBefore.pos = 0
      this.cardBefore.imgId = '';
    }
  }

  endGame(){
    if(this.data.length === this.countMatch){
      this.gameStopped.emit(true);
    }
  }

  resetGame(){
    this.countMatch = 0;
    this.data=[];
    this.items = [];
    this.cardBefore = {
      pos: 1,
      imgId: ''
    };
    this.ngOnInit();
  }
}
