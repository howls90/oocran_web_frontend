import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new3',
  templateUrl: './new3.component.html',
  styleUrls: ['./new3.component.scss']
})
export class New3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tile = 
    {
    	title: "OOCRAN First release",
    	date: "February 19, 2017",
    	img: "../assets/images/release.jpg",
    	text: "OOCRAN Release 1 is availiable! This version is focus on the adminstration of the Network Virtual Function Infrastructures of a single user. Which OOCRAN make the PoP selection and central frequency assigment avoid interfare... "
    };

}
