import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-banner',
  templateUrl: './image-banner.component.html',
  styleUrls: ['./image-banner.component.scss']
})
export class ImageBannerComponent implements OnInit {
  noOfSquare;
  constructor() {
    this.noOfSquare = Array(8).fill(0).map((x,i)=>i);
   }

  ngOnInit(): void {
  }

}
