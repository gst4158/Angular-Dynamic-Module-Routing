// core
import { NgModule } from '@angular/core';

// routing
import { Module__Error__Routing } from './error-routing.component';

// pages
import { Module__Error__Component__Error } from './error.component';
import { Module__Error__Pages__Error404 } from './pages/404/error404.component';

// ng module
@NgModule({
  declarations: [
    Module__Error__Component__Error,
    Module__Error__Pages__Error404,
  ],
  imports: [
    Module__Error__Routing
  ],
  exports: [
    Module__Error__Routing,
  ]
})
export class Module__Error { }
