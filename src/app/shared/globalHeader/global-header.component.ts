import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss']
})
export class Shared__Component__GlobalHeader implements OnInit {
  constructor() { }

  // bring data from other components
  @Input() pageTitle: string;

  ngOnInit() {
  }

}
