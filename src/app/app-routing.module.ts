import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'image-banner',
    loadChildren: () => import('./image-banner/image-banner.module').then(m => m.ImageBannerModule)
  },
  {
    path: 'e-commerce',
    loadChildren: () => import('./e-commerce/e-commerce.module').then(m => m.ECommerceModule)
  },
  {
    path: 'countdown-timer',
    loadChildren: () => import('./countdown-timer/countdown-timer.module').then(m => m.CountdownTimerModule)
  },
  {
    path: 'countdown-timer-subject',
    loadChildren: () => import('./countdown-timer-subject/countdown-timer-subject.module').then(m => m.CountdownTimerSubjectModule)
  },
  {
    path: 'student-mark',
    loadChildren: () => import('./student-mark/student-mark.module').then(m => m.StudentMarkModule)
  },
  {
    path: 'dynamic-div',
    loadChildren: () => import('./dynamic-div-creation/dynamic-div-creation.module').then(m => m.DynamicDivCreationModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'image-banner'
  },
  {
    path: '**',
    redirectTo: 'image-banner',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
