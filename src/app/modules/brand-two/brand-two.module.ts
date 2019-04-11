// core
import { NgModule } from '@angular/core';

// routing
import { Module__BrandTwo__Routing } from './brand-two-routing.component';

// shared
import { Shared__GlobalHeader } from '../../shared/globalHeader/global-header.module';
import { Shared__GlobalFooter } from '../../shared/globalFooter/global-footer.module';

// pages
import { Module__BrandTwo__Component__Home } from './brand-two.component';
import { Module__BrandTwo__Pages__Home } from './pages/home/home.component';

// ng module
@NgModule({
  declarations: [
    Module__BrandTwo__Component__Home,
    Module__BrandTwo__Pages__Home,
  ],
  imports: [
    Module__BrandTwo__Routing,
    Shared__GlobalHeader,
    Shared__GlobalFooter
  ],
  exports: [
    Module__BrandTwo__Routing,
  ]
})
export class Module__BrandTwo { }
