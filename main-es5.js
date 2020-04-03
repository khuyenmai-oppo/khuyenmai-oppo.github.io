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


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/home-page/home-page.component.ts");
    /* harmony import */


    var _printing_page_printing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./printing-page/printing-page.component */
    "./src/app/printing-page/printing-page.component.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]
    }, {
      path: 'print',
      pathMatch: 'full',
      component: _printing_page_printing_page_component__WEBPACK_IMPORTED_MODULE_3__["PrintingPageComponent"]
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
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

      this.title = 'khuyenmai-oppo';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 8,
      vars: 0,
      consts: [[1, "title"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Th\xF4ng tin khuy\u1EBFn m\xE3i OPPO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "S\u1EED d\u1EE5ng n\u1ED9i b\u1ED9 cho nh\xE2n vi\xEAn OPPO Vi\u1EC7t Nam.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["header[_ngcontent-%COMP%], footer[_ngcontent-%COMP%] {\n  background: #2aad6f;\n  color: white;\n}\n\nheader[_ngcontent-%COMP%] {\n  font-size: 24px;\n  text-align: center;\n  padding: 0.75em 0;\n}\n\nfooter[_ngcontent-%COMP%] {\n  text-align: right;\n  padding: 0.25em;\n}\n\nmain[_ngcontent-%COMP%] {\n  padding: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxEdXkgRG9hblxcRG9jdW1lbnRzXFxHaXRIdWJcXGtodXllbm1haS1vcHBvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxtQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNJLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlcixcclxuZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMmFhZDZmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuNzVlbSAwO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDAuMjVlbTtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgICBwYWRkaW5nOiAyZW07XHJcbn1cclxuIiwiaGVhZGVyLFxuZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogIzJhYWQ2ZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5oZWFkZXIge1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC43NWVtIDA7XG59XG5cbmZvb3RlciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiAwLjI1ZW07XG59XG5cbm1haW4ge1xuICBwYWRkaW5nOiAyZW07XG59Il19 */"]
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


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/home-page/home-page.component.ts");
    /* harmony import */


    var _printing_page_printing_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./printing-page/printing-page.component */
    "./src/app/printing-page/printing-page.component.ts");
    /* harmony import */


    var _phone_list_phone_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./phone-list/phone-list.component */
    "./src/app/phone-list/phone-list.component.ts");
    /* harmony import */


    var _promotion_list_promotion_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./promotion-list/promotion-list.component */
    "./src/app/promotion-list/promotion-list.component.ts");
    /* harmony import */


    var _phone_feature_list_phone_feature_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./phone-feature-list/phone-feature-list.component */
    "./src/app/phone-feature-list/phone-feature-list.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_phones_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/phones.service */
    "./src/app/services/phones.service.ts");
    /* harmony import */


    var _services_phone_flyer_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./services/phone-flyer.service */
    "./src/app/services/phone-flyer.service.ts");
    /* harmony import */


    var _services_capture_screenshot_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./services/capture-screenshot.service */
    "./src/app/services/capture-screenshot.service.ts");
    /* harmony import */


    var _phone_item_phone_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./phone-item/phone-item.component */
    "./src/app/phone-item/phone-item.component.ts");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _pipes_background_image_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pipes/background-image.pipe */
    "./src/app/pipes/background-image.pipe.ts");

    var materialModules = [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBarModule"]];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_phones_service__WEBPACK_IMPORTED_MODULE_15__["PhoneService"], _services_phone_flyer_service__WEBPACK_IMPORTED_MODULE_16__["PhoneFlyerService"], _services_capture_screenshot_service__WEBPACK_IMPORTED_MODULE_17__["CaptureScreenshotService"]],
      imports: [[].concat(materialModules, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["NoopAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]])]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"], _printing_page_printing_page_component__WEBPACK_IMPORTED_MODULE_9__["PrintingPageComponent"], _phone_list_phone_list_component__WEBPACK_IMPORTED_MODULE_10__["PhoneListComponent"], _promotion_list_promotion_list_component__WEBPACK_IMPORTED_MODULE_11__["PromotionListComponent"], _phone_feature_list_phone_feature_list_component__WEBPACK_IMPORTED_MODULE_12__["PhoneFeatureListComponent"], _phone_item_phone_item_component__WEBPACK_IMPORTED_MODULE_18__["PhoneItemComponent"], _pipes_background_image_pipe__WEBPACK_IMPORTED_MODULE_20__["BackgroundImagePipe"]],
        imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBarModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["NoopAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"], _printing_page_printing_page_component__WEBPACK_IMPORTED_MODULE_9__["PrintingPageComponent"], _phone_list_phone_list_component__WEBPACK_IMPORTED_MODULE_10__["PhoneListComponent"], _promotion_list_promotion_list_component__WEBPACK_IMPORTED_MODULE_11__["PromotionListComponent"], _phone_feature_list_phone_feature_list_component__WEBPACK_IMPORTED_MODULE_12__["PhoneFeatureListComponent"], _phone_item_phone_item_component__WEBPACK_IMPORTED_MODULE_18__["PhoneItemComponent"], _pipes_background_image_pipe__WEBPACK_IMPORTED_MODULE_20__["BackgroundImagePipe"]],
          imports: [].concat(materialModules, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["NoopAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]),
          providers: [_services_phones_service__WEBPACK_IMPORTED_MODULE_15__["PhoneService"], _services_phone_flyer_service__WEBPACK_IMPORTED_MODULE_16__["PhoneFlyerService"], _services_capture_screenshot_service__WEBPACK_IMPORTED_MODULE_17__["CaptureScreenshotService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home-page/home-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/home-page/home-page.component.ts ***!
    \**************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_phone_flyer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/phone-flyer.service */
    "./src/app/services/phone-flyer.service.ts");
    /* harmony import */


    var _services_capture_screenshot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/capture-screenshot.service */
    "./src/app/services/capture-screenshot.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _phone_list_phone_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../phone-list/phone-list.component */
    "./src/app/phone-list/phone-list.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomePageComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.selectedPhone.promotion, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.salePerson.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.salePerson.phone);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.salePerson.storeAddress);
      }
    }

    var HomePageComponent = /*#__PURE__*/function () {
      function HomePageComponent(phoneFlyerService, captureService) {
        _classCallCheck(this, HomePageComponent);

        this.phoneFlyerService = phoneFlyerService;
        this.captureService = captureService;
      }

      _createClass(HomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedPhone = this.phoneFlyerService.getSelectedPhone();
          this.salePerson = this.phoneFlyerService.getSalePersonInfo();
        }
      }, {
        key: "onExport",
        value: function onExport(phone) {
          var _this = this;

          this.selectedPhone = phone;
          this.phoneFlyerService.setSalePersonInfo(this.salePerson);
          setTimeout(function () {
            var node = document.getElementById('flyer-print-container');

            if (!!node) {
              _this.captureService.capture(node, phone.name);

              setTimeout(function () {
                _this.selectedPhone = null;
              }, 1500);
            }
          }, 500);
        }
      }]);

      return HomePageComponent;
    }();

    HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
      return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_phone_flyer_service__WEBPACK_IMPORTED_MODULE_1__["PhoneFlyerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_capture_screenshot_service__WEBPACK_IMPORTED_MODULE_2__["CaptureScreenshotService"]));
    };

    HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomePageComponent,
      selectors: [["app-home-page"]],
      decls: 18,
      vars: 4,
      consts: [["matInput", "", 3, "ngModel", "ngModelChange"], [3, "selected"], ["id", "flyer-print-container", "class", "print-template", 4, "ngIf"], ["id", "flyer-print-container", 1, "print-template"], [1, "phone-frame", 3, "src"], [1, "sale-person-info"], [1, "name"], [1, "phone"], [1, "address"]],
      template: function HomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "account_box");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " T\xEAn nh\xE2n vi\xEAn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomePageComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.salePerson.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "call");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " S\u1ED1 \u0111i\u1EC7n tho\u1EA1i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomePageComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.salePerson.phone = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0110\u1ECBa ch\u1EC9 c\u1EEDa h\xE0ng");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomePageComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.salePerson.storeAddress = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-phone-list", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function HomePageComponent_Template_app_phone_list_selected_16_listener($event) {
            return ctx.onExport($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomePageComponent_div_17_Template, 9, 4, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.salePerson.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.salePerson.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.salePerson.storeAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.selectedPhone);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _phone_list_phone_list_component__WEBPACK_IMPORTED_MODULE_7__["PhoneListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
      styles: [".print-template[_ngcontent-%COMP%] {\n  position: relative;\n  width: 800px;\n  height: 800px;\n}\n\n.phone-frame[_ngcontent-%COMP%] {\n  width: 800px;\n  height: 800px;\n}\n\n.phone-picture[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 270px;\n  left: 50%;\n  height: 511px;\n  transform: translateX(-50%);\n}\n\n.sale-person-info[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px;\n  text-align: left;\n  font-family: Arial, sans-serif;\n}\n\n.sale-person-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 93px;\n  left: 188px;\n  width: 232px;\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.sale-person-info[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 93px;\n  left: 568px;\n  width: 180px;\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.sale-person-info[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 420px;\n  bottom: 52px;\n  left: 158px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  min-width: 280px;\n  max-width: 100%;\n  margin-right: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL0M6XFxVc2Vyc1xcRHV5IERvYW5cXERvY3VtZW50c1xcR2l0SHViXFxraHV5ZW5tYWktb3Bwby9zcmNcXGFwcFxcaG9tZS1wYWdlXFxob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDREo7O0FES0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmludC10ZW1wbGF0ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA4MDBweDtcclxuICBoZWlnaHQ6IDgwMHB4O1xyXG59XHJcblxyXG4ucGhvbmUtZnJhbWUge1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgaGVpZ2h0OiA4MDBweDtcclxufVxyXG5cclxuLnBob25lLXBpY3R1cmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDI3MHB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICBoZWlnaHQ6IDUxMXB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufVxyXG5cclxuLnNhbGUtcGVyc29uLWluZm8ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcblxyXG4gIC5uYW1lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogOTNweDtcclxuICAgIGxlZnQ6IDE4OHB4O1xyXG4gICAgd2lkdGg6IDIzMnB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAucGhvbmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA5M3B4O1xyXG4gICAgbGVmdDogNTY4cHg7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5hZGRyZXNzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA0MjBweDtcclxuICAgIGJvdHRvbTogNTJweDtcclxuICAgIGxlZnQ6IDE1OHB4O1xyXG4gIH1cclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWluLXdpZHRoOiAyODBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcbiIsIi5wcmludC10ZW1wbGF0ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDgwMHB4O1xuICBoZWlnaHQ6IDgwMHB4O1xufVxuXG4ucGhvbmUtZnJhbWUge1xuICB3aWR0aDogODAwcHg7XG4gIGhlaWdodDogODAwcHg7XG59XG5cbi5waG9uZS1waWN0dXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDI3MHB4O1xuICBsZWZ0OiA1MCU7XG4gIGhlaWdodDogNTExcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLnNhbGUtcGVyc29uLWluZm8ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuLnNhbGUtcGVyc29uLWluZm8gLm5hbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogOTNweDtcbiAgbGVmdDogMTg4cHg7XG4gIHdpZHRoOiAyMzJweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zYWxlLXBlcnNvbi1pbmZvIC5waG9uZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA5M3B4O1xuICBsZWZ0OiA1NjhweDtcbiAgd2lkdGg6IDE4MHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNhbGUtcGVyc29uLWluZm8gLmFkZHJlc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0MjBweDtcbiAgYm90dG9tOiA1MnB4O1xuICBsZWZ0OiAxNThweDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBtaW4td2lkdGg6IDI4MHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-page',
          templateUrl: './home-page.component.html',
          styleUrls: ['./home-page.component.scss']
        }]
      }], function () {
        return [{
          type: _services_phone_flyer_service__WEBPACK_IMPORTED_MODULE_1__["PhoneFlyerService"]
        }, {
          type: _services_capture_screenshot_service__WEBPACK_IMPORTED_MODULE_2__["CaptureScreenshotService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/libs/dom-to-image.js":
  /*!**************************************!*\
    !*** ./src/app/libs/dom-to-image.js ***!
    \**************************************/

  /*! no static exports found */

  /***/
  function srcAppLibsDomToImageJs(module, exports, __webpack_require__) {
    (function (global) {
      'use strict';

      var util = newUtil();
      var inliner = newInliner();
      var fontFaces = newFontFaces();
      var images = newImages(); // Default impl options

      var defaultOptions = {
        // Default is to fail on error, no placeholder
        imagePlaceholder: undefined,
        // Default cache bust is false, it will use the cache
        cacheBust: false
      };
      var domtoimage = {
        toSvg: toSvg,
        toPng: toPng,
        toJpeg: toJpeg,
        toBlob: toBlob,
        toPixelData: toPixelData,
        impl: {
          fontFaces: fontFaces,
          images: images,
          util: util,
          inliner: inliner,
          options: {}
        }
      };
      if (true) module.exports = domtoimage;else {}
      /**
       * @param {Node} node - The DOM Node object to render
       * @param {Object} options - Rendering options
       * @param {Function} options.filter - Should return true if passed node should be included in the output
       *          (excluding node means excluding it's children as well). Not called on the root node.
       * @param {String} options.bgcolor - color for the background, any valid CSS color value.
       * @param {Number} options.width - width to be applied to node before rendering.
       * @param {Number} options.height - height to be applied to node before rendering.
       * @param {Object} options.style - an object whose properties to be copied to node's style before rendering.
       * @param {Number} options.quality - a Number between 0 and 1 indicating image quality (applicable to JPEG only),
                  defaults to 1.0.
       * @param {String} options.imagePlaceholder - dataURL to use as a placeholder for failed images, default behaviour is to fail fast on images we can't fetch
       * @param {Boolean} options.cacheBust - set to true to cache bust by appending the time to the request url
       * @return {Promise} - A promise that is fulfilled with a SVG image data URL
       * */

      function toSvg(node, options) {
        options = options || {};
        copyOptions(options);
        return Promise.resolve(node).then(function (node) {
          return cloneNode(node, options.filter, true);
        }).then(embedFonts).then(inlineImages).then(applyOptions).then(function (clone) {
          return makeSvgDataUri(clone, options.width || util.width(node), options.height || util.height(node));
        });

        function applyOptions(clone) {
          if (options.bgcolor) clone.style.backgroundColor = options.bgcolor;
          if (options.width) clone.style.width = options.width + 'px';
          if (options.height) clone.style.height = options.height + 'px';
          if (options.style) Object.keys(options.style).forEach(function (property) {
            clone.style[property] = options.style[property];
          });
          return clone;
        }
      }
      /**
       * @param {Node} node - The DOM Node object to render
       * @param {Object} options - Rendering options, @see {@link toSvg}
       * @return {Promise} - A promise that is fulfilled with a Uint8Array containing RGBA pixel data.
       * */


      function toPixelData(node, options) {
        return draw(node, options || {}).then(function (canvas) {
          return canvas.getContext('2d').getImageData(0, 0, util.width(node), util.height(node)).data;
        });
      }
      /**
       * @param {Node} node - The DOM Node object to render
       * @param {Object} options - Rendering options, @see {@link toSvg}
       * @return {Promise} - A promise that is fulfilled with a PNG image data URL
       * */


      function toPng(node, options) {
        return draw(node, options || {}).then(function (canvas) {
          return canvas.toDataURL();
        });
      }
      /**
       * @param {Node} node - The DOM Node object to render
       * @param {Object} options - Rendering options, @see {@link toSvg}
       * @return {Promise} - A promise that is fulfilled with a JPEG image data URL
       * */


      function toJpeg(node, options) {
        options = options || {};
        return draw(node, options).then(function (canvas) {
          return canvas.toDataURL('image/jpeg', options.quality || 1.0);
        });
      }
      /**
       * @param {Node} node - The DOM Node object to render
       * @param {Object} options - Rendering options, @see {@link toSvg}
       * @return {Promise} - A promise that is fulfilled with a PNG image blob
       * */


      function toBlob(node, options) {
        return draw(node, options || {}).then(util.canvasToBlob);
      }

      function copyOptions(options) {
        // Copy options to impl options for use in impl
        if (typeof options.imagePlaceholder === 'undefined') {
          domtoimage.impl.options.imagePlaceholder = defaultOptions.imagePlaceholder;
        } else {
          domtoimage.impl.options.imagePlaceholder = options.imagePlaceholder;
        }

        if (typeof options.cacheBust === 'undefined') {
          domtoimage.impl.options.cacheBust = defaultOptions.cacheBust;
        } else {
          domtoimage.impl.options.cacheBust = options.cacheBust;
        }
      }

      function draw(domNode, options) {
        return toSvg(domNode, options).then(util.makeImage).then(util.delay(100)).then(function (image) {
          var canvas = newCanvas(domNode);
          var ctx = canvas.getContext('2d');

          if (options.scale) {
            ctx.scale(options.scale, options.scale);
          }

          ctx.drawImage(image, 0, 0);
          return canvas;
        });

        function newCanvas(domNode) {
          var canvas = document.createElement('canvas');

          if (options.scale) {
            canvas.width = options.width || options.scale * util.width(domNode);
            canvas.height = options.height || options.scale * util.height(domNode);
          } else {
            canvas.width = options.width || util.width(domNode);
            canvas.height = options.height || util.height(domNode);
          }

          if (options.bgcolor) {
            var ctx = canvas.getContext('2d');
            ctx.fillStyle = options.bgcolor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }

          return canvas;
        }
      }

      function cloneNode(node, filter, root) {
        if (!root && filter && !filter(node)) return Promise.resolve();
        return Promise.resolve(node).then(makeNodeCopy).then(function (clone) {
          return cloneChildren(node, clone, filter);
        }).then(function (clone) {
          return processClone(node, clone);
        });

        function makeNodeCopy(node) {
          if (node instanceof HTMLCanvasElement) return util.makeImage(node.toDataURL());
          return node.cloneNode(false);
        }

        function cloneChildren(original, clone, filter) {
          var children = original.childNodes;
          if (children.length === 0) return Promise.resolve(clone);
          return cloneChildrenInOrder(clone, util.asArray(children), filter).then(function () {
            return clone;
          });

          function cloneChildrenInOrder(parent, children, filter) {
            var done = Promise.resolve();
            children.forEach(function (child) {
              done = done.then(function () {
                return cloneNode(child, filter);
              }).then(function (childClone) {
                if (childClone) parent.appendChild(childClone);
              });
            });
            return done;
          }
        }

        function processClone(original, clone) {
          if (!(clone instanceof Element)) return clone;
          return Promise.resolve().then(cloneStyle).then(clonePseudoElements).then(copyUserInput).then(fixSvg).then(function () {
            return clone;
          });

          function cloneStyle() {
            copyStyle(window.getComputedStyle(original), clone.style);

            function copyStyle(source, target) {
              if (source.cssText) target.cssText = source.cssText;else copyProperties(source, target);

              function copyProperties(source, target) {
                util.asArray(source).forEach(function (name) {
                  target.setProperty(name, source.getPropertyValue(name), source.getPropertyPriority(name));
                });
              }
            }
          }

          function clonePseudoElements() {
            [':before', ':after'].forEach(function (element) {
              clonePseudoElement(element);
            });

            function clonePseudoElement(element) {
              var style = window.getComputedStyle(original, element);
              var content = style.getPropertyValue('content');
              if (content === '' || content === 'none') return;
              var className = util.uid();
              clone.className = clone.className + ' ' + className;
              var styleElement = document.createElement('style');
              styleElement.appendChild(formatPseudoElementStyle(className, element, style));
              clone.appendChild(styleElement);

              function formatPseudoElementStyle(className, element, style) {
                var selector = '.' + className + ':' + element;
                var cssText = style.cssText ? formatCssText(style) : formatCssProperties(style);
                return document.createTextNode(selector + '{' + cssText + '}');

                function formatCssText(style) {
                  var content = style.getPropertyValue('content');
                  return style.cssText + ' content: ' + content + ';';
                }

                function formatCssProperties(style) {
                  return util.asArray(style).map(formatProperty).join('; ') + ';';

                  function formatProperty(name) {
                    return name + ': ' + style.getPropertyValue(name) + (style.getPropertyPriority(name) ? ' !important' : '');
                  }
                }
              }
            }
          }

          function copyUserInput() {
            if (original instanceof HTMLTextAreaElement) clone.innerHTML = original.value;
            if (original instanceof HTMLInputElement) clone.setAttribute("value", original.value);
          }

          function fixSvg() {
            if (!(clone instanceof SVGElement)) return;
            clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            if (!(clone instanceof SVGRectElement)) return;
            ['width', 'height'].forEach(function (attribute) {
              var value = clone.getAttribute(attribute);
              if (!value) return;
              clone.style.setProperty(attribute, value);
            });
          }
        }
      }

      function embedFonts(node) {
        return fontFaces.resolveAll().then(function (cssText) {
          var styleNode = document.createElement('style');
          node.appendChild(styleNode);
          styleNode.appendChild(document.createTextNode(cssText));
          return node;
        });
      }

      function inlineImages(node) {
        return images.inlineAll(node).then(function () {
          return node;
        });
      }

      function makeSvgDataUri(node, width, height) {
        return Promise.resolve(node).then(function (node) {
          node.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
          return new XMLSerializer().serializeToString(node);
        }).then(util.escapeXhtml).then(function (xhtml) {
          return '<foreignObject x="0" y="0" width="100%" height="100%">' + xhtml + '</foreignObject>';
        }).then(function (foreignObject) {
          return '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '">' + foreignObject + '</svg>';
        }).then(function (svg) {
          return 'data:image/svg+xml;charset=utf-8,' + svg;
        });
      }

      function newUtil() {
        return {
          escape: escape,
          parseExtension: parseExtension,
          mimeType: mimeType,
          dataAsUrl: dataAsUrl,
          isDataUrl: isDataUrl,
          canvasToBlob: canvasToBlob,
          resolveUrl: resolveUrl,
          getAndEncode: getAndEncode,
          uid: uid(),
          delay: delay,
          asArray: asArray,
          escapeXhtml: escapeXhtml,
          makeImage: makeImage,
          width: width,
          height: height
        };

        function mimes() {
          /*
           * Only WOFF and EOT mime types for fonts are 'real'
           * see http://www.iana.org/assignments/media-types/media-types.xhtml
           */
          var WOFF = 'application/font-woff';
          var JPEG = 'image/jpeg';
          return {
            'woff': WOFF,
            'woff2': WOFF,
            'ttf': 'application/font-truetype',
            'eot': 'application/vnd.ms-fontobject',
            'png': 'image/png',
            'jpg': JPEG,
            'jpeg': JPEG,
            'gif': 'image/gif',
            'tiff': 'image/tiff',
            'svg': 'image/svg+xml'
          };
        }

        function parseExtension(url) {
          var match = /\.([^\.\/]*?)$/g.exec(url);
          if (match) return match[1];else return '';
        }

        function mimeType(url) {
          var extension = parseExtension(url).toLowerCase();
          return mimes()[extension] || '';
        }

        function isDataUrl(url) {
          return url.search(/^(data:)/) !== -1;
        }

        function toBlob(canvas) {
          return new Promise(function (resolve) {
            var binaryString = window.atob(canvas.toDataURL().split(',')[1]);
            var length = binaryString.length;
            var binaryArray = new Uint8Array(length);

            for (var i = 0; i < length; i++) {
              binaryArray[i] = binaryString.charCodeAt(i);
            }

            resolve(new Blob([binaryArray], {
              type: 'image/png'
            }));
          });
        }

        function canvasToBlob(canvas) {
          if (canvas.toBlob) return new Promise(function (resolve) {
            canvas.toBlob(resolve);
          });
          return toBlob(canvas);
        }

        function resolveUrl(url, baseUrl) {
          var doc = document.implementation.createHTMLDocument();
          var base = doc.createElement('base');
          doc.head.appendChild(base);
          var a = doc.createElement('a');
          doc.body.appendChild(a);
          base.href = baseUrl;
          a.href = url;
          return a.href;
        }

        function uid() {
          var index = 0;
          return function () {
            return 'u' + fourRandomChars() + index++;

            function fourRandomChars() {
              /* see http://stackoverflow.com/a/6248722/2519373 */
              return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
            }
          };
        }

        function makeImage(uri) {
          return new Promise(function (resolve, reject) {
            var image = new Image();

            image.onload = function () {
              resolve(image);
            };

            image.onerror = reject;
            image.src = uri;
          });
        }

        function getAndEncode(url) {
          var TIMEOUT = 30000;

          if (domtoimage.impl.options.cacheBust) {
            // Cache bypass so we dont have CORS issues with cached images
            // Source: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
            url += (/\?/.test(url) ? "&" : "?") + new Date().getTime();
          }

          return new Promise(function (resolve) {
            var request = new XMLHttpRequest();
            request.onreadystatechange = done;
            request.ontimeout = timeout;
            request.responseType = 'blob';
            request.timeout = TIMEOUT;
            request.open('GET', url, true);
            request.send();
            var placeholder;

            if (domtoimage.impl.options.imagePlaceholder) {
              var split = domtoimage.impl.options.imagePlaceholder.split(/,/);

              if (split && split[1]) {
                placeholder = split[1];
              }
            }

            function done() {
              if (request.readyState !== 4) return;

              if (request.status !== 200) {
                if (placeholder) {
                  resolve(placeholder);
                } else {
                  fail('cannot fetch resource: ' + url + ', status: ' + request.status);
                }

                return;
              }

              var encoder = new FileReader();

              encoder.onloadend = function () {
                var content = encoder.result.split(/,/)[1];
                resolve(content);
              };

              encoder.readAsDataURL(request.response);
            }

            function timeout() {
              if (placeholder) {
                resolve(placeholder);
              } else {
                fail('timeout of ' + TIMEOUT + 'ms occured while fetching resource: ' + url);
              }
            }

            function fail(message) {
              console.error(message);
              resolve('');
            }
          });
        }

        function dataAsUrl(content, type) {
          return 'data:' + type + ';base64,' + content;
        }

        function escape(string) {
          return string.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
        }

        function delay(ms) {
          return function (arg) {
            return new Promise(function (resolve) {
              setTimeout(function () {
                resolve(arg);
              }, ms);
            });
          };
        }

        function asArray(arrayLike) {
          var array = [];
          var length = arrayLike.length;

          for (var i = 0; i < length; i++) {
            array.push(arrayLike[i]);
          }

          return array;
        }

        function escapeXhtml(string) {
          return string.replace(/#/g, '%23').replace(/\n/g, '%0A');
        }

        function width(node) {
          var leftBorder = px(node, 'border-left-width');
          var rightBorder = px(node, 'border-right-width');
          return node.scrollWidth + leftBorder + rightBorder;
        }

        function height(node) {
          var topBorder = px(node, 'border-top-width');
          var bottomBorder = px(node, 'border-bottom-width');
          return node.scrollHeight + topBorder + bottomBorder;
        }

        function px(node, styleProperty) {
          var value = window.getComputedStyle(node).getPropertyValue(styleProperty);
          return parseFloat(value.replace('px', ''));
        }
      }

      function newInliner() {
        var URL_REGEX = /url\(['"]?([^'"]+?)['"]?\)/g;
        return {
          inlineAll: inlineAll,
          shouldProcess: shouldProcess,
          impl: {
            readUrls: readUrls,
            inline: inline
          }
        };

        function shouldProcess(string) {
          return string.search(URL_REGEX) !== -1;
        }

        function readUrls(string) {
          var result = [];
          var match;

          while ((match = URL_REGEX.exec(string)) !== null) {
            result.push(match[1]);
          }

          return result.filter(function (url) {
            return !util.isDataUrl(url);
          });
        }

        function inline(string, url, baseUrl, get) {
          return Promise.resolve(url).then(function (url) {
            return baseUrl ? util.resolveUrl(url, baseUrl) : url;
          }).then(get || util.getAndEncode).then(function (data) {
            return util.dataAsUrl(data, util.mimeType(url));
          }).then(function (dataUrl) {
            return string.replace(urlAsRegex(url), '$1' + dataUrl + '$3');
          });

          function urlAsRegex(url) {
            return new RegExp('(url\\([\'"]?)(' + util.escape(url) + ')([\'"]?\\))', 'g');
          }
        }

        function inlineAll(string, baseUrl, get) {
          if (nothingToInline()) return Promise.resolve(string);
          return Promise.resolve(string).then(readUrls).then(function (urls) {
            var done = Promise.resolve(string);
            urls.forEach(function (url) {
              done = done.then(function (string) {
                return inline(string, url, baseUrl, get);
              });
            });
            return done;
          });

          function nothingToInline() {
            return !shouldProcess(string);
          }
        }
      }

      function newFontFaces() {
        return {
          resolveAll: resolveAll,
          impl: {
            readAll: readAll
          }
        };

        function resolveAll() {
          return readAll(document).then(function (webFonts) {
            return Promise.all(webFonts.map(function (webFont) {
              return webFont.resolve();
            }));
          }).then(function (cssStrings) {
            return cssStrings.join('\n');
          });
        }

        function readAll() {
          return Promise.resolve(util.asArray(document.styleSheets)).then(getCssRules).then(selectWebFontRules).then(function (rules) {
            return rules.map(newWebFont);
          });

          function selectWebFontRules(cssRules) {
            return cssRules.filter(function (rule) {
              return rule.type === CSSRule.FONT_FACE_RULE;
            }).filter(function (rule) {
              return inliner.shouldProcess(rule.style.getPropertyValue('src'));
            });
          }

          function getCssRules(styleSheets) {
            var cssRules = [];
            styleSheets.forEach(function (sheet) {
              try {
                util.asArray(sheet.cssRules || []).forEach(cssRules.push.bind(cssRules));
              } catch (e) {
                console.log('Error while reading CSS rules from ' + sheet.href, e.toString());
              }
            });
            return cssRules;
          }

          function newWebFont(webFontRule) {
            return {
              resolve: function resolve() {
                var baseUrl = (webFontRule.parentStyleSheet || {}).href;
                return inliner.inlineAll(webFontRule.cssText, baseUrl);
              },
              src: function src() {
                return webFontRule.style.getPropertyValue('src');
              }
            };
          }
        }
      }

      function newImages() {
        return {
          inlineAll: inlineAll,
          impl: {
            newImage: newImage
          }
        };

        function newImage(element) {
          return {
            inline: inline
          };

          function inline(get) {
            if (util.isDataUrl(element.src)) return Promise.resolve();
            return Promise.resolve(element.src).then(get || util.getAndEncode).then(function (data) {
              return util.dataAsUrl(data, util.mimeType(element.src));
            }).then(function (dataUrl) {
              return new Promise(function (resolve, reject) {
                element.onload = resolve;
                element.onerror = reject;
                element.src = dataUrl;
              });
            });
          }
        }

        function inlineAll(node) {
          if (!(node instanceof Element)) return Promise.resolve(node);
          return inlineBackground(node).then(function () {
            if (node instanceof HTMLImageElement) return newImage(node).inline();else return Promise.all(util.asArray(node.childNodes).map(function (child) {
              return inlineAll(child);
            }));
          });

          function inlineBackground(node) {
            var background = node.style.getPropertyValue('background');
            if (!background) return Promise.resolve(node);
            return inliner.inlineAll(background).then(function (inlined) {
              node.style.setProperty('background', inlined, node.style.getPropertyPriority('background'));
            }).then(function () {
              return node;
            });
          }
        }
      }
    })(this);
    /***/

  },

  /***/
  "./src/app/phone-feature-list/phone-feature-list.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/phone-feature-list/phone-feature-list.component.ts ***!
    \********************************************************************/

  /*! exports provided: PhoneFeatureListComponent */

  /***/
  function srcAppPhoneFeatureListPhoneFeatureListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhoneFeatureListComponent", function () {
      return PhoneFeatureListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PhoneFeatureListComponent = /*#__PURE__*/function () {
      function PhoneFeatureListComponent() {
        _classCallCheck(this, PhoneFeatureListComponent);
      }

      _createClass(PhoneFeatureListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PhoneFeatureListComponent;
    }();

    PhoneFeatureListComponent.ɵfac = function PhoneFeatureListComponent_Factory(t) {
      return new (t || PhoneFeatureListComponent)();
    };

    PhoneFeatureListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PhoneFeatureListComponent,
      selectors: [["app-phone-feature-list"]],
      decls: 2,
      vars: 0,
      template: function PhoneFeatureListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "phone-feature-list works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob25lLWZlYXR1cmUtbGlzdC9waG9uZS1mZWF0dXJlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhoneFeatureListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-phone-feature-list',
          templateUrl: './phone-feature-list.component.html',
          styleUrls: ['./phone-feature-list.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/phone-item/phone-item.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/phone-item/phone-item.component.ts ***!
    \****************************************************/

  /*! exports provided: PhoneItemComponent */

  /***/
  function srcAppPhoneItemPhoneItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhoneItemComponent", function () {
      return PhoneItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var PhoneItemComponent = /*#__PURE__*/function () {
      function PhoneItemComponent() {
        _classCallCheck(this, PhoneItemComponent);

        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(PhoneItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onExport",
        value: function onExport() {
          this.selected.emit(this.phone);
        }
      }]);

      return PhoneItemComponent;
    }();

    PhoneItemComponent.ɵfac = function PhoneItemComponent_Factory(t) {
      return new (t || PhoneItemComponent)();
    };

    PhoneItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PhoneItemComponent,
      selectors: [["app-phone-item"]],
      inputs: {
        phone: "phone"
      },
      outputs: {
        selected: "selected"
      },
      decls: 7,
      vars: 3,
      consts: [[1, "phone-frame"], [1, "phone-image", 3, "src", "alt"], [1, "caption"], [1, "phone-name"], ["mat-flat-button", "", "color", "primary", 1, "btn-action", 3, "click"]],
      template: function PhoneItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhoneItemComponent_Template_button_click_5_listener() {
            return ctx.onExport();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Xu\u1EA5t \u1EA3nh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.phone.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.phone.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.phone.name);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]],
      styles: [".btn-action[_ngcontent-%COMP%] {\n  background: #2aad6f !important;\n  color: white !important;\n  margin-top: 0.5em;\n}\n\n.phone-frame[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2em;\n  margin-right: 1em;\n}\n\n.phone-image[_ngcontent-%COMP%] {\n  height: 300px;\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvbmUtaXRlbS9DOlxcVXNlcnNcXER1eSBEb2FuXFxEb2N1bWVudHNcXEdpdEh1Ylxca2h1eWVubWFpLW9wcG8vc3JjXFxhcHBcXHBob25lLWl0ZW1cXHBob25lLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Bob25lLWl0ZW0vcGhvbmUtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGhvbmUtaXRlbS9waG9uZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1hY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZDogIzJhYWQ2ZiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxufVxyXG5cclxuLnBob25lLWZyYW1lIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcblxyXG4ucGhvbmUtaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4iLCIuYnRuLWFjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICMyYWFkNmYgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xufVxuXG4ucGhvbmUtZnJhbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbi5waG9uZS1pbWFnZSB7XG4gIGhlaWdodDogMzAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn0iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhoneItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-phone-item',
          templateUrl: './phone-item.component.html',
          styleUrls: ['./phone-item.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [];
      }, {
        phone: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/phone-list/phone-list.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/phone-list/phone-list.component.ts ***!
    \****************************************************/

  /*! exports provided: PhoneListComponent */

  /***/
  function srcAppPhoneListPhoneListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhoneListComponent", function () {
      return PhoneListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_phones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/phones.service */
    "./src/app/services/phones.service.ts");
    /* harmony import */


    var _services_phone_flyer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/phone-flyer.service */
    "./src/app/services/phone-flyer.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _phone_item_phone_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../phone-item/phone-item.component */
    "./src/app/phone-item/phone-item.component.ts");

    function PhoneListComponent_app_phone_item_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-phone-item", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function PhoneListComponent_app_phone_item_1_Template_app_phone_item_selected_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var phone_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.selectPhone(phone_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var phone_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("phone", phone_r2);
      }
    }

    var PhoneListComponent = /*#__PURE__*/function () {
      function PhoneListComponent(phoneService, phoneFlyerService, router) {
        _classCallCheck(this, PhoneListComponent);

        this.phoneService = phoneService;
        this.phoneFlyerService = phoneFlyerService;
        this.router = router;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(PhoneListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.phones$ = this.phoneService.getAllPhones();
        }
      }, {
        key: "selectPhone",
        value: function selectPhone(phone) {
          this.phoneFlyerService.setSelectedPhone(phone);
          this.selected.emit(phone); // this.router.navigateByUrl('/print');
        }
      }]);

      return PhoneListComponent;
    }();

    PhoneListComponent.ɵfac = function PhoneListComponent_Factory(t) {
      return new (t || PhoneListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_phones_service__WEBPACK_IMPORTED_MODULE_1__["PhoneService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_phone_flyer_service__WEBPACK_IMPORTED_MODULE_2__["PhoneFlyerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    PhoneListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PhoneListComponent,
      selectors: [["app-phone-list"]],
      outputs: {
        selected: "selected"
      },
      decls: 3,
      vars: 3,
      consts: [[1, "phone-list-wrapper"], ["class", "phone-item", 3, "phone", "selected", 4, "ngFor", "ngForOf"], [1, "phone-item", 3, "phone", "selected"]],
      template: function PhoneListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PhoneListComponent_app_phone_item_1_Template, 1, 1, "app-phone-item", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.phones$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _phone_item_phone_item_component__WEBPACK_IMPORTED_MODULE_5__["PhoneItemComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: [".phone-list-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvbmUtbGlzdC9DOlxcVXNlcnNcXER1eSBEb2FuXFxEb2N1bWVudHNcXEdpdEh1Ylxca2h1eWVubWFpLW9wcG8vc3JjXFxhcHBcXHBob25lLWxpc3RcXHBob25lLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Bob25lLWxpc3QvcGhvbmUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGhvbmUtbGlzdC9waG9uZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBob25lLWxpc3Qtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn0iLCIucGhvbmUtbGlzdC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZmxleC13cmFwOiB3cmFwO1xufSJdfQ== */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhoneListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-phone-list',
          templateUrl: './phone-list.component.html',
          styleUrls: ['./phone-list.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _services_phones_service__WEBPACK_IMPORTED_MODULE_1__["PhoneService"]
        }, {
          type: _services_phone_flyer_service__WEBPACK_IMPORTED_MODULE_2__["PhoneFlyerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, {
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pipes/background-image.pipe.ts":
  /*!************************************************!*\
    !*** ./src/app/pipes/background-image.pipe.ts ***!
    \************************************************/

  /*! exports provided: BackgroundImagePipe */

  /***/
  function srcAppPipesBackgroundImagePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackgroundImagePipe", function () {
      return BackgroundImagePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var BackgroundImagePipe = /*#__PURE__*/function () {
      function BackgroundImagePipe(sanitization) {
        _classCallCheck(this, BackgroundImagePipe);

        this.sanitization = sanitization;
      }

      _createClass(BackgroundImagePipe, [{
        key: "transform",
        value: function transform(url) {
          var defaultUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var imageUrl = !!url ? url : defaultUrl;
          return !!imageUrl ? this.sanitization.bypassSecurityTrustStyle("url(".concat(imageUrl, ")")) : '';
        }
      }]);

      return BackgroundImagePipe;
    }();

    BackgroundImagePipe.ɵfac = function BackgroundImagePipe_Factory(t) {
      return new (t || BackgroundImagePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    BackgroundImagePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "backgroundImage",
      type: BackgroundImagePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackgroundImagePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'backgroundImage'
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/printing-page/printing-page.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/printing-page/printing-page.component.ts ***!
    \**********************************************************/

  /*! exports provided: PrintingPageComponent */

  /***/
  function srcAppPrintingPagePrintingPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrintingPageComponent", function () {
      return PrintingPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_phone_flyer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/phone-flyer.service */
    "./src/app/services/phone-flyer.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PrintingPageComponent = /*#__PURE__*/function () {
      function PrintingPageComponent(phoneFlyerService, router) {
        _classCallCheck(this, PrintingPageComponent);

        this.phoneFlyerService = phoneFlyerService;
        this.router = router;
      }

      _createClass(PrintingPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedPhone = this.phoneFlyerService.getSelectedPhone();
          this.salePerson = this.phoneFlyerService.getSalePersonInfo(); // if (!this.selectedPhone) {
          //   this.router.navigate()
          // }
        }
      }]);

      return PrintingPageComponent;
    }();

    PrintingPageComponent.ɵfac = function PrintingPageComponent_Factory(t) {
      return new (t || PrintingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_phone_flyer_service__WEBPACK_IMPORTED_MODULE_1__["PhoneFlyerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    PrintingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PrintingPageComponent,
      selectors: [["app-printing-page"]],
      decls: 0,
      vars: 0,
      template: function PrintingPageComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaW50aW5nLXBhZ2UvcHJpbnRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-printing-page',
          templateUrl: './printing-page.component.html',
          styleUrls: ['./printing-page.component.scss']
        }]
      }], function () {
        return [{
          type: _services_phone_flyer_service__WEBPACK_IMPORTED_MODULE_1__["PhoneFlyerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/promotion-list/promotion-list.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/promotion-list/promotion-list.component.ts ***!
    \************************************************************/

  /*! exports provided: PromotionListComponent */

  /***/
  function srcAppPromotionListPromotionListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PromotionListComponent", function () {
      return PromotionListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PromotionListComponent = /*#__PURE__*/function () {
      function PromotionListComponent() {
        _classCallCheck(this, PromotionListComponent);
      }

      _createClass(PromotionListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PromotionListComponent;
    }();

    PromotionListComponent.ɵfac = function PromotionListComponent_Factory(t) {
      return new (t || PromotionListComponent)();
    };

    PromotionListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PromotionListComponent,
      selectors: [["app-promotion-list"]],
      decls: 2,
      vars: 0,
      template: function PromotionListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "promotion-list works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb21vdGlvbi1saXN0L3Byb21vdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromotionListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-promotion-list',
          templateUrl: './promotion-list.component.html',
          styleUrls: ['./promotion-list.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/capture-screenshot.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/services/capture-screenshot.service.ts ***!
    \********************************************************/

  /*! exports provided: CaptureScreenshotService */

  /***/
  function srcAppServicesCaptureScreenshotServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CaptureScreenshotService", function () {
      return CaptureScreenshotService;
    });
    /* harmony import */


    var src_app_libs_dom_to_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/libs/dom-to-image */
    "./src/app/libs/dom-to-image.js");
    /* harmony import */


    var src_app_libs_dom_to_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_app_libs_dom_to_image__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);

    var CaptureScreenshotService = /*#__PURE__*/function () {
      function CaptureScreenshotService() {
        _classCallCheck(this, CaptureScreenshotService);
      }

      _createClass(CaptureScreenshotService, [{
        key: "capture",
        value: function capture(node, name) {
          src_app_libs_dom_to_image__WEBPACK_IMPORTED_MODULE_0___default.a.toBlob(node, {
            scale: 2.5
          }).then(function (blob) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(blob, "".concat(name, ".png"));
          });
        }
      }]);

      return CaptureScreenshotService;
    }();

    CaptureScreenshotService.ɵfac = function CaptureScreenshotService_Factory(t) {
      return new (t || CaptureScreenshotService)();
    };

    CaptureScreenshotService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CaptureScreenshotService,
      factory: CaptureScreenshotService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CaptureScreenshotService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/phone-flyer.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/phone-flyer.service.ts ***!
    \*************************************************/

  /*! exports provided: PhoneFlyerService */

  /***/
  function srcAppServicesPhoneFlyerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhoneFlyerService", function () {
      return PhoneFlyerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SALE_PERSON_STORE_KEY = 'oppo-promotion-sale-person';

    var PhoneFlyerService = /*#__PURE__*/function () {
      function PhoneFlyerService() {
        _classCallCheck(this, PhoneFlyerService);
      }

      _createClass(PhoneFlyerService, [{
        key: "setSelectedPhone",
        value: function setSelectedPhone(phone) {
          this.selectedPhone = phone;
        }
      }, {
        key: "getSelectedPhone",
        value: function getSelectedPhone() {
          return this.selectedPhone;
        }
      }, {
        key: "setSalePersonInfo",
        value: function setSalePersonInfo(person) {
          this.salePerson = person;
          localStorage.setItem(SALE_PERSON_STORE_KEY, JSON.stringify(person));
        }
      }, {
        key: "getSalePersonInfo",
        value: function getSalePersonInfo() {
          if (!this.salePerson) {
            var data = localStorage.getItem(SALE_PERSON_STORE_KEY);

            if (!!data) {
              this.salePerson = JSON.parse(data);
            }
          } // fallback default value


          if (!this.salePerson) {
            this.salePerson = {
              name: '',
              phone: '',
              storeAddress: ''
            };
          }

          return this.salePerson;
        }
      }, {
        key: "generateFlyerInfo",
        value: function generateFlyerInfo() {
          return {
            selectedPhone: this.selectedPhone,
            salePerson: this.salePerson
          };
        }
      }]);

      return PhoneFlyerService;
    }();

    PhoneFlyerService.ɵfac = function PhoneFlyerService_Factory(t) {
      return new (t || PhoneFlyerService)();
    };

    PhoneFlyerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PhoneFlyerService,
      factory: PhoneFlyerService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhoneFlyerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/phones.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/phones.service.ts ***!
    \********************************************/

  /*! exports provided: PhoneService */

  /***/
  function srcAppServicesPhonesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhoneService", function () {
      return PhoneService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var PhoneService = /*#__PURE__*/function () {
      /**
       *
       */
      function PhoneService(http) {
        _classCallCheck(this, PhoneService);

        this.http = http;
      }

      _createClass(PhoneService, [{
        key: "getAllPhones",
        value: function getAllPhones() {
          return this.http.get('assets/api/phones.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (phones) {
            return phones.map(function (phone) {
              return Object.assign(Object.assign({}, phone), {
                picture: "assets/images/".concat(phone.picture),
                promotion: "assets/images/".concat(phone.promotion)
              });
            });
          }));
        }
      }]);

      return PhoneService;
    }();

    PhoneService.ɵfac = function PhoneService_Factory(t) {
      return new (t || PhoneService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    PhoneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PhoneService,
      factory: PhoneService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhoneService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
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
    /*! C:\Users\Duy Doan\Documents\GitHub\khuyenmai-oppo\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map