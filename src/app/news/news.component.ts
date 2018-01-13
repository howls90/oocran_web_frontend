import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tiles = [
    {
      id:0,
    	title: "OOCRAN Fourth release",
    	date: "October 30, 2017",
    	text: "The fourth release of OOCRAN solved multiple bugs and introduce the following features: - Improve the PoPs management. - Introduce new tools to manege the UEs of the scenario. - Introduce tools to create advance wireless i... "
    },
    {
      id:1,
    	title: "OOCRAN Third release",
    	date: "August 13, 2017",
    	text: "The third release introduce the following features: - RRH can be shared between operators. - Allows to create virtual communication chains. - Manage several VIMs from different providers. - Introduce more provisioning met... "
    },
    {
      id:2,
    	title: "OOCRAN Second release",
    	date: "May 12, 2017",
    	text: "The second release introduce the following features: - Storage catalogs of libraries and Network Functions. - RRH can work in several bands with different bandwidth. - Allows to create virtual communication chains. ... "
    },
    {
      id: 3,
    	title: "OOCRAN First release",
    	date: "February 19, 2017",
    	text: "OOCRAN Release 1 is availiable! This version is focus on the adminstration of the Network Virtual Function Infrastructures of a single user. Which OOCRAN make the PoP selection and central frequency assigment avoid interfare... "
    },
  ];

}
