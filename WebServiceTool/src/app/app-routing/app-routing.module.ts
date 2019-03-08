import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { my_routes } from './routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(my_routes),
    Router
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
