import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'global-header--layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss']
})
export class Shared__Component__LayoutHeader implements OnInit {
  constructor() { }

  // bring data from other components
  @Input() pageTitle: string;

  ngOnInit() {
  }

}
