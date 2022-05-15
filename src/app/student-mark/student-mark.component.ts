import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StudentObject } from './student-mark.model';
import { StudentMarkService } from './student-mark.service';

@Component({
  selector: 'app-student-mark',
  templateUrl: './student-mark.component.html',
  styleUrls: ['./student-mark.component.scss'],
})
export class StudentMarkComponent implements OnInit, OnDestroy {
  studentList: any;
  subscription: Subscription = new Subscription();
  keys: string[] = [];
  clickCounter: number = 0;
  keyObj = {
    id: 0,
    name: 0,
    class: 0,
    section: 0,
    sub1: 0,
    sub2: 0,
    sub3: 0,
  };
  iconClass: string[] = [];
  constructor(private readonly studentService: StudentMarkService) {}

  ngOnInit(): void {
    this.getStudentList();
  }

  getStudentList() {
    this.subscription.add(
      this.studentService.getStudentData().subscribe((res) => {
        this.studentList = res;
        this.keys = Object.keys(this.studentList[0]);
      })
    );
  }

  sortData(header: string, i: number) {
    for (const item of this.keys) {
      if (item === header) {
        const selectedHeader: keyof StudentObject = item as keyof StudentObject;
        this.keyObj[selectedHeader] = this.keyObj[selectedHeader] + 1;
        if (this.keyObj[selectedHeader] === 1) {
          this.studentList.sort((item1: any, item2: any) =>
            item1[header] > item2[header]
              ? 1
              : item1[header] < item2[header]
              ? -1
              : 0
          );
          this.iconClass[i] = 'fa fa-sort-up';
        } else if (this.keyObj[selectedHeader] === 2) {
          this.studentList.sort((item1: any, item2: any) =>
            item1[header] < item2[header]
              ? 1
              : item1[header] > item2[header]
              ? -1
              : 0
          );
          this.iconClass[i] = 'fa fa-sort-down';
        } else {
          this.keyObj[selectedHeader] = 0;
          this.iconClass[i] = 'fa fa-sort';
          this.getStudentList();
        }
      }
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
