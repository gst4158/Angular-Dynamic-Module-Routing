import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import routing
import { Module__Home__Routing} from './modules/home/home-routing.component';
import { Module__Error__Routing} from './modules/error/error-routing.component';

const routes: Routes = [

];

@NgModule({
  imports: [
    Module__Home__Routing,
    RouterModule.forRoot(routes),
    Module__Error__Routing // must go last
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
