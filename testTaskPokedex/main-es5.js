function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pokemon-list/pokemon-list.component */
    "./src/app/pokemon-list/pokemon-list.component.ts");
    /* harmony import */


    var _pokemon_details_pokemon_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pokemon-details/pokemon-details.component */
    "./src/app/pokemon-details/pokemon-details.component.ts");

    var routes = [{
      path: '',
      component: _pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_3__["PokemonListComponent"],
      children: [{
        path: 'pokemon/:id',
        component: _pokemon_details_pokemon_details_component__WEBPACK_IMPORTED_MODULE_4__["PokemonDetailsComponent"]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled'
          })]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'testTaskPokedex';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [[1, "wrapper"], [1, "title"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pokedex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.title[_ngcontent-%COMP%] {\n  margin-right: 20%;\n  font-weight: 500;\n  font-size: 40px;\n  width: 12em;\n  border: 1px solid black;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxkb21pbnVzXFxEZXNrdG9wXFx0ZXN0VGFza1xcdGVzdFRhc2tQb2tlZGV4L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0NGOztBRENBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnRpdGxlIHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICB3aWR0aDogMTJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwiLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMCU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgd2lkdGg6IDEyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pokemon-list/pokemon-list.component */
    "./src/app/pokemon-list/pokemon-list.component.ts");
    /* harmony import */


    var _pokemon_details_pokemon_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pokemon-details/pokemon-details.component */
    "./src/app/pokemon-details/pokemon-details.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_pokemon_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/pokemon.service */
    "./src/app/services/pokemon.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_pokemon_service__WEBPACK_IMPORTED_MODULE_6__["PokemonService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_3__["PokemonListComponent"], _pokemon_details_pokemon_details_component__WEBPACK_IMPORTED_MODULE_4__["PokemonDetailsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_3__["PokemonListComponent"], _pokemon_details_pokemon_details_component__WEBPACK_IMPORTED_MODULE_4__["PokemonDetailsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]],
          providers: [_services_pokemon_service__WEBPACK_IMPORTED_MODULE_6__["PokemonService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pokemon-details/pokemon-details.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pokemon-details/pokemon-details.component.ts ***!
    \**************************************************************/

  /*! exports provided: PokemonDetailsComponent */

  /***/
  function srcAppPokemonDetailsPokemonDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PokemonDetailsComponent", function () {
      return PokemonDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/pokemon.service */
    "./src/app/services/pokemon.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PokemonDetailsComponent_div_1_div_8_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", type_r4.type.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r4.type.name, " ");
      }
    }

    function PokemonDetailsComponent_div_1_div_8_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var stat_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stat_r5.stat.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stat_r5.base_stat);
      }
    }

    function PokemonDetailsComponent_div_1_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Type: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PokemonDetailsComponent_div_1_div_8_div_4_Template, 2, 2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PokemonDetailsComponent_div_1_div_8_div_5_Template, 5, 2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "weight");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Total moves");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.pokemon.types);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.pokemon.stats);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.pokemon.weight);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.pokemon.moves.length);
      }
    }

    function PokemonDetailsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " #");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PokemonDetailsComponent_div_1_div_8_Template, 16, 4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.pokemon.sprites.front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.pokemon.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.pokemon.id, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.pokemon == null ? null : ctx_r0.pokemon.stats);
      }
    }

    var PokemonDetailsComponent = /*#__PURE__*/function () {
      function PokemonDetailsComponent(service, route) {
        _classCallCheck(this, PokemonDetailsComponent);

        this.service = service;
        this.route = route;
      }

      _createClass(PokemonDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.paramMap.subscribe(function (params) {
            _this.loadData(params.get('id'));
          });
        }
      }, {
        key: "loadData",
        value: function loadData(name) {
          var _this2 = this;

          this.service.getPokemon(name).subscribe(function (data) {
            return _this2.pokemon = data;
          });
        }
      }]);

      return PokemonDetailsComponent;
    }();

    PokemonDetailsComponent.ɵfac = function PokemonDetailsComponent_Factory(t) {
      return new (t || PokemonDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    PokemonDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PokemonDetailsComponent,
      selectors: [["app-pokemon-details"]],
      decls: 2,
      vars: 1,
      consts: [[1, "container", "pokemon-detail"], ["class", "card", 4, "ngIf"], [1, "card"], [1, "pokemon-baseinfo"], ["alt", "Pokemon", 1, "card-img-top", 3, "src"], [1, "card-name"], ["class", "pokemon-info", 4, "ngIf"], [1, "pokemon-info"], [1, "table"], ["class", "styleType", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "table", 4, "ngFor", "ngForOf"], [1, "styleType", 3, "ngClass"], [1, "pokemon-stat"]],
      template: function PokemonDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonDetailsComponent_div_1_Template, 9, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pokemon);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border: 2px solid black;\n}\n\n.card-img-top[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  width: 138px;\n  height: 138px;\n}\n\n.card-name[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 600;\n  text-transform: capitalize;\n  text-align: center;\n}\n\n.pokemon-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n}\n\n.table[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  font-size: 24px;\n  margin: 3px 5px 0 3px;\n  text-transform: capitalize;\n}\n\n.pokemon-baseinfo[_ngcontent-%COMP%] {\n  min-width: 270px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9rZW1vbi1kZXRhaWxzL0M6XFxVc2Vyc1xcZG9taW51c1xcRGVza3RvcFxcdGVzdFRhc2tcXHRlc3RUYXNrUG9rZWRleC9zcmNcXGFwcFxccG9rZW1vbi1kZXRhaWxzXFxwb2tlbW9uLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Bva2Vtb24tZGV0YWlscy9wb2tlbW9uLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNFRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QUREQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0FDSUY7O0FERkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0FDS0Y7O0FESEE7RUFDRSxnQkFBQTtBQ01GIiwiZmlsZSI6InNyYy9hcHAvcG9rZW1vbi1kZXRhaWxzL3Bva2Vtb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmNhcmQtaW1nLXRvcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDEzOHB4O1xyXG4gIGhlaWdodDogMTM4cHg7XHJcbn1cclxuLmNhcmQtbmFtZSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5wb2tlbW9uLWluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLnRhYmxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBtYXJnaW46IDNweCA1cHggMCAzcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLnBva2Vtb24tYmFzZWluZm8ge1xyXG4gIG1pbi13aWR0aDogMjcwcHg7XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cblxuLmNhcmQtaW1nLXRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEzOHB4O1xuICBoZWlnaHQ6IDEzOHB4O1xufVxuXG4uY2FyZC1uYW1lIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucG9rZW1vbi1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udGFibGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luOiAzcHggNXB4IDAgM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnBva2Vtb24tYmFzZWluZm8ge1xuICBtaW4td2lkdGg6IDI3MHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pokemon-details',
          templateUrl: './pokemon-details.component.html',
          styleUrls: ['./pokemon-details.component.scss']
        }]
      }], function () {
        return [{
          type: _services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pokemon-list/pokemon-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pokemon-list/pokemon-list.component.ts ***!
    \********************************************************/

  /*! exports provided: PokemonListComponent */

  /***/
  function srcAppPokemonListPokemonListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PokemonListComponent", function () {
      return PokemonListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/pokemon.service */
    "./src/app/services/pokemon.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function PokemonListComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please wait");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PokemonListComponent_div_2_div_1_img_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
      }

      if (rf & 2) {
        var pokemonInfo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", pokemonInfo_r3.pokemon.sprites.front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PokemonListComponent_div_2_div_1_div_5_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", type_r8.type.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r8.type.name, " ");
      }
    }

    function PokemonListComponent_div_2_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonListComponent_div_2_div_1_div_5_div_1_Template, 2, 2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pokemonInfo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", pokemonInfo_r3.pokemon.types);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/pokemon/", a1];
    };

    function PokemonListComponent_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function PokemonListComponent_div_2_div_1_Template_div_mouseover_0_listener() {
          var pokemonInfo_r3 = ctx.$implicit;
          return pokemonInfo_r3.over = true;
        })("mouseleave", function PokemonListComponent_div_2_div_1_Template_div_mouseleave_0_listener() {
          var pokemonInfo_r3 = ctx.$implicit;
          return pokemonInfo_r3.over = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PokemonListComponent_div_2_div_1_img_2_Template, 1, 1, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PokemonListComponent_div_2_div_1_div_5_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pokemonInfo_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fragment", "promotions")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, pokemonInfo_r3.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", pokemonInfo_r3.pokemon != null && pokemonInfo_r3.pokemon.sprites.front_default);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pokemonInfo_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", pokemonInfo_r3.pokemon == null ? null : pokemonInfo_r3.pokemon.types);
      }
    }

    function PokemonListComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonListComponent_div_2_div_1_Template, 6, 7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.pokemons.results);
      }
    }

    var PokemonListComponent = /*#__PURE__*/function () {
      function PokemonListComponent(service) {
        _classCallCheck(this, PokemonListComponent);

        this.service = service;
        this.offset = 12;
      }

      _createClass(PokemonListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPoko();
        }
      }, {
        key: "getPoko",
        value: function getPoko() {
          var _this3 = this;

          this.service.getPokemonList(this.offset).subscribe(function (pokemons) {
            _this3.pokemons = pokemons;

            _this3.pokemons.results.forEach(function (pokemonInfo) {
              _this3.service.getPokemon(pokemonInfo.name).subscribe(function (pokemon) {
                return pokemonInfo.pokemon = pokemon;
              });
            });
          });
        }
      }, {
        key: "loadMore",
        value: function loadMore() {
          var _this4 = this;

          this.offset = this.offset + 12;
          this.service.getPokemonList(this.offset).subscribe(function (pokemons) {
            _this4.pokemons = pokemons;

            _this4.pokemons.results.forEach(function (pokemonInfo) {
              _this4.service.getPokemon(pokemonInfo.name).subscribe(function (pokemon) {
                return pokemonInfo.pokemon = pokemon;
              });
            });
          });
          console.log(this.offset);
        }
      }]);

      return PokemonListComponent;
    }();

    PokemonListComponent.ɵfac = function PokemonListComponent_Factory(t) {
      return new (t || PokemonListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"]));
    };

    PokemonListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PokemonListComponent,
      selectors: [["app-pokemon-list"]],
      decls: 8,
      vars: 2,
      consts: [[1, "wrapper", "pokemons-list"], ["class", "card-deck", 4, "ngIf"], ["class", "container list", 4, "ngIf"], ["id", "promotions", 1, "container", "item"], [1, "container", 3, "click"], ["for", "expanded", "role", "button", 1, "action-button", "shadow", "animate", "blue"], [1, "card-deck"], [1, "container", "list"], ["class", "card", 3, "fragment", "routerLink", "mouseover", "mouseleave", 4, "ngFor", "ngForOf"], [1, "card", 3, "fragment", "routerLink", "mouseover", "mouseleave"], [1, "card-img"], ["class", "card-img-top", "alt", "Pokemon", 3, "src", 4, "ngIf"], [1, "card-name"], ["class", "flexPosition", 4, "ngIf"], ["alt", "Pokemon", 1, "card-img-top", 3, "src"], [1, "flexPosition"], ["class", "styleType", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "styleType", 3, "ngClass"]],
      template: function PokemonListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonListComponent_div_1_Template, 2, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PokemonListComponent_div_2_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonListComponent_Template_div_click_5_listener() {
            return ctx.loadMore();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Load More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.pokemons);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pokemons);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: wrap;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 48%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 21%;\n  border: 1px solid black;\n  margin: 20px 40px 20px 15px;\n  height: 200px;\n  min-width: 100px;\n}\n\n.card-img[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.card-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-transform: capitalize;\n  margin: 20px;\n  text-align: center;\n}\n\n.styleType[_ngcontent-%COMP%] {\n  text-align: center;\n  text-transform: capitalize;\n  width: 60px;\n  border-radius: 3px;\n  margin: 2px;\n}\n\n.poison[_ngcontent-%COMP%] {\n  background: blueviolet;\n}\n\n.fire[_ngcontent-%COMP%] {\n  background: #d13126;\n}\n\n.grass[_ngcontent-%COMP%] {\n  background: #279636;\n}\n\n.water[_ngcontent-%COMP%] {\n  background: blue;\n}\n\n.normal[_ngcontent-%COMP%] {\n  background: #d3ded4;\n}\n\n.fighting[_ngcontent-%COMP%] {\n  background: orange;\n}\n\n.flying[_ngcontent-%COMP%] {\n  background: paleturquoise;\n}\n\n.ground[_ngcontent-%COMP%] {\n  background: saddlebrown;\n}\n\n.rock[_ngcontent-%COMP%] {\n  background: black;\n}\n\n.bug[_ngcontent-%COMP%] {\n  background: coral;\n}\n\n.ghost[_ngcontent-%COMP%] {\n  background: darkgrey;\n}\n\n.steel[_ngcontent-%COMP%] {\n  background: slategray;\n}\n\n.electric[_ngcontent-%COMP%] {\n  background: yellow;\n}\n\n.psychic[_ngcontent-%COMP%] {\n  background: teal;\n}\n\n.ice[_ngcontent-%COMP%] {\n  background: aliceblue;\n}\n\n.dragon[_ngcontent-%COMP%] {\n  background: darkblue;\n}\n\n.dark[_ngcontent-%COMP%] {\n  background: black;\n}\n\n.fairy[_ngcontent-%COMP%] {\n  background: paleturquoise;\n}\n\n.unknown[_ngcontent-%COMP%] {\n  background: papayawhip;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  background: gray;\n}\n\n.flexPosition[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.animate[_ngcontent-%COMP%] {\n  transition: all 0.1s;\n  -webkit-transition: all 0.1s;\n}\n\n.action-button[_ngcontent-%COMP%] {\n  text-align: center;\n  width: -webkit-fill-available;\n  margin: 0px 10px 10px 0px;\n  border-radius: 10px;\n  font-size: 25px;\n  color: #fff;\n  text-decoration: none;\n}\n\n.blue[_ngcontent-%COMP%] {\n  background-color: #3498db;\n  border-bottom: 5px solid #2980b9;\n  text-shadow: 0px -2px #2980b9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9rZW1vbi1saXN0L0M6XFxVc2Vyc1xcZG9taW51c1xcRGVza3RvcFxcdGVzdFRhc2tcXHRlc3RUYXNrUG9rZWRleC9zcmNcXGFwcFxccG9rZW1vbi1saXN0XFxwb2tlbW9uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Bva2Vtb24tbGlzdC9wb2tlbW9uLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNFRjs7QURBQTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDR0Y7O0FEREE7RUFDRSxrQkFBQTtBQ0lGOztBREZBO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0tGOztBREZBO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNLRjs7QURIQTtFQUNFLHNCQUFBO0FDTUY7O0FESkE7RUFDRSxtQkFBQTtBQ09GOztBRExBO0VBQ0UsbUJBQUE7QUNRRjs7QUROQTtFQUNFLGdCQUFBO0FDU0Y7O0FEUEE7RUFDRSxtQkFBQTtBQ1VGOztBRFJBO0VBQ0Usa0JBQUE7QUNXRjs7QURUQTtFQUNFLHlCQUFBO0FDWUY7O0FEVkE7RUFDRSx1QkFBQTtBQ2FGOztBRFhBO0VBQ0UsaUJBQUE7QUNjRjs7QURaQTtFQUNFLGlCQUFBO0FDZUY7O0FEYkE7RUFDRSxvQkFBQTtBQ2dCRjs7QURkQTtFQUNFLHFCQUFBO0FDaUJGOztBRGRBO0VBQ0Usa0JBQUE7QUNpQkY7O0FEZEE7RUFDRSxnQkFBQTtBQ2lCRjs7QURkQTtFQUNFLHFCQUFBO0FDaUJGOztBRGRBO0VBQ0Usb0JBQUE7QUNpQkY7O0FEZkE7RUFDRSxpQkFBQTtBQ2tCRjs7QURmQTtFQUNFLHlCQUFBO0FDa0JGOztBRGZBO0VBQ0Usc0JBQUE7QUNrQkY7O0FEZkE7RUFDRSxnQkFBQTtBQ2tCRjs7QURmQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ2tCRjs7QURmQTtFQUNFLG9CQUFBO0VBQ0EsNEJBQUE7QUNrQkY7O0FEZkE7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNrQkY7O0FEZkE7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUNrQkYiLCJmaWxlIjoic3JjL2FwcC9wb2tlbW9uLWxpc3QvcG9rZW1vbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiB3cmFwO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiA0OCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxufVxyXG4uY2FyZCB7XHJcbiAgd2lkdGg6IDIxJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBtYXJnaW46IDIwcHggNDBweCAyMHB4IDE1cHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG59XHJcbi5jYXJkLWltZyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jYXJkLW5hbWUge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN0eWxlVHlwZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtYXJnaW46IDJweDtcclxufVxyXG4ucG9pc29uIHtcclxuICBiYWNrZ3JvdW5kOiBibHVldmlvbGV0O1xyXG59XHJcbi5maXJlIHtcclxuICBiYWNrZ3JvdW5kOiAjZDEzMTI2O1xyXG59XHJcbi5ncmFzcyB7XHJcbiAgYmFja2dyb3VuZDogIzI3OTYzNjtcclxufVxyXG4ud2F0ZXIge1xyXG4gIGJhY2tncm91bmQ6IGJsdWU7XHJcbn1cclxuLm5vcm1hbCB7XHJcbiAgYmFja2dyb3VuZDogI2QzZGVkNDtcclxufVxyXG4uZmlnaHRpbmcge1xyXG4gIGJhY2tncm91bmQ6IG9yYW5nZTtcclxufVxyXG4uZmx5aW5nIHtcclxuICBiYWNrZ3JvdW5kOiBwYWxldHVycXVvaXNlO1xyXG59XHJcbi5ncm91bmQge1xyXG4gIGJhY2tncm91bmQ6IHNhZGRsZWJyb3duO1xyXG59XHJcbi5yb2NrIHtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxufVxyXG4uYnVnIHtcclxuICBiYWNrZ3JvdW5kOiBjb3JhbDtcclxufVxyXG4uZ2hvc3Qge1xyXG4gIGJhY2tncm91bmQ6IGRhcmtncmV5O1xyXG59XHJcbi5zdGVlbCB7XHJcbiAgYmFja2dyb3VuZDogc2xhdGVncmF5O1xyXG59XHJcblxyXG4uZWxlY3RyaWMge1xyXG4gIGJhY2tncm91bmQ6IHllbGxvdztcclxufVxyXG5cclxuLnBzeWNoaWMge1xyXG4gIGJhY2tncm91bmQ6IHRlYWw7XHJcbn1cclxuXHJcbi5pY2Uge1xyXG4gIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcclxufVxyXG5cclxuLmRyYWdvbiB7XHJcbiAgYmFja2dyb3VuZDogZGFya2JsdWU7XHJcbn1cclxuLmRhcmsge1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcblxyXG4uZmFpcnkge1xyXG4gIGJhY2tncm91bmQ6IHBhbGV0dXJxdW9pc2U7XHJcbn1cclxuXHJcbi51bmtub3duIHtcclxuICBiYWNrZ3JvdW5kOiBwYXBheWF3aGlwO1xyXG59XHJcblxyXG4uc2hhZG93IHtcclxuICBiYWNrZ3JvdW5kOiBncmF5O1xyXG59XHJcblxyXG4uZmxleFBvc2l0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYW5pbWF0ZSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xcztcclxufVxyXG5cclxuLmFjdGlvbi1idXR0b24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICBtYXJnaW46IDBweCAxMHB4IDEwcHggMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmJsdWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMyOTgwYjk7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAtMnB4ICMyOTgwYjk7XHJcbn1cclxuIiwiLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHdyYXA7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogNDglO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDIxJTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIG1hcmdpbjogMjBweCA0MHB4IDIwcHggMTVweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuLmNhcmQtaW1nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZC1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbjogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3R5bGVUeXBlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgd2lkdGg6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luOiAycHg7XG59XG5cbi5wb2lzb24ge1xuICBiYWNrZ3JvdW5kOiBibHVldmlvbGV0O1xufVxuXG4uZmlyZSB7XG4gIGJhY2tncm91bmQ6ICNkMTMxMjY7XG59XG5cbi5ncmFzcyB7XG4gIGJhY2tncm91bmQ6ICMyNzk2MzY7XG59XG5cbi53YXRlciB7XG4gIGJhY2tncm91bmQ6IGJsdWU7XG59XG5cbi5ub3JtYWwge1xuICBiYWNrZ3JvdW5kOiAjZDNkZWQ0O1xufVxuXG4uZmlnaHRpbmcge1xuICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG59XG5cbi5mbHlpbmcge1xuICBiYWNrZ3JvdW5kOiBwYWxldHVycXVvaXNlO1xufVxuXG4uZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogc2FkZGxlYnJvd247XG59XG5cbi5yb2NrIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi5idWcge1xuICBiYWNrZ3JvdW5kOiBjb3JhbDtcbn1cblxuLmdob3N0IHtcbiAgYmFja2dyb3VuZDogZGFya2dyZXk7XG59XG5cbi5zdGVlbCB7XG4gIGJhY2tncm91bmQ6IHNsYXRlZ3JheTtcbn1cblxuLmVsZWN0cmljIHtcbiAgYmFja2dyb3VuZDogeWVsbG93O1xufVxuXG4ucHN5Y2hpYyB7XG4gIGJhY2tncm91bmQ6IHRlYWw7XG59XG5cbi5pY2Uge1xuICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XG59XG5cbi5kcmFnb24ge1xuICBiYWNrZ3JvdW5kOiBkYXJrYmx1ZTtcbn1cblxuLmRhcmsge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuLmZhaXJ5IHtcbiAgYmFja2dyb3VuZDogcGFsZXR1cnF1b2lzZTtcbn1cblxuLnVua25vd24ge1xuICBiYWNrZ3JvdW5kOiBwYXBheWF3aGlwO1xufVxuXG4uc2hhZG93IHtcbiAgYmFja2dyb3VuZDogZ3JheTtcbn1cblxuLmZsZXhQb3NpdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYW5pbWF0ZSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjFzO1xufVxuXG4uYWN0aW9uLWJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIG1hcmdpbjogMHB4IDEwcHggMTBweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzI5ODBiOTtcbiAgdGV4dC1zaGFkb3c6IDBweCAtMnB4ICMyOTgwYjk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pokemon-list',
          templateUrl: './pokemon-list.component.html',
          styleUrls: ['./pokemon-list.component.scss']
        }]
      }], function () {
        return [{
          type: _services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/pokemon.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/pokemon.service.ts ***!
    \*********************************************/

  /*! exports provided: PokemonService */

  /***/
  function srcAppServicesPokemonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PokemonService", function () {
      return PokemonService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var PokemonService = /*#__PURE__*/function () {
      function PokemonService(http) {
        _classCallCheck(this, PokemonService);

        this.http = http;
        this.apiUrl = 'https://pokeapi.co/api/v2/';
      }

      _createClass(PokemonService, [{
        key: "getPokemonList",
        value: function getPokemonList(offset) {
          return this.http.get("".concat(this.apiUrl, "pokemon?limit=").concat(offset));
        }
      }, {
        key: "getPokemon",
        value: function getPokemon(id) {
          return this.http.get("".concat(this.apiUrl, "pokemon/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
          } // return an observable with a user-facing error message


          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
        }
      }]);

      return PokemonService;
    }();

    PokemonService.ɵfac = function PokemonService_Factory(t) {
      return new (t || PokemonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    PokemonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PokemonService,
      factory: PokemonService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\dominus\Desktop\testTask\testTaskPokedex\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map