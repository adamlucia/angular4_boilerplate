import { Component, OnInit, AfterViewInit } from '@angular/core';
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
	_window: Window;

    constructor (location: Location, router: Router, windowRef: WindowRefService) {
        router.events.subscribe((val) => {
            if(location.path() != '') {
                this.route = location.path();
            } else {
                this.route = 'Home' }
            }
        );

        this._window = windowRef.nativeWindow;
		//this.route = this._window.location.pathname;
    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        setTimeout(() => {
          console.log('scrolling to top!');
          this._window.scrollTo(0,1);
        }, 1);
    }
}
