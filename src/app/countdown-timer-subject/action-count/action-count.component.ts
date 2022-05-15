import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountdownTimerSubjectService } from '../countdown-timer-subject.service';

@Component({
  selector: 'app-action-count',
  templateUrl: './action-count.component.html',
  styleUrls: ['../../countdown-timer-subject/countdown-timer-subject.component.scss']
})
export class ActionCountComponent implements OnInit, OnDestroy {
  startCount: number = 0;
  pauseCount: number = 0;
  subscription: Subscription = new Subscription();
  constructor(
    private readonly countdownService: CountdownTimerSubjectService,
    private readonly cdf: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.subscription.add(
      this.countdownService.getStartCount().subscribe(res => {
        this.startCount = res;
      })
    );
    this.subscription.add(
      this.countdownService.getPauseCount().subscribe(res => {
        this.pauseCount = res;
      })
    );
    this.cdf.detectChanges();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
