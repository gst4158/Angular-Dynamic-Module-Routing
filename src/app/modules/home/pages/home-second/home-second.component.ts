import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'module-home-page-home-second',
  templateUrl: './home-second.component.html',
  styleUrls: ['./home-second.component.scss']
})
export class Module__Home__Pages__HomeSecond implements OnInit {
  constructor() { }

    // set page title
    pageTitle: string = 'Second component title';
  
    // update parent component data
    updateComponentData(){
      return {
        pageTitle: this.pageTitle
      }
    }

  ngOnInit() {
  }

}
