import { Component, OnInit } from '@angular/core';
//import { AngularFaviconService } from 'angular-favicon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'clinica_front';
  //constructor(private ngxFavicon: AngularFaviconService) {}

  ngOnInit() {
    //this.ngxFavicon.setFavicon("./assets/img/favicon-32x32.png");
    // OR 
    //this.ngxFavicon.setFavicon("./assets/img/favicon-32x32.png", "./assets/img/faviconW-32x32.png");
  }
}
