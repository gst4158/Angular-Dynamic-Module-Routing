// core
import { NgModule } from '@angular/core';

// routing
import { Module__BrandOne__Routing } from './brand-one-routing.component';

// shared
import { Shared__GlobalHeader } from '../../shared/globalHeader/global-header.module';
import { Shared__GlobalFooter } from '../../shared/globalFooter/global-footer.module';

// pages
import { Module__BrandOne__Component__Home } from './brand-one.component';
import { Module__BrandOne__Pages__Home } from './pages/home/home.component';

// ng module
@NgModule({
  declarations: [
    Module__BrandOne__Component__Home,
    Module__BrandOne__Pages__Home,
  ],
  imports: [
    Module__BrandOne__Routing,
    Shared__GlobalHeader,
    Shared__GlobalFooter
  ],
  exports: [
    Module__BrandOne__Routing,
  ]
})
export class Module__BrandOne { }
