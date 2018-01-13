import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  tiles = [
    {
    	title: 'Spectrum Sharing', 
    	img:'<i style="font-size: 80px" class="fa fa-wifi" aria-hidden="true"></i>', 
    	text: 'Manage radio spectrum as another resource pool.'
    },
    {
    	title: 'Automate Workflows', 
    	img:'<i style="font-size: 80px" class="fa fa-calendar-o" aria-hidden="true"></i>', 
    	text: 'Orchestrate Network Services automatically through schedulers.'
    },
    {
    	title: 'Cost Management', 
    	img:'<i style="font-size: 80px" class="fa fa-line-chart" aria-hidden="true"></i>', 
    	text: 'Administrate the cost and usage of your Network Services.'
    },
    {
    	title: 'Extensibility', 
    	img:'<i style="font-size: 80px" class="fa fa-users" aria-hidden="true"></i>', 
    	text: 'OOCRAN can be easily extended supporting additional use cases.'
    },
    {
    	title: 'Open Community', 
    	img:'<i style="font-size: 80px" class="fa fa-users" aria-hidden="true"></i>', 
    	text: 'Participate in the development, fork us on github.'
    },
    {
    	title: 'Open Source', 
    	img:'<i style="font-size: 80px" class="fa fa-github-square" aria-hidden="true"></i>', 
    	text: 'OOCRAN code has been developed under the Apache2 license.'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
