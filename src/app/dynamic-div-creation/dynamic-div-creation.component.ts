import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-div-creation',
  templateUrl: './dynamic-div-creation.component.html',
  styleUrls: ['./dynamic-div-creation.component.scss'],
})
export class DynamicDivCreationComponent implements OnInit {
  divCreationList = [{ id: 1 }];
  constructor() {}

  ngOnInit(): void {}

  handleScroll(event: any) {
    if (
      event.target.offsetHeight + event.target.scrollTop >=
      event.target.scrollHeight
    ) {
      this.divCreationList.push({
        id: this.divCreationList[this.divCreationList.length - 1].id + 1,
      });
    }
  }

  showAlert(id: number) {
    alert(`Button in ${id} div is clicked`);
  }
}
