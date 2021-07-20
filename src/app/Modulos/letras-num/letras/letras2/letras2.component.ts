import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-letras2',
  templateUrl: './letras2.component.html',
  styleUrls: ['./letras2.component.css']
})
export class Letras2Component implements OnInit {
  letraCard: any = [
    {
      img: '/assets/letra_num/a-01.png',
      letra: 'a'
    },
    {
      img: '/assets/letra_num/e-01.png',
      letra: 'e'
    },
    {
      img: '/assets/letra_num/o-01.png',
      letra: 'o'
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
    if(this.letrasGame[0].letra === 'a' && this.letrasGame.length === 1){
      this.toggleMessage();
    }
  }

  toggleMessage(){
    document.getElementById('mensaje')!.style.left = (this.message) ? '-50%' : '50%';
    this.message = !this.message;
  }


}
