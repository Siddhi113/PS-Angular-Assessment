import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-action-time',
  templateUrl: './log-action-time.component.html',
  styleUrls: ['../../countdown-timer/countdown-timer.component.scss']
})
export class LogActionTimeComponent implements OnInit {
  @Input() startedTime: string[] = [];
  @Input() pausedTime: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
