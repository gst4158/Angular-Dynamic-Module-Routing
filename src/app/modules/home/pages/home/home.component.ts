import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'module-home-page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class Module__Home__Pages__Home implements OnInit {
  constructor() { }
  
  // set page title
  pageTitle: string = 'Child component title';
  
  // update parent component data
  updateComponentData(){
    return {
      pageTitle: this.pageTitle
    }
  }

  ngOnInit() {

  }

}
