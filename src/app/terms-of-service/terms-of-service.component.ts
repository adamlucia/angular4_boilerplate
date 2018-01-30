import { ViewEncapsulation, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-of-service',
  encapsulation: ViewEncapsulation.None,
  styles: ['body { overflow-y: scroll};'],
  templateUrl: './terms-of-service.component.html',
  styleUrls: ['./terms-of-service.component.css']
})
export class TermsOfServiceComponent implements OnInit {

 constructor() {
 }

  ngOnInit() {
  }

}
