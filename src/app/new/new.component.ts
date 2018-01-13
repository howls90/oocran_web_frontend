import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})

export class NewComponent implements OnInit {

  id: string;	

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.id = this.route.snapshot.params.id;
  }

  tile = 
    {
    	title: "OOCRAN Fourth release",
    	date: "October 30, 2017",
    	img: "../assets/images/release.jpg",
    	text: "The fourth release of OOCRAN solved multiple bugs and introduce the following features: - Improve the PoPs management. - Introduce new tools to manege the UEs of the scenario. - Introduce tools to create advance wireless i... "
    };
}
