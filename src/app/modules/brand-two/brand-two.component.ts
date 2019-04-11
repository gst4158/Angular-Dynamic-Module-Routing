import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brand-two',
  templateUrl: './brand-two.component.html',
  styleUrls: [
    './brand-two.component.scss'
  ],
})
export class Module__BrandTwo__Component__Home implements OnInit {
  constructor() { }
  
  // set default value
  pageTitle: string = '';

  // get data from children components
  setData(data){
    this.pageTitle = data.updateComponentData().pageTitle;
  }

  // add brands CSS to whole document
  addBrandCSS(boolean) {
    let linkElement = document.createElement('link');
    linkElement.setAttribute('id', 'stylesheet-brand-two');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('type', 'text/css');
    linkElement.setAttribute('href', '/assets/brand-two.css');

    // create css link
    if (boolean == true) {
      document.querySelector('head').appendChild(linkElement);
    }
    // destroy css link
    else {
      if (document.querySelector('#stylesheet-brand-two')) document.querySelector('#stylesheet-brand-two').remove();
    }
  }

  ngOnInit() {
    console.log('brand-two init');
    this.addBrandCSS(true);
  }

  ngOnDestroy() {
    console.log('brand-two destroy');
    this.addBrandCSS(false);
  }

}
