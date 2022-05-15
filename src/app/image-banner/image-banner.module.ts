import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageBannerComponent } from './image-banner.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ImageBannerComponent
  }
]

@NgModule({
  declarations: [ImageBannerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ImageBannerModule { }
