import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

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

  @Output() timerStopped: EventEmitter<any> = new EventEmitter();

  inter: any = setInterval(null);

  constructor() { }

  ngOnInit(): void {
  }

  startTimer() {
    this.inter = setInterval(() => {
      this.secCount++;
      if (this.minCount === this.minLimit && this.secCount === this.secLimit) {
        this.stopTimer();
        this.timerStopped.emit(false);
      } else if (this.secCount === 60) {
        this.secCount = 0;
        this.minCount++;
      }
    }, 100);
  }

  stopTimer(){
    clearInterval(this.inter);
  }

}
