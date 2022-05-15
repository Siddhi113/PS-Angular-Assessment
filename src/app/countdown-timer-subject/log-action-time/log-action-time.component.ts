import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountdownTimerSubjectService } from '../countdown-timer-subject.service';

@Component({
  selector: 'app-log-action-time',
  templateUrl: './log-action-time.component.html',
  styleUrls: ['../../countdown-timer-subject/countdown-timer-subject.component.scss']
})
export class LogActionTimeComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  startedTime: string[] = [];
  pausedTime: string[] = [];
  constructor(
    private readonly countdownService: CountdownTimerSubjectService,
    private readonly cdf: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.subscription.add(
      this.countdownService.getStartTime().subscribe(res => {
        this.startedTime = res;
      })
    );
    this.subscription.add(
      this.countdownService.getPauseTime().subscribe(res => {
        this.pausedTime = res;
      })
    );
    this.cdf.detectChanges();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
