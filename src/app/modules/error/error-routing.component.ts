import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// parent component
import { Module__Error__Component__Error } from './error.component';

const routes: Routes = [
  {
    path: '**',
    component: Module__Error__Component__Error
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class Module__Error__Routing { }
