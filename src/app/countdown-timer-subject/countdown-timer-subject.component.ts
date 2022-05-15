import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountdownTimerSubjectService } from './countdown-timer-subject.service';

@Component({
  selector: 'app-countdown-timer-subject',
  templateUrl: './countdown-timer-subject.component.html',
  styleUrls: ['./countdown-timer-subject.component.scss']
})
export class CountdownTimerSubjectComponent implements OnInit, OnDestroy {
  timerInput: number = 0;
  isStarted: boolean = false;
  isPaused: boolean = true;
  countdownInput: number = 0;
  startedTime: string[] = [];
  pausedTime: string[] = [];
  actionValue: any[] = [];
  startCount: number = 0;
  pauseCount: number = 0;
  subscription: Subscription = new Subscription();
  constructor(
    private readonly countdownService: CountdownTimerSubjectService,
    private readonly cdf: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.subscription.add(
      this.countdownService.getStarted().subscribe(res => {
        this.isStarted = res;
      })
    );
    this.subscription.add(
      this.countdownService.getPaused().subscribe(res => {
        this.isPaused = res;
      })
    );
    this.subscription.add(
      this.countdownService.getTimerValue().subscribe(res => {
        this.countdownInput = res;
        if (this.countdownInput === 0) {
          this.isStarted = false;
          this.isPaused = true;
          // this.pauseCount = 0;
          // this.startCount = 0;
          // this.startedTime = [];
          // this.pausedTime = [];
        }
      })
    );
    this.cdf.detectChanges();
  }

  startTimer() {
    this.isStarted = true;
    this.isPaused = false;
    this.startedTime.push(new Date(Date.now()).toString());
    this.startCount+=1;
    this.countdownService.setStarted(this.isStarted);
    this.countdownService.setPaused(this.isPaused);
    this.countdownService.setTimerValue(this.countdownInput ? this.countdownInput : this.timerInput);
    this.countdownService.setStartTime(this.startedTime);
    this.countdownService.setStartCount(this.startCount);
  }

  pauseTimer() {
    this.isPaused = true;
    this.isStarted = false;
    this.pausedTime.push(new Date(Date.now()).toString());
    this.pauseCount+=1;
    this.countdownService.setPaused(this.isPaused);
    this.countdownService.setStarted(this.isStarted);
    this.countdownService.setPauseTime(this.pausedTime);
    this.countdownService.setPauseCount(this.pauseCount);
    this.actionValue.push(this.countdownInput);
  }

  resetTimer() {
    this.countdownInput = 0;
    this.timerInput = 0;
    this.pauseCount = 0;
    this.startCount = 0;
    this.startedTime = [];
    this.pausedTime = [];
    this.actionValue = [];
    this.countdownService.setTimerValue(this.countdownInput);
    this.countdownService.setPauseCount(this.pauseCount);
    this.countdownService.setStartCount(this.startCount);
    this.countdownService.setStartTime(this.startedTime);
    this.countdownService.setPauseTime(this.pausedTime);
    clearInterval();
  }

  handleInput(event: any) {
    if(event.target.value) {
      this.pauseCount = 0;
      this.startCount = 0;
      this.startedTime = [];
      this.pausedTime = [];
      this.actionValue = [];
      this.countdownService.setPauseCount(this.pauseCount);
      this.countdownService.setStartCount(this.startCount);
      this.countdownService.setStartTime(this.startedTime);
      this.countdownService.setPauseTime(this.pausedTime);
      clearInterval();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
