import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'module-BrandTwo-page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class Module__BrandTwo__Pages__Home implements OnInit {
  constructor() { }
  
  // set page title
  pageTitle: string = 'Brand Two Home component title';
  
  // update parent component data
  updateComponentData(){
    return {
      pageTitle: this.pageTitle
    }
  }

  ngOnInit() {

  }

}
