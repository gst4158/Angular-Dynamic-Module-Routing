// angular core
import { NgModule } from '@angular/core';

// imports
import { Shared__Component__GlobalHeader } from './global-header.component';
import { Shared__Component__LayoutHeader } from './layout-header/layout-header.component';

// ng module
@NgModule({
  declarations: [
    Shared__Component__GlobalHeader,
    Shared__Component__LayoutHeader
  ],
  exports: [
    Shared__Component__GlobalHeader,
    Shared__Component__LayoutHeader
  ]
})
export class Shared__GlobalHeader { }
