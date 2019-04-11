import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// parent component
import { Module__BrandOne__Component__Home } from './brand-one.component';

// sub components
import { Module__BrandOne__Pages__Home } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'brand',
    component: Module__BrandOne__Component__Home,
    children: [
      {
        path: '',
        redirectTo: '/brand/one',
        pathMatch: 'full'
      },
      {
        path: 'one',
        component: Module__BrandOne__Pages__Home
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class Module__BrandOne__Routing { }
