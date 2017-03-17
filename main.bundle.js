webpackJsonp([2,5],{

/***/ 292:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 292;


/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(420);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.isMenuOpen = true;
        this.title = 'app works!';
    }
    AppComponent.prototype.onMenuToggled = function (isMenuOpen) {
        this.isMenuOpen = isMenuOpen;
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(494),
            styles: [__webpack_require__(482)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_component__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__topnav_component__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_component__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_component__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_charts__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__table_component__ = __webpack_require__(418);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__topnav_component__["a" /* TopnavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_10__table_component__["a" /* TableComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9_ng2_charts__["ChartsModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer',
            template: __webpack_require__(495)
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
        this.lineChartLabels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
        this.lineChartType = 'line';
        this.lineChartData = [
            { data: [1, 9, 6, 10, 5, 17, 6, 10, 7, 11, 35, 9, 12, 5, 3, 4, 9], label: 'Series A' }
        ];
        //  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartLegend = true;
        this.lineChartColors = [
            {
                backgroundColor: "rgba(38, 185, 154, 0.31)",
                borderColor: "rgba(38, 185, 154, 0.7)",
                pointBorderColor: "rgba(38, 185, 154, 0.7)",
                pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointBorderWidth: 1,
            }];
    }
    MainComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    MainComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    MainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'main-component',
            template: __webpack_require__(496)
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
        this.isOpen = true;
    }
    SidebarComponent.prototype.openLi = function () {
        this.isOpen = !this.isOpen;
    };
    SidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sidebar',
            template: __webpack_require__(497)
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarComponent);
    return SidebarComponent;
}());
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableComponent = (function () {
    function TableComponent() {
    }
    TableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'responsive-table',
            template: __webpack_require__(498)
        }), 
        __metadata('design:paramtypes', [])
    ], TableComponent);
    return TableComponent;
}());
//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopnavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopnavbarComponent = (function () {
    function TopnavbarComponent() {
        this.onMenuToggled = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isMenuOpen = true;
    }
    TopnavbarComponent.prototype.onMenuToggleClick = function () {
        this.isMenuOpen = !this.isMenuOpen;
        this.onMenuToggled.emit(this.isMenuOpen);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], TopnavbarComponent.prototype, "onMenuToggled", void 0);
    TopnavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'topnavbar',
            template: __webpack_require__(499)
        }), 
        __metadata('design:paramtypes', [])
    ], TopnavbarComponent);
    return TopnavbarComponent;
}());
//# sourceMappingURL=topnav.component.js.map

/***/ }),

/***/ 420:
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
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 494:
/***/ (function(module, exports) {

module.exports = "<div \n    [class.nav-md]=\"isMenuOpen\"\n    [class.nav-sm]=\"!isMenuOpen\"\n    >\n    <div class=\"container body\">\n        <div class=\"main_container\">\n            <sidebar></sidebar>\n            <topnavbar (onMenuToggled)=\"onMenuToggled($event)\"></topnavbar>\n            <main-component></main-component>\n            <footer></footer>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 495:
/***/ (function(module, exports) {

module.exports = "<div class=\"pull-right\">\r\nGentelella - Bootstrap Admin Template by <a href=\"https://colorlib.com\">Colorlib</a>\r\n</div>\r\n  <div class=\"clearfix\"></div>\r\n"

/***/ }),

/***/ 496:
/***/ (function(module, exports) {

module.exports = "<div class=\"right_col\" role=\"main\">\r\n     <div class=\"\">\r\n        <div class=\"row top_tiles\" style=\"margin: 10px 0;\">\r\n              <div class=\"col-md-3 col-sm-3 col-xs-6 tile\">\r\n                <span>Total Sessions</span>\r\n                <h2>231,809</h2>\r\n                <span class=\"sparkline_one\" style=\"height: 160px;\">\r\n                      <canvas width=\"200\" height=\"60\" style=\"display: inline-block; vertical-align: top; width: 94px; height: 30px;\"></canvas>\r\n                  </span>\r\n              </div>\r\n              <div class=\"col-md-3 col-sm-3 col-xs-6 tile\">\r\n                <span>Total Revenue</span>\r\n                <h2>$ 231,809</h2>\r\n                <span class=\"sparkline_one\" style=\"height: 160px;\">\r\n                      <canvas width=\"200\" height=\"60\" style=\"display: inline-block; vertical-align: top; width: 94px; height: 30px;\"></canvas>\r\n                  </span>\r\n              </div>\r\n              <div class=\"col-md-3 col-sm-3 col-xs-6 tile\">\r\n                <span>Total Sessions</span>\r\n                <h2>231,809</h2>\r\n                <span class=\"sparkline_three\" style=\"height: 160px;\">\r\n                      <canvas width=\"200\" height=\"60\" style=\"display: inline-block; vertical-align: top; width: 94px; height: 30px;\"></canvas>\r\n                  </span>\r\n              </div>\r\n              <div class=\"col-md-3 col-sm-3 col-xs-6 tile\">\r\n                <span>Total Sessions</span>\r\n                <h2>231,809</h2>\r\n                <span class=\"sparkline_one\" style=\"height: 160px;\">\r\n                      <canvas width=\"200\" height=\"60\" style=\"display: inline-block; vertical-align: top; width: 94px; height: 30px;\"></canvas>\r\n                  </span>\r\n              </div>\r\n         </div>\r\n        <br />\r\n\r\n         <div class=\"row\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <div class=\"dashboard_graph x_panel\">\r\n                  <div class=\"row x_title\">\r\n                    <div class=\"col-md-6\">\r\n                      <h3>Network Activities <small>Graph title sub-title</small></h3>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <div id=\"reportrange\" class=\"pull-right\" style=\"background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc\">\r\n                        <i class=\"glyphicon glyphicon-calendar fa fa-calendar\"></i>\r\n                        <span>December 30, 2014 - January 28, 2015</span> <b class=\"caret\"></b>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"x_content\">\r\n                          <canvas baseChart height=\"70\"\r\n                                [datasets]=\"lineChartData\"\r\n                                [labels]=\"lineChartLabels\"\r\n                                [options]=\"lineChartOptions\"\r\n                                [colors]=\"lineChartColors\"\r\n                                [legend]=\"lineChartLegend\"\r\n                                [chartType]=\"lineChartType\"\r\n                                (chartHover)=\"chartHovered($event)\"\r\n                                (chartClick)=\"chartClicked($event)\"></canvas>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <responsive-table></responsive-table>\r\n     </div>\r\n</div>"

/***/ }),

/***/ 497:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-3 left_col\">\r\n          <div class=\"left_col scroll-view\">\r\n            <div class=\"navbar nav_title\" style=\"border: 0;\">\r\n              <a href=\"index.html\" class=\"site_title\"><i class=\"fa fa-paw\"></i> <span>Gentelella Alela!</span></a>\r\n            </div>\r\n\r\n            <div class=\"clearfix\"></div>\r\n\r\n            <!-- menu profile quick info -->\r\n            <div class=\"profile clearfix\">\r\n              <div class=\"profile_pic\">\r\n                <img src=\"assets/img.jpg\" alt=\"...\" class=\"img-circle profile_img\">\r\n              </div>\r\n              <div class=\"profile_info\">\r\n                <span>Welcome,</span>\r\n                <h2>John Doe</h2>\r\n              </div>\r\n            </div>\r\n            <!-- /menu profile quick info -->\r\n\r\n            <br />\r\n\r\n            <!-- sidebar menu -->\r\n            <div id=\"sidebar-menu\" class=\"main_menu_side hidden-print main_menu\">\r\n              <div class=\"menu_section\">\r\n                <h3>General</h3>\r\n                <ul class=\"nav side-menu\">\r\n                  <li [class.active]=\"isOpen\"><a (click)=\"openLi()\"><i class=\"fa fa-home\"></i> Home <span class=\"fa fa-chevron-down\"></span></a>\r\n                    <ul class=\"nav child_menu\" [style.display]=\"isOpen ? 'block':'none'\">\r\n                      <li><a href=\"index.html\">Dashboard</a></li>\r\n                      <li><a href=\"index2.html\">Dashboard2</a></li>\r\n                      <li><a href=\"index3.html\">Dashboard3</a></li>\r\n                    </ul>\r\n                  </li>\r\n                  <li><a><i class=\"fa fa-edit\"></i> Forms <span class=\"fa fa-chevron-down\"></span></a>\r\n                    <ul class=\"nav child_menu\">\r\n                      <li><a href=\"form.html\">General Form</a></li>\r\n                      <li><a href=\"form_advanced.html\">Advanced Components</a></li>\r\n                      <li><a href=\"form_validation.html\">Form Validation</a></li>\r\n                      <li><a href=\"form_wizards.html\">Form Wizard</a></li>\r\n                      <li><a href=\"form_upload.html\">Form Upload</a></li>\r\n                      <li><a href=\"form_buttons.html\">Form Buttons</a></li>\r\n                    </ul>\r\n                  </li>\r\n                  <li><a><i class=\"fa fa-desktop\"></i> UI Elements <span class=\"fa fa-chevron-down\"></span></a>\r\n                    <ul class=\"nav child_menu\">\r\n                      <li><a href=\"general_elements.html\">General Elements</a></li>\r\n                      <li><a href=\"media_gallery.html\">Media Gallery</a></li>\r\n                      <li><a href=\"typography.html\">Typography</a></li>\r\n                      <li><a href=\"icons.html\">Icons</a></li>\r\n                      <li><a href=\"glyphicons.html\">Glyphicons</a></li>\r\n                      <li><a href=\"widgets.html\">Widgets</a></li>\r\n                      <li><a href=\"invoice.html\">Invoice</a></li>\r\n                      <li><a href=\"inbox.html\">Inbox</a></li>\r\n                      <li><a href=\"calendar.html\">Calendar</a></li>\r\n                    </ul>\r\n                  </li>\r\n                  <li><a><i class=\"fa fa-table\"></i> Tables <span class=\"fa fa-chevron-down\"></span></a>\r\n                    <ul class=\"nav child_menu\">\r\n                      <li><a href=\"tables.html\">Tables</a></li>\r\n                      <li><a href=\"tables_dynamic.html\">Table Dynamic</a></li>\r\n                    </ul>\r\n                  </li>\r\n                  <li><a><i class=\"fa fa-bar-chart-o\"></i> Data Presentation <span class=\"fa fa-chevron-down\"></span></a>\r\n                    <ul class=\"nav child_menu\">\r\n                      <li><a href=\"chartjs.html\">Chart JS</a></li>\r\n                      <li><a href=\"chartjs2.html\">Chart JS2</a></li>\r\n                      <li><a href=\"morisjs.html\">Moris JS</a></li>\r\n                      <li><a href=\"echarts.html\">ECharts</a></li>\r\n                      <li><a href=\"other_charts.html\">Other Charts</a></li>\r\n                    </ul>\r\n                  </li>\r\n                  <li><a><i class=\"fa fa-clone\"></i>Layouts <span class=\"fa fa-chevron-down\"></span></a>\r\n                    <ul class=\"nav child_menu\">\r\n                      <li><a href=\"fixed_sidebar.html\">Fixed Sidebar</a></li>\r\n                      <li><a href=\"fixed_footer.html\">Fixed Footer</a></li>\r\n                    </ul>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"menu_section\">\r\n                <h3>Live On</h3>\r\n                <ul class=\"nav side-menu\">\r\n                  <li><a><i class=\"fa fa-bug\"></i> Additional Pages <span class=\"fa fa-chevron-down\"></span></a>\r\n                    <ul class=\"nav child_menu\">\r\n                      <li><a href=\"e_commerce.html\">E-commerce</a></li>\r\n                      <li><a href=\"projects.html\">Projects</a></li>\r\n                      <li><a href=\"project_detail.html\">Project Detail</a></li>\r\n                      <li><a href=\"contacts.html\">Contacts</a></li>\r\n                      <li><a href=\"profile.html\">Profile</a></li>\r\n                    </ul>\r\n                  </li>\r\n                  <li><a><i class=\"fa fa-windows\"></i> Extras <span class=\"fa fa-chevron-down\"></span></a>\r\n                    <ul class=\"nav child_menu\">\r\n                      <li><a href=\"page_403.html\">403 Error</a></li>\r\n                      <li><a href=\"page_404.html\">404 Error</a></li>\r\n                      <li><a href=\"page_500.html\">500 Error</a></li>\r\n                      <li><a href=\"plain_page.html\">Plain Page</a></li>\r\n                      <li><a href=\"login.html\">Login Page</a></li>\r\n                      <li><a href=\"pricing_tables.html\">Pricing Tables</a></li>\r\n                    </ul>\r\n                  </li>\r\n                  <li><a><i class=\"fa fa-sitemap\"></i> Multilevel Menu <span class=\"fa fa-chevron-down\"></span></a>\r\n                    <ul class=\"nav child_menu\">\r\n                        <li><a href=\"#level1_1\">Level One</a>\r\n                        <li><a>Level One<span class=\"fa fa-chevron-down\"></span></a>\r\n                          <ul class=\"nav child_menu\">\r\n                            <li class=\"sub_menu\"><a href=\"level2.html\">Level Two</a>\r\n                            </li>\r\n                            <li><a href=\"#level2_1\">Level Two</a>\r\n                            </li>\r\n                            <li><a href=\"#level2_2\">Level Two</a>\r\n                            </li>\r\n                          </ul>\r\n                        </li>\r\n                        <li><a href=\"#level1_2\">Level One</a>\r\n                        </li>\r\n                    </ul>\r\n                  </li>                  \r\n                  <li><a href=\"javascript:void(0)\"><i class=\"fa fa-laptop\"></i> Landing Page <span class=\"label label-success pull-right\">Coming Soon</span></a></li>\r\n                </ul>\r\n              </div>\r\n\r\n            </div>\r\n            <!-- /sidebar menu -->\r\n\r\n            <!-- /menu footer buttons -->\r\n            <div class=\"sidebar-footer hidden-small\">\r\n              <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Settings\">\r\n                <span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span>\r\n              </a>\r\n              <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"FullScreen\">\r\n                <span class=\"glyphicon glyphicon-fullscreen\" aria-hidden=\"true\"></span>\r\n              </a>\r\n              <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Lock\">\r\n                <span class=\"glyphicon glyphicon-eye-close\" aria-hidden=\"true\"></span>\r\n              </a>\r\n              <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Logout\" href=\"login.html\">\r\n                <span class=\"glyphicon glyphicon-off\" aria-hidden=\"true\"></span>\r\n              </a>\r\n            </div>\r\n            <!-- /menu footer buttons -->\r\n          </div>\r\n</div>"

/***/ }),

/***/ 498:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <div class=\"x_panel\">\r\n                  <div class=\"x_title\">\r\n                    <h2>Responsive example<small>Users</small></h2>\r\n                    <ul class=\"nav navbar-right panel_toolbox\">\r\n                      <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\r\n                      </li>\r\n                      <li class=\"dropdown\">\r\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a>\r\n                        <ul class=\"dropdown-menu\" role=\"menu\">\r\n                          <li><a href=\"#\">Settings 1</a>\r\n                          </li>\r\n                          <li><a href=\"#\">Settings 2</a>\r\n                          </li>\r\n                        </ul>\r\n                      </li>\r\n                      <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\r\n                      </li>\r\n                    </ul>\r\n                    <div class=\"clearfix\"></div>\r\n                  </div>\r\n                  <div class=\"x_content\">\r\n                    <p class=\"text-muted font-13 m-b-30\">\r\n                      Responsive is an extension for DataTables that resolves that problem by optimising the table's layout for different screen sizes through the dynamic insertion and removal of columns from the table.\r\n                    </p>\r\n                    <div class=\"row\"><div class=\"col-sm-6\"><div class=\"dataTables_length\" id=\"datatable-responsive_length\"><label>Show <select name=\"datatable-responsive_length\" aria-controls=\"datatable-responsive\" class=\"form-control input-sm\"><option value=\"10\">10</option><option value=\"25\">25</option><option value=\"50\">50</option><option value=\"100\">100</option></select> entries</label></div></div><div class=\"col-sm-6\"><div id=\"datatable-responsive_filter\" class=\"dataTables_filter\"><label>Search:<input type=\"search\" class=\"form-control input-sm\" placeholder=\"\" aria-controls=\"datatable-responsive\"></label></div></div></div>\r\n                    \r\n                    <div class=\"row\">\r\n                   <div class=\"table-responsive\">\r\n                    <table id=\"datatable-responsive\" class=\"table table-striped table-bordered dt-responsive nowrap\" cellspacing=\"0\" width=\"100%\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th>First name</th>\r\n                          <th>Last name</th>\r\n                          <th>Position</th>\r\n                          <th>Office</th>\r\n                          <th>Age</th>\r\n                          <th>Start date</th>\r\n                          <th>Salary</th>\r\n                          <th>Extn.</th>\r\n                          <th>E-mail</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr>\r\n                          <td>Tiger</td>\r\n                          <td>Nixon</td>\r\n                          <td>System Architect</td>\r\n                          <td>Edinburgh</td>\r\n                          <td>61</td>\r\n                          <td>2011/04/25</td>\r\n                          <td>$320,800</td>\r\n                          <td>5421</td>\r\n                          <td>t.nixon@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Garrett</td>\r\n                          <td>Winters</td>\r\n                          <td>Accountant</td>\r\n                          <td>Tokyo</td>\r\n                          <td>63</td>\r\n                          <td>2011/07/25</td>\r\n                          <td>$170,750</td>\r\n                          <td>8422</td>\r\n                          <td>g.winters@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Ashton</td>\r\n                          <td>Cox</td>\r\n                          <td>Junior Technical Author</td>\r\n                          <td>San Francisco</td>\r\n                          <td>66</td>\r\n                          <td>2009/01/12</td>\r\n                          <td>$86,000</td>\r\n                          <td>1562</td>\r\n                          <td>a.cox@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Cedric</td>\r\n                          <td>Kelly</td>\r\n                          <td>Senior Javascript Developer</td>\r\n                          <td>Edinburgh</td>\r\n                          <td>22</td>\r\n                          <td>2012/03/29</td>\r\n                          <td>$433,060</td>\r\n                          <td>6224</td>\r\n                          <td>c.kelly@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Airi</td>\r\n                          <td>Satou</td>\r\n                          <td>Accountant</td>\r\n                          <td>Tokyo</td>\r\n                          <td>33</td>\r\n                          <td>2008/11/28</td>\r\n                          <td>$162,700</td>\r\n                          <td>5407</td>\r\n                          <td>a.satou@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Brielle</td>\r\n                          <td>Williamson</td>\r\n                          <td>Integration Specialist</td>\r\n                          <td>New York</td>\r\n                          <td>61</td>\r\n                          <td>2012/12/02</td>\r\n                          <td>$372,000</td>\r\n                          <td>4804</td>\r\n                          <td>b.williamson@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Herrod</td>\r\n                          <td>Chandler</td>\r\n                          <td>Sales Assistant</td>\r\n                          <td>San Francisco</td>\r\n                          <td>59</td>\r\n                          <td>2012/08/06</td>\r\n                          <td>$137,500</td>\r\n                          <td>9608</td>\r\n                          <td>h.chandler@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Rhona</td>\r\n                          <td>Davidson</td>\r\n                          <td>Integration Specialist</td>\r\n                          <td>Tokyo</td>\r\n                          <td>55</td>\r\n                          <td>2010/10/14</td>\r\n                          <td>$327,900</td>\r\n                          <td>6200</td>\r\n                          <td>r.davidson@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Colleen</td>\r\n                          <td>Hurst</td>\r\n                          <td>Javascript Developer</td>\r\n                          <td>San Francisco</td>\r\n                          <td>39</td>\r\n                          <td>2009/09/15</td>\r\n                          <td>$205,500</td>\r\n                          <td>2360</td>\r\n                          <td>c.hurst@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Sonya</td>\r\n                          <td>Frost</td>\r\n                          <td>Software Engineer</td>\r\n                          <td>Edinburgh</td>\r\n                          <td>23</td>\r\n                          <td>2008/12/13</td>\r\n                          <td>$103,600</td>\r\n                          <td>1667</td>\r\n                          <td>s.frost@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Jena</td>\r\n                          <td>Gaines</td>\r\n                          <td>Office Manager</td>\r\n                          <td>London</td>\r\n                          <td>30</td>\r\n                          <td>2008/12/19</td>\r\n                          <td>$90,560</td>\r\n                          <td>3814</td>\r\n                          <td>j.gaines@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Quinn</td>\r\n                          <td>Flynn</td>\r\n                          <td>Support Lead</td>\r\n                          <td>Edinburgh</td>\r\n                          <td>22</td>\r\n                          <td>2013/03/03</td>\r\n                          <td>$342,000</td>\r\n                          <td>9497</td>\r\n                          <td>q.flynn@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Charde</td>\r\n                          <td>Marshall</td>\r\n                          <td>Regional Director</td>\r\n                          <td>San Francisco</td>\r\n                          <td>36</td>\r\n                          <td>2008/10/16</td>\r\n                          <td>$470,600</td>\r\n                          <td>6741</td>\r\n                          <td>c.marshall@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Haley</td>\r\n                          <td>Kennedy</td>\r\n                          <td>Senior Marketing Designer</td>\r\n                          <td>London</td>\r\n                          <td>43</td>\r\n                          <td>2012/12/18</td>\r\n                          <td>$313,500</td>\r\n                          <td>3597</td>\r\n                          <td>h.kennedy@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Tatyana</td>\r\n                          <td>Fitzpatrick</td>\r\n                          <td>Regional Director</td>\r\n                          <td>London</td>\r\n                          <td>19</td>\r\n                          <td>2010/03/17</td>\r\n                          <td>$385,750</td>\r\n                          <td>1965</td>\r\n                          <td>t.fitzpatrick@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Michael</td>\r\n                          <td>Silva</td>\r\n                          <td>Marketing Designer</td>\r\n                          <td>London</td>\r\n                          <td>66</td>\r\n                          <td>2012/11/27</td>\r\n                          <td>$198,500</td>\r\n                          <td>1581</td>\r\n                          <td>m.silva@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Paul</td>\r\n                          <td>Byrd</td>\r\n                          <td>Chief Financial Officer (CFO)</td>\r\n                          <td>New York</td>\r\n                          <td>64</td>\r\n                          <td>2010/06/09</td>\r\n                          <td>$725,000</td>\r\n                          <td>3059</td>\r\n                          <td>p.byrd@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Gloria</td>\r\n                          <td>Little</td>\r\n                          <td>Systems Administrator</td>\r\n                          <td>New York</td>\r\n                          <td>59</td>\r\n                          <td>2009/04/10</td>\r\n                          <td>$237,500</td>\r\n                          <td>1721</td>\r\n                          <td>g.little@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Bradley</td>\r\n                          <td>Greer</td>\r\n                          <td>Software Engineer</td>\r\n                          <td>London</td>\r\n                          <td>41</td>\r\n                          <td>2012/10/13</td>\r\n                          <td>$132,000</td>\r\n                          <td>2558</td>\r\n                          <td>b.greer@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Dai</td>\r\n                          <td>Rios</td>\r\n                          <td>Personnel Lead</td>\r\n                          <td>Edinburgh</td>\r\n                          <td>35</td>\r\n                          <td>2012/09/26</td>\r\n                          <td>$217,500</td>\r\n                          <td>2290</td>\r\n                          <td>d.rios@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Jenette</td>\r\n                          <td>Caldwell</td>\r\n                          <td>Development Lead</td>\r\n                          <td>New York</td>\r\n                          <td>30</td>\r\n                          <td>2011/09/03</td>\r\n                          <td>$345,000</td>\r\n                          <td>1937</td>\r\n                          <td>j.caldwell@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Yuri</td>\r\n                          <td>Berry</td>\r\n                          <td>Chief Marketing Officer (CMO)</td>\r\n                          <td>New York</td>\r\n                          <td>40</td>\r\n                          <td>2009/06/25</td>\r\n                          <td>$675,000</td>\r\n                          <td>6154</td>\r\n                          <td>y.berry@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Caesar</td>\r\n                          <td>Vance</td>\r\n                          <td>Pre-Sales Support</td>\r\n                          <td>New York</td>\r\n                          <td>21</td>\r\n                          <td>2011/12/12</td>\r\n                          <td>$106,450</td>\r\n                          <td>8330</td>\r\n                          <td>c.vance@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Doris</td>\r\n                          <td>Wilder</td>\r\n                          <td>Sales Assistant</td>\r\n                          <td>Sidney</td>\r\n                          <td>23</td>\r\n                          <td>2010/09/20</td>\r\n                          <td>$85,600</td>\r\n                          <td>3023</td>\r\n                          <td>d.wilder@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Angelica</td>\r\n                          <td>Ramos</td>\r\n                          <td>Chief Executive Officer (CEO)</td>\r\n                          <td>London</td>\r\n                          <td>47</td>\r\n                          <td>2009/10/09</td>\r\n                          <td>$1,200,000</td>\r\n                          <td>5797</td>\r\n                          <td>a.ramos@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Gavin</td>\r\n                          <td>Joyce</td>\r\n                          <td>Developer</td>\r\n                          <td>Edinburgh</td>\r\n                          <td>42</td>\r\n                          <td>2010/12/22</td>\r\n                          <td>$92,575</td>\r\n                          <td>8822</td>\r\n                          <td>g.joyce@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Jennifer</td>\r\n                          <td>Chang</td>\r\n                          <td>Regional Director</td>\r\n                          <td>Singapore</td>\r\n                          <td>28</td>\r\n                          <td>2010/11/14</td>\r\n                          <td>$357,650</td>\r\n                          <td>9239</td>\r\n                          <td>j.chang@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Brenden</td>\r\n                          <td>Wagner</td>\r\n                          <td>Software Engineer</td>\r\n                          <td>San Francisco</td>\r\n                          <td>28</td>\r\n                          <td>2011/06/07</td>\r\n                          <td>$206,850</td>\r\n                          <td>1314</td>\r\n                          <td>b.wagner@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Fiona</td>\r\n                          <td>Green</td>\r\n                          <td>Chief Operating Officer (COO)</td>\r\n                          <td>San Francisco</td>\r\n                          <td>48</td>\r\n                          <td>2010/03/11</td>\r\n                          <td>$850,000</td>\r\n                          <td>2947</td>\r\n                          <td>f.green@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Shou</td>\r\n                          <td>Itou</td>\r\n                          <td>Regional Marketing</td>\r\n                          <td>Tokyo</td>\r\n                          <td>20</td>\r\n                          <td>2011/08/14</td>\r\n                          <td>$163,000</td>\r\n                          <td>8899</td>\r\n                          <td>s.itou@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Michelle</td>\r\n                          <td>House</td>\r\n                          <td>Integration Specialist</td>\r\n                          <td>Sidney</td>\r\n                          <td>37</td>\r\n                          <td>2011/06/02</td>\r\n                          <td>$95,400</td>\r\n                          <td>2769</td>\r\n                          <td>m.house@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Suki</td>\r\n                          <td>Burks</td>\r\n                          <td>Developer</td>\r\n                          <td>London</td>\r\n                          <td>53</td>\r\n                          <td>2009/10/22</td>\r\n                          <td>$114,500</td>\r\n                          <td>6832</td>\r\n                          <td>s.burks@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Prescott</td>\r\n                          <td>Bartlett</td>\r\n                          <td>Technical Author</td>\r\n                          <td>London</td>\r\n                          <td>27</td>\r\n                          <td>2011/05/07</td>\r\n                          <td>$145,000</td>\r\n                          <td>3606</td>\r\n                          <td>p.bartlett@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Gavin</td>\r\n                          <td>Cortez</td>\r\n                          <td>Team Leader</td>\r\n                          <td>San Francisco</td>\r\n                          <td>22</td>\r\n                          <td>2008/10/26</td>\r\n                          <td>$235,500</td>\r\n                          <td>2860</td>\r\n                          <td>g.cortez@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Martena</td>\r\n                          <td>Mccray</td>\r\n                          <td>Post-Sales support</td>\r\n                          <td>Edinburgh</td>\r\n                          <td>46</td>\r\n                          <td>2011/03/09</td>\r\n                          <td>$324,050</td>\r\n                          <td>8240</td>\r\n                          <td>m.mccray@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Unity</td>\r\n                          <td>Butler</td>\r\n                          <td>Marketing Designer</td>\r\n                          <td>San Francisco</td>\r\n                          <td>47</td>\r\n                          <td>2009/12/09</td>\r\n                          <td>$85,675</td>\r\n                          <td>5384</td>\r\n                          <td>u.butler@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Howard</td>\r\n                          <td>Hatfield</td>\r\n                          <td>Office Manager</td>\r\n                          <td>San Francisco</td>\r\n                          <td>51</td>\r\n                          <td>2008/12/16</td>\r\n                          <td>$164,500</td>\r\n                          <td>7031</td>\r\n                          <td>h.hatfield@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Hope</td>\r\n                          <td>Fuentes</td>\r\n                          <td>Secretary</td>\r\n                          <td>San Francisco</td>\r\n                          <td>41</td>\r\n                          <td>2010/02/12</td>\r\n                          <td>$109,850</td>\r\n                          <td>6318</td>\r\n                          <td>h.fuentes@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Vivian</td>\r\n                          <td>Harrell</td>\r\n                          <td>Financial Controller</td>\r\n                          <td>San Francisco</td>\r\n                          <td>62</td>\r\n                          <td>2009/02/14</td>\r\n                          <td>$452,500</td>\r\n                          <td>9422</td>\r\n                          <td>v.harrell@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Timothy</td>\r\n                          <td>Mooney</td>\r\n                          <td>Office Manager</td>\r\n                          <td>London</td>\r\n                          <td>37</td>\r\n                          <td>2008/12/11</td>\r\n                          <td>$136,200</td>\r\n                          <td>7580</td>\r\n                          <td>t.mooney@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Jackson</td>\r\n                          <td>Bradshaw</td>\r\n                          <td>Director</td>\r\n                          <td>New York</td>\r\n                          <td>65</td>\r\n                          <td>2008/09/26</td>\r\n                          <td>$645,750</td>\r\n                          <td>1042</td>\r\n                          <td>j.bradshaw@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Olivia</td>\r\n                          <td>Liang</td>\r\n                          <td>Support Engineer</td>\r\n                          <td>Singapore</td>\r\n                          <td>64</td>\r\n                          <td>2011/02/03</td>\r\n                          <td>$234,500</td>\r\n                          <td>2120</td>\r\n                          <td>o.liang@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Bruno</td>\r\n                          <td>Nash</td>\r\n                          <td>Software Engineer</td>\r\n                          <td>London</td>\r\n                          <td>38</td>\r\n                          <td>2011/05/03</td>\r\n                          <td>$163,500</td>\r\n                          <td>6222</td>\r\n                          <td>b.nash@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Sakura</td>\r\n                          <td>Yamamoto</td>\r\n                          <td>Support Engineer</td>\r\n                          <td>Tokyo</td>\r\n                          <td>37</td>\r\n                          <td>2009/08/19</td>\r\n                          <td>$139,575</td>\r\n                          <td>9383</td>\r\n                          <td>s.yamamoto@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Thor</td>\r\n                          <td>Walton</td>\r\n                          <td>Developer</td>\r\n                          <td>New York</td>\r\n                          <td>61</td>\r\n                          <td>2013/08/11</td>\r\n                          <td>$98,540</td>\r\n                          <td>8327</td>\r\n                          <td>t.walton@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Finn</td>\r\n                          <td>Camacho</td>\r\n                          <td>Support Engineer</td>\r\n                          <td>San Francisco</td>\r\n                          <td>47</td>\r\n                          <td>2009/07/07</td>\r\n                          <td>$87,500</td>\r\n                          <td>2927</td>\r\n                          <td>f.camacho@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Serge</td>\r\n                          <td>Baldwin</td>\r\n                          <td>Data Coordinator</td>\r\n                          <td>Singapore</td>\r\n                          <td>64</td>\r\n                          <td>2012/04/09</td>\r\n                          <td>$138,575</td>\r\n                          <td>8352</td>\r\n                          <td>s.baldwin@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Zenaida</td>\r\n                          <td>Frank</td>\r\n                          <td>Software Engineer</td>\r\n                          <td>New York</td>\r\n                          <td>63</td>\r\n                          <td>2010/01/04</td>\r\n                          <td>$125,250</td>\r\n                          <td>7439</td>\r\n                          <td>z.frank@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Zorita</td>\r\n                          <td>Serrano</td>\r\n                          <td>Software Engineer</td>\r\n                          <td>San Francisco</td>\r\n                          <td>56</td>\r\n                          <td>2012/06/01</td>\r\n                          <td>$115,000</td>\r\n                          <td>4389</td>\r\n                          <td>z.serrano@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Jennifer</td>\r\n                          <td>Acosta</td>\r\n                          <td>Junior Javascript Developer</td>\r\n                          <td>Edinburgh</td>\r\n                          <td>43</td>\r\n                          <td>2013/02/01</td>\r\n                          <td>$75,650</td>\r\n                          <td>3431</td>\r\n                          <td>j.acosta@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Cara</td>\r\n                          <td>Stevens</td>\r\n                          <td>Sales Assistant</td>\r\n                          <td>New York</td>\r\n                          <td>46</td>\r\n                          <td>2011/12/06</td>\r\n                          <td>$145,600</td>\r\n                          <td>3990</td>\r\n                          <td>c.stevens@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Hermione</td>\r\n                          <td>Butler</td>\r\n                          <td>Regional Director</td>\r\n                          <td>London</td>\r\n                          <td>47</td>\r\n                          <td>2011/03/21</td>\r\n                          <td>$356,250</td>\r\n                          <td>1016</td>\r\n                          <td>h.butler@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Lael</td>\r\n                          <td>Greer</td>\r\n                          <td>Systems Administrator</td>\r\n                          <td>London</td>\r\n                          <td>21</td>\r\n                          <td>2009/02/27</td>\r\n                          <td>$103,500</td>\r\n                          <td>6733</td>\r\n                          <td>l.greer@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Jonas</td>\r\n                          <td>Alexander</td>\r\n                          <td>Developer</td>\r\n                          <td>San Francisco</td>\r\n                          <td>30</td>\r\n                          <td>2010/07/14</td>\r\n                          <td>$86,500</td>\r\n                          <td>8196</td>\r\n                          <td>j.alexander@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Shad</td>\r\n                          <td>Decker</td>\r\n                          <td>Regional Director</td>\r\n                          <td>Edinburgh</td>\r\n                          <td>51</td>\r\n                          <td>2008/11/13</td>\r\n                          <td>$183,000</td>\r\n                          <td>6373</td>\r\n                          <td>s.decker@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Michael</td>\r\n                          <td>Bruce</td>\r\n                          <td>Javascript Developer</td>\r\n                          <td>Singapore</td>\r\n                          <td>29</td>\r\n                          <td>2011/06/27</td>\r\n                          <td>$183,000</td>\r\n                          <td>5384</td>\r\n                          <td>m.bruce@datatables.net</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Donna</td>\r\n                          <td>Snider</td>\r\n                          <td>Customer Support</td>\r\n                          <td>New York</td>\r\n                          <td>27</td>\r\n                          <td>2011/01/25</td>\r\n                          <td>$112,000</td>\r\n                          <td>4226</td>\r\n                          <td>d.snider@datatables.net</td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"row\"><div class=\"col-sm-5\"><div class=\"dataTables_info\" id=\"datatable-responsive_info\" role=\"status\" aria-live=\"polite\">Showing 1 to 10 of 57 entries</div></div><div class=\"col-sm-7\"><div class=\"dataTables_paginate paging_simple_numbers\" id=\"datatable-responsive_paginate\"><ul class=\"pagination\"><li class=\"paginate_button previous disabled\" id=\"datatable-responsive_previous\"><a href=\"#\" aria-controls=\"datatable-responsive\" data-dt-idx=\"0\" tabindex=\"0\">Previous</a></li><li class=\"paginate_button active\"><a href=\"#\" aria-controls=\"datatable-responsive\" data-dt-idx=\"1\" tabindex=\"0\">1</a></li><li class=\"paginate_button \"><a href=\"#\" aria-controls=\"datatable-responsive\" data-dt-idx=\"2\" tabindex=\"0\">2</a></li><li class=\"paginate_button \"><a href=\"#\" aria-controls=\"datatable-responsive\" data-dt-idx=\"3\" tabindex=\"0\">3</a></li><li class=\"paginate_button \"><a href=\"#\" aria-controls=\"datatable-responsive\" data-dt-idx=\"4\" tabindex=\"0\">4</a></li><li class=\"paginate_button \"><a href=\"#\" aria-controls=\"datatable-responsive\" data-dt-idx=\"5\" tabindex=\"0\">5</a></li><li class=\"paginate_button \"><a href=\"#\" aria-controls=\"datatable-responsive\" data-dt-idx=\"6\" tabindex=\"0\">6</a></li><li class=\"paginate_button next\" id=\"datatable-responsive_next\"><a href=\"#\" aria-controls=\"datatable-responsive\" data-dt-idx=\"7\" tabindex=\"0\">Next</a></li></ul></div></div></div>\r\n\t\t\t\t\t\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              </div>"

/***/ }),

/***/ 499:
/***/ (function(module, exports) {

module.exports = " <div class=\"top_nav\">\r\n          <div class=\"nav_menu\">\r\n            <nav>\r\n              <div class=\"nav toggle\">\r\n                <a id=\"menu_toggle\" (click)=\"onMenuToggleClick()\"><i class=\"fa fa-bars\"></i></a>\r\n              </div>\r\n\r\n              <ul class=\"nav navbar-nav navbar-right\">\r\n                <li class=\"\">\r\n                  <a href=\"javascript:;\" class=\"user-profile dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                    <img src=\"assets/img.jpg\" alt=\"\">John Doe\r\n                    <span class=\" fa fa-angle-down\"></span>\r\n                  </a>\r\n                  <ul class=\"dropdown-menu dropdown-usermenu pull-right\">\r\n                    <li><a href=\"javascript:;\"> Profile</a></li>\r\n                    <li>\r\n                      <a href=\"javascript:;\">\r\n                        <span class=\"badge bg-red pull-right\">50%</span>\r\n                        <span>Settings</span>\r\n                      </a>\r\n                    </li>\r\n                    <li><a href=\"javascript:;\">Help</a></li>\r\n                    <li><a href=\"login.html\"><i class=\"fa fa-sign-out pull-right\"></i> Log Out</a></li>\r\n                  </ul>\r\n                </li>\r\n\r\n                <li role=\"presentation\" class=\"dropdown\">\r\n                  <a href=\"javascript:;\" class=\"dropdown-toggle info-number\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                    <i class=\"fa fa-envelope-o\"></i>\r\n                    <span class=\"badge bg-green\">6</span>\r\n                  </a>\r\n                  <ul id=\"menu1\" class=\"dropdown-menu list-unstyled msg_list\" role=\"menu\">\r\n                    <li>\r\n                      <a>\r\n                        <span class=\"image\"><img src=\"assets/img.jpg\" alt=\"Profile Image\" /></span>\r\n                        <span>\r\n                          <span>John Smith</span>\r\n                          <span class=\"time\">3 mins ago</span>\r\n                        </span>\r\n                        <span class=\"message\">\r\n                          Film festivals used to be do-or-die moments for movie makers. They were where...\r\n                        </span>\r\n                      </a>\r\n                    </li>\r\n                    <li>\r\n                      <a>\r\n                        <span class=\"image\"><img src=\"assets/img.jpg\" alt=\"Profile Image\" /></span>\r\n                        <span>\r\n                          <span>John Smith</span>\r\n                          <span class=\"time\">3 mins ago</span>\r\n                        </span>\r\n                        <span class=\"message\">\r\n                          Film festivals used to be do-or-die moments for movie makers. They were where...\r\n                        </span>\r\n                      </a>\r\n                    </li>\r\n                    <li>\r\n                      <a>\r\n                        <span class=\"image\"><img src=\"assets/img.jpg\" alt=\"Profile Image\" /></span>\r\n                        <span>\r\n                          <span>John Smith</span>\r\n                          <span class=\"time\">3 mins ago</span>\r\n                        </span>\r\n                        <span class=\"message\">\r\n                          Film festivals used to be do-or-die moments for movie makers. They were where...\r\n                        </span>\r\n                      </a>\r\n                    </li>\r\n                    <li>\r\n                      <a>\r\n                        <span class=\"image\"><img src=\"assets/img.jpg\" alt=\"Profile Image\" /></span>\r\n                        <span>\r\n                          <span>John Smith</span>\r\n                          <span class=\"time\">3 mins ago</span>\r\n                        </span>\r\n                        <span class=\"message\">\r\n                          Film festivals used to be do-or-die moments for movie makers. They were where...\r\n                        </span>\r\n                      </a>\r\n                    </li>\r\n                    <li>\r\n                      <div class=\"text-center\">\r\n                        <a>\r\n                          <strong>See All Alerts</strong>\r\n                          <i class=\"fa fa-angle-right\"></i>\r\n                        </a>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </li>\r\n              </ul>\r\n            </nav>\r\n          </div>\r\n        </div>"

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(293);


/***/ })

},[519]);
//# sourceMappingURL=main.bundle.js.map