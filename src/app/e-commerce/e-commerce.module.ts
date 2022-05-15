import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ECommerceComponent } from './e-commerce.component';
import { RouterModule, Routes } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


const routes: Routes = [
  {
    path: '',
    component: ECommerceComponent
  }
]

@NgModule({
  declarations: [ECommerceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatGridListModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule
  ]
})
export class ECommerceModule { }
