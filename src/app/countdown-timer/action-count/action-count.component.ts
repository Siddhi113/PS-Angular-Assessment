import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-count',
  templateUrl: './action-count.component.html',
  styleUrls: ['../../countdown-timer/countdown-timer.component.scss']
})
export class ActionCountComponent implements OnInit {
  @Input() startCount: number = 0;
  @Input() pauseCount: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
