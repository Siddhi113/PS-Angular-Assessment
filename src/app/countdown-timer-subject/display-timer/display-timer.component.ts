import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountdownTimerSubjectService } from '../countdown-timer-subject.service';

@Component({
  selector: 'app-display-timer',
  templateUrl: './display-timer.component.html',
  styleUrls: [
    '../../countdown-timer-subject/countdown-timer-subject.component.scss',
  ],
})
export class DisplayTimerComponent implements OnInit, OnDestroy {
  countdownInput: number = 0;
  isPaused: boolean = false;
  isStarted: boolean = false;
  interval: any;
  subscription: Subscription = new Subscription();
  constructor(
    private readonly countdownService: CountdownTimerSubjectService,
    private readonly cdf: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.countdownService.getTimerValue().subscribe((res) => {
        this.countdownInput = res;
      })
    );
    this.subscription.add(
      this.countdownService.getStarted().subscribe((res) => {
        this.isStarted = res;
        if (this.isStarted) {
          this.isStarted = false;
          this.countdownService.setStarted(this.isStarted);
          this.trackTimerCount();
        }
      })
    );
    this.subscription.add(
      this.countdownService.getPaused().subscribe((res) => {
        this.isPaused = res;
        if (this.isPaused) {
          clearInterval(this.interval);
          this.isPaused = false;
          this.countdownService.setPaused(this.isPaused);
          if (this.countdownInput !== 0) {
            this.countdownService.setTimerValue(this.countdownInput);
          }
        }
      })
    );
    this.cdf.detectChanges();
  }

  trackTimerCount() {
    this.interval = setInterval(() => {
      if (this.countdownInput === 0) {
        this.countdownService.setTimerValue(this.countdownInput);
        clearInterval(this.interval);
      }
      return this.countdownInput > 0 ? this.countdownInput-- : 0;
    }, 1000);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
