import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input() minLimit: number;
  @Input() secLimit: number;

  minCount: number = 0;
  secCount: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.start();
  }

  start() {
    var intervalo = setInterval(() => {
      this.secCount++;
      if (this.minCount === this.minLimit && this.secCount === this.secLimit) {
        clearInterval(intervalo)
      } else if (this.secCount === 60) {
        this.secCount = 0;
        this.minCount++;
      }
    }, 100);
  }

}
