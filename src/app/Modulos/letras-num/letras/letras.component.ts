import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-letras',
  templateUrl: './letras.component.html',
  styleUrls: ['./letras.component.css'],

})
export class LetrasComponent implements OnInit {

  message:boolean = false;
  constructor() { }


  ngOnInit(): void {
    this.letraCard.sort(() => Math.random() - 0.5);
  }

  letraCard: any = [
    {
      img: '/assets/letra_num/a-01.png',
      letra: 'A'
    },
    {
      img: '/assets/letra_num/e-01.png',
      letra: 'E'
    },
    {
      img: '/assets/letra_num/i-01.png',
      letra: 'I'
    },
    {
      img: '/assets/letra_num/o-01.png',
      letra: 'O'
    },
    {
      img: '/assets/letra_num/u-01.png',
      letra: 'U'
    }
  ]

  vocalesOrdenadas: any = ['A', 'E', 'I', 'O', 'U'];

  letrasGame: any = []

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
    this.comprobarWin();
  }

  comprobarWin(): void {
    var win = 0;
    for(let i = 0; i < this.letrasGame.length; i++){
      if(this.letrasGame[i].letra === this.vocalesOrdenadas[i]){
        win += 1;
      }
    }
    if(win === 5){
      this.toggleMessage();
    }
  }

  toggleMessage(){
    document.getElementById('mensaje')!.style.left = (this.message) ? '-50%' : '50%';
    this.message = !this.message;
  }
}
