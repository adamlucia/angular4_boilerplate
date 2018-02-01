import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { WindowRefService } from './window-ref.service';
import { OfferService } from './offer.service';


@Component({
  	selector: 'app-root',
  	//selector: 'body',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  	route: string;
	_window: Window;
    //offerService: OfferService;
    offer: Offer[];

    constructor (location: Location, router: Router, windowRef: WindowRefService, private offerService: OfferService) {
        router.events.subscribe((val) => {
            if(location.path() != '') {
                this.route = location.path();
            } else {
                this.route = 'Home' }
            }
        );

        this._window = windowRef.nativeWindow;
		//this.route = this._window.location.pathname;
        this.offerService = offerService;
    }
    ngOnInit() {
        this.getOffer();
    }

    getOffer(): void {
      this.offerService.getOffer().subscribe(offer => this.offer = offer);
    }
    ngAfterViewInit() {
        setTimeout(() => {
          console.log('scrolling to top!');
          this._window.scrollTo(0,1);
        }, 1);
    }
}
