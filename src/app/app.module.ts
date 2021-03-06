import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { OfferComponent } from './offer/offer.component';
import { ShareComponent } from './share/share.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

import { WindowRefService } from './window-ref.service';
import { OfferService } from './offer.service';
// import { LandscapeOverlayComponent } from './landscape-overlay/landscape-overlay.component';

import { HttpClientModule } from '@angular/common/http';



const routes: Routes = [
    //{ path: 'hero/:id', component: HeroDetailComponent },
    {
        path: 'offer',
        component: OfferComponent,
        data: { title: 'Your Offer' }
    },
	{
		path: 'terms-of-service',
		component: TermsOfServiceComponent,
		data: {	title: 'Terms of Service' }
	},
	{
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
    	data: { title: 'Privacy Policy' }
    },
    {
        path: '',
        redirectTo: 'offer',
        pathMatch: 'full'
     }
     //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        OfferComponent,
        ShareComponent,
        GeolocationComponent,
        TermsOfServiceComponent,
        PrivacyPolicyComponent,
        //LandscapeOverlayComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(
            routes,
        	{
        		enableTracing: true,
        		useHash:true
        	}
        ),
        BrowserModule,
        HttpClientModule
    ],
    providers:[
       WindowRefService,
       OfferService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
