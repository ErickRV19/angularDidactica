import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-nivel2',
  templateUrl: './nivel2.component.html',
  styleUrls: ['./nivel2.component.css']
})
export class Nivel2Component implements OnInit {
  letraCard: any = [
    {
      img: '/assets/letra_num/platanos3.jpg',
      letra: 'banana'
    },
    {
      img: '/assets/letra_num/ositos.jpg',
      letra: 'oso'
    },
    {
      img: '/assets/letra_num/lapices2.jpg',
      letra: 'lapiz'
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
    if(this.letrasGame[0].letra === 'banana' && this.letrasGame.length === 1){
      this.toggleMessage();
    }
  }

  toggleMessage(){
    document.getElementById('mensaje')!.style.left = (this.message) ? '-50%' : '50%';
    this.message = !this.message;
  }



}
