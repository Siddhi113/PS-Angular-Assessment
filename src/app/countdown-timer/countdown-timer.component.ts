import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent implements OnInit {
  timerInput: number = 0;
  isStarted: boolean = false;
  isPaused: boolean = true;
  countdownInput: number = 0;
  startedTime: string[] = [];
  pausedTime: string[] = [];
  actionValue: any[] = [];
  startCount: number = 0;
  pauseCount: number = 0;
  constructor() {}

  ngOnInit(): void {}

  startTimer() {
    this.isStarted = true;
    this.isPaused = false;
    this.countdownInput = this.timerInput;
    this.startedTime.push(new Date(Date.now()).toString());
    this.startCount+=1;
  }

  pauseTimer() {
    this.isPaused = true;
    this.isStarted = false;
    this.pausedTime.push(new Date(Date.now()).toString());
    this.pauseCount+=1;
  }

  resetTimer() {
    this.countdownInput = 0;
    this.timerInput = 0;
    this.pauseCount = 0;
    this.startCount = 0;
    this.actionValue = [];
    this.startedTime = [];
    this.pausedTime = [];
    clearInterval();
  }

  handleTimer(event: number) {
    this.actionValue.push(event);
    if (event === 0) {
      this.isStarted = false;
      this.isPaused = true;
    }
  }

  handleInput(event: any) {
    if(event.target.value) {
      this.pauseCount = 0;
      this.startCount = 0;
      this.startedTime = [];
      this.pausedTime = [];
      this.actionValue = [];
      clearInterval();
    }
  }
}
