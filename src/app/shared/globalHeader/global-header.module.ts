// angular core
import { NgModule } from '@angular/core';

// imports
import { Shared__Component__GlobalHeader } from './global-header.component';
import { Shared__Component__Layout__Header } from './layout-header/layout-header.component';
import { Shared__Component__Layout__Nav } from './layout-nav/layout-nav.component';
import { Shared__Component__Layout__PageTitle } from './layout-page-title/layout-page-title.component';

// ng module
@NgModule({
  declarations: [
    Shared__Component__GlobalHeader,
    Shared__Component__Layout__Header,
    Shared__Component__Layout__Nav,
    Shared__Component__Layout__PageTitle
  ],
  exports: [
    Shared__Component__GlobalHeader,
    Shared__Component__Layout__Header,
    Shared__Component__Layout__Nav,
    Shared__Component__Layout__PageTitle
  ]
})
export class Shared__GlobalHeader { }
