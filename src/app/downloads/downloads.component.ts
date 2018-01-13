import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns = ['name', 'version', 'date', 'links'];
  oocran = new MatTableDataSource(OOCRAN_DATA);
  bbu = new MatTableDataSource(BBU_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.oocran.filter = filterValue;
    this.bbu.filter = filterValue;
  } 

}

export interface Element {
  name: string;
  version: string;
  date: string;
  links: string[];
}

const OOCRAN_DATA: Element[] = [
  {
  	name: 'Release 1', 
  	version: '1.0.0', 
  	date: 'March 01, 2017', 
  	links: [
  		"https://github.com/oocran/oocran/releases/tag/first",
  	]
  },
  {
  	name: 'Release 2', 
  	version: '2.0.0',
  	date: 'March 01, 2017', 
  	links: [
  		"https://github.com/oocran/oocran/releases/tag/v2.0",
  	]
  },
  {
  	name: 'Release 3', 
  	version: '3.0.0', 
  	date: 'March 01, 2017', 
  	links: [
  		"https://github.com/oocran/oocran/releases/tag/v3.0",
  	]
  },
  {
  	name: 'Release 4', 
  	version: '4.0.3', 
  	date: 'March 01, 2017',
  	links: [
  		"https://github.com/oocran/oocran/releases/tag/4.0.3",
  		"../assets/downloads/oocran/oocran_4.0.3.deb",
		"../assets/downloads/oocran/oocran_4.0.3.rpm",
		"../assets/downloads/oocran/oocran_4.0.3.tar.gz",
  	]
  },
];

const BBU_DATA: Element[] = [
  {
  	name: 'BBU', 
  	version: '4.0.1', 
  	date: 'March 01, 2017', 
  	links: [
  		"https://github.com/oocran/vbbu",
  		"../assets/downloads/bbu/bbu_4.0.2.deb",
		"../assets/downloads/bbu/bbu_4.0.2.rpm",
		"../assets/downloads/bbu/bbu_4.0.2.nix",
		"../assets/downloads/bbu/bbu_4.0.2.tar.gz",
  	]
  },
];
