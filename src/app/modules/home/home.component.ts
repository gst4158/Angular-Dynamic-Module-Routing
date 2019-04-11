import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'modal-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class Module__Home__Component__Home implements OnInit {
  constructor() { }
  
  // set default value
  pageTitle: string = '';

  // get data from children components
  setData(data){
    this.pageTitle = data.updateComponentData().pageTitle;
  }

  ngOnInit() {
  }

}
