webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Mail List</h1>\n  <br>\n  <h3>About</h3>\n  <h5>This list for the developers of OOCRAN to discuss development issues and roadmap.</h5>\n\n  <br><br>\n\n  <h3>Subscribing</h3>\n  <h5>To subscribe to OOCRAN, make click on the following <a class=\"nav-link\" href=\"mailto:mfloriach90@gmail.com?subject=Add me to mail list&body=Request for subscribe to OOCRAN mail list.\" style=\"color: blue\">link</a>.</h5>\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  width: 90%;\n  margin: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(route) {
        this.route = route;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__team_team_component__ = __webpack_require__("../../../../../src/app/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__news_news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__new_new_component__ = __webpack_require__("../../../../../src/app/new/new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__new1_new1_component__ = __webpack_require__("../../../../../src/app/new1/new1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__new2_new2_component__ = __webpack_require__("../../../../../src/app/new2/new2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__new3_new3_component__ = __webpack_require__("../../../../../src/app/new3/new3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__downloads_downloads_component__ = __webpack_require__("../../../../../src/app/downloads/downloads.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__page404_page404_component__ = __webpack_require__("../../../../../src/app/page404/page404.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */],
    },
    {
        path: 'news',
        component: __WEBPACK_IMPORTED_MODULE_5__news_news_component__["a" /* NewsComponent */],
    },
    {
        path: 'new/0',
        component: __WEBPACK_IMPORTED_MODULE_6__new_new_component__["a" /* NewComponent */],
    },
    {
        path: 'new/1',
        component: __WEBPACK_IMPORTED_MODULE_7__new1_new1_component__["a" /* New1Component */],
    },
    {
        path: 'new/2',
        component: __WEBPACK_IMPORTED_MODULE_8__new2_new2_component__["a" /* New2Component */],
    },
    {
        path: 'new/3',
        component: __WEBPACK_IMPORTED_MODULE_9__new3_new3_component__["a" /* New3Component */],
    },
    {
        path: 'team',
        component: __WEBPACK_IMPORTED_MODULE_3__team_team_component__["a" /* TeamComponent */],
    },
    {
        path: 'downloads',
        component: __WEBPACK_IMPORTED_MODULE_10__downloads_downloads_component__["a" /* DownloadsComponent */],
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_11__page404_page404_component__["a" /* Page404Component */],
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mat-toolbar class=\"nav\" >\n  <mat-toolbar-row>\n    <a mat-button routerLink=\"\" class=\"title\">OOCRAN</a>\n    <span class=\"example-spacer\"></span>\n    <a mat-button href=\"https://github.com/oocran/oocran/wiki/Getting-Started\">Get Started</a>\n    <a mat-button routerLink=\"downloads/\">Downloads</a>\n    <a mat-button href=\"https://github.com/oocran/oocran/wiki\" >Wiki</a>\n    <a mat-button routerLink=\"news/\">News</a>\n    <a mat-button href=\"https://trello.com/b/LRjh0hs3/oocran\" >Project</a>\n    <a mat-button routerLink=\"team/\">Team</a>\n    <a mat-button routerLink=\"about\" >Contact</a>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<router-outlet></router-outlet>\n<br><br><br><br>\n<footer>\n  <div class=\"container\">\n    <div style=\"float: left;margin-top: 13px\">\n      <p>Open Orchestration Cloud RAN 2017</p>\n      <p>OOCRAN project is provided under the Apache2 license.</p>\n    </div>\n    <div style=\"float: right;margin-top: 10px\">\n      <a class=\"nav-link\" href=\"mailto:info@oocran.dynu.com?Subject=Consult%20again\" style=\"color: black;text-decoration: none\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> info@oocran.dynu.com</a>\n      <br>\n      <p style=\"float: left;margin-top: 13px\">OOCRAN project is supported by</p><a href=\"https://www.nlnet.nl/\"><img src=\"../assets/images/nlnet.jpg\"></a>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-icon {\n  padding: 0 14px; }\n\n.example-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.nav {\n  background: white; }\n\n.title {\n  font-weight: bold;\n  font-size: 18px; }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\nfooter {\n  bottom: 0; }\n\n.container {\n  width: 90%;\n  margin: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__team_team_component__ = __webpack_require__("../../../../../src/app/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__news_news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__downloads_downloads_component__ = __webpack_require__("../../../../../src/app/downloads/downloads.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__new_new_component__ = __webpack_require__("../../../../../src/app/new/new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page404_page404_component__ = __webpack_require__("../../../../../src/app/page404/page404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__new1_new1_component__ = __webpack_require__("../../../../../src/app/new1/new1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__new2_new2_component__ = __webpack_require__("../../../../../src/app/new2/new2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__new3_new3_component__ = __webpack_require__("../../../../../src/app/new3/new3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_banner_banner_component__ = __webpack_require__("../../../../../src/app/home/banner/banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_goals_goals_component__ = __webpack_require__("../../../../../src/app/home/goals/goals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_video_video_component__ = __webpack_require__("../../../../../src/app/home/video/video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_mission_mission_component__ = __webpack_require__("../../../../../src/app/home/mission/mission.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_features_features_component__ = __webpack_require__("../../../../../src/app/home/features/features.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_updates_updates_component__ = __webpack_require__("../../../../../src/app/home/updates/updates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__team_team_component__["a" /* TeamComponent */],
                __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__downloads_downloads_component__["a" /* DownloadsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__new_new_component__["a" /* NewComponent */],
                __WEBPACK_IMPORTED_MODULE_10__page404_page404_component__["a" /* Page404Component */],
                __WEBPACK_IMPORTED_MODULE_11__new1_new1_component__["a" /* New1Component */],
                __WEBPACK_IMPORTED_MODULE_12__new2_new2_component__["a" /* New2Component */],
                __WEBPACK_IMPORTED_MODULE_13__new3_new3_component__["a" /* New3Component */],
                __WEBPACK_IMPORTED_MODULE_14__home_banner_banner_component__["a" /* BannerComponent */],
                __WEBPACK_IMPORTED_MODULE_15__home_goals_goals_component__["a" /* GoalsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__home_features_features_component__["a" /* FeaturesComponent */],
                __WEBPACK_IMPORTED_MODULE_16__home_video_video_component__["a" /* VideoComponent */],
                __WEBPACK_IMPORTED_MODULE_17__home_mission_mission_component__["a" /* MissionComponent */],
                __WEBPACK_IMPORTED_MODULE_19__home_updates_updates_component__["a" /* UpdatesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_21__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_23_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material_table__["b" /* MatTableModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/downloads/downloads.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <h1 class=\"display-3\" style=\"font-size:38px\">OOCRAN Oficial Releases</h1>\n  <div class=\"example-container mat-elevation-z8\">\n    <mat-table #table [dataSource]=\"oocran\">\n\n      <!-- Position Column -->\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n      </ng-container>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"version\">\n        <mat-header-cell *matHeaderCellDef> Version </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.version}} </mat-cell>\n      </ng-container>\n\n      <!-- Weight Column -->\n      <ng-container matColumnDef=\"date\">\n        <mat-header-cell *matHeaderCellDef> Date </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.date}} </mat-cell>\n      </ng-container>\n\n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"links\">\n        <mat-header-cell *matHeaderCellDef> Links </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">\n          <a href=\"{{element.links[0]}}\"><img src=\"../assets/images/github.png\"></a>\n          <a *ngIf=\"element.links[1]\" href=\"{{element.links[1]}}\"><img src=\"../assets/images/deb.png\"></a>\n          <a *ngIf=\"element.links[1]\" href=\"{{element.links[2]}}\"><img src=\"../assets/images/rpm.png\"></a>\n          <a *ngIf=\"element.links[1]\" href=\"{{element.links[3]}}\"><img src=\"../assets/images/tar.jpeg\"></a>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n  </div>\n\n  <h1 class=\"display-3\" style=\"font-size:38px\">Base Band Unit</h1>\n  <div class=\"example-container mat-elevation-z8\">\n\n    <mat-table #table [dataSource]=\"bbu\">\n\n      <!-- Position Column -->\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n      </ng-container>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"version\">\n        <mat-header-cell *matHeaderCellDef> Version </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.version}} </mat-cell>\n      </ng-container>\n\n      <!-- Weight Column -->\n      <ng-container matColumnDef=\"date\">\n        <mat-header-cell *matHeaderCellDef> Date </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.date}} </mat-cell>\n      </ng-container>\n\n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"links\">\n        <mat-header-cell *matHeaderCellDef> Links </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">\n          <a href=\"{{element.links[0]}}\"><img src=\"../assets/images/github.png\"></a>\n          <a href=\"{{element.links[1]}}\"><img src=\"../assets/images/deb.png\"></a>\n          <a href=\"{{element.links[2]}}\"><img src=\"../assets/images/rpm.png\"></a>\n          <a href=\"{{element.links[3]}}\"> <img src=\"../assets/images/nix.png\"></a>\n          <a href=\"{{element.links[4]}}\"><img src=\"../assets/images/tar.jpeg\"></a> \n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n  </div>\n  \n</div>"

/***/ }),

/***/ "../../../../../src/app/downloads/downloads.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  width: 90%;\n  margin: auto; }\n\nimg {\n  max-width: 35px;\n  max-height: 35px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/downloads/downloads.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DownloadsComponent = (function () {
    function DownloadsComponent() {
        this.displayedColumns = ['name', 'version', 'date', 'links'];
        this.oocran = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatTableDataSource */](OOCRAN_DATA);
        this.bbu = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatTableDataSource */](BBU_DATA);
    }
    DownloadsComponent.prototype.ngOnInit = function () {
    };
    DownloadsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.oocran.filter = filterValue;
        this.bbu.filter = filterValue;
    };
    DownloadsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-downloads',
            template: __webpack_require__("../../../../../src/app/downloads/downloads.component.html"),
            styles: [__webpack_require__("../../../../../src/app/downloads/downloads.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DownloadsComponent);
    return DownloadsComponent;
}());

var OOCRAN_DATA = [
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
var BBU_DATA = [
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


/***/ }),

/***/ "../../../../../src/app/home/banner/banner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"background-image: url('../assets/images/portada.jpeg')\">\n  <div class= \"content\">\n    <h1>Open Orchestrator Cloud RAN</h1>\n    <h2>Fourth release is now available !</h2>\n    <h3>OOCRAN is an open source project for Wireless Communication Orchestration sponsored by the NLnet foundation.</h3>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/banner/banner.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  text-shadow: black 0.1em 0.1em 0.2em;\n  font-weight: 900;\n  color: white;\n  font-size: 50px; }\n\nh2 {\n  padding: 7px 7px 7px 7px;\n  text-shadow: black 0.4em 0.4em 0.4em;\n  font-weight: 900;\n  color: white; }\n\nh3 {\n  padding: 7px 7px 7px 7px;\n  text-shadow: black 0.4em 0.4em 0.4em;\n  font-weight: 900;\n  color: white; }\n\n.content {\n  text-align: justify;\n  background: transparent;\n  padding-top: 30px;\n  padding-bottom: 50px;\n  width: 90%;\n  margin: auto; }\n\n.jumbotron {\n  margin-bottom: 30px;\n  padding-bottom: 30px;\n  width: 100%;\n  background-size: 100% 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/banner/banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-banner',
            template: __webpack_require__("../../../../../src/app/home/banner/banner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/banner/banner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/features/features.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"content\">\n\t\t<div class=\"blocks\">\n\t\t\t<h2>Spectrum Sharing</h2>\n\t\t\t<i style=\"font-size: 80px\" class=\"fa fa-wifi\" aria-hidden=\"true\"></i>\n\t\t\t<h4>Manage radio spectrum as another resource pool.</h4>\n\t\t</div>\n\t\t<div class=\"blocks\">\n\t\t\t<h2>Automate Workflows</h2>\n\t\t\t<i style=\"font-size: 80px\" class=\"fa fa-calendar-o\" aria-hidden=\"true\"></i>\n\t\t\t<h4>Orchestrate Network Services automatically through schedulers.</h4>\n\t\t</div>\n\t\t<div class=\"blocks\">\n\t\t\t<h2>Cost Management</h2>\n\t\t\t<i style=\"font-size: 80px\" class=\"fa fa-line-chart\" aria-hidden=\"true\"></i>\n\t\t\t<h4>Administrate the cost and usage of your Network Services.</h4>\n\t\t</div>\n\t</div>\n\t<div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"content\">\n\t\t<div class=\"blocks\">\n\t\t\t<h2>Extensibility</h2>\n\t\t\t<i style=\"font-size: 80px\" class=\"fa fa-users\" aria-hidden=\"true\"></i>\n\t\t\t<h4>OOCRAN can be easily extended supporting additional use cases.</h4>\n\t\t</div>\n\t\t<div class=\"blocks\">\n\t\t\t<h2>Open Community</h2>\n\t\t\t<i style=\"font-size: 80px\" class=\"fa fa-users\" aria-hidden=\"true\"></i>\n\t\t\t<h4>Participate in the development, fork us on github.</h4>\n\t\t</div>\n\t\t<div class=\"blocks\">\n\t\t\t<h2>Open Source</h2>\n\t\t\t<i style=\"font-size: 80px\" class=\"fa fa-github-square\" aria-hidden=\"true\"></i>\n\t\t\t<h4>OOCRAN code has been developed under the Apache2 license.</h4>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/features/features.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  margin: auto;\n  width: 100%;\n  max-width: 350px;\n  max-height: 100%; }\n\n.blocks {\n  -webkit-box-flex: 1;\n  box-flex: 1;\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n  text-align: center;\n  height: 300px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 30%; }\n\n.container {\n  margin-bottom: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/features/features.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeaturesComponent = (function () {
    function FeaturesComponent() {
        this.tiles = [
            {
                title: 'Spectrum Sharing',
                img: '<i style="font-size: 80px" class="fa fa-wifi" aria-hidden="true"></i>',
                text: 'Manage radio spectrum as another resource pool.'
            },
            {
                title: 'Automate Workflows',
                img: '<i style="font-size: 80px" class="fa fa-calendar-o" aria-hidden="true"></i>',
                text: 'Orchestrate Network Services automatically through schedulers.'
            },
            {
                title: 'Cost Management',
                img: '<i style="font-size: 80px" class="fa fa-line-chart" aria-hidden="true"></i>',
                text: 'Administrate the cost and usage of your Network Services.'
            },
            {
                title: 'Extensibility',
                img: '<i style="font-size: 80px" class="fa fa-users" aria-hidden="true"></i>',
                text: 'OOCRAN can be easily extended supporting additional use cases.'
            },
            {
                title: 'Open Community',
                img: '<i style="font-size: 80px" class="fa fa-users" aria-hidden="true"></i>',
                text: 'Participate in the development, fork us on github.'
            },
            {
                title: 'Open Source',
                img: '<i style="font-size: 80px" class="fa fa-github-square" aria-hidden="true"></i>',
                text: 'OOCRAN code has been developed under the Apache2 license.'
            },
        ];
    }
    FeaturesComponent.prototype.ngOnInit = function () {
    };
    FeaturesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-features',
            template: __webpack_require__("../../../../../src/app/home/features/features.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/features/features.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FeaturesComponent);
    return FeaturesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/goals/goals.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"content\">\n\t\t<div class=\"blocks\">\n\t\t\t<h2>Orchestration</h2>\n\t\t\t<img src=\"../assets/images/management.png\">\n\t\t\t<h4>Automate the provisioning and configuration of NS through schedulers.</h4>\n\t\t</div>\n\t\t<div class=\"blocks\">\n\t\t\t<h2>Resources Pool</h2>\n\t\t\t<img src=\"../assets/images/resourcesPool.png\">\n\t\t\t<h4>Manage the computational and IT resources in pools.</h4>\n\t\t</div>\n\t\t<div class=\"blocks\">\n\t\t\t<h2>Management</h2>\n\t\t\t<img src=\"../assets/images/management.png\">\n\t\t\t<h4>Administrate the virtual infrastructure throught schedulers and alarms.</h4>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/goals/goals.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  margin: auto;\n  width: 100%;\n  max-width: 350px;\n  max-height: 100%; }\n\n.blocks {\n  -webkit-box-flex: 1;\n  box-flex: 1;\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n  text-align: center;\n  height: 300px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.container {\n  margin-bottom: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/goals/goals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoalsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoalsComponent = (function () {
    function GoalsComponent() {
    }
    GoalsComponent.prototype.ngOnInit = function () {
    };
    GoalsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-goals',
            template: __webpack_require__("../../../../../src/app/home/goals/goals.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/goals/goals.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GoalsComponent);
    return GoalsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-banner></app-banner>\n\n<app-goals></app-goals>\n\n<app-video></app-video>\n\n<app-mission></app-mission>\n\n<app-features></app-features>\n\n<app-updates></app-updates>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/mission/mission.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='mission' style=\"background-image: url('../assets/images/updates.jpg')\">\n  <div class=\"row\">\n    <h2>What is OOCRAN?</h2>\n    <h4>OOCRAN’s main objective is to facilitate sharing wireless physical resources, including radio spectrum, by creating, coordinating and managing several virtual infrastructures of different service providers under a “spectrum and infrastructure on demand” policy.</h4>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/mission/mission.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mission {\n  background-size: 110% 130%;\n  padding-top: 50px;\n  padding-bottom: 200px;\n  margin-bottom: 50px; }\n\n.row {\n  font-size: 20px;\n  margin-left: 130px;\n  margin-right: 130px; }\n\nh2 {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/mission/mission.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MissionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MissionComponent = (function () {
    function MissionComponent() {
    }
    MissionComponent.prototype.ngOnInit = function () {
    };
    MissionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mission',
            template: __webpack_require__("../../../../../src/app/home/mission/mission.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/mission/mission.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MissionComponent);
    return MissionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/updates/updates.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title\"><h1 style=\"\">Recent Updates</h1></div>\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"content\">\n    <div class=\"blocks\">\n      <h1><img src=\"../assets/images/icon_news3.png\"> News</h1>\n        <div >\n          <a href=\"new/3\"><h3>OOCRAN Fourth release!</h3></a>\n          <h4>October 30, 2017</h4>\n        </div>\n        <div >\n          <a href=\"new/2\"><h3>OOCRAN Thrid release!</h3></a>\n          <h4>August 13, 2017</h4>\n        </div>\n        <div >\n          <a href=\"new/1\"><h3>OOCRAN Second release!</h3></a>\n          <h4>May 12, 2017</h4>\n        </div>\n    </div>\n    <div class=\"blocks\">\n      <h1><img src=\"../assets/images/icon_downloads2.png\"> Downloads</h1>\n        <div >\n          <a href=\"downloads\"><h3>Release 4</h3></a>\n          <h4>October 30, 2017</h4>\n        </div>\n        <div >\n          <a href=\"downloads\"><h3>Release 3</h3></a>\n          <h4>August 13, 2017</h4>\n        </div>\n        <div >\n          <a href=\"downloads\"><h3>Release 2</h3></a>\n          <h4>May 12, 2017</h4>\n        </div>\n    </div>\n    <div class=\"blocks\">\n      <h1><img src=\"../assets/images/icon_milestones2.png\"> Milestones</h1>\n        <div>\n          <h3><a href=\"https://trello.com/b/LRjh0hs3/oocran\">PoP Selection</a></h3>\n          <h4>October, 30, 2017</h4>\n        </div>\n        <div>\n          <h3><a href=\"https://trello.com/b/LRjh0hs3/oocran\">Improve GUI</a></h3>\n          <h4>October, 30, 2017</h4>\n        </div>\n        <div>\n          <h3><a href=\"https://trello.com/b/LRjh0hs3/oocran\">MultiBands</a></h3>\n          <h4>October, 30, 2017</h4>\n        </div>\n        <div>\n          <h3><a href=\"https://trello.com/b/LRjh0hs3/oocran\">Nix package</a></h3>\n          <h4>October, 30, 2017</h4>\n        </div>\n    </div>\n    <div class=\"blocks\">\n      <h1><img src=\"../assets/images/icon_wiki2.png\"> Wiki</h1>\n        <div>\n          <h3><a href=\"https://github.com/oocran/oocran/wiki/Alert\">Alerts</a></h3>\n          <h4>August, 12, 2017</h4>\n        </div>\n        <div>\n          <h3><a href=\"https://github.com/oocran/oocran/wiki/Schedulers\">Schedulers</a></h3>\n          <h4>August, 12, 2017</h4>\n        <div>\n          <h3><a href=\"https://github.com/oocran/oocran/wiki/BBU-Pool\">BBU Pool</a></h3>\n          <h4>May, 12, 2017</h4>\n        </div>\n        <div>\n          <h3><a href=\"https://github.com/oocran/oocran/wiki/Grafana-template\">Grafana</a></h3>\n          <h4>May, 12, 2017</h4>\n        </div>  \n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/updates/updates.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blocks {\n  -webkit-box-flex: 1;\n  box-flex: 1;\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n  text-align: center;\n  height: 300px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: 10px; }\n\n.blocks h1 {\n  padding: 5px 5px 5px 5px;\n  background-color: grey;\n  color: white;\n  font-weight: 900; }\n\n.container {\n  margin-bottom: 50px; }\n\n.title {\n  text-align: center; }\n\nh4 {\n  color: grey; }\n\na {\n  text-decoration: none;\n  text-align: center;\n  color: black; }\n\nimg {\n  width: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/updates/updates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpdatesComponent = (function () {
    function UpdatesComponent() {
    }
    UpdatesComponent.prototype.ngOnInit = function () {
    };
    UpdatesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-updates',
            template: __webpack_require__("../../../../../src/app/home/updates/updates.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/updates/updates.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UpdatesComponent);
    return UpdatesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/video/video.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"content\">\n    <div class=\"blocks\">\n      <iframe width=\"620\" height=\"450\" src=\"https://www.youtube.com/embed/cccJO4w3CXY\"></iframe>\n    </div>\n    <div class=\"blocks\">\n      <h1>TestBed</h1>\n      <h3>Check the OOCRAN funcionalities:</h3>\n      <ul style=\"font-size:20px;text-align: left\">\n        <li>Schedulers</li>\n        <li>Alarms</li>\n        <li>EMS</li>\n        <li>Script Cataleg</li>\n        <li>Network Functions</li>\n        <li>Network Services</li>\n        <li>NVF data collection</li>\n        <li>Orchestration</li>\n        <li>Spectrum and computation sharing</li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/video/video.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin-bottom: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/video/video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoComponent = (function () {
    function VideoComponent() {
    }
    VideoComponent.prototype.ngOnInit = function () {
    };
    VideoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-video',
            template: __webpack_require__("../../../../../src/app/home/video/video.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/video/video.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VideoComponent);
    return VideoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material_toolbar__["a" /* MatToolbarModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material_toolbar__["a" /* MatToolbarModule */]]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\t\n  <h1>{{tile.title}}</h1>\n  <h5>{{tile.date}}</h5>\n  <div class =\"imagen\">\n    <img src=\"{{tile.img}}\">\n  </div>\n  <p>The fourth release of OOCRAN solved multiple bugs and introduce the following features:</p>\n  <ul>\n\t<li> Improve the PoPs management.\n\t<li> Introduce new tools to manege the UEs of the scenario.</li>\n\t<li> Introduce tools to create advance wireless infrastructures.</li>\n\t<li> Manage several PoPs from different providers (AWS, Google Cloud, Azure...).</li>\n\t<li> Improve the creation/manage of the VNF.</li>\n\t<li> Allows to create multi alerts and multiple schedulers.</li>\n\t<li> Improve the GUI experience specially the Google Maps APIs.</li>\n  </ul>\n  <p>Check it on the oficcial github account! https://github.com/oocran/oocran</p>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/new/new.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  width: 90%;\n  margin: auto; }\n\nimg {\n  text-align: center;\n  max-width: 300px;\n  max-height: 300px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new/new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewComponent = (function () {
    function NewComponent(route) {
        this.route = route;
        this.tile = {
            title: "OOCRAN Fourth release",
            date: "October 30, 2017",
            img: "../assets/images/release.jpg",
            text: "The fourth release of OOCRAN solved multiple bugs and introduce the following features: - Improve the PoPs management. - Introduce new tools to manege the UEs of the scenario. - Introduce tools to create advance wireless i... "
        };
    }
    NewComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params.id;
    };
    NewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new',
            template: __webpack_require__("../../../../../src/app/new/new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new/new.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/new1/new1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\t\n  <h1>{{tile.title}}</h1>\n  <h5>{{tile.date}}</h5>\n  <div class =\"imagen\">\n    <img src=\"{{tile.img}}\">\n  </div>\n  <p>The third release introduce the following features:</p>\n  <ul>\n\t<li> RRH can be shared between operators.</li>\n\t<li> Allows to create virtual communication chains.</li>\n\t<li> Manage several VIMs from different providers.</li>\n\t<li> Introduce more provisioning methodologies.</li>\n\t<li> Allows to create Pools with different providers at the same time.</li>\n\t<li>Improve the creation of the VNFs.</li>\n\t<li> Allows to create alerts.</li>\n\t<li> Improve the GUI experience.</li>\n  </ul>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/new1/new1.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new1/new1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return New1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var New1Component = (function () {
    function New1Component() {
        this.tile = {
            title: "OOCRAN third release",
            date: "August 13, 2017",
            img: "../assets/images/release.jpg",
            text: "The second release introduce the following features: - Storage catalogs of libraries and Network Functions. - RRH can work in several bands with different bandwidth. - Allows to create virtual communication chains. ... "
        };
    }
    New1Component.prototype.ngOnInit = function () {
    };
    New1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new1',
            template: __webpack_require__("../../../../../src/app/new1/new1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new1/new1.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], New1Component);
    return New1Component;
}());



/***/ }),

/***/ "../../../../../src/app/new2/new2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\t\n  <h1>{{tile.title}}</h1>\n  <h5>{{tile.date}}</h5>\n  <div class =\"imagen\">\n    <img src=\"{{tile.img}}\">\n  </div>\n  <p>The second release introduce the following features:\n  <ul>\n\t<li> Storage catalogs of libraries and Network Functions.</li>\n\t<li> RRH can work in several bands with different bandwidth.</li>\n\t<li> Allows to create virtual communication chains.</li>\n\t<li> Manage severals VIMs.</li>\n\t<li> Incorporate examples for transmit using a USRP drivers.</li>\n\t<li> Allows to monitor Network Functions resources.</li>\n\t<li> Allows tp create queues and schedulers.</li>\n\t<li> New examples as: libraries, bbu pools, etc</li>\n\t<li> Improve the GUI experience.</li>\n  </ul>\n  <p>The source code is availiable on Downloads section and on the Github OOCRAN repository.</p>\n  <p>Check the Wiki for more information about it. </p>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/new2/new2.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new2/new2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return New2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var New2Component = (function () {
    function New2Component() {
        this.tile = {
            title: "OOCRAN Second release",
            date: "May 12, 2017",
            img: "../assets/images/release.jpg",
            text: "The second release introduce the following features: - Storage catalogs of libraries and Network Functions. - RRH can work in several bands with different bandwidth. - Allows to create virtual communication chains. ... "
        };
    }
    New2Component.prototype.ngOnInit = function () {
    };
    New2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new2',
            template: __webpack_require__("../../../../../src/app/new2/new2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new2/new2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], New2Component);
    return New2Component;
}());



/***/ }),

/***/ "../../../../../src/app/new3/new3.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\t\n  <h1>{{tile.title}}</h1>\n  <h5>{{tile.date}}</h5>\n  <div class =\"imagen\">\n    <img src=\"{{tile.img}}\">\n  </div>\n  <p>OOCRAN Release 1 is availiable!</p>\n\n  <p>This version is focus on the adminstration of the Network Virtual Function Infrastructures of a single user. Which OOCRAN make the PoP selection and central frequency assigment avoid interfarence between cells.</p>\n\n  <p>The features of this release are:</p>\n  <ul>\n\t<li> Computational Resources and Radio Spectrum Sharing.</li>\n\t<li> Interference Avoide.</li>\n\t<li> NVFI management for service providers.</li>\n\t<li> Easy Infrastructure management for infratustructe providers.</li>\n\t<li> Multi VIM supported.</li>\n\t<li> LTE transmission use case.</li>\n\t<li> VNF Descriptor APIs.</li>\n\t<li> Graphical User Interface (Dashboard) for the NVFI orchestrator.</li>\n\t<li> OSS/BBS implementation.</li>\n  </ul>\n  <p>The source code is availiable on Downloads section and on the Github OOCRAN repository.</p>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/new3/new3.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new3/new3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return New3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var New3Component = (function () {
    function New3Component() {
        this.tile = {
            title: "OOCRAN First release",
            date: "February 19, 2017",
            img: "../assets/images/release.jpg",
            text: "OOCRAN Release 1 is availiable! This version is focus on the adminstration of the Network Virtual Function Infrastructures of a single user. Which OOCRAN make the PoP selection and central frequency assigment avoid interfare... "
        };
    }
    New3Component.prototype.ngOnInit = function () {
    };
    New3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new3',
            template: __webpack_require__("../../../../../src/app/new3/new3.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new3/new3.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], New3Component);
    return New3Component;
}());



/***/ }),

/***/ "../../../../../src/app/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>News</h1>\n  <div *ngFor=\"let tile of tiles\">\n    <div class=\"thumb\">\n      <img src=\"../assets/images/release.jpg\">\n    </div>\n    <div style=\"height: 230px\">\n      <h1>{{tile.title}}</h1>\n      <h4>{{tile.date}}</h4>\n      <p>{{tile.text}}</p>\n      <a href=\"new/{{tile.id}}\">Read more</a>\n    </div>\n    <hr>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/news/news.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  width: 90%;\n  margin: auto; }\n\n.thumb {\n  height: 200px;\n  width: 250px;\n  float: left;\n  vertical-align: middle; }\n\n.content {\n  height: 230px; }\n\na {\n  float: right;\n  background-color: #373a3c;\n  border-color: #373a3c;\n  color: white;\n  padding: 10px 10px 10px 10px;\n  border-radius: 5px;\n  text-decoration: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsComponent = (function () {
    function NewsComponent() {
        this.tiles = [
            {
                id: 0,
                title: "OOCRAN Fourth release",
                date: "October 30, 2017",
                text: "The fourth release of OOCRAN solved multiple bugs and introduce the following features: - Improve the PoPs management. - Introduce new tools to manege the UEs of the scenario. - Introduce tools to create advance wireless i... "
            },
            {
                id: 1,
                title: "OOCRAN Third release",
                date: "August 13, 2017",
                text: "The third release introduce the following features: - RRH can be shared between operators. - Allows to create virtual communication chains. - Manage several VIMs from different providers. - Introduce more provisioning met... "
            },
            {
                id: 2,
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
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news',
            template: __webpack_require__("../../../../../src/app/news/news.component.html"),
            styles: [__webpack_require__("../../../../../src/app/news/news.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page404/page404.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h1>\n\t  404 Page not found!\n\t</h1>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/page404/page404.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page404/page404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page404Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page404Component = (function () {
    function Page404Component() {
    }
    Page404Component.prototype.ngOnInit = function () {
    };
    Page404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page404',
            template: __webpack_require__("../../../../../src/app/page404/page404.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page404/page404.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Page404Component);
    return Page404Component;
}());



/***/ }),

/***/ "../../../../../src/app/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Team Information</h1>\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"content\">\n    <div class=\"blocks\">\n      <h2>Martí Floriach</h2>\n      <img src=\"../assets/images/marti.jpg\">\n      <h3>Project Leader</h3>\n      <a href=\"https://www.linkedin.com/in/mart%C3%AD-floriach-pigem-3642b0b7/\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a>\n      <a href=\"https://github.com/howls90\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a>\n      <h5>Martí received his Bachelor’s degree in Electrical Engineering from the Polytechnic University of Catalonia in 2015. He continued his studies and received his Master’s degree in Software Engineering in 2016. OOCRAN was born as a result of his Master's thesis.</h5>\n    </div>\n    <div class=\"blocks\">\n      <h2>Guillem Xercavins</h2>\n      <img src=\"../assets/images/guillem.jpg\">\n      <h3>Lead Developer</h3>\n      <a href=\"https://www.linkedin.com/in/guillemxercavins/\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a>\n      <a href=\"\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a>\n      <h5>Guillem met his partners while pursuing his Master’s degree. He thought that the OOCRAN project was promising and decided to join it and help in developing that idea into an open-source product. His duties include, but not limited to, LTE VNF development.</h5>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/team/team.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  width: 70%;\n  margin: auto; }\n\nh2 {\n  margin-top: 10px; }\n\nimg {\n  border-radius: 50%;\n  width: 30%;\n  margin: auto; }\n\ni {\n  margin-right: 10px;\n  font-size: 20px;\n  color: black; }\n\n.blocks {\n  margin-left: 70px;\n  text-align: center; }\n\nh5 {\n  text-align: justify; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamComponent = (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-team',
            template: __webpack_require__("../../../../../src/app/team/team.component.html"),
            styles: [__webpack_require__("../../../../../src/app/team/team.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map