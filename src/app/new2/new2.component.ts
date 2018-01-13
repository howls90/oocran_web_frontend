import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new2',
  templateUrl: './new2.component.html',
  styleUrls: ['./new2.component.scss']
})
export class New2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tile = 
    {
    	title: "OOCRAN Second release",
    	date: "May 12, 2017",
    	img: "../assets/images/release.jpg",
    	text: "The second release introduce the following features: - Storage catalogs of libraries and Network Functions. - RRH can work in several bands with different bandwidth. - Allows to create virtual communication chains. ... "
    };

}
