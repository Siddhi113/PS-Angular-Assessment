import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentMarkComponent } from './student-mark.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StudentMarkComponent
  }
]

@NgModule({
  declarations: [StudentMarkComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentMarkModule { }
