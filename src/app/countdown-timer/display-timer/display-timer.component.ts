import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-display-timer',
  templateUrl: './display-timer.component.html',
  styleUrls: ['../../countdown-timer/countdown-timer.component.scss'],
})
export class DisplayTimerComponent implements OnInit, OnChanges {
  @Input() countdownInput: number = 0;
  @Input() isPaused: boolean = false;
  @Input() isStarted: boolean = false;
  interval: any;
  @Output() timerValue: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.isPaused) {
      clearInterval(this.interval);
      this.isPaused = false;
      if(this.countdownInput !== 0) {
        this.timerValue.emit(this.countdownInput);
      }
    }
    if (this.isStarted) {
      this.isStarted = false;
      this.trackTimerCount();
    }
  }

  trackTimerCount() {
    this.interval = setInterval(() => {
      if (this.countdownInput === 0) {
        this.timerValue.emit(this.countdownInput);
        clearInterval(this.interval);
      }
      return this.countdownInput > 0 ? this.countdownInput-- : 0;
    }, 1000);
  }
}
