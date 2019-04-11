import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// parent component
import { Module__BrandTwo__Component__Home } from './brand-two.component';

// sub components
import { Module__BrandTwo__Pages__Home } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'brand',
    component: Module__BrandTwo__Component__Home,
    children: [
      {
        path: '',
        redirectTo: '/brand/two',
        pathMatch: 'full'
      },
      {
        path: 'two',
        component: Module__BrandTwo__Pages__Home
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class Module__BrandTwo__Routing { }
