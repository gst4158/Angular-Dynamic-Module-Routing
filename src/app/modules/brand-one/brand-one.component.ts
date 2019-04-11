import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brand-one',
  templateUrl: './brand-one.component.html',
  styleUrls: [
    './brand-one.component.scss'
  ],
})
export class Module__BrandOne__Component__Home implements OnInit {
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
    linkElement.setAttribute('id', 'stylesheet-brand-one');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('type', 'text/css');
    linkElement.setAttribute('href', '/assets/brand-one.css');

    // create css link
    if (boolean == true) {
      document.querySelector('head').appendChild(linkElement);
    }
    // destroy css link
    else {
      if (document.querySelector('#stylesheet-brand-one')) document.querySelector('#stylesheet-brand-one').remove();
    }
  }

  ngOnInit() {
    console.log('brand-one init');
    this.addBrandCSS(true);
  }

  ngOnDestroy() {
    console.log('brand-one destroy');
    this.addBrandCSS(false);
  }

}
