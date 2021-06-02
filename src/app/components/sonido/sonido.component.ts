import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sonido',
  templateUrl: './sonido.component.html',
  styleUrls: ['./sonido.component.css']
})
export class SonidoComponent implements OnInit {
  @Input() sonido: any;
  reproduciendo: boolean = true;

  constructor() { }
  
  ngOnInit(): void {
  }
  
  play(){
    if(this.reproduciendo){
      this.reproduciendo = false;
      const audio = new Audio(`../../assets/music/${this.sonido}`);
      console.log(audio)
      audio.play();
      setTimeout(() => {
        this.reproduciendo = true;
      }, 5000);
    }
  }
}
