import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownTimerComponent } from './countdown-timer.component';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { DisplayTimerComponent } from './display-timer/display-timer.component';
import { LogActionTimeComponent } from './log-action-time/log-action-time.component';
import { ActionCountComponent } from './action-count/action-count.component';


const routes: Routes = [
  {
    path: '',
    component: CountdownTimerComponent
  }
]

@NgModule({
  declarations: [CountdownTimerComponent, DisplayTimerComponent, LogActionTimeComponent, ActionCountComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ]
})
export class CountdownTimerModule { }
