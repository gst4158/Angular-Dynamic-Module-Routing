import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// parent component
import { Module__Home__Component__Home } from './home.component';

// sub components
import { Module__Home__Pages__Home } from './pages/home/home.component';
import { Module__Home__Pages__HomeSecond } from './pages/home-second/home-second.component';

const routes: Routes = [
  {
    path: '',
    component: Module__Home__Component__Home,
    children: [
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      },
      {
        path: '',
        component: Module__Home__Pages__Home
      },
      {
        path: 'second',
        component: Module__Home__Pages__HomeSecond
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class Module__Home__Routing { }
