(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dominus\ITForYou\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "zRkE");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.scss */ "cruu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.scroll = function (el) {
        el.scrollIntoView();
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
    ]; };
    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "J7s4":
/*!**************************************************!*\
  !*** ./src/app/course-hr/course-hr.component.ts ***!
  \**************************************************/
/*! exports provided: CourseHrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseHrComponent", function() { return CourseHrComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_course_hr_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./course-hr.component.html */ "Tfcf");
/* harmony import */ var _course_hr_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-hr.component.scss */ "oLTG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var CourseHrComponent = /** @class */ (function () {
    function CourseHrComponent(element) {
        this.element = element;
        this.imageObject = [{
                image: 'assets/img/20_11_2020 (18).jpg',
                thumbImage: 'assets/img/20_11_2020 (18).jpg',
                title: ''
            }, {
                image: 'assets/img/20_11_2020 (56).jpg',
                thumbImage: 'assets/img/20_11_2020 (56).jpg'
            }, {
                image: 'assets/img/20_11_2020 (97).jpg',
                thumbImage: 'assets/img/20_11_2020 (97).jpg',
                title: ''
            }, {
                image: 'assets/img/20_11_2020 (101).jpg',
                thumbImage: 'assets/img/20_11_2020 (101).jpg',
                title: ''
            }, {
                image: 'assets/img/20_11_2020 (170).jpg',
                thumbImage: 'assets/img/20_11_2020 (170).jpg',
            }, {
                image: 'assets/img/20_11_2020 (198).jpg',
                thumbImage: 'assets/img/20_11_2020 (198).jpg',
                title: ''
            }];
    }
    CourseHrComponent.prototype.ngOnInit = function () {
    };
    CourseHrComponent.prototype.ngOnDestroy = function () {
    };
    CourseHrComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
    ]; };
    CourseHrComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-course-hr',
            template: _raw_loader_course_hr_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_course_hr_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])
    ], CourseHrComponent);
    return CourseHrComponent;
}());



/***/ }),

/***/ "JhD/":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./landing.component.html */ "QnVx");
/* harmony import */ var _landing_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing.component.scss */ "KjGC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
        this.visibility1 = true;
        this.visibility2 = true;
        this.visibility3 = true;
        this.visibility4 = true;
        this.imageObject = [{
                image: 'assets/img/20_11_2020.jpg',
                thumbImage: 'assets/img/20_11_2020.jpg',
                title: ''
            }, {
                image: 'assets/img/20_11_2020 (136).jpg',
                thumbImage: 'assets/img/20_11_2020 (136).jpg'
            }, {
                image: 'assets/img/20_11_2020 (144).jpg',
                thumbImage: 'assets/img/20_11_2020 (144).jpg',
                title: ''
            }, {
                image: 'assets/img/20_11_2020 (150).jpg',
                thumbImage: 'assets/img/20_11_2020 (150).jpg',
                title: ''
            }, {
                image: 'assets/img/20_11_2020 (161).jpg',
                thumbImage: 'assets/img/20_11_2020 (161).jpg',
            }, {
                image: 'assets/img/20_11_2020 (177) (2).jpg',
                thumbImage: 'assets/img/20_11_2020 (177) (2).jpg',
                title: ''
            }];
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.toggle1 = function () {
        this.visibility1 = !this.visibility1;
    };
    LandingComponent.prototype.toggle2 = function () {
        this.visibility2 = !this.visibility2;
    };
    LandingComponent.prototype.toggle3 = function () {
        this.visibility3 = !this.visibility3;
    };
    LandingComponent.prototype.toggle4 = function () {
        this.visibility4 = !this.visibility4;
    };
    LandingComponent.ctorParameters = function () { return []; };
    LandingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-landing',
            template: _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_landing_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "KjGC":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hero .extra-title {\n  margin-bottom: 30px;\n}\n\nul {\n  list-style: none;\n}\n\n.marBotton {\n  margin: -60px 0 33px 0;\n}\n\n.cursor {\n  cursor: pointer;\n}\n\n.text {\n  font-size: 20px;\n}\n\nspan {\n  color: #f96332;\n}\n\n.hero .feat-item {\n  outline: none;\n  padding: 0;\n}\n\n.hero .feat-item .text-center {\n  padding: 50px 30px;\n  background-color: #fff;\n  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.04);\n}\n\n.hero .feat-item.active .text-center {\n  margin-top: -25px;\n  padding-top: 75px;\n  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.05);\n  position: relative;\n  z-index: 3;\n}\n\n.hero .feat-item:hover .icon {\n  color: #fff;\n}\n\n.hero .feat-item:hover .icon:after {\n  transform: scale(1, 1);\n}\n\n.hero .feat-item .icon {\n  width: 90px;\n  height: 90px;\n  line-height: 105px;\n  color: #777;\n  font-size: 55px;\n  border-radius: 50%;\n  margin-bottom: 15px;\n  position: relative;\n  z-index: 3;\n}\n\n.hero .feat-item .icon:after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 5px;\n  right: 0;\n  background: #b24592;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #f96332, #b24592);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  border-radius: 50%;\n  z-index: -1;\n  transform: scale(0, 0);\n  transition: all 0.4s;\n}\n\n.hero .feat-item h5 {\n  font-weight: 500;\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n\n.hero .feat-item h6 {\n  color: #f96332;\n  font-size: 12px;\n  font-weight: 400;\n  font-style: italic;\n  margin-bottom: 20px;\n}\n\n.tabs-section .nav-pills {\n  padding: 0;\n}\n\n.tabs-section .nav-pills .nav-link {\n  background-color: #f2f2f2;\n  padding: 12px 40px;\n  border-right: 1px solid #eee;\n  border-top: 2px solid transparent;\n  border-radius: 0;\n  position: relative;\n  z-index: 5;\n}\n\n.tabs-section .nav-pills .nav-link.active {\n  border-top-color: #f96332;\n  background-color: #fff;\n  color: #f96332;\n}\n\n.tabs-section .tab-content .left {\n  padding: 0;\n  position: relative;\n  z-index: 3;\n}\n\n.tabs-section .tab-content .left .box-white {\n  padding: 50px 30px;\n  background-color: #fff;\n  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);\n  border-radius: 0px 5px 5px 5px;\n}\n\n.tabs-section .tab-content .left .title {\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\n.title {\n  margin-top: 20px;\n}\n\n.tabs-section .tab-content .left .sub-title {\n  color: #777;\n  font-size: 12px;\n  font-weight: 400;\n  margin-bottom: 20px;\n}\n\n.tabs-section .tab-content .left .feat li {\n  margin: 0;\n  text-align: center;\n  padding: 30px 5px;\n  background-color: #f7f7f7;\n}\n\n.tabs-section .tab-content .left .feat li:nth-child(odd) {\n  background-color: #f3f3f3;\n}\n\n.tabs-section .tab-content .left .feat li:hover {\n  color: #fff;\n  background-color: #f96332;\n}\n\n.tabs-section .tab-content .left .feat li:hover .icon {\n  color: #eee;\n}\n\n.tabs-section .tab-content .left .feat .icon {\n  font-size: 30px;\n  color: #f96332;\n  margin-bottom: 15px;\n}\n\n.tabs-section .tab-content .left .feat h6 {\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.tabs-section .tab-content .image {\n  padding: 0;\n  position: relative;\n  margin-left: -50px;\n  margin-top: -40px;\n  max-width: calc(50% + 50px);\n  flex: none;\n}\n\n.tabs-section .tab-content .image .img {\n  position: relative;\n}\n\n.tabs-section .tab-content .image .img .vid {\n  position: absolute;\n  top: calc(50% - 50px);\n  left: calc(50% - 50px);\n  width: 100px;\n  height: 100px;\n  text-align: center;\n  line-height: 1.5;\n  font-size: 70px;\n  color: #f96332;\n  z-index: 3;\n}\n\n.tabs-section .tab-content .image .img .vid:hover:after {\n  transform: scale(2, 2);\n  opacity: 0;\n}\n\n.tabs-section .tab-content .image .img .vid:after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  opacity: 0.7;\n  transition: all 0.5s;\n}\n\n.tabs-section .tab-content .image .img img {\n  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n}\n\n.tabs-section .tab-content .image .owl-dots {\n  margin-top: -30px;\n  position: relative;\n  z-index: 7;\n}\n\n.skills h6 {\n  font-size: 14px;\n  font-weight: 400;\n  margin-bottom: 10px;\n}\n\n.skills .skill-progress {\n  height: 8px;\n  width: 100%;\n  background-color: #f7f7f7;\n  border-radius: 20px;\n  position: relative;\n}\n\n.skills .skill-progress .progres {\n  width: 10%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 20px;\n  background: #b24592;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #f96332, #b24592);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  transition: all 1.5s;\n}\n\n.skills .skill-progress .progres:after {\n  content: attr(data-value);\n  position: absolute;\n  top: -15px;\n  right: 0;\n  font-size: 10px;\n}\n\n.marginBotton {\n  margin-bottom: 20px;\n}\n\n/* ----------------------------------------------------------------\n     [ 06 Process ]\n-----------------------------------------------------------------*/\n\n.process .item {\n  position: relative;\n  z-index: 4;\n}\n\n.process .item img {\n  position: absolute;\n  width: 70%;\n  right: -40%;\n  top: 15px;\n  opacity: 0.5;\n}\n\n@media only screen and (max-width: 500px) {\n  .process .item img {\n    display: none;\n  }\n}\n\n.process .item img.tobotm {\n  transform: rotateX(180deg);\n}\n\n.process .item.odd {\n  margin-top: 50px;\n}\n\n.process .item .cont {\n  padding: 50px 30px;\n  background-color: #fff;\n  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  position: relative;\n  z-index: 3;\n  transition: all 0.3s;\n}\n\n.process .item .cont:hover {\n  background-color: #f96332;\n}\n\n.process .item .cont:hover h6 {\n  color: #fff;\n}\n\n.process .item .cont:hover p {\n  color: #eee;\n}\n\n.process .item .icon {\n  color: #f96332;\n  font-size: 30px;\n  width: 80px;\n  height: 80px;\n  line-height: 85px;\n  border-radius: 50%;\n  border: 1px dashed #eee;\n  margin-bottom: 30px;\n}\n\n.process .item h3 {\n  position: absolute;\n  top: 25px;\n  left: 0;\n  width: 100%;\n  color: #777;\n  font-size: 50px;\n  font-weight: bold;\n  opacity: 0.1;\n  z-index: -1;\n}\n\n.process .item h6 {\n  color: #222;\n  font-size: 16px;\n  margin-bottom: 15px;\n}\n\n.process .item p {\n  font-size: 14px;\n  color: #999;\n}\n\n.wrap {\n  background: #0b1520;\n  opacity: 0.7;\n  z-index: 2;\n}\n\n/* ----------------------------------------------------------------\n     [ End Process ]\n-----------------------------------------------------------------*/\n\n/* ----------------------------------------------------------------\n     [ 08 Start why-us ]\n-----------------------------------------------------------------*/\n\n.why-us .img {\n  border-radius: 5px;\n  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n\n.why-us .item .icon {\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  line-height: 95px;\n  font-size: 25px;\n  border-radius: 50%;\n  border: 1px solid #9e9e9e;\n  color: #f96332;\n  float: left;\n  position: relative;\n  transition: all 0.3s;\n}\n\n.why-us .item .icon:hover {\n  color: #fff;\n  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);\n}\n\n.why-us .item .icon:hover:after {\n  transform: scale(1, 1);\n}\n\n.why-us .item .icon:after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #f96332;\n  background: linear-gradient(to right, #f96332, #b24592);\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  transform: scale(0, 0);\n  transition: all 0.3s;\n}\n\n.why-us .item .icon:before {\n  position: relative;\n  z-index: 3;\n  bottom: 23px;\n}\n\n.why-us .item .cont {\n  margin-left: 74px;\n  margin-top: 10px;\n}\n\n.marginTop {\n  margin-top: 2rem;\n}\n\n.why-us .item .cont h5 {\n  font-size: 16px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n\n.why-us .item .cont p {\n  font-size: 14px;\n}\n\n.mb-40 {\n  margin-bottom: 3px;\n}\n\n.grid {\n  display: grid;\n}\n\n/* ----------------------------------------------------------------\n     [ End why-us ]\n-----------------------------------------------------------------*/\n\n/*-------------------------------------------------------\n          [ Typography ]\n-------------------------------------------------------*/\n\nh1 {\n  font-size: 55px;\n}\n\nh2 {\n  font-size: 40px;\n}\n\nh3 {\n  font-size: 35px;\n}\n\nh4 {\n  font-size: 30px;\n}\n\nh5 {\n  font-size: 25px;\n}\n\nh6 {\n  font-size: 18px;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 500;\n}\n\n/*-------------------------------------------------------\n          [ text color ]\n-------------------------------------------------------*/\n\n.text-white {\n  color: #fff;\n}\n\n.text-black {\n  color: #000;\n}\n\n.text-extra-dark-gray {\n  color: #232323;\n}\n\n.text-dark-gray {\n  color: #626262;\n}\n\n.text-extra-medium-gray {\n  color: #757575;\n}\n\n.text-medium-gray {\n  color: #939393;\n}\n\n.text-extra-light-gray {\n  color: #b7b7b7;\n}\n\n.text-light-gray {\n  color: #d6d5d5;\n}\n\n.text-very-light-gray {\n  color: #ededed;\n}\n\n.title-extra {\n  font-weight: 800;\n  margin-bottom: 15px;\n}\n\n.title-extra .icon {\n  padding-right: 5px;\n}\n\n.title-extra-sm {\n  font-weight: 700;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  margin-bottom: 15px;\n}\n\n.title-extra-sm .icon {\n  padding-right: 5px;\n}\n\n/*-------------------------------------------------------\n          [ font-weight ]\n-------------------------------------------------------*/\n\n.fw-100 {\n  font-weight: 100 !important;\n}\n\n.fw-200 {\n  font-weight: 200 !important;\n}\n\n.fw-300 {\n  font-weight: 300 !important;\n}\n\n.fw-400 {\n  font-weight: 400 !important;\n}\n\n.fw-500 {\n  font-weight: 500 !important;\n}\n\n.fw-600 {\n  font-weight: 600 !important;\n}\n\n.fw-700 {\n  font-weight: 700 !important;\n}\n\n.fw-800 {\n  font-weight: 800 !important;\n}\n\n.fw-900 {\n  font-weight: 900 !important;\n}\n\n/*-------------------------------------------------------\n          [ font-size ]\n-------------------------------------------------------*/\n\n.fz-10 {\n  font-size: 10px !important;\n}\n\n.fz-12 {\n  font-size: 12px !important;\n}\n\n.fz-14 {\n  font-size: 14px !important;\n}\n\n.fz-15 {\n  font-size: 15px !important;\n}\n\n.fz-16 {\n  font-size: 16px !important;\n}\n\n.fz-18 {\n  font-size: 18px !important;\n}\n\n.fz-20 {\n  font-size: 20px !important;\n}\n\n.fz-22 {\n  font-size: 22px !important;\n}\n\n.fz-25 {\n  font-size: 25px !important;\n}\n\n.fz-30 {\n  font-size: 30px !important;\n}\n\n.fz-40 {\n  font-size: 40px !important;\n}\n\n.fz-50 {\n  font-size: 50px !important;\n}\n\n/*-------------------------------------------------------\n          [ line-height ]\n-------------------------------------------------------*/\n\n.line-height-10 {\n  line-height: 10px;\n}\n\n.line-height-13 {\n  line-height: 13px;\n}\n\n.line-height-18 {\n  line-height: 18px;\n}\n\n.line-height-20 {\n  line-height: 20px;\n}\n\n.line-height-24 {\n  line-height: 24px;\n}\n\n.line-height-22 {\n  line-height: 22px;\n}\n\n.line-height-26 {\n  line-height: 26px;\n}\n\n.line-height-28 {\n  line-height: 28px;\n}\n\n.line-height-30 {\n  line-height: 30px;\n}\n\n.line-height-35 {\n  line-height: 35px;\n}\n\n.line-height-40 {\n  line-height: 40px;\n}\n\n.line-height-45 {\n  line-height: 45px;\n}\n\n.line-height-50 {\n  line-height: 50px;\n}\n\n.line-height-55 {\n  line-height: 55px;\n}\n\n.line-height-60 {\n  line-height: 60px;\n}\n\n.line-height-65 {\n  line-height: 65px;\n}\n\n.line-height-70 {\n  line-height: 70px;\n}\n\n.line-height-75 {\n  line-height: 75px;\n}\n\n.line-height-80 {\n  line-height: 80px;\n}\n\n.line-height-85 {\n  line-height: 85px;\n}\n\n.line-height-90 {\n  line-height: 90px;\n}\n\n.line-height-95 {\n  line-height: 95px;\n}\n\n.line-height-100 {\n  line-height: 100px;\n}\n\n.line-height-110 {\n  line-height: 110px;\n}\n\n.line-height-120 {\n  line-height: 120px;\n}\n\n/*-------------------------------------------------------\n          [ text-transform ]\n-------------------------------------------------------*/\n\n.text-u {\n  text-transform: uppercase !important;\n}\n\n.text-l {\n  text-transform: lowercase !important;\n}\n\n.text-c {\n  text-transform: capitalize !important;\n}\n\n.text-non {\n  text-transform: none !important;\n}\n\n.text-i {\n  font-style: italic;\n}\n\n.text-align {\n  text-align: center;\n}\n\n/*-------------------------------------------------------\n          [ Overlay Effect Bg image ]\n-------------------------------------------------------*/\n\n[data-overlay-dark],\n[data-overlay-color],\n[data-overlay-light] {\n  position: relative;\n}\n\n[data-overlay-dark] .container,\n[data-overlay-color] .container,\n[data-overlay-light] .container {\n  position: relative;\n  color: #fff;\n  z-index: 2;\n}\n\n[data-overlay-dark]:before,\n[data-overlay-color]:before,\n[data-overlay-light]:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n[data-overlay-dark]:before {\n  background: #0b1520;\n}\n\n[data-overlay-color]:before {\n  background-color: #f96332;\n  background: linear-gradient(to bottom right, #f96332, #2576fd);\n}\n\n[data-overlay-dark=\"7\"]:before,\n[data-overlay-color=\"7\"]:before,\n[data-overlay-light=\"7\"]:before {\n  opacity: 0.7;\n}\n\n.bg-img {\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.bg-fixed {\n  background-attachment: fixed;\n}\n\n.full-width {\n  width: 100% !important;\n}\n\n.curve {\n  position: absolute;\n  z-index: 7;\n}\n\n.curve.curve-center:after {\n  border-left: 50vw solid transparent;\n}\n\n.curve.curve-center:before {\n  border-right: 50vw solid transparent;\n}\n\n.curve.curve-center.curve-top:after {\n  border-left: 50vw solid transparent;\n}\n\n.curve.curve-center.curve-top:before {\n  border-right: 50vw solid transparent;\n}\n\n.curve.curve-bottom {\n  left: 0;\n  bottom: -1px;\n  width: 100%;\n}\n\n.curve.curve-bottom:after,\n.curve.curve-bottom:before {\n  bottom: 0;\n}\n\n.curve.curve-top {\n  left: 0;\n  top: -1px;\n  width: 100%;\n}\n\n.curve.curve-top:after,\n.curve.curve-top:before {\n  top: 0;\n  border-top: 50px solid #fff;\n  border-bottom: 0;\n}\n\n.curve.curve-top:after {\n  border-left: 70vw solid transparent;\n}\n\n.curve.curve-top:before {\n  border-right: 30vw solid transparent;\n}\n\n.curve.curve-gray-b:after,\n.curve.curve-gray-b:before {\n  border-bottom: 50px solid #f9f9f9;\n}\n\n.curve.curve-gray-t:after,\n.curve.curve-gray-t:before {\n  border-top: 50px solid #f9f9f9;\n}\n\n.curve:after,\n.curve:before {\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-bottom: 50px solid #fff;\n  position: absolute;\n}\n\n.curve:after {\n  right: 0;\n  border-left: 30vw solid transparent;\n}\n\n.curve:before {\n  left: 0;\n  border-right: 70vw solid transparent;\n}\n\n.marginBott {\n  margin-bottom: 4rem;\n}\n\n.section-padding {\n  padding: 120px 0;\n}\n\n.invisible1 {\n  display: none;\n}\n\n.invisible2 {\n  display: none;\n}\n\n.invisible3 {\n  display: none;\n}\n\n.invisible4 {\n  display: none;\n}\n\n.aboutLecturer {\n  cursor: pointer;\n}\n\n.accordion-body {\n  text-align: initial;\n  padding-left: 30px;\n}\n\n.button {\n  background: #f9f9f9;\n  color: white;\n  border: none;\n  outline: none;\n}\n\n.accordion-body li::before {\n  position: absolute;\n  content: \"-\";\n  font-weight: 700;\n  left: 30px;\n  transform: scaleX(2);\n}\n\n.accordion-body li {\n  padding-bottom: 5px;\n}\n\n.textAbout {\n  font-size: 16px;\n  color: #2c2c2c;\n}\n\n.textAbout > span {\n  font-weight: 600;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLHNCQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0FBS0Y7O0FBRkE7RUFDRSxjQUFBO0FBS0Y7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQU1GOztBQUpBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUVBLDZDQUFBO0FBT0Y7O0FBTEE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBRUEsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFRRjs7QUFOQTtFQUNFLFdBQUE7QUFTRjs7QUFQQTtFQUVFLHNCQUFBO0FBVUY7O0FBUkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBV0Y7O0FBVEE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFBcUIsOEJBQUE7RUFDNEMsK0JBQUE7RUFDakUsdURBQUE7RUFJRyxxRUFBQTtFQUNILGtCQUFBO0VBQ0EsV0FBQTtFQUVBLHNCQUFBO0VBRUEsb0JBQUE7QUFXRjs7QUFUQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBWUY7O0FBVkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQWFGOztBQVZBO0VBQ0UsVUFBQTtBQWFGOztBQVhBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQWNGOztBQVpBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFlRjs7QUFiQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFnQkY7O0FBZEE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBRUEsNENBQUE7RUFDQSw4QkFBQTtBQWlCRjs7QUFmQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFrQkY7O0FBaEJBO0VBQ0UsZ0JBQUE7QUFtQkY7O0FBakJBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBb0JGOztBQWxCQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFxQkY7O0FBbkJBO0VBQ0UseUJBQUE7QUFzQkY7O0FBcEJBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBdUJGOztBQXJCQTtFQUNFLFdBQUE7QUF3QkY7O0FBdEJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQXlCRjs7QUF2QkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUEwQkY7O0FBeEJBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBR0EsVUFBQTtBQTJCRjs7QUF6QkE7RUFDRSxrQkFBQTtBQTRCRjs7QUExQkE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUE2QkY7O0FBM0JBO0VBRUUsc0JBQUE7RUFDQSxVQUFBO0FBOEJGOztBQTVCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxvQkFBQTtBQStCRjs7QUE3QkE7RUFFRSw0Q0FBQTtFQUNBLGtCQUFBO0FBZ0NGOztBQTlCQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBaUNGOztBQTlCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBaUNGOztBQS9CQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBa0NGOztBQWhDQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFBcUIsOEJBQUE7RUFDNEMsK0JBQUE7RUFDakUsdURBQUE7RUFJRyxxRUFBQTtFQUVILG9CQUFBO0FBa0NGOztBQWhDQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUFtQ0Y7O0FBaENBO0VBQ0UsbUJBQUE7QUFtQ0Y7O0FBaENBOztrRUFBQTs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQW1DRjs7QUFqQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFvQ0Y7O0FBbENBO0VBQ0U7SUFDRSxhQUFBO0VBcUNGO0FBQ0Y7O0FBbENBO0VBRUUsMEJBQUE7QUFvQ0Y7O0FBbENBO0VBQ0UsZ0JBQUE7QUFxQ0Y7O0FBbkNBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUVBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSxvQkFBQTtBQXNDRjs7QUFwQ0E7RUFDRSx5QkFBQTtBQXVDRjs7QUFyQ0E7RUFDRSxXQUFBO0FBd0NGOztBQXRDQTtFQUNFLFdBQUE7QUF5Q0Y7O0FBdkNBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBMENGOztBQXhDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBMkNGOztBQXpDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUE0Q0Y7O0FBMUNBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUE2Q0Y7O0FBM0NBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQThDRjs7QUE1Q0E7O2tFQUFBOztBQUdBOztrRUFBQTs7QUFHQTtFQUNFLGtCQUFBO0VBRUEsNENBQUE7RUFDQSxnQkFBQTtBQStDRjs7QUE3Q0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSxvQkFBQTtBQWdERjs7QUE5Q0E7RUFDRSxXQUFBO0VBRUEsNkNBQUE7QUFpREY7O0FBL0NBO0VBRUUsc0JBQUE7QUFrREY7O0FBaERBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUVBLHVEQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFFQSxzQkFBQTtFQUVBLG9CQUFBO0FBbURGOztBQWpEQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFvREY7O0FBbERBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQXFERjs7QUFuREE7RUFDRSxnQkFBQTtBQXNERjs7QUFwREE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQXVERjs7QUFyREE7RUFDRSxlQUFBO0FBd0RGOztBQXREQTtFQUNFLGtCQUFBO0FBeURGOztBQXZEQTtFQUNFLGFBQUE7QUEwREY7O0FBeERBOztrRUFBQTs7QUFJQTs7d0RBQUE7O0FBSUE7RUFDRSxlQUFBO0FBeURGOztBQXREQTtFQUNFLGVBQUE7QUF5REY7O0FBdERBO0VBQ0UsZUFBQTtBQXlERjs7QUF0REE7RUFDRSxlQUFBO0FBeURGOztBQXREQTtFQUNFLGVBQUE7QUF5REY7O0FBdERBO0VBQ0UsZUFBQTtBQXlERjs7QUF0REE7Ozs7OztFQU1FLGdCQUFBO0FBeURGOztBQXREQTs7d0RBQUE7O0FBR0E7RUFDRSxXQUFBO0FBeURGOztBQXREQTtFQUNFLFdBQUE7QUF5REY7O0FBdERBO0VBQ0UsY0FBQTtBQXlERjs7QUF0REE7RUFDRSxjQUFBO0FBeURGOztBQXREQTtFQUNFLGNBQUE7QUF5REY7O0FBdERBO0VBQ0UsY0FBQTtBQXlERjs7QUF0REE7RUFDRSxjQUFBO0FBeURGOztBQXREQTtFQUNFLGNBQUE7QUF5REY7O0FBdERBO0VBQ0UsY0FBQTtBQXlERjs7QUF0REE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBeURGOztBQXZEQTtFQUNFLGtCQUFBO0FBMERGOztBQXZEQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBMERGOztBQXhEQTtFQUNFLGtCQUFBO0FBMkRGOztBQXhEQTs7d0RBQUE7O0FBR0E7RUFDRSwyQkFBQTtBQTJERjs7QUF4REE7RUFDRSwyQkFBQTtBQTJERjs7QUF4REE7RUFDRSwyQkFBQTtBQTJERjs7QUF4REE7RUFDRSwyQkFBQTtBQTJERjs7QUF4REE7RUFDRSwyQkFBQTtBQTJERjs7QUF4REE7RUFDRSwyQkFBQTtBQTJERjs7QUF4REE7RUFDRSwyQkFBQTtBQTJERjs7QUF4REE7RUFDRSwyQkFBQTtBQTJERjs7QUF4REE7RUFDRSwyQkFBQTtBQTJERjs7QUF4REE7O3dEQUFBOztBQUdBO0VBQ0UsMEJBQUE7QUEyREY7O0FBeERBO0VBQ0UsMEJBQUE7QUEyREY7O0FBeERBO0VBQ0UsMEJBQUE7QUEyREY7O0FBeERBO0VBQ0UsMEJBQUE7QUEyREY7O0FBeERBO0VBQ0UsMEJBQUE7QUEyREY7O0FBeERBO0VBQ0UsMEJBQUE7QUEyREY7O0FBeERBO0VBQ0UsMEJBQUE7QUEyREY7O0FBeERBO0VBQ0UsMEJBQUE7QUEyREY7O0FBeERBO0VBQ0UsMEJBQUE7QUEyREY7O0FBeERBO0VBQ0UsMEJBQUE7QUEyREY7O0FBeERBO0VBQ0UsMEJBQUE7QUEyREY7O0FBeERBO0VBQ0UsMEJBQUE7QUEyREY7O0FBeERBOzt3REFBQTs7QUFHQTtFQUNFLGlCQUFBO0FBMkRGOztBQXhEQTtFQUNFLGlCQUFBO0FBMkRGOztBQXhEQTtFQUNFLGlCQUFBO0FBMkRGOztBQXhEQTtFQUNFLGlCQUFBO0FBMkRGOztBQXhEQTtFQUNFLGlCQUFBO0FBMkRGOztBQXhEQTtFQUNFLGlCQUFBO0FBMkRGOztBQXhEQTtFQUNFLGlCQUFBO0FBMkRGOztBQXhEQTtFQUNFLGlCQUFBO0FBMkRGOztBQXhEQTtFQUNFLGlCQUFBO0FBMkRGOztBQXhEQTtFQUNFLGlCQUFBO0FBMkRGOztBQXhEQTtFQUNFLGlCQUFBO0FBMkRGOztBQXhEQTtFQUNFLGlCQUFBO0FBMkRGOztBQXhEQTtFQUNFLGlCQUFBO0FBMkRGOztBQXhEQTtFQUNFLGlCQUFBO0FBMkRGOztBQXhEQTtFQUNFLGlCQUFBO0FBMkRGOztBQXhEQTtFQUNFLGlCQUFBO0FBMkRGOztBQXhEQTtFQUNFLGlCQUFBO0FBMkRGOztBQXhEQTtFQUNFLGlCQUFBO0FBMkRGOztBQXhEQTtFQUNFLGlCQUFBO0FBMkRGOztBQXhEQTtFQUNFLGlCQUFBO0FBMkRGOztBQXhEQTtFQUNFLGlCQUFBO0FBMkRGOztBQXhEQTtFQUNFLGlCQUFBO0FBMkRGOztBQXhEQTtFQUNFLGtCQUFBO0FBMkRGOztBQXhEQTtFQUNFLGtCQUFBO0FBMkRGOztBQXhEQTtFQUNFLGtCQUFBO0FBMkRGOztBQXhEQTs7d0RBQUE7O0FBR0E7RUFDRSxvQ0FBQTtBQTJERjs7QUF4REE7RUFDRSxvQ0FBQTtBQTJERjs7QUF4REE7RUFDRSxxQ0FBQTtBQTJERjs7QUF4REE7RUFDRSwrQkFBQTtBQTJERjs7QUF4REE7RUFDRSxrQkFBQTtBQTJERjs7QUF4REE7RUFDRSxrQkFBQTtBQTJERjs7QUF4REE7O3dEQUFBOztBQUlBOzs7RUFHRSxrQkFBQTtBQTBERjs7QUF2REE7OztFQUdFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUEwREY7O0FBdkRBOzs7RUFHRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQTBERjs7QUF2REE7RUFDRSxtQkFBQTtBQTBERjs7QUF2REE7RUFDRSx5QkFBQTtFQUNBLDhEQUFBO0FBMERGOztBQXZEQTs7O0VBR0UsWUFBQTtBQTBERjs7QUF2REE7RUFDRSxzQkFBQTtFQUNBLDRCQUFBO0FBMERGOztBQXZEQTtFQUNFLDRCQUFBO0FBMERGOztBQXZEQTtFQUNFLHNCQUFBO0FBMERGOztBQXZEQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQTBERjs7QUF4REE7RUFDRSxtQ0FBQTtBQTJERjs7QUF6REE7RUFDRSxvQ0FBQTtBQTRERjs7QUExREE7RUFDRSxtQ0FBQTtBQTZERjs7QUEzREE7RUFDRSxvQ0FBQTtBQThERjs7QUE1REE7RUFDRSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUErREY7O0FBN0RBOztFQUVFLFNBQUE7QUFnRUY7O0FBOURBO0VBQ0UsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBaUVGOztBQS9EQTs7RUFFRSxNQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQWtFRjs7QUFoRUE7RUFDRSxtQ0FBQTtBQW1FRjs7QUFqRUE7RUFDRSxvQ0FBQTtBQW9FRjs7QUFsRUE7O0VBRUUsaUNBQUE7QUFxRUY7O0FBbkVBOztFQUVFLDhCQUFBO0FBc0VGOztBQXBFQTs7RUFFRSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBdUVGOztBQXJFQTtFQUNFLFFBQUE7RUFDQSxtQ0FBQTtBQXdFRjs7QUF0RUE7RUFDRSxPQUFBO0VBQ0Esb0NBQUE7QUF5RUY7O0FBdkVBO0VBQ0UsbUJBQUE7QUEwRUY7O0FBeEVBO0VBQ0UsZ0JBQUE7QUEyRUY7O0FBekVBO0VBQ0UsYUFBQTtBQTRFRjs7QUExRUE7RUFDRSxhQUFBO0FBNkVGOztBQTNFQTtFQUNFLGFBQUE7QUE4RUY7O0FBNUVBO0VBQ0UsYUFBQTtBQStFRjs7QUE3RUE7RUFDRSxlQUFBO0FBZ0ZGOztBQTdFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFnRkY7O0FBOUVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFpRkY7O0FBOUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUFpRkY7O0FBOUVBO0VBQ0UsbUJBQUE7QUFpRkY7O0FBOUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFpRkY7O0FBOUVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBaUZGIiwiZmlsZSI6ImxhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVybyAuZXh0cmEtdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxudWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLm1hckJvdHRvbiB7XHJcbiAgbWFyZ2luOiAtNjBweCAwIDMzcHggMDtcclxufVxyXG4uY3Vyc29yIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnRleHQge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgY29sb3I6ICNmOTYzMzI7XHJcbn1cclxuLmhlcm8gLmZlYXQtaXRlbSB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5oZXJvIC5mZWF0LWl0ZW0gLnRleHQtY2VudGVyIHtcclxuICBwYWRkaW5nOiA1MHB4IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICBib3gtc2hhZG93OiAwcHggMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbn1cclxuLmhlcm8gLmZlYXQtaXRlbS5hY3RpdmUgLnRleHQtY2VudGVyIHtcclxuICBtYXJnaW4tdG9wOiAtMjVweDtcclxuICBwYWRkaW5nLXRvcDogNzVweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAyMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBib3gtc2hhZG93OiAwcHggMjBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuLmhlcm8gLmZlYXQtaXRlbTpob3ZlciAuaWNvbiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmhlcm8gLmZlYXQtaXRlbTpob3ZlciAuaWNvbjphZnRlciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbn1cclxuLmhlcm8gLmZlYXQtaXRlbSAuaWNvbiB7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMDVweDtcclxuICBjb2xvcjogIzc3NztcclxuICBmb250LXNpemU6IDU1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuLmhlcm8gLmZlYXQtaXRlbSAuaWNvbjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNXB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQ6ICNiMjQ1OTI7IC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y5NjMzMiwgI2IyNDU5Mik7IC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQsXHJcbiAgICAjZjk2MzMyLFxyXG4gICAgI2IyNDU5MlxyXG4gICk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxufVxyXG4uaGVybyAuZmVhdC1pdGVtIGg1IHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5oZXJvIC5mZWF0LWl0ZW0gaDYge1xyXG4gIGNvbG9yOiAjZjk2MzMyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4udGFicy1zZWN0aW9uIC5uYXYtcGlsbHMge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLnRhYnMtc2VjdGlvbiAubmF2LXBpbGxzIC5uYXYtbGluayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICBwYWRkaW5nOiAxMnB4IDQwcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZTtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogNTtcclxufVxyXG4udGFicy1zZWN0aW9uIC5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2Y5NjMzMjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiAjZjk2MzMyO1xyXG59XHJcbi50YWJzLXNlY3Rpb24gLnRhYi1jb250ZW50IC5sZWZ0IHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcbi50YWJzLXNlY3Rpb24gLnRhYi1jb250ZW50IC5sZWZ0IC5ib3gtd2hpdGUge1xyXG4gIHBhZGRpbmc6IDUwcHggMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDIwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDIwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggNXB4O1xyXG59XHJcbi50YWJzLXNlY3Rpb24gLnRhYi1jb250ZW50IC5sZWZ0IC50aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4udGFicy1zZWN0aW9uIC50YWItY29udGVudCAubGVmdCAuc3ViLXRpdGxlIHtcclxuICBjb2xvcjogIzc3NztcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi50YWJzLXNlY3Rpb24gLnRhYi1jb250ZW50IC5sZWZ0IC5mZWF0IGxpIHtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDMwcHggNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbn1cclxuLnRhYnMtc2VjdGlvbiAudGFiLWNvbnRlbnQgLmxlZnQgLmZlYXQgbGk6bnRoLWNoaWxkKG9kZCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcbn1cclxuLnRhYnMtc2VjdGlvbiAudGFiLWNvbnRlbnQgLmxlZnQgLmZlYXQgbGk6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOTYzMzI7XHJcbn1cclxuLnRhYnMtc2VjdGlvbiAudGFiLWNvbnRlbnQgLmxlZnQgLmZlYXQgbGk6aG92ZXIgLmljb24ge1xyXG4gIGNvbG9yOiAjZWVlO1xyXG59XHJcbi50YWJzLXNlY3Rpb24gLnRhYi1jb250ZW50IC5sZWZ0IC5mZWF0IC5pY29uIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6ICNmOTYzMzI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4udGFicy1zZWN0aW9uIC50YWItY29udGVudCAubGVmdCAuZmVhdCBoNiB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLnRhYnMtc2VjdGlvbiAudGFiLWNvbnRlbnQgLmltYWdlIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tbGVmdDogLTUwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgbWF4LXdpZHRoOiBjYWxjKDUwJSArIDUwcHgpO1xyXG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XHJcbiAgLW1zLWZsZXg6IG5vbmU7XHJcbiAgZmxleDogbm9uZTtcclxufVxyXG4udGFicy1zZWN0aW9uIC50YWItY29udGVudCAuaW1hZ2UgLmltZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi50YWJzLXNlY3Rpb24gLnRhYi1jb250ZW50IC5pbWFnZSAuaW1nIC52aWQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IGNhbGMoNTAlIC0gNTBweCk7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSA1MHB4KTtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBmb250LXNpemU6IDcwcHg7XHJcbiAgY29sb3I6ICNmOTYzMzI7XHJcbiAgei1pbmRleDogMztcclxufVxyXG4udGFicy1zZWN0aW9uIC50YWItY29udGVudCAuaW1hZ2UgLmltZyAudmlkOmhvdmVyOmFmdGVyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMiwgMik7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgyLCAyKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbi50YWJzLXNlY3Rpb24gLnRhYi1jb250ZW50IC5pbWFnZSAuaW1nIC52aWQ6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAtMTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxufVxyXG4udGFicy1zZWN0aW9uIC50YWItY29udGVudCAuaW1hZ2UgLmltZyBpbWcge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDIwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDIwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi50YWJzLXNlY3Rpb24gLnRhYi1jb250ZW50IC5pbWFnZSAub3dsLWRvdHMge1xyXG4gIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA3O1xyXG59XHJcblxyXG4uc2tpbGxzIGg2IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5za2lsbHMgLnNraWxsLXByb2dyZXNzIHtcclxuICBoZWlnaHQ6IDhweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5za2lsbHMgLnNraWxsLXByb2dyZXNzIC5wcm9ncmVzIHtcclxuICB3aWR0aDogMTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjYjI0NTkyOyAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmOTYzMzIsICNiMjQ1OTIpOyAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0LFxyXG4gICAgI2Y5NjMzMixcclxuICAgICNiMjQ1OTJcclxuICApOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMS41cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMS41cztcclxufVxyXG4uc2tpbGxzIC5za2lsbC1wcm9ncmVzcyAucHJvZ3JlczphZnRlciB7XHJcbiAgY29udGVudDogYXR0cihkYXRhLXZhbHVlKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTVweDtcclxuICByaWdodDogMDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXJnaW5Cb3R0b24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICBbIDA2IFByb2Nlc3MgXVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5wcm9jZXNzIC5pdGVtIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogNDtcclxufVxyXG4ucHJvY2VzcyAuaXRlbSBpbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNzAlO1xyXG4gIHJpZ2h0OiAtNDAlO1xyXG4gIHRvcDogMTVweDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5wcm9jZXNzIC5pdGVtIGltZyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnByb2Nlc3MgLml0ZW0gaW1nLnRvYm90bSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxufVxyXG4ucHJvY2VzcyAuaXRlbS5vZGQge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLnByb2Nlc3MgLml0ZW0gLmNvbnQge1xyXG4gIHBhZGRpbmc6IDUwcHggMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcbi5wcm9jZXNzIC5pdGVtIC5jb250OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjk2MzMyO1xyXG59XHJcbi5wcm9jZXNzIC5pdGVtIC5jb250OmhvdmVyIGg2IHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4ucHJvY2VzcyAuaXRlbSAuY29udDpob3ZlciBwIHtcclxuICBjb2xvcjogI2VlZTtcclxufVxyXG4ucHJvY2VzcyAuaXRlbSAuaWNvbiB7XHJcbiAgY29sb3I6ICNmOTYzMzI7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICBsaW5lLWhlaWdodDogODVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNlZWU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4ucHJvY2VzcyAuaXRlbSBoMyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjVweDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiAjNzc3O1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBvcGFjaXR5OiAwLjE7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuLnByb2Nlc3MgLml0ZW0gaDYge1xyXG4gIGNvbG9yOiAjMjIyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5wcm9jZXNzIC5pdGVtIHAge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzk5OTtcclxufVxyXG4ud3JhcCB7XHJcbiAgYmFja2dyb3VuZDogIzBiMTUyMDtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgWyBFbmQgUHJvY2VzcyBdXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgIFsgMDggU3RhcnQgd2h5LXVzIF1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ud2h5LXVzIC5pbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLndoeS11cyAuaXRlbSAuaWNvbiB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogOTVweDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5ZTllOWU7XHJcbiAgY29sb3I6ICNmOTYzMzI7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuLndoeS11cyAuaXRlbSAuaWNvbjpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG59XHJcbi53aHktdXMgLml0ZW0gLmljb246aG92ZXI6YWZ0ZXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG59XHJcbi53aHktdXMgLml0ZW0gLmljb246YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjk2MzMyO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCNmOTYzMzIpLCB0byAjYjI0NTkyKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmOTYzMzIsICNiMjQ1OTIpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAyO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLCAwKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuLndoeS11cyAuaXRlbSAuaWNvbjpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAzO1xyXG4gIGJvdHRvbTogMjNweDtcclxufVxyXG4ud2h5LXVzIC5pdGVtIC5jb250IHtcclxuICBtYXJnaW4tbGVmdDogNzRweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5tYXJnaW5Ub3Age1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuLndoeS11cyAuaXRlbSAuY29udCBoNSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4ud2h5LXVzIC5pdGVtIC5jb250IHAge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ubWItNDAge1xyXG4gIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG4uZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxufVxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgWyBFbmQgd2h5LXVzIF1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICBbIFR5cG9ncmFwaHkgXVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDU1cHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuXHJcbmgzIHtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuXHJcbmg0IHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbmg1IHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbmg2IHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgWyB0ZXh0IGNvbG9yIF1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi50ZXh0LXdoaXRlIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnRleHQtYmxhY2sge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4udGV4dC1leHRyYS1kYXJrLWdyYXkge1xyXG4gIGNvbG9yOiAjMjMyMzIzO1xyXG59XHJcblxyXG4udGV4dC1kYXJrLWdyYXkge1xyXG4gIGNvbG9yOiAjNjI2MjYyO1xyXG59XHJcblxyXG4udGV4dC1leHRyYS1tZWRpdW0tZ3JheSB7XHJcbiAgY29sb3I6ICM3NTc1NzU7XHJcbn1cclxuXHJcbi50ZXh0LW1lZGl1bS1ncmF5IHtcclxuICBjb2xvcjogIzkzOTM5MztcclxufVxyXG5cclxuLnRleHQtZXh0cmEtbGlnaHQtZ3JheSB7XHJcbiAgY29sb3I6ICNiN2I3Yjc7XHJcbn1cclxuXHJcbi50ZXh0LWxpZ2h0LWdyYXkge1xyXG4gIGNvbG9yOiAjZDZkNWQ1O1xyXG59XHJcblxyXG4udGV4dC12ZXJ5LWxpZ2h0LWdyYXkge1xyXG4gIGNvbG9yOiAjZWRlZGVkO1xyXG59XHJcblxyXG4udGl0bGUtZXh0cmEge1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4udGl0bGUtZXh0cmEgLmljb24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLnRpdGxlLWV4dHJhLXNtIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi50aXRsZS1leHRyYS1zbSAuaWNvbiB7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgIFsgZm9udC13ZWlnaHQgXVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLmZ3LTEwMCB7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZnctMjAwIHtcclxuICBmb250LXdlaWdodDogMjAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mdy0zMDAge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZ3LTQwMCB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZnctNTAwIHtcclxuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mdy02MDAge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZ3LTcwMCB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZnctODAwIHtcclxuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mdy05MDAge1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICBbIGZvbnQtc2l6ZSBdXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4uZnotMTAge1xyXG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZnotMTIge1xyXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZnotMTQge1xyXG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZnotMTUge1xyXG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZnotMTYge1xyXG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZnotMTgge1xyXG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZnotMjAge1xyXG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZnotMjIge1xyXG4gIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZnotMjUge1xyXG4gIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZnotMzAge1xyXG4gIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZnotNDAge1xyXG4gIGZvbnQtc2l6ZTogNDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZnotNTAge1xyXG4gIGZvbnQtc2l6ZTogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgIFsgbGluZS1oZWlnaHQgXVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLmxpbmUtaGVpZ2h0LTEwIHtcclxuICBsaW5lLWhlaWdodDogMTBweDtcclxufVxyXG5cclxuLmxpbmUtaGVpZ2h0LTEzIHtcclxuICBsaW5lLWhlaWdodDogMTNweDtcclxufVxyXG5cclxuLmxpbmUtaGVpZ2h0LTE4IHtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG5cclxuLmxpbmUtaGVpZ2h0LTIwIHtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmxpbmUtaGVpZ2h0LTI0IHtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG5cclxuLmxpbmUtaGVpZ2h0LTIyIHtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxufVxyXG5cclxuLmxpbmUtaGVpZ2h0LTI2IHtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuLmxpbmUtaGVpZ2h0LTI4IHtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxufVxyXG5cclxuLmxpbmUtaGVpZ2h0LTMwIHtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmxpbmUtaGVpZ2h0LTM1IHtcclxuICBsaW5lLWhlaWdodDogMzVweDtcclxufVxyXG5cclxuLmxpbmUtaGVpZ2h0LTQwIHtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmxpbmUtaGVpZ2h0LTQ1IHtcclxuICBsaW5lLWhlaWdodDogNDVweDtcclxufVxyXG5cclxuLmxpbmUtaGVpZ2h0LTUwIHtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmxpbmUtaGVpZ2h0LTU1IHtcclxuICBsaW5lLWhlaWdodDogNTVweDtcclxufVxyXG5cclxuLmxpbmUtaGVpZ2h0LTYwIHtcclxuICBsaW5lLWhlaWdodDogNjBweDtcclxufVxyXG5cclxuLmxpbmUtaGVpZ2h0LTY1IHtcclxuICBsaW5lLWhlaWdodDogNjVweDtcclxufVxyXG5cclxuLmxpbmUtaGVpZ2h0LTcwIHtcclxuICBsaW5lLWhlaWdodDogNzBweDtcclxufVxyXG5cclxuLmxpbmUtaGVpZ2h0LTc1IHtcclxuICBsaW5lLWhlaWdodDogNzVweDtcclxufVxyXG5cclxuLmxpbmUtaGVpZ2h0LTgwIHtcclxuICBsaW5lLWhlaWdodDogODBweDtcclxufVxyXG5cclxuLmxpbmUtaGVpZ2h0LTg1IHtcclxuICBsaW5lLWhlaWdodDogODVweDtcclxufVxyXG5cclxuLmxpbmUtaGVpZ2h0LTkwIHtcclxuICBsaW5lLWhlaWdodDogOTBweDtcclxufVxyXG5cclxuLmxpbmUtaGVpZ2h0LTk1IHtcclxuICBsaW5lLWhlaWdodDogOTVweDtcclxufVxyXG5cclxuLmxpbmUtaGVpZ2h0LTEwMCB7XHJcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4ubGluZS1oZWlnaHQtMTEwIHtcclxuICBsaW5lLWhlaWdodDogMTEwcHg7XHJcbn1cclxuXHJcbi5saW5lLWhlaWdodC0xMjAge1xyXG4gIGxpbmUtaGVpZ2h0OiAxMjBweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICBbIHRleHQtdHJhbnNmb3JtIF1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi50ZXh0LXUge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtbCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1jIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1ub24ge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LWkge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLnRleHQtYWxpZ24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICBbIE92ZXJsYXkgRWZmZWN0IEJnIGltYWdlIF1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5bZGF0YS1vdmVybGF5LWRhcmtdLFxyXG5bZGF0YS1vdmVybGF5LWNvbG9yXSxcclxuW2RhdGEtb3ZlcmxheS1saWdodF0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuW2RhdGEtb3ZlcmxheS1kYXJrXSAuY29udGFpbmVyLFxyXG5bZGF0YS1vdmVybGF5LWNvbG9yXSAuY29udGFpbmVyLFxyXG5bZGF0YS1vdmVybGF5LWxpZ2h0XSAuY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuW2RhdGEtb3ZlcmxheS1kYXJrXTpiZWZvcmUsXHJcbltkYXRhLW92ZXJsYXktY29sb3JdOmJlZm9yZSxcclxuW2RhdGEtb3ZlcmxheS1saWdodF06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuW2RhdGEtb3ZlcmxheS1kYXJrXTpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6ICMwYjE1MjA7XHJcbn1cclxuXHJcbltkYXRhLW92ZXJsYXktY29sb3JdOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5NjMzMjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjZjk2MzMyLCAjMjU3NmZkKTtcclxufVxyXG5cclxuW2RhdGEtb3ZlcmxheS1kYXJrPVwiN1wiXTpiZWZvcmUsXHJcbltkYXRhLW92ZXJsYXktY29sb3I9XCI3XCJdOmJlZm9yZSxcclxuW2RhdGEtb3ZlcmxheS1saWdodD1cIjdcIl06YmVmb3JlIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi5iZy1pbWcge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmJnLWZpeGVkIHtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG59XHJcblxyXG4uZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1cnZlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogNztcclxufVxyXG4uY3VydmUuY3VydmUtY2VudGVyOmFmdGVyIHtcclxuICBib3JkZXItbGVmdDogNTB2dyBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG4uY3VydmUuY3VydmUtY2VudGVyOmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJpZ2h0OiA1MHZ3IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcbi5jdXJ2ZS5jdXJ2ZS1jZW50ZXIuY3VydmUtdG9wOmFmdGVyIHtcclxuICBib3JkZXItbGVmdDogNTB2dyBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG4uY3VydmUuY3VydmUtY2VudGVyLmN1cnZlLXRvcDpiZWZvcmUge1xyXG4gIGJvcmRlci1yaWdodDogNTB2dyBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG4uY3VydmUuY3VydmUtYm90dG9tIHtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogLTFweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY3VydmUuY3VydmUtYm90dG9tOmFmdGVyLFxyXG4uY3VydmUuY3VydmUtYm90dG9tOmJlZm9yZSB7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcbi5jdXJ2ZS5jdXJ2ZS10b3Age1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAtMXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jdXJ2ZS5jdXJ2ZS10b3A6YWZ0ZXIsXHJcbi5jdXJ2ZS5jdXJ2ZS10b3A6YmVmb3JlIHtcclxuICB0b3A6IDA7XHJcbiAgYm9yZGVyLXRvcDogNTBweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IDA7XHJcbn1cclxuLmN1cnZlLmN1cnZlLXRvcDphZnRlciB7XHJcbiAgYm9yZGVyLWxlZnQ6IDcwdncgc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmN1cnZlLmN1cnZlLXRvcDpiZWZvcmUge1xyXG4gIGJvcmRlci1yaWdodDogMzB2dyBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG4uY3VydmUuY3VydmUtZ3JheS1iOmFmdGVyLFxyXG4uY3VydmUuY3VydmUtZ3JheS1iOmJlZm9yZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogNTBweCBzb2xpZCAjZjlmOWY5O1xyXG59XHJcbi5jdXJ2ZS5jdXJ2ZS1ncmF5LXQ6YWZ0ZXIsXHJcbi5jdXJ2ZS5jdXJ2ZS1ncmF5LXQ6YmVmb3JlIHtcclxuICBib3JkZXItdG9wOiA1MHB4IHNvbGlkICNmOWY5Zjk7XHJcbn1cclxuLmN1cnZlOmFmdGVyLFxyXG4uY3VydmU6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXItYm90dG9tOiA1MHB4IHNvbGlkICNmZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5jdXJ2ZTphZnRlciB7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm9yZGVyLWxlZnQ6IDMwdncgc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmN1cnZlOmJlZm9yZSB7XHJcbiAgbGVmdDogMDtcclxuICBib3JkZXItcmlnaHQ6IDcwdncgc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLm1hcmdpbkJvdHQge1xyXG4gIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbn1cclxuLnNlY3Rpb24tcGFkZGluZyB7XHJcbiAgcGFkZGluZzogMTIwcHggMDtcclxufVxyXG4uaW52aXNpYmxlMSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uaW52aXNpYmxlMiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uaW52aXNpYmxlMyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uaW52aXNpYmxlNCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uYWJvdXRMZWN0dXJlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLWJvZHkge1xyXG4gIHRleHQtYWxpZ246IGluaXRpYWw7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG59XHJcbi5idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLWJvZHkgbGk6OmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiLVwiO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGVmdDogMzBweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlWCgyKTtcclxufVxyXG5cclxuLmFjY29yZGlvbi1ib2R5IGxpIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4udGV4dEFib3V0IHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMyYzJjMmM7XHJcbn1cclxuXHJcbi50ZXh0QWJvdXQgPiBzcGFuIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "QnVx":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper \">\r\n  <div class=\"page-header page-header-small\">\r\n    <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\"\r\n      style=\"background-image: url('assets/img/bg_2.jpg');\">\r\n    </div>\r\n    <div class=\"container\">\r\n      <div class=\"content-center\">\r\n        <h2 class=\"title\">Відкривай свій потенціал, досягай більшого!\r\n        </h2>\r\n        <div class=\"text-center\">\r\n          <h5>Цікавить професійний розвиток в сфері ІТ, та не знаєш з чого почати?\r\n            Тоді ця навчальна платформа саме для тебе!\r\n          </h5>\r\n          <a href=\"https://www.facebook.com/%D0%86%D0%A2-ForYou-102312471713314\"\r\n            class=\"btn btn-primary btn-icon btn-round\" target=\"_blank\">\r\n            <i class=\"fab fa-facebook-square\"></i>\r\n          </a>\r\n          <a href=\"https://instagram.com/it_for_you_ukraine?igshid=6qgrasxpaqwl\"\r\n            class=\"btn btn-primary btn-icon btn-round\" target=\"_blank\">\r\n            <i class=\"fab fa-instagram\"></i>\r\n          </a>\r\n          <a href=\"https://www.linkedin.com\" class=\"btn btn-primary btn-icon btn-round\" target=\"_blank\">\r\n            <i class=\"fab fa-linkedin\"></i>\r\n          </a>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"section section-about-us\" id=\"about\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 ml-auto mr-auto text-center\">\r\n          <h3 class=\"title\">Хто <span>ми?</span></h3>\r\n          <h5 class=\"description\"><b>ITForYou</b> - спільнота професіоналів з багаторічним досвідом роботи, яка надає\r\n            навчальну\r\n            платформу для можливості реалізації потенціалу кожного в світі ІТ по напрямках: Recruitment, HRM, Project\r\n            Management.\r\n          </h5>\r\n        </div>\r\n      </div>\r\n      <div class=\"separator separator-primary\"></div>\r\n      <section class=\"hero\" data-scroll-index=\"1\" id=\"course\">\r\n        <div class=\"section-padding pos-re\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"offset-lg-2 col-lg-8 offset-md-1 col-md-10 text-center marginBotton\">\r\n                <h3 class=\"extra-title\">Навчальні\r\n                  <span>Курси</span>\r\n                </h3>\r\n                <p class=\"text\">Разом із нами ти отримаєш знання коротко та по суті в рамках обраної програми. Наші\r\n                  курси базуються на\r\n                  практичному досвіді, де включені лише перевірені ефективні підходи з максимальним відпрацюванням їх на\r\n                  практиці.\r\n                </p>\r\n              </div>\r\n              <div class=\"feat-item mb-md50 col-lg-4 cursor\" [routerLink]=\"['/pm']\"\r\n               routerLinkActive=\"active-link\">\r\n                <div class=\"text-center\">\r\n                  <i class=\"fas fa-chart-line icon\"></i>\r\n                  <h5>Project Management\r\n                  </h5>\r\n                  <h6>Online</h6>\r\n                  <p>Керуй проектами ефективно та легко</p>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"feat-item active mb-md50 col-lg-4 cursor\" [routerLink]=\"['/hr']\"\r\n                routerLinkActive=\"active-link\">\r\n                <div class=\"text-center\">\r\n                  <i class=\"fas fa-users icon\"></i>\r\n                  <h5>Human Resource Management</h5>\r\n                  <h6>Online</h6>\r\n                  <p>Спрямовуй бізнес до ефективного розвитку</p>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"feat-item col-lg-4 cursor\" [routerLink]=\"['/rs']\"\r\n              routerLinkActive=\"active-link\">\r\n                <div class=\"text-center\">\r\n                  <i class=\"fas fa-address-card icon\"></i>\r\n                  <h5>Recruitment Specialist</h5>\r\n                  <h6>Online</h6>\r\n                  <p>Будуй команди професіоналів</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"process section-padding bg-img bg-fixed pos-re text-center\" data-overlay-dark=\"7\"\r\n    data-background=\"img/bg6.jpg\" style=\"background-image: url(&quot;assets/img/bg_3.jpg&quot;);\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6 mt-4\">\r\n          <h4>Зареєструвавшись на навчальний курс ти отримаєш:\r\n          </h4>\r\n        </div>\r\n        <div class=\"full-width clearfix\"></div>\r\n\r\n        <div class=\"col-lg-3 col-md-6\">\r\n          <div class=\"item first mb-md50\">\r\n            <img src=\"assets/img/arrow.png\" class=\"tobotm\" alt=\"\">\r\n            <span class=\"icon fas fa-book-open\"></span>\r\n            <div class=\"cont\">\r\n              <h3>01</h3>\r\n              <h6><b>Workbook</b></h6>\r\n              <p>Робочий блокнот, наповнений корисними матеріалами, чеклістами, техніками та вправами.</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-3 col-md-6\">\r\n          <div class=\"item odd mb-md50\">\r\n            <img src=\"assets/img/arrow.png\" alt=\"\">\r\n            <span class=\"icon fas fa-chalkboard-teacher\"></span>\r\n            <div class=\"cont\">\r\n              <h3>02</h3>\r\n              <h6><b>Менторську програму</b></h6>\r\n              <p>Менторська підтримка від викладача курсу, що триватиме місяць по його завершенню.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-3 col-md-6\">\r\n          <div class=\"item odd mb-sm50\">\r\n            <img src=\"assets/img/arrow.png\" class=\"tobotm\" alt=\"\">\r\n            <span class=\"icon fas fa-file-alt\"></span>\r\n            <div class=\"cont\">\r\n              <h3>03</h3>\r\n              <h6><b>Техніки, методики, темплейти</b></h6>\r\n              <p>Набір дієвих інструментів, технік, методик та прикладів для використання в роботі.</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-3 col-md-6\">\r\n          <div class=\"item odd mb-sm50\">\r\n            <span class=\"icon fas fa-book\"></span>\r\n            <div class=\"cont\">\r\n              <h3>04</h3>\r\n              <h6><b>Рекомендовану літературу</b>\r\n              </h6>\r\n              <p>Перелік рекомендованої літератури від викладача курсу.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"curve curve-gray-t curve-top\"></div>\r\n    <div class=\"curve curve-bottom\"></div>\r\n  </div>\r\n\r\n\r\n  <div class=\"why-us section-padding bg-gray pos-re\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6 text-align\">\r\n          <h3 class=\"extra-title marBotton\">Наші <span>переваги</span> </h3>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"content pt-10 grid\">\r\n            <div class=\"item mb-40\">\r\n              <span class=\"icon fas fa-business-time\"></span>\r\n              <div class=\"cont\">\r\n                <h5>25 років сукупного досвіду в інтеграції з бізнесом</h5>\r\n              </div>\r\n            </div>\r\n            <div class=\"item mb-40\">\r\n              <span class=\"icon fas fa-pen-square\"></span>\r\n              <div class=\"cont\">\r\n                <h5>Тільки перевірені та ефективні робочі підходи</h5>\r\n              </div>\r\n            </div>\r\n            <div class=\"item mb-40\">\r\n              <span class=\"icon fas fa-sign-language\"></span>\r\n              <div class=\"cont\">\r\n                <h5>Розвіюємо теоретичні міфи на практиці</h5>\r\n              </div>\r\n            </div>\r\n            <div class=\"item mb-40\">\r\n              <span class=\"icon fas fa-book-reader\"></span>\r\n              <div class=\"cont\">\r\n                <h5>Рекомендуємо перевірені навчальні ресурси та літературу</h5>\r\n              </div>\r\n            </div>\r\n            <div class=\"item mb-40\">\r\n              <span class=\"icon fas fa-graduation-cap\"></span>\r\n              <div class=\"cont\">\r\n                <h5>Менторська програма</h5>\r\n              </div>\r\n            </div>\r\n            <div class=\"item mb-40\">\r\n              <span class=\"icon fas fa-percentage\"></span>\r\n              <div class=\"cont\">\r\n                <h5>Дисконтна партнерська програма</h5>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"item mb-40\">\r\n              <span class=\"icon fas fa-comment\"></span>\r\n              <div class=\"cont\">\r\n                <h5>Спільнота фахівців для обміну інформацією</h5>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"img mb-md50\">\r\n            <img src=\"assets/img/bg_4.jpg\" alt=\"\">\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"section section-team text-center\">\r\n    <div class=\"container\">\r\n      <h3 class=\"title marginBott\">Наша <span>Команда</span></h3>\r\n      <div class=\"team mt-8\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\">\r\n            <div class=\"team-player\">\r\n              <img src=\"assets/img/natalia.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\r\n              <h5 class=\"title\">Natalia Ivashchyshyn</h5>\r\n              <span class=\"text-primary\">Більше 5 років у IT рекрутингу</span>\r\n              <p class=\"text-primary\">Автор та викладач курсу Recruitment Specialist</p>\r\n              <div class=\"\">\r\n                <div class=\"aboutLecturer\">\r\n                  <button class=\"button\" (click)=\"toggle1()\">\r\n                    <p class=\"textAbout\">Про викладача <span>+</span></p>\r\n                  </button>\r\n                </div>\r\n                <ul class=\"accordion-body\" [ngClass]=\"{invisible1: visibility1}\">\r\n                  <li class=\"\"> Сертифікований Technical Recruiter\r\n                  </li>\r\n                  <li class=\"\">Досвід роботи у міжнародних та продуктових компаніях\r\n                  </li>\r\n                  <li class=\"\">Розробка та реалізація менторських програм</li>\r\n                  <li class=\"\">Оптимізація рекрутингових процесів</li>\r\n                </ul>\r\n              </div>\r\n\r\n\r\n              <a href=\"https://www.linkedin.com/in/natalia-ivashchyshyn-295560127\" target=\"_blank\"\r\n                class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-linkedin\"></i></a>\r\n              <a href=\"https://www.facebook.com/profile.php?id=100001625778366\" target=\"_blank\"\r\n                class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-facebook-square\"></i></a>\r\n              <a href=\"https://www.instagram.com/natalia_ivashchyshyn\" target=\"_blank\"\r\n                class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-instagram\"></i></a>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"team-player\">\r\n              <img src=\"assets/img/Khrystyna.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\r\n              <h5 class=\"title\">Khrystyna Papizh</h5>\r\n              <span class=\"text-primary\">PM з 6-ти річним досвідом</span>\r\n              <p class=\"text-primary\">Автор та викладач курсу Project Manager</p>\r\n              <div class=\"\">\r\n                <div class=\"aboutLecturer\">\r\n                  <button class=\"button\" (click)=\"toggle2()\">\r\n                    <p class=\"textAbout\">Про викладача <span>+</span></p>\r\n                  </button>\r\n                </div>\r\n                <ul class=\"accordion-body\" [ngClass]=\"{invisible2: visibility2}\">\r\n                  <li class=\"\">Понад 6 років в менеджменті (Elitex, Binariks, British American Tobacco, Philip Morris\r\n                    International)\r\n                  </li>\r\n                  <li class=\"\"> Досвід роботи у ролі Project Manager, Scrum Master, Area Manager, фасилітатор та\r\n                    координатор\r\n                  </li>\r\n                  <li class=\"\">Менторство та коучинг команд</li>\r\n                  <li class=\"\">Досвід побудови та підтримки довготривалих відносин із клієнтами</li>\r\n                </ul>\r\n              </div>\r\n\r\n\r\n\r\n              <a href=\"https://www.linkedin.com/in/khrystyna-papizh-5203378b/\" target=\"_blank\"\r\n                class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-linkedin\"></i></a>\r\n              <a href=\"https://www.facebook.com/profile.php?id=100002113077818\" target=\"_blank\"\r\n                class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-facebook-square\"></i></a>\r\n              <a href=\"https://www.instagram.com/khrystyna_papizh/\" target=\"_blank\"\r\n                class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-instagram\"></i></a>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"team-player\">\r\n              <img src=\"assets/img/Ania.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\r\n              <h5 class=\"title\">Anna Trukhan</h5>\r\n              <span class=\"text-primary\">HR з 8-ми річним досвідом</span>\r\n              <p class=\"text-primary\">Автор та викладач курсу HRM</p>\r\n              <div class=\"\">\r\n                <div class=\"aboutLecturer\">\r\n                  <button class=\"button\" (click)=\"toggle3()\">\r\n                    <p class=\"textAbout\">Про викладача <span>+</span></p>\r\n                  </button>\r\n                </div>\r\n                <ul class=\"accordion-body\" [ngClass]=\"{invisible3: visibility3}\">\r\n                  <li class=\"\">\r\n                    Понад 8 років в HR (Elitex, GlobalLogic, Eleks, Агрохолдинговий бізнес)\r\n                  </li>\r\n                  <li class=\"\">Досвід побудови HR процесів та реалізації різноманітних HR проектів\r\n                  </li>\r\n                  <li class=\"\">Проведення тренінгів, воркшопів. Менторство, фасилітація та коучинг </li>\r\n                  <li class=\"\">Психоконсультант методу \"Позитивна психотерапія\" Positum-підхід</li>\r\n                </ul>\r\n              </div>\r\n\r\n\r\n              <a href=\"https://www.linkedin.com/in/anna-trukhan-4652a94b\" target=\"_blank\"\r\n                class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-linkedin\"></i></a>\r\n              <a href=\"https://www.facebook.com/ania.trukhan\" target=\"_blank\"\r\n                class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-facebook-square\"></i></a>\r\n              <a href=\"https://www.instagram.com/ania_trukhan\" target=\"_blank\"\r\n                class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-instagram\"></i></a>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"team-player\">\r\n              <img src=\"assets/img/mariya.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\r\n              <h5 class=\"title\">Mariya Trukhan</h5>\r\n              <span class=\"text-primary\">HR з 7-ми річним досвідом</span>\r\n              <p class=\"text-primary\">Автор та викладач курсу HRM</p>\r\n              <div class=\"\">\r\n                <div class=\"aboutLecturer\">\r\n                  <button class=\"button\" (click)=\"toggle4()\">\r\n                    <p class=\"textAbout\">Про викладача <span>+</span></p>\r\n                  </button>\r\n                </div>\r\n                <ul class=\"accordion-body\" [ngClass]=\"{invisible4: visibility4}\">\r\n                  <li class=\"\"> Понад 7 років в HR менеджменті у IT компаніях\r\n                  </li>\r\n                  <li class=\"\">Doctor of Philosophy PhD\r\n                  </li>\r\n                  <li class=\"\">Конфліктолог, ментор та фасилітатор</li>\r\n                  <li class=\"\">Автор навчального тренінгу \"Подолання професійних конфліктів\"</li>\r\n                </ul>\r\n              </div>\r\n              <a href=\"https://www.linkedin.com/in/mariya-trukhan-ba62856a\" target=\"_blank\"\r\n                class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-linkedin\"></i></a>\r\n              <a href=\"https://www.facebook.com/maria.trukhan.7\" target=\"_blank\"\r\n                class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-facebook-square\"></i></a>\r\n              <a href=\"https://www.instagram.com/mariya_trukhan\" target=\"_blank\"\r\n                class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-instagram\"></i></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"section section-contact-us text-center\" id=\"contacts\">\r\n    <div class=\"container\">\r\n      <h2 class=\"title\">Хочеш навчатись у нас?</h2>\r\n      <h4 class=\"description\">Тоді реєструйся!</h4>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 text-center col-md-8 ml-auto mr-auto\">\r\n          <div class=\"send-button\">\r\n            <a target=\"_blank\"\r\n              href=\"https://docs.google.com/forms/d/e/1FAIpQLSdgEFQClRJf09SxgZl2Kmlm4Tl8laOk6ync8KFT17LY42J2UQ/viewform\"\r\n              class=\"btn btn-primary btn-round btn-block btn-lg\"><b>Реєстрація</b></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div>\r\n  <ng-image-slider [images]=\"imageObject\" #nav [imageSize]=\"{width: '370px', height: '250px' , space: '5'}\"\r\n    [animationSpeed]=\"0.3\">\r\n  </ng-image-slider>\r\n</div>\r\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");










var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location, spinner, metaService, title) {
        var _this = this;
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
        this.spinner = spinner;
        this.metaService = metaService;
        this.title = title;
        this.spinner.show();
        setTimeout(function () {
            /** spinner ends after 2 seconds */
            _this.spinner.hide();
        }, 1500);
        this.addTag();
        this.title.setTitle('');
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 350) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
        });
    };
    AppComponent.prototype.addTag = function () {
        this.metaService.addTag({ name: 'title', content: 'ITForYou - навчальна платформа для початківців в сфері IT' });
        this.metaService.addTag({ name: 'description', content: 'Навчальні курси за напрямками: Recruitment, HRM, Project Management. Цікавить професійний розвиток в сфері ІТ, та не знаєш з чого почати? Тоді ця навчальна платформа саме для тебе!' });
        this.metaService.addTag({ name: 'keywords', content: 'IT курси Львів, Курси України,  Course for IT' });
        this.metaService.addTag({ name: 'robots', content: 'index, follow' });
        this.metaService.addTag({ name: 'author', content: 'Ihor Papizh' });
        //  Open Graph / Facebook
        this.metaService.addTag({ property: "og:type", content: 'website ' });
        this.metaService.addTag({ property: "og:url", content: 'https://papizh.github.io/ITForYou' });
        this.metaService.addTag({ property: "og:title", content: "ITForYou - навчальна платформа для початківців в сфері IT" });
        this.metaService.addTag({
            property: "og:description",
            content: "Навчальні курси за напрямками: Recruitment, HRM, Project Management. Цікавить професійний розвиток в сфері ІТ, та не знаєш з чого почати? Тоді ця навчальна платформа саме для тебе!"
        });
        this.metaService.addTag({ property: "og:image", content: "" });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"] }
    ]; };
    AppComponent.propDecorators = {
        navbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], { static: true },] }]
    };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Meta"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "Tfcf":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/course-hr/course-hr.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"section\">\n    <div class=\"container margin\">\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <h1 class=\"section-title\">Human Resource Management course</h1>\n          <h4 class=\"section-title-details\">Детальна інформація про курс</h4>\n          <p class=\"section-text\">Як ви помітили, в просторах інтернету існує безліч популярних і дорогих навчальних\n            програм, воркшопів,\n            тренінгів, але чи справді вони відповідають поставленій цілі?\n            На нашій навчальній платформі ми навмисно зробили основний акцент на практиці. Адже ми всі можемо бути\n            сильні в теорії, однак на практиці все зазвичай по-іншому.\n          </p>\n          <p class=\"section-text\">Свій власний досвід автори курсу здобули будучи в ролях HR, Recruiter, коуч,\n            фасилітатор, модератор, тренінг-координатор, тренер і консультант, працювали з різними компаніями, були\n            учителями і менторами. На цьому навчальному курсі хочемо поділитися з тобою здобутими знаннями, практиками,\n            інструментами, професійними експериментами (успішними і не дуже) – всім тим, чого ти не знайдеш в\n            підручниках чи не почерпнеш на інших навчальних програмах.\n          </p>\n          <p class=\"section-text\">Після завершення навчання ти будеш озброєний(а) всіма знаннями, необхідними для того,\n            щоб\n            діяти в умовах реального бізнесу.\n          </p>\n\n          <div>\n            <h4 class=\"section-title-details\">Цей курс для тебе, якщо:</h4>\n            <ul class=\"section-text\">\n              <li>Ти хочеш опанувати професію HR Manager в ІТ</li>\n              <li>Бачиш себе на управлінській посаді</li>\n              <li>В тебе добре розвинуті Soft Skills</li>\n            </ul>\n          </div>\n          <div>\n            <h4 class=\"section-title-details\">Закінчивши курс ти:</h4>\n            <ul class=\"section-text\">\n              <li>Отримаєш всі необхідні знання для успішної роботи в напрямку HR</li>\n              <li>Детально зрозумієш специфіку роботи</li>\n            </ul>\n          </div>\n          <div>\n            <h4 class=\"section-title-details\">Навчальний план:</h4>\n            <ul class=\"section-text\">\n              <li>Кількість занять – 13</li>\n              <li>Тривалість одного заняття – 1,5 години</li>\n              <li>Періодичність занять – двічі на тиждень</li>\n              <li>Час заняття – 19:00 – 20:30</li>\n              <li>Загальна тривалість курсу – 7 тижнів</li>\n            </ul>\n          </div>\n\n          <div>\n            <h4 class=\"section-title-details\">Плюс до навчання:</h4>\n            <ul class=\"section-text\">\n              <li>Workbook для кожного учасника - містить основні матеріали лекцій, посилання на корисні джерела, місце\n                для нотаток</li>\n              <li>Практика на кожному занятті - приклади з реального життя та можливість їх пропрацювати</li>\n              <li>Завдання для закріплення знань</li>\n              <li>Менторська підтримка кожного із студентів під час курсу та впродовж місяця після його завершення\n              </li>\n              <li>Закрита група в телеграмі для обговорень та обміну інформацією</li>\n              <li>Бонуси та подарунки</li>\n              <li>Рекомендація для працевлаштування</li>\n            </ul>\n          </div>\n          <div>\n            <h4 class=\"section-title-details\"> Навчальна програма:</h4>\n            <ul class=\"section-text list-style-none\">\n              <li><span class=\"section-text-li\">Урок 1. </span>Поняття HR та специфіка роботи в ІТ.\n              </li>\n              <li><span class=\"section-text-li\">Урок 2. </span>Роль та обов'язки HR на кожному етапі розвитку бізнесу. З\n                чого починати роботу? </li>\n              <li><span class=\"section-text-li\">Урок 3. </span>Чому важливо розуміти як працює бізнес? Організаційна\n                структура, функції відділів та розподіл ролей.</li>\n              <li><span class=\"section-text-li\">Урок 4. </span>Бізнес комунікація як ключ до ефективної роботи.\n              </li>\n              <li><span class=\"section-text-li\">Урок 5. </span>Що таке HR процеси та як їх правильно будувати? Робота з\n                командами, підрозділами, менеджментом.\n              </li>\n              <li><span class=\"section-text-li\">Урок 6. </span>Життєвий цикл роботи в компанії.\n              </li>\n              <li><span class=\"section-text-li\">Урок 7. </span>Детально про onboarding.\n              </li>\n              <li><span class=\"section-text-li\">Урок 8. </span>1:1 зустрічі - що це та для чого вони потрібні? Основні\n                прийоми. </li>\n              <li><span class=\"section-text-li\">Урок 9. </span>Конструктивний feedback. Техніки надання зворотнього\n                зв'язку.\n              </li>\n              <li><span class=\"section-text-li\">Урок 10. </span>\n                Що таке Performance Review, навіщо внутрішні surveys і як їх ефективно організувати?\n              </li>\n              <li><span class=\"section-text-li\">Урок 11. </span>\n                Learning and Development. Як сприяти розвитку employees та підібрати ефективні інструменти для навчання?\n              </li>\n              <li><span class=\"section-text-li\">Урок 12. </span>Роль HR у роботі з конфліктами.\n              </li>\n\n              <li><span class=\"section-text-li\">Урок 13. </span>Важливість ефективного offboarding.\n              </li>\n            </ul>\n          </div>\n        </div>\n\n\n        <div class=\"col-md-4\">\n          <aside class=\"sticky-sidebar\">\n            <div class=\"aside-panel shadow1\">\n              <div class=\"aside-panel-padding\">\n                <div class=\"aside-panel-padding-content\">\n                  <ul class=\"flex\">\n                    <li>\n                      <div class=\"atribute\">Локація</div>\n                      <div class=\"value\">онлайн</div>\n                    </li>\n                    <li>\n                      <div class=\"atribute\">Час</div>\n                      <div class=\"value\">19:00 - 20:30</div>\n                    </li>\n                    <li>\n                      <div class=\"atribute\">Тривалість</div>\n                      <div class=\"value\">13 занять</div>\n                    </li>\n                    <li>\n                      <div class=\"atribute\">Старт</div>\n                      <div class=\"value\">2 березня 2021</div>\n                    </li>\n                    <li>\n                      <div class=\"atribute\">Ціна</div>\n                      <div class=\"value\">7 900 грн</div>\n                    </li>\n                  </ul>\n                  <div class=\"registration text-lg-center pt-3 pt-lg-4\">\n                    <a target=\"_blank\" class=\"btn btn-primary btn-round btn-block btn-lg bold\"\n                      href=\"https://docs.google.com/forms/d/e/1FAIpQLSdgEFQClRJf09SxgZl2Kmlm4Tl8laOk6ync8KFT17LY42J2UQ/viewform\">Реєстрація</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </aside>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div>\n    <ng-image-slider [images]=\"imageObject\" #nav [imageSize]=\"{width: '350px', height: '250px' , space: '5'}\"\n      [animationSpeed]=\"0.3\">\n    </ng-image-slider>\n  </div>\n</div>\n");

/***/ }),

/***/ "Vtbk":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/course-pm/course-pm.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n  <div class=\"section\">\r\n    <div class=\"container margin\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n          <h1 class=\"section-title\">Project Management course</h1>\r\n          <h4 class=\"section-title-details\">Детальна інформація про курс</h4>\r\n          <p class=\"section-text\">Як ви помітили, існує безліч популярних і дорогих навчальних програм, воркшопів,\r\n            тренінгів, але чи справді\r\n            вони відповідають поставленій цілі?\r\n            На нашій навчальній платформі ми навмисно зробили основний акцент на практиці. Адже всі ми можемо бути\r\n            сильні в теорії, однак на практиці все зазвичай по-іншому.\r\n          </p>\r\n          <p class=\"section-text\">Свій власний досвід автор курсу здобула будучи в ролі Project Manager, Scrum Master,\r\n            фасилітатор,\r\n            координатор працюючи з різноманітним спектром компаній. На цьому навчальному курсі хочемо поділитися з тобою\r\n            здобутими знаннями, практиками, інструментами, професійними експериментами (успішними і не дуже) – всім тим,\r\n            чого ти не знайдеш в підручниках чи не почерпнеш на інших навчальних програмах.\r\n          </p>\r\n          <p class=\"section-text\">Після завершення навчання ти будеш озброєний(а) всіма знаннями, необхідними для того,\r\n            щоб діяти в умовах реального бізнесу.\r\n          </p>\r\n\r\n          <div>\r\n            <h4 class=\"section-title-details\">Цей курс для тебе, якщо:</h4>\r\n            <ul class=\"section-text\">\r\n              <li>Ти хочеш опанувати професію Project Manager в ІТ</li>\r\n              <li>Бачиш себе в управлінні командами</li>\r\n              <li>Вже займаєш управлінську посаду, але хочеш змінити сферу діяльності</li>\r\n              <li>Ти технічний спеціаліст, який планує рухатись у напрямку Project Management</li>\r\n              <li>Ти студент, який обрав для себе професію PM і хочеш опанувати потрібні навики</li>\r\n            </ul>\r\n          </div>\r\n          <div>\r\n            <h4 class=\"section-title-details\">Закінчивши курс ти:</h4>\r\n            <ul class=\"section-text\">\r\n              <li>Будеш розуміти всі етапи розробки ІТ-проектів та навчишся правильно розподіляти роботу в команді</li>\r\n              <li>Опануєш інструменти, необхідні для ефективної роботи Project Manager-a</li>\r\n              <li>Матимеш розуміння як працювати з різними типами проектів</li>\r\n              <li>Володітимеш знаннями про найефективніші методології та їх застосування</li>\r\n              <li>Навчишся створювати згуртовану команду</li>\r\n            </ul>\r\n          </div>\r\n          <div>\r\n            <h4 class=\"section-title-details\">Навчальний план:</h4>\r\n            <ul class=\"section-text\">\r\n              <li>Кількість занять – 13</li>\r\n              <li>Тривалість одного заняття – 1,5 години</li>\r\n              <li>Періодичність занять – двічі на тиждень</li>\r\n              <li>Час заняття – 19:00 – 20:30</li>\r\n              <li>Загальна тривалість курсу – 7 тижнів</li>\r\n            </ul>\r\n          </div>\r\n\r\n          <div>\r\n            <h4 class=\"section-title-details\">Плюс до навчання:</h4>\r\n            <ul class=\"section-text\">\r\n              <li>Workbook для кожного учасника - містить основні матеріали лекцій, посилання на корисні джерела, місце\r\n                для нотаток</li>\r\n              <li>Практика на кожному занятті - приклади з реального життя та можливість їх пропрацювати</li>\r\n              <li>Завдання для закріплення знань</li>\r\n              <li>Менторська підтримка кожного із студентів під час курсу та впродовж місяця після його завершення\r\n              </li>\r\n              <li>Закрита група в телеграмі для обговорень та обміну інформацією</li>\r\n              <li>Бонуси та подарунки</li>\r\n              <li>Рекомендація для працевлаштування</li>\r\n            </ul>\r\n          </div>\r\n          <div>\r\n            <h4 class=\"section-title-details\"> Навчальна програма:</h4>\r\n            <ul class=\"section-text list-style-none\">\r\n              <li><span class=\"section-text-li\">Урок 1. </span>Роль та обов’язки Project Manager-a. Області знань та\r\n                основні напрямки роботи PM-a.\r\n              </li>\r\n              <li><span class=\"section-text-li\">Урок 2. </span> Типи IT компаній: Product vs Outsourcing. Проект та його\r\n                життєвий цикл.\r\n              </li>\r\n              <li><span class=\"section-text-li\">Урок 3. </span>Agile, як нова валюта. Чому Agile Project Management?\r\n              </li>\r\n              <li><span class=\"section-text-li\">Урок 4. </span>Практичний огляд Agile фреймворків. Scrum vs Kanban – що\r\n                краще, для яких проектів?</li>\r\n              <li><span class=\"section-text-li\">Урок 5. </span>Більше про Scrum. Роль Scrum Master-a на кожному етапі\r\n                розробки.\r\n              </li>\r\n              <li><span class=\"section-text-li\">Урок 6. </span>Scrum Workshop.\r\n              </li>\r\n              <li><span class=\"section-text-li\">Урок 7. </span>Оцінка та планування проекту. Написання User Stories.\r\n              </li>\r\n              <li><span class=\"section-text-li\">Урок 8. </span>Старт проекту. Kick-off meeting. Налаштування процесів,\r\n                проектна документація.\r\n              </li>\r\n              <li><span class=\"section-text-li\">Урок 9. </span>Метрики - що це і для чого вони потрібні?\r\n              </li>\r\n              <li><span class=\"section-text-li\">Урок 10. </span>Побудова ефективних команд. Етапи формування команди.\r\n                Роль PM-a на кожному з них.\r\n              </li>\r\n              <li><span class=\"section-text-li\">Урок 11. </span>Робота з конфліктами. Методи їх вирішення.\r\n              </li>\r\n              <li><span class=\"section-text-li\">Урок 12. </span>People Management практики. Робота з цілями, 1 on 1\r\n                зустрічі, надання та отримання фідбеку.\r\n              </li>\r\n              <li><span class=\"section-text-li\">Урок 13. </span> Як працювати з розподіленими командами в умовах\r\n                реального часу?\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-4\">\r\n          <aside class=\"sticky-sidebar\">\r\n            <div class=\"aside-panel shadow1\">\r\n              <div class=\"aside-panel-padding\">\r\n                <div class=\"aside-panel-padding-content\">\r\n                  <ul class=\"flex\">\r\n                    <li>\r\n                      <div class=\"atribute\">Локація</div>\r\n                      <div class=\"value\">онлайн</div>\r\n                    </li>\r\n                    <li>\r\n                      <div class=\"atribute\">Час</div>\r\n                      <div class=\"value\">19:00 - 20:30</div>\r\n                    </li>\r\n                    <li>\r\n                      <div class=\"atribute\">Тривалість</div>\r\n                      <div class=\"value\">13 занять</div>\r\n                    </li>\r\n                    <li>\r\n                      <div class=\"atribute\">Старт</div>\r\n                      <div class=\"value\">2 березня 2021</div>\r\n                    </li>\r\n                    <li>\r\n                      <div class=\"atribute\">Ціна</div>\r\n                      <div class=\"value\">8 200 грн</div>\r\n                    </li>\r\n                  </ul>\r\n                  <div class=\"registration text-lg-center pt-3 pt-lg-4\">\r\n                    <a target=\"_blank\" class=\"btn btn-primary btn-round btn-block btn-lg bold\"\r\n                      href=\"https://docs.google.com/forms/d/e/1FAIpQLSdgEFQClRJf09SxgZl2Kmlm4Tl8laOk6ync8KFT17LY42J2UQ/viewform\">Реєстрація</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </aside>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <ng-image-slider [images]=\"imageObject\" #nav [imageSize]=\"{width: '370px', height: '250px' , space: '5'}\"\r\n      [animationSpeed]=\"0.3\">\r\n    </ng-image-slider>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<ngx-spinner bdColor=\"rgba(0,0,0,0.2)\" size=\"large\" color=\"#0b0909\" type=\"ball-spin\" [fullScreen]=\"true\">\n  <p style=\"color: white\"> Loading... </p>\n</ngx-spinner>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "yQBb");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _course_pm_course_pm_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./course-pm/course-pm.component */ "zSAS");
/* harmony import */ var _course_hr_course_hr_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./course-hr/course-hr.component */ "J7s4");
/* harmony import */ var _course_rs_course_rs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./course-rs/course-rs.component */ "zt4G");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-image-slider */ "yf9x");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ "JqCM");

 // this is needed!

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_11__["LandingComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _course_pm_course_pm_component__WEBPACK_IMPORTED_MODULE_12__["CoursePmComponent"],
                _course_hr_course_hr_component__WEBPACK_IMPORTED_MODULE_13__["CourseHrComponent"],
                _course_rs_course_rs_component__WEBPACK_IMPORTED_MODULE_14__["CourseRsComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
            ],
            imports: [
                ng_image_slider__WEBPACK_IMPORTED_MODULE_16__["NgImageSliderModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_18__["NgxSpinnerModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_10__["JwBootstrapSwitchNg2Module"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["Meta"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "cruu":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  width: 220px;\n}\n\n@media only screen and (max-width: 991px) {\n  .marginLeft {\n    margin-left: 1.85em;\n  }\n\n  .flex {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG1CQUFBO0VBQ0Y7O0VBQ0E7SUFDRSxhQUFBO0VBRUY7QUFDRiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLm1hcmdpbkxlZnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEuODVlbTtcclxuICB9XHJcbiAgLmZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "f2YT":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".orange a {\n  color: #f96332;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JhbmdlIGEge1xyXG4gIGNvbG9yOiAjZjk2MzMyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "i9jC":
/*!****************************************************!*\
  !*** ./src/app/course-rs/course-rs.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.wrapper {\n  padding-top: 50px;\n}\n.section {\n  background: white;\n}\n.margin {\n  width: 90%;\n}\n.section-title {\n  color: #f96332;\n  font-size: 32px;\n  line-height: 1.5;\n  font-weight: bold;\n}\n.section-title-details {\n  font-weight: bold;\n}\n.section-text {\n  font-size: initial;\n}\n.section-text-li {\n  font-weight: bold;\n}\n.list-style-none {\n  margin-left: 0;\n  /* Отступ слева в браузере IE и Opera */\n  padding-left: 0;\n  /* Отступ слева в браузере Firefox, Safari, Chrome */\n  list-style-type: none;\n}\n.shadow1 {\n  border-radius: 8px;\n  background-color: #fff;\n  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);\n}\n.aside-panel-padding {\n  padding: 15pm;\n}\n.flex {\n  padding-left: 30px;\n}\n.flex li {\n  padding-top: 1em;\n  display: flex;\n  flex-wrap: wrap;\n}\n@media only screen and (max-width: 500px) {\n  .flex li {\n    flex-direction: column;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .sticky-sidebar {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 85px;\n  }\n}\n.atribute {\n  font-size: 15px;\n  line-height: 27px;\n  color: #464646;\n  width: 60px;\n  margin-right: 5em;\n}\n.value {\n  padding-right: 15px;\n  font-size: 18px;\n  line-height: 27px;\n  color: black;\n  width: calc(100%-60px);\n}\n.row {\n  flex-wrap: wrap-reverse;\n}\n.registration {\n  padding: 0 10% 5px;\n  margin-bottom: 15px;\n}\n.bold {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvdXJzZS1ycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxpQkFBQTtBQUVGO0FBQUE7RUFDRSxpQkFBQTtBQUdGO0FBREE7RUFDRSxVQUFBO0FBSUY7QUFEQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUlGO0FBRkE7RUFDRSxpQkFBQTtBQUtGO0FBSEE7RUFDRSxrQkFBQTtBQU1GO0FBSkE7RUFDRSxpQkFBQTtBQU9GO0FBTEE7RUFDRSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSxlQUFBO0VBQ0Esb0RBQUE7RUFDQSxxQkFBQTtBQVFGO0FBTEE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBRUEseUNBQUE7QUFPRjtBQUxBO0VBQ0UsYUFBQTtBQVFGO0FBTEE7RUFDRSxrQkFBQTtBQVFGO0FBTkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBU0Y7QUFQQTtFQUNFO0lBQ0Usc0JBQUE7RUFVRjtBQUNGO0FBUkE7RUFDRTtJQUNFLHdCQUFBO0lBQUEsZ0JBQUE7SUFDQSxTQUFBO0VBVUY7QUFDRjtBQVBBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQVNGO0FBUEE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQVVGO0FBUkE7RUFDRSx1QkFBQTtBQVdGO0FBVEE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBWUY7QUFWQTtFQUNFLGdCQUFBO0FBYUYiLCJmaWxlIjoiY291cnNlLXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLndyYXBwZXIge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLnNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLm1hcmdpbiB7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgY29sb3I6ICNmOTYzMzI7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zZWN0aW9uLXRpdGxlLWRldGFpbHMge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNlY3Rpb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogaW5pdGlhbDtcbn1cblxuLnNlY3Rpb24tdGV4dC1saSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubGlzdC1zdHlsZS1ub25lIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIC8qINCe0YLRgdGC0YPQvyDRgdC70LXQstCwINCyINCx0YDQsNGD0LfQtdGA0LUgSUUg0LggT3BlcmEgKi9cbiAgcGFkZGluZy1sZWZ0OiAwO1xuICAvKiDQntGC0YHRgtGD0L8g0YHQu9C10LLQsCDQsiDQsdGA0LDRg9C30LXRgNC1IEZpcmVmb3gsIFNhZmFyaSwgQ2hyb21lICovXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLnNoYWRvdzEge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uYXNpZGUtcGFuZWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDE1cG07XG59XG5cbi5mbGV4IHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uZmxleCBsaSB7XG4gIHBhZGRpbmctdG9wOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuZmxleCBsaSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuc3RpY2t5LXNpZGViYXIge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiA4NXB4O1xuICB9XG59XG4uYXRyaWJ1dGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBjb2xvcjogIzQ2NDY0NjtcbiAgd2lkdGg6IDYwcHg7XG4gIG1hcmdpbi1yaWdodDogNWVtO1xufVxuXG4udmFsdWUge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiBjYWxjKDEwMCUtNjBweCk7XG59XG5cbi5yb3cge1xuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcbn1cblxuLnJlZ2lzdHJhdGlvbiB7XG4gIHBhZGRpbmc6IDAgMTAlIDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmJvbGQge1xuICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */");

/***/ }),

/***/ "jGP6":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer footer-default\">\n  <div class=\"container\">\n    <nav>\n      <ul>\n        <li>\n          <a href=\"#\">\n            Головна\n          </a>\n        </li>\n        <li>\n          <a [routerLink]=\"['']\" fragment='about'>\n            Про нас\n          </a>\n        </li>\n        <li>\n          <a [routerLink]=\"['']\" fragment=\"course\">\n            Курси\n          </a>\n        </li>\n        <li><span class=\"orange\">\n            <a href=\"mailto:itforyou.ukraine@gmail.com\">itforyou.ukraine@gmail.com</a>\n          </span>\n        </li>\n      </ul>\n    </nav>\n    <div class=\"copyright\">\n      &copy;\n      {{data | date: 'yyyy'}}, <span><a href=\"#\"> ITForYou.</a></span>\n      All rights reserved\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "jGP6");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.scss */ "f2YT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.data = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "oLTG":
/*!****************************************************!*\
  !*** ./src/app/course-hr/course-hr.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.wrapper {\n  padding-top: 50px;\n}\n.section {\n  background: white;\n}\n.margin {\n  width: 90%;\n}\n.section-title {\n  color: #f96332;\n  font-size: 32px;\n  line-height: 1.5;\n  font-weight: bold;\n}\n.section-title-details {\n  font-weight: bold;\n}\n.section-text {\n  font-size: initial;\n}\n.section-text-li {\n  font-weight: bold;\n}\n.list-style-none {\n  margin-left: 0;\n  /* Отступ слева в браузере IE и Opera */\n  padding-left: 0;\n  /* Отступ слева в браузере Firefox, Safari, Chrome */\n  list-style-type: none;\n}\n.shadow1 {\n  border-radius: 8px;\n  background-color: #fff;\n  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);\n}\n.aside-panel-padding {\n  padding: 15pm;\n}\n.flex {\n  padding-left: 30px;\n}\n.flex li {\n  padding-top: 1em;\n  display: flex;\n  flex-wrap: wrap;\n}\n@media only screen and (max-width: 500px) {\n  .flex li {\n    flex-direction: column;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .sticky-sidebar {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 85px;\n  }\n}\n.atribute {\n  font-size: 15px;\n  line-height: 27px;\n  color: #464646;\n  width: 60px;\n  margin-right: 5em;\n}\n.value {\n  padding-right: 15px;\n  font-size: 18px;\n  line-height: 27px;\n  color: black;\n  width: calc(100%-60px);\n}\n.row {\n  flex-wrap: wrap-reverse;\n}\n.registration {\n  padding: 0 10% 5px;\n  margin-bottom: 15px;\n}\n.bold {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvdXJzZS1oci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxpQkFBQTtBQUVGO0FBQUE7RUFDRSxpQkFBQTtBQUdGO0FBREE7RUFDRSxVQUFBO0FBSUY7QUFEQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUlGO0FBRkE7RUFDRSxpQkFBQTtBQUtGO0FBSEE7RUFDRSxrQkFBQTtBQU1GO0FBSkE7RUFDRSxpQkFBQTtBQU9GO0FBTEE7RUFDRSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSxlQUFBO0VBQ0Esb0RBQUE7RUFDQSxxQkFBQTtBQVFGO0FBTEE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBRUEseUNBQUE7QUFPRjtBQUxBO0VBQ0UsYUFBQTtBQVFGO0FBTEE7RUFDRSxrQkFBQTtBQVFGO0FBTkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBU0Y7QUFQQTtFQUNFO0lBQ0Usc0JBQUE7RUFVRjtBQUNGO0FBUkE7RUFDRTtJQUNFLHdCQUFBO0lBQUEsZ0JBQUE7SUFDQSxTQUFBO0VBVUY7QUFDRjtBQVBBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQVNGO0FBUEE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQVVGO0FBUkE7RUFDRSx1QkFBQTtBQVdGO0FBVEE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBWUY7QUFWQTtFQUNFLGdCQUFBO0FBYUYiLCJmaWxlIjoiY291cnNlLWhyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLndyYXBwZXIge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLnNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLm1hcmdpbiB7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgY29sb3I6ICNmOTYzMzI7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zZWN0aW9uLXRpdGxlLWRldGFpbHMge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNlY3Rpb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogaW5pdGlhbDtcbn1cblxuLnNlY3Rpb24tdGV4dC1saSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubGlzdC1zdHlsZS1ub25lIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIC8qINCe0YLRgdGC0YPQvyDRgdC70LXQstCwINCyINCx0YDQsNGD0LfQtdGA0LUgSUUg0LggT3BlcmEgKi9cbiAgcGFkZGluZy1sZWZ0OiAwO1xuICAvKiDQntGC0YHRgtGD0L8g0YHQu9C10LLQsCDQsiDQsdGA0LDRg9C30LXRgNC1IEZpcmVmb3gsIFNhZmFyaSwgQ2hyb21lICovXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLnNoYWRvdzEge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uYXNpZGUtcGFuZWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDE1cG07XG59XG5cbi5mbGV4IHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uZmxleCBsaSB7XG4gIHBhZGRpbmctdG9wOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuZmxleCBsaSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuc3RpY2t5LXNpZGViYXIge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiA4NXB4O1xuICB9XG59XG4uYXRyaWJ1dGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBjb2xvcjogIzQ2NDY0NjtcbiAgd2lkdGg6IDYwcHg7XG4gIG1hcmdpbi1yaWdodDogNWVtO1xufVxuXG4udmFsdWUge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiBjYWxjKDEwMCUtNjBweCk7XG59XG5cbi5yb3cge1xuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcbn1cblxuLnJlZ2lzdHJhdGlvbiB7XG4gIHBhZGRpbmc6IDAgMTAlIDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmJvbGQge1xuICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _course_hr_course_hr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-hr/course-hr.component */ "J7s4");
/* harmony import */ var _course_pm_course_pm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course-pm/course-pm.component */ "zSAS");
/* harmony import */ var _course_rs_course_rs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-rs/course-rs.component */ "zt4G");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");







var routes = [
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"] },
    { path: 'pm', component: _course_pm_course_pm_component__WEBPACK_IMPORTED_MODULE_4__["CoursePmComponent"] },
    { path: 'hr', component: _course_hr_course_hr_component__WEBPACK_IMPORTED_MODULE_3__["CourseHrComponent"] },
    { path: 'rs', component: _course_rs_course_rs_component__WEBPACK_IMPORTED_MODULE_5__["CourseRsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    useHash: true,
                    anchorScrolling: 'enabled',
                    scrollPositionRestoration: 'enabled',
                    relativeLinkResolution: 'legacy',
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zBy+":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/course-rs/course-rs.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"section\">\n    <div class=\"container margin\">\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <h1 class=\"section-title\">Recruitment Specialist course</h1>\n          <h4 class=\"section-title-details\">Детальна інформація про курс</h4>\n          <p class=\"section-text\">Як ви помітили, існує безліч популярних і дорогих навчальних програм, воркшопів,\n            тренінгів, але чи справді вони відповідають поставленій цілі? На нашій навчальній платформі ми навмисно\n            зробили основний акцент на практиці. Адже ми всі можемо бути сильні в теорії, однак на практиці все зазвичай\n            по-іншому.\n          </p>\n          <p class=\"section-text\">Автор курсу хоче поділитись своїми знаннями, підходами та практиками, які\n            накопичила протягом більше 5-ти років роботи рекрутером в ІТ сфері. Працюючи в компаніях різного типу, мала\n            можливість вивчити всю специфіку роботи рекрутера в залежності від бізнес моделей та цілей компанії, а також\n            займатись менторством та передачою своїх знань колегам. Вся програма курсу базується на реальному досвіді та\n            практичних знаннях, а також інформації про ефективні інструменти та секрети, які допомагають працювати\n            продуктивно.\n          </p>\n          <p class=\"section-text\">Завершивши даний курс, ти будеш готовий(а) до роботи з тими реальними обов'язками, які\n            зустрінуться на твоєму шляху, як тільки ти розпочнеш свою кар'єру в ІТ компанії.\n          </p>\n\n          <div>\n            <h4 class=\"section-title-details\">Цей курс для тебе, якщо:</h4>\n            <ul class=\"section-text\">\n              <li>Ти хочеш стати рекрутером в ІТ компанії</li>\n              <li>Тобі цікаво дізнатись, як виглядає рекрутинг зсередини та ознайомитись з усіма процесами</li>\n              <li>В тебе добре розвинуті комунікативні навички</li>\n            </ul>\n          </div>\n          <div>\n            <h4 class=\"section-title-details\">Закінчивши курс ти:</h4>\n            <ul class=\"section-text\">\n              <li>Будеш добре орієнтуватись в специфіці ІТ рекрутингу</li>\n              <li>Зможеш швидко знаходити релевантних кандидатів</li>\n              <li>Знатимеш як правильно працювати з кандидатом на кожному етапі рекрутингового процесу</li>\n              <li>Будеш якісно проводити HR співбесіди</li>\n              <li>Закриватимеш вакансії для різних ІТ спеціальностей</li>\n            </ul>\n          </div>\n          <div>\n            <h4 class=\"section-title-details\">Навчальний план:</h4>\n            <ul class=\"section-text\">\n              <li>Кількість занять – 12</li>\n              <li>Тривалість одного заняття – 1,5 години</li>\n              <li>Періодичність занять – двічі на тиждень</li>\n              <li>Час заняття – 19:00 – 20:30</li>\n              <li>Загальна тривалість курсу – 6 тижнів</li>\n            </ul>\n          </div>\n\n          <div>\n            <h4 class=\"section-title-details\">Плюс до навчання:</h4>\n            <ul class=\"section-text\">\n              <li>Workbook для кожного учасника - містить основні матеріали лекцій, посилання на корисні джерела, місце\n                для нотаток</li>\n              <li>Практика на кожному занятті - приклади з реального життя та можливість їх пропрацювати</li>\n              <li>Завдання для закріплення знань</li>\n              <li>Менторська підтримка кожного із студентів під час курсу та впродовж місяця після його завершення\n              </li>\n              <li>Закрита група в телеграмі для обговорень та обміну інформацією</li>\n              <li>Бонуси та подарунки</li>\n              <li>Рекомендація для працевлаштування</li>\n            </ul>\n          </div>\n          <div>\n            <h4 class=\"section-title-details\"> Навчальна програма:</h4>\n            <ul class=\"section-text list-style-none\">\n              <li><span class=\"section-text-li\">Урок 1. </span>Рекрутинг в ІТ сфері. Як виглядає ІТ ринок в Україні?\n              </li>\n              <li><span class=\"section-text-li\">Урок 2. </span>Технічна частина. Оверв’ю технологій та класифікації\n                спеціалістів.</li>\n              <li><span class=\"section-text-li\">Урок 3. </span>Загальний рекрутинговий процес в ІТ компанії. </li>\n              <li><span class=\"section-text-li\">Урок 4. </span>Все про пошук. Як і де шукати кандидатів?</li>\n              <li><span class=\"section-text-li\">Урок 5. </span>Сорсингова стратегія. Як її сформувати?</li>\n              <li><span class=\"section-text-li\">Урок 6. </span>Інструменти для пошуку. Які з них найбільш ефективні для\n                пошуку ІТ спеціалістів?</li>\n              <li><span class=\"section-text-li\">Урок 7. </span>Робота з профілем кандидата. Перший контакт і чому він\n                такий важливий?</li>\n              <li><span class=\"section-text-li\">Урок 8. </span>Вчимося працювати з резюме.</li>\n              <li><span class=\"section-text-li\">Урок 9. </span>Комунікація з активним кандидатом. </li>\n              <li><span class=\"section-text-li\">Урок 10. </span>Співбесіда. Види та особливості.</li>\n              <li><span class=\"section-text-li\">Урок 11. </span>Офер. До чого потрібно бути готовим рекрутеру?</li>\n              <li><span class=\"section-text-li\">Урок 12. </span>Метрики в рекрутингу. Як визначити свою ефективність?\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"col-md-4\">\n          <aside class=\"sticky-sidebar\">\n            <div class=\"aside-panel shadow1\">\n              <div class=\"aside-panel-padding\">\n                <div class=\"aside-panel-padding-content\">\n                  <ul class=\"flex\">\n                    <li>\n                      <div class=\"atribute\">Локація</div>\n                      <div class=\"value\">онлайн</div>\n                    </li>\n                    <li>\n                      <div class=\"atribute\">Час</div>\n                      <div class=\"value\">19:00 - 20:30</div>\n                    </li>\n                    <li>\n                      <div class=\"atribute\">Тривалість</div>\n                      <div class=\"value\">12 занять</div>\n                    </li>\n                    <li>\n                      <div class=\"atribute\">Старт</div>\n                      <div class=\"value\">2 березня 2021</div>\n                    </li>\n                    <li>\n                      <div class=\"atribute\">Ціна</div>\n                      <div class=\"value\">7 700 грн</div>\n                    </li>\n                  </ul>\n                  <div class=\"registration text-lg-center pt-3 pt-lg-4\">\n                    <a target=\"_blank\" class=\"btn btn-primary btn-round btn-block btn-lg bold\"\n                      href=\"https://docs.google.com/forms/d/e/1FAIpQLSdgEFQClRJf09SxgZl2Kmlm4Tl8laOk6ync8KFT17LY42J2UQ/viewform\">Реєстрація</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </aside>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div>\n    <ng-image-slider [images]=\"imageObject\" #nav [imageSize]=\"{width: '350px', height: '250px' , space: '5'}\"\n      [animationSpeed]=\"0.3\">\n    </ng-image-slider>\n  </div>\n</div>\n");

/***/ }),

/***/ "zRkE":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav id=\"main\" class=\"navbar navbar-expand-lg bg-primary fixed-top navbar-transparent\" #target color-on-scroll=\"500\">\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a (click)='scroll(target)' class=\"navbar-brand\" [routerLink]=\"['']\" placement=\"bottom\">\n        <img class=\"logo\" src=\"assets/img/itforyou_white.png\" alt=\"logo\">\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\"\n        aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\n        (click)=\"sidebarToggle()\">\n        <span class=\"navbar-toggler-bar bar1\"></span>\n        <span class=\"navbar-toggler-bar bar2\"></span>\n        <span class=\"navbar-toggler-bar bar3\"></span>\n      </button>\n    </div>\n    <div class=\"collapse navbar-collapse\" data-nav-image=\"assets/img/blurred-image-1.jpg\" data-color=\"orange\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['']\" fragment='main' routerLinkActive=\"active-link\">\n            <i class=\"now-ui-icons\" aria-hidden=\"true\"></i>\n            <p>Головна</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['']\" fragment='about' routerLinkActive=\"active-link\">\n            <i class=\"now-ui-icons\" aria-hidden=\"true\"></i>\n            <p>Про нас</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['']\" fragment=\"course\" routerLinkActive=\"active-link\">\n            <i class=\"now-ui-icons\" aria-hidden=\"true\"></i>\n            <p>Курси</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['']\" fragment=\"contacts\" routerLinkActive=\"active-link\">\n            <i class=\"now-ui-icons\" aria-hidden=\"true\"></i>\n            <p>Реєстрація</p>\n          </a>\n        </li>\n\n        <li class=\"nav-item marginLeft \">\n          <a class=\"nav-link flex\" rel=\"tooltip\" title=\"Like us on Facebook\" data-placement=\"bottom\"\n            href=\"https://www.facebook.com/%D0%86%D0%A2-ForYou-102312471713314\" target=\"_blank\">\n            <i class=\"fab fa-facebook-square\"></i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item marginLeft\">\n          <a class=\"nav-link flex\" rel=\"tooltip\" title=\"Follow us on Instagram\" data-placement=\"bottom\"\n            href=\"https://instagram.com/it_for_you_ukraine?igshid=6qgrasxpaqwl\" target=\"_blank\">\n            <i class=\"fab fa-instagram\"></i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n        <li class=\"nav-item marginLeft\">\n          <a class=\"nav-link flex\" rel=\"tooltip\" title=\"Follow us on Linkedin\" data-placement=\"bottom\"\n            href=\"https://www.linkedin.com/company/itforyou/\" target=\"_blank\">\n            <i class=\"fab fa-linkedin\"></i>\n            <p class=\"d-lg-none d-xl-none\">Linkedin</p>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "zSAS":
/*!**************************************************!*\
  !*** ./src/app/course-pm/course-pm.component.ts ***!
  \**************************************************/
/*! exports provided: CoursePmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursePmComponent", function() { return CoursePmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_course_pm_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./course-pm.component.html */ "Vtbk");
/* harmony import */ var _course_pm_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-pm.component.scss */ "zXxY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var CoursePmComponent = /** @class */ (function () {
    function CoursePmComponent() {
        this.imageObject = [{
                image: 'assets/img/20_11_2020 (177) (2).jpg',
                thumbImage: 'assets/img/20_11_2020 (177) (2).jpg',
                title: ''
            }, {
                image: 'assets/img/20_11_2020 (127).jpg',
                thumbImage: 'assets/img/20_11_2020 (127).jpg'
            }, {
                image: 'assets/img/20_11_2020 (136).jpg',
                thumbImage: 'assets/img/20_11_2020 (136).jpg',
                title: ''
            }, {
                image: 'assets/img/20_11_2020.jpg',
                thumbImage: 'assets/img/20_11_2020.jpg',
                title: ''
            }, {
                image: 'assets/img/1.jpg',
                thumbImage: 'assets/img/20_11_2020 (161).jpg'
            }, {
                image: 'assets/img/1.jpg',
                thumbImage: 'assets/img/20_11_2020 (150).jpg',
                title: ''
            }];
    }
    CoursePmComponent.prototype.ngOnInit = function () {
    };
    CoursePmComponent.ctorParameters = function () { return []; };
    CoursePmComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-course-pm',
            template: _raw_loader_course_pm_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_course_pm_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CoursePmComponent);
    return CoursePmComponent;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
});


/***/ }),

/***/ "zXxY":
/*!****************************************************!*\
  !*** ./src/app/course-pm/course-pm.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.wrapper {\n  padding-top: 50px;\n}\n.section {\n  background: white;\n}\n.margin {\n  width: 90%;\n}\n.section-title {\n  color: #f96332;\n  font-size: 32px;\n  line-height: 1.5;\n  font-weight: bold;\n}\n.section-title-details {\n  font-weight: bold;\n}\n.section-text {\n  font-size: initial;\n}\n.section-text-li {\n  font-weight: bold;\n}\n.list-style-none {\n  margin-left: 0;\n  /* Отступ слева в браузере IE и Opera */\n  padding-left: 0;\n  /* Отступ слева в браузере Firefox, Safari, Chrome */\n  list-style-type: none;\n}\n.shadow1 {\n  border-radius: 8px;\n  background-color: #fff;\n  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);\n}\n.aside-panel-padding {\n  padding: 15pm;\n}\n.flex {\n  padding-left: 30px;\n}\n.flex li {\n  padding-top: 1em;\n  display: flex;\n  flex-wrap: wrap;\n}\n@media only screen and (max-width: 500px) {\n  .flex li {\n    flex-direction: column;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .sticky-sidebar {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 85px;\n  }\n}\n.atribute {\n  font-size: 15px;\n  line-height: 27px;\n  color: #464646;\n  width: 60px;\n  margin-right: 5em;\n}\n.value {\n  padding-right: 15px;\n  font-size: 18px;\n  line-height: 27px;\n  color: black;\n  width: calc(100%-60px);\n}\n.row {\n  flex-wrap: wrap-reverse;\n}\n.registration {\n  padding: 0 10% 5px;\n  margin-bottom: 15px;\n}\n.bold {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvdXJzZS1wbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxpQkFBQTtBQUVGO0FBQUE7RUFDRSxpQkFBQTtBQUdGO0FBREE7RUFDRSxVQUFBO0FBSUY7QUFEQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUlGO0FBRkE7RUFDRSxpQkFBQTtBQUtGO0FBSEE7RUFDRSxrQkFBQTtBQU1GO0FBSkE7RUFDRSxpQkFBQTtBQU9GO0FBTEE7RUFDRSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSxlQUFBO0VBQ0Esb0RBQUE7RUFDQSxxQkFBQTtBQVFGO0FBTEE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBRUEseUNBQUE7QUFPRjtBQUxBO0VBQ0UsYUFBQTtBQVFGO0FBTEE7RUFDRSxrQkFBQTtBQVFGO0FBTkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBU0Y7QUFQQTtFQUNFO0lBQ0Usc0JBQUE7RUFVRjtBQUNGO0FBUkE7RUFDRTtJQUNFLHdCQUFBO0lBQUEsZ0JBQUE7SUFDQSxTQUFBO0VBVUY7QUFDRjtBQU5BO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQVFGO0FBTkE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQVNGO0FBUEE7RUFDRSx1QkFBQTtBQVVGO0FBUkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBV0Y7QUFUQTtFQUNFLGdCQUFBO0FBWUYiLCJmaWxlIjoiY291cnNlLXBtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLndyYXBwZXIge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLnNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLm1hcmdpbiB7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgY29sb3I6ICNmOTYzMzI7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zZWN0aW9uLXRpdGxlLWRldGFpbHMge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNlY3Rpb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogaW5pdGlhbDtcbn1cblxuLnNlY3Rpb24tdGV4dC1saSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubGlzdC1zdHlsZS1ub25lIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIC8qINCe0YLRgdGC0YPQvyDRgdC70LXQstCwINCyINCx0YDQsNGD0LfQtdGA0LUgSUUg0LggT3BlcmEgKi9cbiAgcGFkZGluZy1sZWZ0OiAwO1xuICAvKiDQntGC0YHRgtGD0L8g0YHQu9C10LLQsCDQsiDQsdGA0LDRg9C30LXRgNC1IEZpcmVmb3gsIFNhZmFyaSwgQ2hyb21lICovXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLnNoYWRvdzEge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uYXNpZGUtcGFuZWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDE1cG07XG59XG5cbi5mbGV4IHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uZmxleCBsaSB7XG4gIHBhZGRpbmctdG9wOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuZmxleCBsaSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuc3RpY2t5LXNpZGViYXIge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiA4NXB4O1xuICB9XG59XG4uYXRyaWJ1dGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBjb2xvcjogIzQ2NDY0NjtcbiAgd2lkdGg6IDYwcHg7XG4gIG1hcmdpbi1yaWdodDogNWVtO1xufVxuXG4udmFsdWUge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiBjYWxjKDEwMCUtNjBweCk7XG59XG5cbi5yb3cge1xuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcbn1cblxuLnJlZ2lzdHJhdGlvbiB7XG4gIHBhZGRpbmc6IDAgMTAlIDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmJvbGQge1xuICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */");

/***/ }),

/***/ "zt4G":
/*!**************************************************!*\
  !*** ./src/app/course-rs/course-rs.component.ts ***!
  \**************************************************/
/*! exports provided: CourseRsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseRsComponent", function() { return CourseRsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_course_rs_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./course-rs.component.html */ "zBy+");
/* harmony import */ var _course_rs_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-rs.component.scss */ "i9jC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var CourseRsComponent = /** @class */ (function () {
    function CourseRsComponent() {
        this.imageObject = [{
                image: 'assets/img/20_11_2020.jpg',
                thumbImage: 'assets/img/20_11_2020.jpg',
                title: ''
            }, {
                image: 'assets/img/20_11_2020 (106).jpg',
                thumbImage: 'assets/img/20_11_2020 (106).jpg'
            }, {
                image: 'assets/img/20_11_2020 (161).jpg',
                thumbImage: 'assets/img/20_11_2020 (161).jpg',
                title: ''
            }, {
                image: 'assets/img/20_11_2020 (150).jpg',
                thumbImage: 'assets/img/20_11_2020 (150).jpg',
                title: ''
            }, {
                image: 'assets/img/20_11_2020 (177) (2).jpg',
                thumbImage: 'assets/img/20_11_2020 (177) (2).jpg',
                title: ''
            }];
    }
    CourseRsComponent.prototype.ngOnInit = function () {
    };
    CourseRsComponent.ctorParameters = function () { return []; };
    CourseRsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-course-rs',
            template: _raw_loader_course_rs_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_course_rs_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CourseRsComponent);
    return CourseRsComponent;
}());



/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map