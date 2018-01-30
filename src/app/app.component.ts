import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { WindowRefService } from './window-ref.service';


@Component({
  	selector: 'app-root',
  	//selector: 'body',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  	title = 'app works!';
  	route: string;
	private _window: Window;
    constructor (windowRef: WindowRefService) {
        this._window = windowRef.nativeWindow;
		this._window.scrollTo(0, 1);

		this.route = this._window.location.pathname;
    }
  ngOnInit() {
  }
}
