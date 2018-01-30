import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit {
  	location;
	constructor() { }

	ngOnInit(){
   		if(navigator.geolocation){
      		navigator.geolocation.getCurrentPosition(position => {
        		this.location = position.coords;
        		console.log(position.coords); 
      		});
   		}
 	}
}
