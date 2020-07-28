import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PendudukComponent } from './penduduk.component';

const routes:Routes=[
  {
    path:'',
    component:PendudukComponent,
  }
]

@NgModule({
  declarations: [PendudukComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PendudukModule { }
