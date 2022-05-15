import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    let studentData = [
      { id: 1, name: 'Shawn', class: 3, section: 'D', sub1: 23, sub2: 40, sub3: 45},
      { id: 2, name: 'Helly', class: 2, section: 'A', sub1: 57, sub2: 80, sub3: 65},
      { id: 3, name: 'Suraj', class: 4, section: 'B', sub1: 83, sub2: 90, sub3: 95},
      { id: 4, name: 'Aly', class: 6, section: 'C', sub1: 43, sub2: 70, sub3: 65},
      { id: 5, name: 'Emily', class: 5, section: 'A', sub1: 60, sub2: 75, sub3: 65},
      { id: 6, name: 'Monica', class: 1, section: 'D', sub1: 80, sub2: 70, sub3: 85},
      { id: 7, name: 'Joey', class: 7, section: 'C', sub1: 63, sub2: 46, sub3: 75},
    ];
    return {studentData};
  }
}
