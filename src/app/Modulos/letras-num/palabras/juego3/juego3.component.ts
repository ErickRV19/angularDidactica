import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-juego3',
  templateUrl: './juego3.component.html',
  styleUrls: ['./juego3.component.css']
})
export class Juego3Component implements OnInit {

  message:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  letraCard: any = [
    {
      img: '/assets/palabras/avio.jpg',
      letra: 'avion'
    },
    {
      img: '/assets/palabras/coche.jpg',
      letra: 'coche'
    },
    {
      img: '/assets/palabras/camion.jpg',
      letra: 'camion'
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
    if(this.letrasGame[0].letra === 'avion' && this.letrasGame.length === 1){
      this.toggleMessage();
    }
  }

  toggleMessage(){
    document.getElementById('mensaje')!.style.left = (this.message) ? '-50%' : '50%';
    this.message = !this.message;
  }

}
