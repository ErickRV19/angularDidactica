import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-nivel3',
  templateUrl: './nivel3.component.html',
  styleUrls: ['./nivel3.component.css']
})
export class Nivel3Component implements OnInit {
  letraCard: any = [
    {
      img: '/assets/letra_num/uno.jpg',
      letra: 'uno'
    },
    {
      img: '/assets/letra_num/ocho.jpg',
      letra: 'ocho'
    },
    {
      img: '/assets/letra_num/dos.jpg',
      letra: 'dos'
    }
  ];
  letrasGame: any = [];
  message:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
    this.comprobarWin();
  }

  comprobarWin(): void {
    if(this.letrasGame[0].letra === 'ocho' && this.letrasGame.length === 1){
      this.toggleMessage();
    }
  }

  toggleMessage(){
    document.getElementById('mensaje')!.style.left = (this.message) ? '-50%' : '50%';
    this.message = !this.message;
  }

}
