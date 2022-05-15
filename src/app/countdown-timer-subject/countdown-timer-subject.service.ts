import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountdownTimerSubjectService {
  timerValueSubject: Subject<number> = new Subject();
  startedTimeSubject: Subject<string[]> = new Subject();
  pausedTimeSubject: Subject<string[]> = new Subject();
  startCountSubject: BehaviorSubject<number> = new BehaviorSubject(0);
  pauseCountSubject: BehaviorSubject<number> = new BehaviorSubject(0);
  isStartedSubject: Subject<boolean> = new Subject();
  isPausedSubject: Subject<boolean> = new Subject();
  constructor() { }

  setTimerValue(timer: number) {
    this.timerValueSubject.next(timer);
  }

  getTimerValue() {
    return this.timerValueSubject.asObservable();
  }

  setStartTime(time: string[]) {
    this.startedTimeSubject.next(time);
  }

  getStartTime() {
    return this.startedTimeSubject.asObservable();
  }

  setPauseTime(time: string[]) {
    this.pausedTimeSubject.next(time);
  }

  getPauseTime() {
    return this.pausedTimeSubject.asObservable();
  }

  setStartCount(count: number) {
    this.startCountSubject.next(count);
  }

  getStartCount() {
    return this.startCountSubject.asObservable();
  }

  setPauseCount(count: number) {
    this.pauseCountSubject.next(count);
  }

  getPauseCount() {
    return this.pauseCountSubject.asObservable();
  }

  setStarted(started: boolean) {
    this.isStartedSubject.next(started);
  }

  getStarted() {
    return this.isStartedSubject.asObservable();
  }

  setPaused(paused: boolean) {
    this.isPausedSubject.next(paused);
  }

  getPaused() {
    return this.isPausedSubject.asObservable();
  }
}
