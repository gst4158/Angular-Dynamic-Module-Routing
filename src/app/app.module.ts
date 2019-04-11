// core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// modules
import { Module__Home } from './modules/home/home.module';
import { Module__BrandOne } from './modules/brand-one/brand-one.module';
import { Module__BrandTwo } from './modules/brand-two/brand-two.module';
import { Module__Error } from './modules/error/error.module';

// ng module
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // modules
    Module__Home,
    Module__BrandOne,
    Module__BrandTwo,
    Module__Error
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
