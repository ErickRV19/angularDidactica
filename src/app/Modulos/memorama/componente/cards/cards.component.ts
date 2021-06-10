import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { Component, OnInit, Input } from '@angular/core';
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
          display: 'none'
        })
      ),
      transition("default => flipped", [animate("400ms")]),
      transition("flipped => default", [animate("400ms")]),
      transition("* => matched", [animate("400ms")])
    ])
  ]
})
export class CardsComponent implements OnInit {
  @Input() typeLevel: any;
  @Input() level: string;

  data: CardData[] = [];

  items: CardData[] = [];
  cardBefore = {
    pos: 1,
    imgId: ''
  };

  constructor(
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    //Cargamos la informacion
    if (this.typeLevel === 'letras') {
      this.data = this.cardService.getAllCardsLyrics(this.numCards(this.level));
    } else {
      this.data = this.cardService.getAllCardsNumbers(this.numCards(this.level));
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
        }
        this.items.push(parCard);
      }
    }
  }

  cardClicked(pos: number, card: CardData) {
    if (this.items[pos].state === "default") {
      this.items[pos].state = "flipped";
    } else {
      this.items[pos].state = "default";
    }
    this.verificarMatch(pos, card)
  }

  verificarMatch(pos: number, card: CardData) {
    //verifica si ya guardaste algo antes
    if (this.cardBefore.imgId === '') {
      //si no hay nada guarda la carta
      this.cardBefore.pos = pos;
      this.cardBefore.imgId = card.imageId;

    } else if (this.cardBefore.pos === pos) {
      //selecciono la misma carta
      console.log('selecciono la misma');
    } else {
      //si no se guardo nada antes
      //verifica si las cartas coinciden con su imagen
      if (this.cardBefore.imgId === card.imageId) {
        //cartas concuerdan
        //elimina la carta actual que selecciono y la carta anterior
        this.items[pos].state = "flipped";
        this.items[this.cardBefore.pos].state = "flipped";
      } else {
        //si las cartas no concuerdan
        //regresa las cartas a su estado normal
        this.items[pos].state = "default";
        this.items[this.cardBefore.pos].state = "default";

      }
      //limpia la carta guardada
      this.cardBefore.pos = 0
      this.cardBefore.imgId = '';
    }
  }

  numCards(level: string) {
    switch (level) {
      case '1': {
        //nivel 1
        return 3
      }
      case '2': {
        //nivel 2
        return 4
      }
      case '3': {
        //nivel 3
        return 5
      }
      default:{
        return 7
      }
    }
  }

}
