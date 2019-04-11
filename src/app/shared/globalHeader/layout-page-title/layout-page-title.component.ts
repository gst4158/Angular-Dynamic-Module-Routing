import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'global-header--layout-page-title',
  templateUrl: './layout-page-title.component.html',
  styleUrls: ['./layout-page-title.component.scss']
})
export class Shared__Component__Layout__PageTitle implements OnInit {
  constructor() { }

  // bring data from other components
  @Input() pageTitle: string;

  ngOnInit() {
  }

}
