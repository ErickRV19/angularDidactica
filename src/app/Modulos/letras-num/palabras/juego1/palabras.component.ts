import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-palabras',
  templateUrl: './palabras.component.html',
  styleUrls: ['./palabras.component.css']
})
export class PalabrasComponent implements OnInit {

  message:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  letraCard: any = [
    {
      img: '/assets/palabras/bol.png',
      letra: 'bol'
    },
    {
      img: '/assets/palabras/ar.png',
      letra: 'ar'
    }
  ]

  arbol = ['ar','bol']
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
      if(this.letrasGame[i].letra === this.arbol[i]){
        win += 1;
      }
    }
    if(win === 2){
      this.toggleMessage();
    }
  }

  toggleMessage(){
    document.getElementById('mensaje')!.style.left = (this.message) ? '-50%' : '50%';
    this.message = !this.message;
  }


}
