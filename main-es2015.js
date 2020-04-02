(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _printing_page_printing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./printing-page/printing-page.component */ "./src/app/printing-page/printing-page.component.ts");






const routes = [
    { path: '', pathMatch: 'full', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"] },
    { path: 'print', pathMatch: 'full', component: _printing_page_printing_page_component__WEBPACK_IMPORTED_MODULE_3__["PrintingPageComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'khuyenmai-oppo';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [[1, "title"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Th\u00F4ng tin khuy\u1EBFn m\u00E3i OPPO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "S\u1EED d\u1EE5ng n\u1ED9i b\u1ED9 cho nh\u00E2n vi\u00EAn OPPO Vi\u1EC7t Nam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["header[_ngcontent-%COMP%], footer[_ngcontent-%COMP%] {\n  background: #2aad6f;\n  color: white;\n}\n\nheader[_ngcontent-%COMP%] {\n  font-size: 24px;\n  text-align: center;\n  padding: 0.75em 0;\n}\n\nfooter[_ngcontent-%COMP%] {\n  text-align: right;\n  padding: 0.25em;\n}\n\nmain[_ngcontent-%COMP%] {\n  padding: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFdvcmtzcGFjZVxca2h1eWVubWFpLW9wcG8vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLG1CQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyLFxyXG5mb290ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMyYWFkNmY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC43NWVtIDA7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcGFkZGluZzogMC4yNWVtO1xyXG59XHJcblxyXG5tYWluIHtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxufVxyXG4iLCJoZWFkZXIsXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMmFhZDZmO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjc1ZW0gMDtcbn1cblxuZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDAuMjVlbTtcbn1cblxubWFpbiB7XG4gIHBhZGRpbmc6IDJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _printing_page_printing_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./printing-page/printing-page.component */ "./src/app/printing-page/printing-page.component.ts");
/* harmony import */ var _phone_list_phone_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./phone-list/phone-list.component */ "./src/app/phone-list/phone-list.component.ts");
/* harmony import */ var _promotion_list_promotion_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./promotion-list/promotion-list.component */ "./src/app/promotion-list/promotion-list.component.ts");
/* harmony import */ var _phone_feature_list_phone_feature_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./phone-feature-list/phone-feature-list.component */ "./src/app/phone-feature-list/phone-feature-list.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_phones_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/phones.service */ "./src/app/services/phones.service.ts");
/* harmony import */ var _services_phone_flyer_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/phone-flyer.service */ "./src/app/services/phone-flyer.service.ts");
/* harmony import */ var _services_capture_screenshot_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/capture-screenshot.service */ "./src/app/services/capture-screenshot.service.ts");
/* harmony import */ var _phone_item_phone_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./phone-item/phone-item.component */ "./src/app/phone-item/phone-item.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _pipes_background_image_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/background-image.pipe */ "./src/app/pipes/background-image.pipe.ts");






















const materialModules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBarModule"]
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_phones_service__WEBPACK_IMPORTED_MODULE_15__["PhoneService"],
        _services_phone_flyer_service__WEBPACK_IMPORTED_MODULE_16__["PhoneFlyerService"],
        _services_capture_screenshot_service__WEBPACK_IMPORTED_MODULE_17__["CaptureScreenshotService"]
    ], imports: [[
            ...materialModules,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["NoopAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"],
        _printing_page_printing_page_component__WEBPACK_IMPORTED_MODULE_9__["PrintingPageComponent"],
        _phone_list_phone_list_component__WEBPACK_IMPORTED_MODULE_10__["PhoneListComponent"],
        _promotion_list_promotion_list_component__WEBPACK_IMPORTED_MODULE_11__["PromotionListComponent"],
        _phone_feature_list_phone_feature_list_component__WEBPACK_IMPORTED_MODULE_12__["PhoneFeatureListComponent"],
        _phone_item_phone_item_component__WEBPACK_IMPORTED_MODULE_18__["PhoneItemComponent"],
        _pipes_background_image_pipe__WEBPACK_IMPORTED_MODULE_20__["BackgroundImagePipe"]], imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBarModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["NoopAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"],
                    _printing_page_printing_page_component__WEBPACK_IMPORTED_MODULE_9__["PrintingPageComponent"],
                    _phone_list_phone_list_component__WEBPACK_IMPORTED_MODULE_10__["PhoneListComponent"],
                    _promotion_list_promotion_list_component__WEBPACK_IMPORTED_MODULE_11__["PromotionListComponent"],
                    _phone_feature_list_phone_feature_list_component__WEBPACK_IMPORTED_MODULE_12__["PhoneFeatureListComponent"],
                    _phone_item_phone_item_component__WEBPACK_IMPORTED_MODULE_18__["PhoneItemComponent"],
                    _pipes_background_image_pipe__WEBPACK_IMPORTED_MODULE_20__["BackgroundImagePipe"]
                ],
                imports: [
                    ...materialModules,
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["NoopAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
                ],
                providers: [
                    _services_phones_service__WEBPACK_IMPORTED_MODULE_15__["PhoneService"],
                    _services_phone_flyer_service__WEBPACK_IMPORTED_MODULE_16__["PhoneFlyerService"],
                    _services_capture_screenshot_service__WEBPACK_IMPORTED_MODULE_17__["CaptureScreenshotService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_phone_flyer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/phone-flyer.service */ "./src/app/services/phone-flyer.service.ts");
/* harmony import */ var _services_capture_screenshot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/capture-screenshot.service */ "./src/app/services/capture-screenshot.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _phone_list_phone_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../phone-list/phone-list.component */ "./src/app/phone-list/phone-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function HomePageComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function HomePageComponent_div_17_Template_img_load_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.readyToExport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.selectedPhone.promotion, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.salePerson.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.salePerson.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.salePerson.storeAddress);
} }
class HomePageComponent {
    constructor(phoneFlyerService, captureService) {
        this.phoneFlyerService = phoneFlyerService;
        this.captureService = captureService;
    }
    ngOnInit() {
        this.selectedPhone = this.phoneFlyerService.getSelectedPhone();
        this.salePerson = this.phoneFlyerService.getSalePersonInfo();
    }
    onExport(phone) {
        this.selectedPhone = phone;
        this.phoneFlyerService.setSalePersonInfo(this.salePerson);
    }
    readyToExport() {
        setTimeout(() => {
            const node = document.getElementById('flyer-print-container');
            if (!!node) {
                this.captureService.capture(node, `${this.selectedPhone.name}-${this.salePerson.name}`);
                setTimeout(() => {
                    this.selectedPhone = null;
                }, 1500);
            }
        }, 500);
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_phone_flyer_service__WEBPACK_IMPORTED_MODULE_1__["PhoneFlyerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_capture_screenshot_service__WEBPACK_IMPORTED_MODULE_2__["CaptureScreenshotService"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 18, vars: 4, consts: [["matInput", "", 3, "ngModel", "ngModelChange"], [3, "selected"], ["id", "flyer-print-container", "class", "print-template", 4, "ngIf"], ["id", "flyer-print-container", 1, "print-template"], [1, "phone-frame", 3, "src", "load"], [1, "sale-person-info"], [1, "name"], [1, "phone"], [1, "address"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "account_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " T\u00EAn nh\u00E2n vi\u00EAn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomePageComponent_Template_input_ngModelChange_5_listener($event) { return ctx.salePerson.name = $event; });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomePageComponent_Template_input_ngModelChange_11_listener($event) { return ctx.salePerson.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0110\u1ECBa ch\u1EC9 c\u1EEDa h\u00E0ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomePageComponent_Template_input_ngModelChange_15_listener($event) { return ctx.salePerson.storeAddress = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-phone-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function HomePageComponent_Template_app_phone_list_selected_16_listener($event) { return ctx.onExport($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomePageComponent_div_17_Template, 9, 4, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.salePerson.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.salePerson.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.salePerson.storeAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.selectedPhone);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _phone_list_phone_list_component__WEBPACK_IMPORTED_MODULE_7__["PhoneListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: [".print-template[_ngcontent-%COMP%] {\n  position: relative;\n  width: 800px;\n  height: 800px;\n}\n\n.phone-frame[_ngcontent-%COMP%] {\n  width: 800px;\n  height: 800px;\n}\n\n.phone-picture[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 270px;\n  left: 50%;\n  height: 511px;\n  transform: translateX(-50%);\n}\n\n.sale-person-info[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px;\n  text-align: left;\n  font-family: Arial, sans-serif;\n}\n\n.sale-person-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 93px;\n  left: 188px;\n  width: 232px;\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.sale-person-info[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 93px;\n  left: 568px;\n  width: 180px;\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.sale-person-info[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 420px;\n  bottom: 52px;\n  left: 158px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  min-width: 280px;\n  max-width: 100%;\n  margin-right: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL0Q6XFxXb3Jrc3BhY2VcXGtodXllbm1haS1vcHBvL3NyY1xcYXBwXFxob21lLXBhZ2VcXGhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURDRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNESjs7QURLQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW50LXRlbXBsYXRlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDgwMHB4O1xyXG4gIGhlaWdodDogODAwcHg7XHJcbn1cclxuXHJcbi5waG9uZS1mcmFtZSB7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBoZWlnaHQ6IDgwMHB4O1xyXG59XHJcblxyXG4ucGhvbmUtcGljdHVyZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMjcwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGhlaWdodDogNTExcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcblxyXG4uc2FsZS1wZXJzb24taW5mbyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuXHJcbiAgLm5hbWUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA5M3B4O1xyXG4gICAgbGVmdDogMTg4cHg7XHJcbiAgICB3aWR0aDogMjMycHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5waG9uZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDkzcHg7XHJcbiAgICBsZWZ0OiA1NjhweDtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmFkZHJlc3Mge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDQyMHB4O1xyXG4gICAgYm90dG9tOiA1MnB4O1xyXG4gICAgbGVmdDogMTU4cHg7XHJcbiAgfVxyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtaW4td2lkdGg6IDI4MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuIiwiLnByaW50LXRlbXBsYXRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODAwcHg7XG4gIGhlaWdodDogODAwcHg7XG59XG5cbi5waG9uZS1mcmFtZSB7XG4gIHdpZHRoOiA4MDBweDtcbiAgaGVpZ2h0OiA4MDBweDtcbn1cblxuLnBob25lLXBpY3R1cmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjcwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgaGVpZ2h0OiA1MTFweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG4uc2FsZS1wZXJzb24taW5mbyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG59XG4uc2FsZS1wZXJzb24taW5mbyAubmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA5M3B4O1xuICBsZWZ0OiAxODhweDtcbiAgd2lkdGg6IDIzMnB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNhbGUtcGVyc29uLWluZm8gLnBob25lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDkzcHg7XG4gIGxlZnQ6IDU2OHB4O1xuICB3aWR0aDogMTgwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2FsZS1wZXJzb24taW5mbyAuYWRkcmVzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDQyMHB4O1xuICBib3R0b206IDUycHg7XG4gIGxlZnQ6IDE1OHB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIG1pbi13aWR0aDogMjgwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.scss']
            }]
    }], function () { return [{ type: _services_phone_flyer_service__WEBPACK_IMPORTED_MODULE_1__["PhoneFlyerService"] }, { type: _services_capture_screenshot_service__WEBPACK_IMPORTED_MODULE_2__["CaptureScreenshotService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/phone-feature-list/phone-feature-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/phone-feature-list/phone-feature-list.component.ts ***!
  \********************************************************************/
/*! exports provided: PhoneFeatureListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneFeatureListComponent", function() { return PhoneFeatureListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PhoneFeatureListComponent {
    constructor() { }
    ngOnInit() {
    }
}
PhoneFeatureListComponent.ɵfac = function PhoneFeatureListComponent_Factory(t) { return new (t || PhoneFeatureListComponent)(); };
PhoneFeatureListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhoneFeatureListComponent, selectors: [["app-phone-feature-list"]], decls: 2, vars: 0, template: function PhoneFeatureListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "phone-feature-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob25lLWZlYXR1cmUtbGlzdC9waG9uZS1mZWF0dXJlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhoneFeatureListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-phone-feature-list',
                templateUrl: './phone-feature-list.component.html',
                styleUrls: ['./phone-feature-list.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/phone-item/phone-item.component.ts":
/*!****************************************************!*\
  !*** ./src/app/phone-item/phone-item.component.ts ***!
  \****************************************************/
/*! exports provided: PhoneItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneItemComponent", function() { return PhoneItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");



class PhoneItemComponent {
    constructor() {
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onExport() {
        this.selected.emit(this.phone);
    }
}
PhoneItemComponent.ɵfac = function PhoneItemComponent_Factory(t) { return new (t || PhoneItemComponent)(); };
PhoneItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhoneItemComponent, selectors: [["app-phone-item"]], inputs: { phone: "phone" }, outputs: { selected: "selected" }, decls: 7, vars: 3, consts: [[1, "phone-frame"], [1, "phone-image", 3, "src", "alt"], [1, "caption"], [1, "phone-name"], ["mat-flat-button", "", "color", "primary", 1, "btn-action", 3, "click"]], template: function PhoneItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhoneItemComponent_Template_button_click_5_listener() { return ctx.onExport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Xu\u1EA5t \u1EA3nh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.phone.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.phone.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.phone.name);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]], styles: [".btn-action[_ngcontent-%COMP%] {\n  background: #2aad6f !important;\n  color: white !important;\n  margin-top: 0.5em;\n}\n\n.phone-frame[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2em;\n  margin-right: 1em;\n}\n\n.phone-image[_ngcontent-%COMP%] {\n  height: 300px;\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvbmUtaXRlbS9EOlxcV29ya3NwYWNlXFxraHV5ZW5tYWktb3Bwby9zcmNcXGFwcFxccGhvbmUtaXRlbVxccGhvbmUtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGhvbmUtaXRlbS9waG9uZS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9waG9uZS1pdGVtL3Bob25lLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWFjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmFhZDZmICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG59XHJcblxyXG4ucGhvbmUtZnJhbWUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcbi5waG9uZS1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIi5idG4tYWN0aW9uIHtcbiAgYmFja2dyb3VuZDogIzJhYWQ2ZiAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG59XG5cbi5waG9uZS1mcmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuLnBob25lLWltYWdlIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufSJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhoneItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-phone-item',
                templateUrl: './phone-item.component.html',
                styleUrls: ['./phone-item.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { phone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/phone-list/phone-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/phone-list/phone-list.component.ts ***!
  \****************************************************/
/*! exports provided: PhoneListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneListComponent", function() { return PhoneListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_phones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/phones.service */ "./src/app/services/phones.service.ts");
/* harmony import */ var _services_phone_flyer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/phone-flyer.service */ "./src/app/services/phone-flyer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _phone_item_phone_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../phone-item/phone-item.component */ "./src/app/phone-item/phone-item.component.ts");







function PhoneListComponent_app_phone_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-phone-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function PhoneListComponent_app_phone_item_1_Template_app_phone_item_selected_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const phone_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.selectPhone(phone_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const phone_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("phone", phone_r4);
} }
class PhoneListComponent {
    constructor(phoneService, phoneFlyerService, router) {
        this.phoneService = phoneService;
        this.phoneFlyerService = phoneFlyerService;
        this.router = router;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.phones$ = this.phoneService.getAllPhones();
    }
    selectPhone(phone) {
        this.phoneFlyerService.setSelectedPhone(phone);
        this.selected.emit(phone);
        // this.router.navigateByUrl('/print');
    }
}
PhoneListComponent.ɵfac = function PhoneListComponent_Factory(t) { return new (t || PhoneListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_phones_service__WEBPACK_IMPORTED_MODULE_1__["PhoneService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_phone_flyer_service__WEBPACK_IMPORTED_MODULE_2__["PhoneFlyerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
PhoneListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhoneListComponent, selectors: [["app-phone-list"]], outputs: { selected: "selected" }, decls: 3, vars: 3, consts: [[1, "phone-list-wrapper"], ["class", "phone-item", 3, "phone", "selected", 4, "ngFor", "ngForOf"], [1, "phone-item", 3, "phone", "selected"]], template: function PhoneListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PhoneListComponent_app_phone_item_1_Template, 1, 1, "app-phone-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.phones$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _phone_item_phone_item_component__WEBPACK_IMPORTED_MODULE_5__["PhoneItemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".phone-list-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvbmUtbGlzdC9EOlxcV29ya3NwYWNlXFxraHV5ZW5tYWktb3Bwby9zcmNcXGFwcFxccGhvbmUtbGlzdFxccGhvbmUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGhvbmUtbGlzdC9waG9uZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9waG9uZS1saXN0L3Bob25lLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGhvbmUtbGlzdC13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufSIsIi5waG9uZS1saXN0LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59Il19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhoneListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-phone-list',
                templateUrl: './phone-list.component.html',
                styleUrls: ['./phone-list.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _services_phones_service__WEBPACK_IMPORTED_MODULE_1__["PhoneService"] }, { type: _services_phone_flyer_service__WEBPACK_IMPORTED_MODULE_2__["PhoneFlyerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/pipes/background-image.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/pipes/background-image.pipe.ts ***!
  \************************************************/
/*! exports provided: BackgroundImagePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundImagePipe", function() { return BackgroundImagePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class BackgroundImagePipe {
    constructor(sanitization) {
        this.sanitization = sanitization;
    }
    transform(url, defaultUrl = '') {
        const imageUrl = !!url ? url : defaultUrl;
        return !!imageUrl ? this.sanitization.bypassSecurityTrustStyle(`url(${imageUrl})`) : '';
    }
}
BackgroundImagePipe.ɵfac = function BackgroundImagePipe_Factory(t) { return new (t || BackgroundImagePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
BackgroundImagePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "backgroundImage", type: BackgroundImagePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackgroundImagePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'backgroundImage' }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/printing-page/printing-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/printing-page/printing-page.component.ts ***!
  \**********************************************************/
/*! exports provided: PrintingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintingPageComponent", function() { return PrintingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_phone_flyer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/phone-flyer.service */ "./src/app/services/phone-flyer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class PrintingPageComponent {
    constructor(phoneFlyerService, router) {
        this.phoneFlyerService = phoneFlyerService;
        this.router = router;
    }
    ngOnInit() {
        this.selectedPhone = this.phoneFlyerService.getSelectedPhone();
        this.salePerson = this.phoneFlyerService.getSalePersonInfo();
        // if (!this.selectedPhone) {
        //   this.router.navigate()
        // }
    }
}
PrintingPageComponent.ɵfac = function PrintingPageComponent_Factory(t) { return new (t || PrintingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_phone_flyer_service__WEBPACK_IMPORTED_MODULE_1__["PhoneFlyerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PrintingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrintingPageComponent, selectors: [["app-printing-page"]], decls: 0, vars: 0, template: function PrintingPageComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaW50aW5nLXBhZ2UvcHJpbnRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-printing-page',
                templateUrl: './printing-page.component.html',
                styleUrls: ['./printing-page.component.scss']
            }]
    }], function () { return [{ type: _services_phone_flyer_service__WEBPACK_IMPORTED_MODULE_1__["PhoneFlyerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/promotion-list/promotion-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/promotion-list/promotion-list.component.ts ***!
  \************************************************************/
/*! exports provided: PromotionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionListComponent", function() { return PromotionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PromotionListComponent {
    constructor() { }
    ngOnInit() {
    }
}
PromotionListComponent.ɵfac = function PromotionListComponent_Factory(t) { return new (t || PromotionListComponent)(); };
PromotionListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PromotionListComponent, selectors: [["app-promotion-list"]], decls: 2, vars: 0, template: function PromotionListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "promotion-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb21vdGlvbi1saXN0L3Byb21vdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromotionListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-promotion-list',
                templateUrl: './promotion-list.component.html',
                styleUrls: ['./promotion-list.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/capture-screenshot.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/capture-screenshot.service.ts ***!
  \********************************************************/
/*! exports provided: CaptureScreenshotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptureScreenshotService", function() { return CaptureScreenshotService; });
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-to-image */ "./node_modules/dom-to-image/src/dom-to-image.js");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);




class CaptureScreenshotService {
    capture(node, name) {
        dom_to_image__WEBPACK_IMPORTED_MODULE_0___default.a.toBlob(node)
            .then(blob => {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(blob, `${name}.png`);
        });
    }
}
CaptureScreenshotService.ɵfac = function CaptureScreenshotService_Factory(t) { return new (t || CaptureScreenshotService)(); };
CaptureScreenshotService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CaptureScreenshotService, factory: CaptureScreenshotService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CaptureScreenshotService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/phone-flyer.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/phone-flyer.service.ts ***!
  \*************************************************/
/*! exports provided: PhoneFlyerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneFlyerService", function() { return PhoneFlyerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const SALE_PERSON_STORE_KEY = 'oppo-promotion-sale-person';
class PhoneFlyerService {
    setSelectedPhone(phone) {
        this.selectedPhone = phone;
    }
    getSelectedPhone() {
        return this.selectedPhone;
    }
    setSalePersonInfo(person) {
        this.salePerson = person;
        localStorage.setItem(SALE_PERSON_STORE_KEY, JSON.stringify(person));
    }
    getSalePersonInfo() {
        if (!this.salePerson) {
            const data = localStorage.getItem(SALE_PERSON_STORE_KEY);
            if (!!data) {
                this.salePerson = JSON.parse(data);
            }
        }
        // fallback default value
        if (!this.salePerson) {
            this.salePerson = {
                name: '',
                phone: '',
                storeAddress: ''
            };
        }
        return this.salePerson;
    }
    generateFlyerInfo() {
        return {
            selectedPhone: this.selectedPhone,
            salePerson: this.salePerson
        };
    }
}
PhoneFlyerService.ɵfac = function PhoneFlyerService_Factory(t) { return new (t || PhoneFlyerService)(); };
PhoneFlyerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PhoneFlyerService, factory: PhoneFlyerService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhoneFlyerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/phones.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/phones.service.ts ***!
  \********************************************/
/*! exports provided: PhoneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneService", function() { return PhoneService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class PhoneService {
    /**
     *
     */
    constructor(http) {
        this.http = http;
    }
    getAllPhones() {
        return this.http.get('assets/api/phones.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(phones => phones.map(phone => (Object.assign(Object.assign({}, phone), { picture: `assets/images/${phone.picture}`, promotion: `assets/images/${phone.promotion}` })))));
    }
}
PhoneService.ɵfac = function PhoneService_Factory(t) { return new (t || PhoneService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PhoneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PhoneService, factory: PhoneService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhoneService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Workspace\khuyenmai-oppo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map