import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  isIn = false;   // store state

  toggleState(){ // click handler
       let bool = this.isIn;
       this.isIn = bool === false ? true : false;
  }
}
