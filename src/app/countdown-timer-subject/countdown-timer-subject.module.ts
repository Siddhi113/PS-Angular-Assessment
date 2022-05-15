import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayTimerComponent } from './display-timer/display-timer.component';
import { ActionCountComponent } from './action-count/action-count.component';
import { LogActionTimeComponent } from './log-action-time/log-action-time.component';
import { CountdownTimerSubjectComponent } from './countdown-timer-subject.component';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    component: CountdownTimerSubjectComponent
  }
]

@NgModule({
  declarations: [
    DisplayTimerComponent,
    ActionCountComponent,
    LogActionTimeComponent,
    CountdownTimerSubjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ]
})
export class CountdownTimerSubjectModule { }
