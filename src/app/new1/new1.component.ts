import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new1',
  templateUrl: './new1.component.html',
  styleUrls: ['./new1.component.scss']
})
export class New1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tile = 
    {
    	title: "OOCRAN third release",
    	date: "August 13, 2017",
    	img: "../assets/images/release.jpg",
    	text: "The second release introduce the following features: - Storage catalogs of libraries and Network Functions. - RRH can work in several bands with different bandwidth. - Allows to create virtual communication chains. ... "
    };

}
