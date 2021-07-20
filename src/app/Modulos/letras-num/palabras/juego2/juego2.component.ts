import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-juego2',
  templateUrl: './juego2.component.html',
  styleUrls: ['./juego2.component.css']
})
export class Juego2Component implements OnInit {

  message:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  letraCard: any = [
    {
      img: '/assets/palabras/ba.jpg',
      letra: 'ba'
    },
    {
      img: '/assets/palabras/be.jpg',
      letra: 'be'
    },
    {
      img: '/assets/palabras/bi.jpg',
      letra: 'bi'
    },
    {
      img: '/assets/palabras/bo.jpg',
      letra: 'bo'
    },
    {
      img: '/assets/palabras/bu.jpg',
      letra: 'bu'
    }
  ]

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
    if(this.letrasGame[0].letra === 'be' && this.letrasGame.length === 1){
      this.toggleMessage();
    }
  }

  toggleMessage(){
    document.getElementById('mensaje')!.style.left = (this.message) ? '-50%' : '50%';
    this.message = !this.message;
  }

}
