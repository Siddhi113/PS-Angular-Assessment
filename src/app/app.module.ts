import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { ImageBannerComponent } from './image-banner/image-banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownTimerSubjectComponent } from './countdown-timer-subject/countdown-timer-subject.component';
import { StudentMarkComponent } from './student-mark/student-mark.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { DynamicDivCreationComponent } from './dynamic-div-creation/dynamic-div-creation.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'image-banner',
        component: ImageBannerComponent
      },
      {
        path: 'e-commerce',
        component: ECommerceComponent
      },
      {
        path: 'countdown-timer',
        component: CountdownTimerComponent
      },
      {
        path: 'countdown-timer-subject',
        component: CountdownTimerSubjectComponent
      },
      {
        path: 'student-mark',
        component: StudentMarkComponent
      },
      {
        path: 'dynamic-div',
        component: DynamicDivCreationComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(routes),
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
