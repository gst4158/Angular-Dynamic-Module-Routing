// core
import { NgModule } from '@angular/core';

// routing
import { Module__Home__Routing } from './home-routing.component';

// shared
import { Shared__GlobalHeader } from '../../shared/globalHeader/global-header.module';
import { Shared__GlobalFooter } from '../../shared/globalFooter/global-footer.module';

// pages
import { Module__Home__Component__Home } from './home.component';
import { Module__Home__Pages__Home } from './pages/home/home.component';
import { Module__Home__Pages__HomeSecond } from './pages/home-second/home-second.component';

// ng module
@NgModule({
  declarations: [
    Module__Home__Component__Home,
    Module__Home__Pages__Home,
    Module__Home__Pages__HomeSecond
  ],
  imports: [
    Module__Home__Routing,
    Shared__GlobalHeader,
    Shared__GlobalFooter
  ],
  exports: [
    Module__Home__Routing,
  ]
})
export class Module__Home { }
