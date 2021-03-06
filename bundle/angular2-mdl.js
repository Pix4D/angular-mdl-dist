(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"), require("rxjs/Subject"), require("@angular/platform-browser"), require("@angular/platform-browser/animations"), require("rxjs/BehaviorSubject"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "@angular/forms", "rxjs/Subject", "@angular/platform-browser", "@angular/platform-browser/animations", "rxjs/BehaviorSubject"], factory);
	else if(typeof exports === 'object')
		exports["angular2Mdl"] = factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"), require("rxjs/Subject"), require("@angular/platform-browser"), require("@angular/platform-browser/animations"), require("rxjs/BehaviorSubject"));
	else
		root["angular2Mdl"] = factory(root["ng"]["core"], root["ng"]["common"], root["ng"]["forms"], root["rx"]["Subject"], root["ng"]["platformBrowser"], root["ng"]["platformBrowserAnimations"], root["rx"]["BehaviorSubject"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_62__, __WEBPACK_EXTERNAL_MODULE_66__, __WEBPACK_EXTERNAL_MODULE_67__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 68);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toBoolean;
function toBoolean(value) {
    return value != null && "" + value !== 'false';
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_boolean_property__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlUnsupportedButtonTypeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlUnsupportedColoredTypeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MdlButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MdlButtonModule; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MdlUnsupportedButtonTypeError = (function (_super) {
    __extends(MdlUnsupportedButtonTypeError, _super);
    function MdlUnsupportedButtonTypeError(type) {
        return _super.call(this, "Button type \"" + type + "\" isn't supported (allowed: raised, fab, mini-fab, icon, '').") || this;
    }
    return MdlUnsupportedButtonTypeError;
}(__WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["a" /* MdlError */]));

var MdlUnsupportedColoredTypeError = (function (_super) {
    __extends(MdlUnsupportedColoredTypeError, _super);
    function MdlUnsupportedColoredTypeError(type) {
        return _super.call(this, "Colored type \"" + type + "\" isn't supported (allowed: primary, accent, '').") || this;
    }
    return MdlUnsupportedColoredTypeError;
}(__WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["a" /* MdlError */]));

var MDL_BUTTON_TYPES = [
    'raised',
    'fab',
    'mini-fab',
    'icon',
    ''
];
var MDL_COLORED_TYPES = [
    'primary',
    'accent',
    ''
];
var MdlButtonComponent = (function () {
    function MdlButtonComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._disabled = false;
        this.element = elementRef.nativeElement;
    }
    Object.defineProperty(MdlButtonComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlButtonComponent.prototype.ngOnChanges = function (changes) {
        if (this.mdlButtonType && MDL_BUTTON_TYPES.indexOf(this.mdlButtonType) === -1) {
            throw new MdlUnsupportedButtonTypeError(this.mdlButtonType);
        }
        if (this.mdlColoredType && MDL_COLORED_TYPES.indexOf(this.mdlColoredType) === -1) {
            throw new MdlUnsupportedColoredTypeError(this.mdlColoredType);
        }
    };
    MdlButtonComponent.prototype.onMouseUp = function () {
        this.blurIt();
    };
    MdlButtonComponent.prototype.onMouseLeave = function () {
        this.blurIt();
    };
    MdlButtonComponent.prototype.blurIt = function () {
        this.renderer.invokeElementMethod(this.element, 'blur', []);
    };
    return MdlButtonComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-button-type'),
    __metadata("design:type", String)
], MdlButtonComponent.prototype, "mdlButtonType", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-colored'),
    __metadata("design:type", String)
], MdlButtonComponent.prototype, "mdlColoredType", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], MdlButtonComponent.prototype, "disabled", null);
MdlButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-button, button[mdl-button], a[mdl-button]',
        host: {
            '[attr.disabled]': 'disabled ? "disabled" : null',
            '(mouseup)': 'onMouseUp()',
            '(mouseleave)': 'onMouseLeave()',
            '[class.mdl-button]': 'true',
            '[class.mdl-button--raised]': 'mdlButtonType == "raised"',
            '[class.mdl-button--fab]': 'mdlButtonType == "fab" || mdlButtonType == "mini-fab"',
            '[class.mdl-button--mini-fab]': 'mdlButtonType == "mini-fab"',
            '[class.mdl-button--icon]': 'mdlButtonType == "icon"',
            '[class.mdl-button--primary]': 'mdlColoredType == "primary"',
            '[class.mdl-button--accent]': 'mdlColoredType == "accent"'
        },
        exportAs: 'mdlButton',
        template: '<ng-content></ng-content>',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], MdlButtonComponent);

var MDL_BUTTON_DIRECTIVES = [MdlButtonComponent];
var MdlButtonModule = MdlButtonModule_1 = (function () {
    function MdlButtonModule() {
    }
    MdlButtonModule.forRoot = function () {
        return {
            ngModule: MdlButtonModule_1,
            providers: []
        };
    };
    return MdlButtonModule;
}());
MdlButtonModule = MdlButtonModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [],
        exports: MDL_BUTTON_DIRECTIVES,
        declarations: MDL_BUTTON_DIRECTIVES,
    })
], MdlButtonModule);

var MdlButtonModule_1;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlIconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlIconModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MdlIconComponent = (function () {
    function MdlIconComponent() {
    }
    return MdlIconComponent;
}());
MdlIconComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-icon',
        host: {
            '[class.material-icons]': 'true'
        },
        template: '<ng-content></ng-content>',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], MdlIconComponent);

var MDL_ICON_DIRECTIVES = [MdlIconComponent];
var MdlIconModule = MdlIconModule_1 = (function () {
    function MdlIconModule() {
    }
    MdlIconModule.forRoot = function () {
        return {
            ngModule: MdlIconModule_1,
            providers: []
        };
    };
    return MdlIconModule;
}());
MdlIconModule = MdlIconModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [],
        exports: MDL_ICON_DIRECTIVES,
        declarations: MDL_ICON_DIRECTIVES,
    })
], MdlIconModule);

var MdlIconModule_1;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlStructureError; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Wrapper for mdl error messages.
 */
var MdlError = (function (_super) {
    __extends(MdlError, _super);
    function MdlError(value) {
        var _this = _super.call(this) || this;
        _super.prototype.message = value;
        return _this;
    }
    return MdlError;
}(Error));

var MdlStructureError = (function (_super) {
    __extends(MdlStructureError, _super);
    function MdlStructureError(child, requiredParent) {
        return _super.call(this, "\"" + child + "\" requires \"" + requiredParent + "\" as a parent.") || this;
    }
    return MdlStructureError;
}(MdlError));



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdl_simple_dialog_component__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdl_dialog_host_component__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__internal_dialog_reference__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialog_outlet_mdl_dialog_outlet_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDL_CONFIGUARTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MIN_DIALOG_Z_INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlDialogReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MdlDialogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var MDL_CONFIGUARTION = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('MDL_CONFIGUARTION');
var MIN_DIALOG_Z_INDEX = 100000;
/**
 * The reference to the created and displayed dialog.
 */
var MdlDialogReference = (function () {
    function MdlDialogReference(internaleRef) {
        this.internaleRef = internaleRef;
        internaleRef.dialogRef = this;
    }
    /**
     * closes the dialog
     */
    MdlDialogReference.prototype.hide = function (data) {
        this.internaleRef.hide(data);
    };
    /**
     * Observable that emits, if the dialog was closed.
     * @returns {Observable<void>}
     */
    MdlDialogReference.prototype.onHide = function () {
        return this.internaleRef.onHide();
    };
    /**
     * Observable that emits, if the dialog is really visible and not only created.
     * @returns {Observable<void>}
     */
    MdlDialogReference.prototype.onVisible = function () {
        return this.internaleRef.onVisible();
    };
    return MdlDialogReference;
}());

/**
 * The MdlDialogService is used to open different kind of dialogs. SimpleDialogs and Custom Dialogs.
 * @experimental
  */
var MdlDialogService = (function () {
    function MdlDialogService(componentFactoryResolver, doc, appRef, mdlDialogOutletService) {
        var _this = this;
        this.componentFactoryResolver = componentFactoryResolver;
        this.doc = doc;
        this.appRef = appRef;
        this.mdlDialogOutletService = mdlDialogOutletService;
        this.openDialogs = new Array();
        /**
         * Emits an event when either all modals are closed, or one gets opened.
         * @returns A subscribable event emitter that provides a boolean indicating whether a modal is open or not.
         */
        this.onDialogsOpenChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.mdlDialogOutletService.backdropClickEmitter.subscribe(function () {
            _this.onBackdropClick();
        });
    }
    /**
     * Shows a dialog that is just an alert - e.g. with one button.
     * @param alertMessage The message that should be displayed.
     * @param okText The text that the button should have
     * @param title The optional title of the dialog
     * @returns An Observable that is called if the user hits the Ok button.
     */
    MdlDialogService.prototype.alert = function (alertMessage, okText, title) {
        if (okText === void 0) { okText = 'Ok'; }
        var result = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.showDialog({
            title: title,
            message: alertMessage,
            actions: [
                { handler: function () {
                        result.next(null);
                        result.complete();
                    }, text: okText }
            ],
            isModal: true
        });
        return result;
    };
    /**
     * Shows a dialog that is just a confirm message - e.g. with two button.
     * @param question The question that should be displayed.
     * @param title The title that should be displayed on top of Question.
     * @param declineText The text for decline button. defaults to Cancel
     * @param confirmText The text for the confirm button . defaults to Ok
     * @returns An Observable that is called if the user hits the Ok button.
     */
    MdlDialogService.prototype.confirm = function (question, declineText, confirmText, title) {
        if (declineText === void 0) { declineText = 'Cancel'; }
        if (confirmText === void 0) { confirmText = 'Ok'; }
        var result = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.showDialog({
            title: title,
            message: question,
            actions: [
                {
                    handler: function () {
                        result.next(null);
                        result.complete();
                    }, text: confirmText
                },
                {
                    handler: function () {
                        result.error(null);
                    }, text: declineText, isClosingAction: true
                }
            ],
            isModal: true
        });
        return result.asObservable();
    };
    /**
     * Shows a dialog that is specified by the provided configuration.
     * @param config The simple dialog configuration.
     * @returns An Observable that returns the MdlDialogReference.
     */
    MdlDialogService.prototype.showDialog = function (config) {
        if (config.actions.length === 0) {
            throw new Error('a dialog mus have at least one action');
        }
        var internalDialogRef = new __WEBPACK_IMPORTED_MODULE_5__internal_dialog_reference__["a" /* InternalMdlDialogReference */](config);
        var providers = [
            { provide: MdlDialogReference, useValue: new MdlDialogReference(internalDialogRef) },
            { provide: MDL_CONFIGUARTION, useValue: config }
        ];
        var hostComponentRef = this.createHostDialog(internalDialogRef, config);
        var cRef = this.createComponentInstance(hostComponentRef.instance.dialogTarget, providers, __WEBPACK_IMPORTED_MODULE_3__mdl_simple_dialog_component__["a" /* MdlSimpleDialogComponent */]);
        return this.showHostDialog(internalDialogRef.dialogRef, hostComponentRef);
    };
    /**
     * Shows a dialog that is specified by the provided configuration.
     * @param config The custom dialog configuration.
     * @returns An Observable that returns the MdlDialogReference.
     */
    MdlDialogService.prototype.showCustomDialog = function (config) {
        var internalDialogRef = new __WEBPACK_IMPORTED_MODULE_5__internal_dialog_reference__["a" /* InternalMdlDialogReference */](config);
        var providers = [
            { provide: MdlDialogReference, useValue: new MdlDialogReference(internalDialogRef) }
        ];
        if (config.providers) {
            providers.push.apply(providers, config.providers);
        }
        var hostComponentRef = this.createHostDialog(internalDialogRef, config);
        this.createComponentInstance(hostComponentRef.instance.dialogTarget, providers, config.component);
        return this.showHostDialog(internalDialogRef.dialogRef, hostComponentRef);
    };
    MdlDialogService.prototype.showDialogTemplate = function (template, config) {
        var internalDialogRef = new __WEBPACK_IMPORTED_MODULE_5__internal_dialog_reference__["a" /* InternalMdlDialogReference */](config);
        var hostComponentRef = this.createHostDialog(internalDialogRef, config);
        hostComponentRef.instance.dialogTarget.createEmbeddedView(template);
        return this.showHostDialog(internalDialogRef.dialogRef, hostComponentRef);
    };
    MdlDialogService.prototype.showHostDialog = function (dialogRef, hostComponentRef) {
        var result = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        setTimeout(function () {
            result.next(dialogRef);
            result.complete();
            hostComponentRef.instance.show();
        });
        return result.asObservable();
    };
    MdlDialogService.prototype.createHostDialog = function (internalDialogRef, dialogConfig) {
        var _this = this;
        var viewContainerRef = this.mdlDialogOutletService.viewContainerRef;
        if (!viewContainerRef) {
            throw new Error('You did not provide a ViewContainerRef. ' +
                'Please see https://github.com/mseemann/angular2-mdl/wiki/How-to-use-the-MdlDialogService');
        }
        var providers = [
            { provide: MDL_CONFIGUARTION, useValue: dialogConfig },
            { provide: __WEBPACK_IMPORTED_MODULE_5__internal_dialog_reference__["a" /* InternalMdlDialogReference */], useValue: internalDialogRef }
        ];
        var hostDialogComponent = this.createComponentInstance(viewContainerRef, providers, __WEBPACK_IMPORTED_MODULE_4__mdl_dialog_host_component__["a" /* MdlDialogHostComponent */]);
        internalDialogRef.hostDialogComponentRef = hostDialogComponent;
        internalDialogRef.isModal = dialogConfig.isModal;
        internalDialogRef.closeCallback = function () {
            _this.popDialog(internalDialogRef);
            hostDialogComponent.instance.hide(hostDialogComponent);
        };
        this.pushDialog(internalDialogRef);
        return hostDialogComponent;
    };
    MdlDialogService.prototype.pushDialog = function (dialogRef) {
        if (this.openDialogs.length == 0) {
            this.onDialogsOpenChanged.emit(true);
        }
        this.openDialogs.push(dialogRef);
        this.orderDialogStack();
    };
    MdlDialogService.prototype.popDialog = function (dialogRef) {
        this.openDialogs.splice(this.openDialogs.indexOf(dialogRef), 1);
        this.orderDialogStack();
        if (this.openDialogs.length == 0) {
            this.onDialogsOpenChanged.emit(false);
        }
    };
    MdlDialogService.prototype.orderDialogStack = function () {
        // +1 because the overlay may have MIN_DIALOG_Z_INDEX if the dialog is modal.
        var zIndex = MIN_DIALOG_Z_INDEX + 1;
        this.openDialogs.forEach(function (iDialogRef) {
            iDialogRef.hostDialog.zIndex = zIndex;
            // +2 to make room for the overlay if a dialog is modal
            zIndex += 2;
        });
        this.mdlDialogOutletService.hideBackdrop();
        // if there is a modal dialog append the overloay to the dom - if not remove the overlay from the body
        var topMostModalDialog = this.getTopMostInternalDialogRef();
        if (topMostModalDialog) {
            // move the overlay diredct under the topmos modal dialog
            this.mdlDialogOutletService.showBackdropWithZIndex(topMostModalDialog.hostDialog.zIndex - 1);
        }
    };
    MdlDialogService.prototype.getTopMostInternalDialogRef = function () {
        var topMostModalDialog = null;
        for (var i = (this.openDialogs.length - 1); i >= 0; i--) {
            if (this.openDialogs[i].isModal) {
                topMostModalDialog = this.openDialogs[i];
                break;
            }
        }
        return topMostModalDialog;
    };
    MdlDialogService.prototype.onBackdropClick = function () {
        var topMostModalDialog = this.getTopMostInternalDialogRef();
        if (topMostModalDialog.config.clickOutsideToClose) {
            topMostModalDialog.hide();
        }
    };
    MdlDialogService.prototype.createComponentInstance = function (viewContainerRef, providers, component) {
        var cFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        var resolvedProviders = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolve(providers);
        var parentInjector = viewContainerRef.parentInjector;
        var childInjector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].fromResolvedProviders(resolvedProviders, parentInjector);
        return viewContainerRef.createComponent(cFactory, viewContainerRef.length, childInjector);
    };
    return MdlDialogService;
}());
MdlDialogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DOCUMENT"])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"],
        __WEBPACK_IMPORTED_MODULE_6__dialog_outlet_mdl_dialog_outlet_service__["a" /* MdlDialogOutletService */]])
], MdlDialogService);



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_boolean_property__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlCheckboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MdlCheckboxModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var noop = function (_) { };
var IS_FOCUSED = 'is-focused';
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MdlCheckboxComponent; }),
    multi: true
};
var MdlCheckboxComponent = (function () {
    function MdlCheckboxComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._disabled = false;
        this.tabindex = null;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.value_ = false;
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.el = elementRef.nativeElement;
    }
    Object.defineProperty(MdlCheckboxComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlCheckboxComponent.prototype, "value", {
        get: function () { return this.value_; },
        set: function (v) {
            this.value_ = v;
            this.onChangeCallback(v);
            this.change.emit(v);
        },
        enumerable: true,
        configurable: true
    });
    ;
    MdlCheckboxComponent.prototype.writeValue = function (value) {
        this.value_ = value;
    };
    MdlCheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    MdlCheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    MdlCheckboxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MdlCheckboxComponent.prototype.onFocus = function () {
        this.renderer.setElementClass(this.el, IS_FOCUSED, true);
    };
    MdlCheckboxComponent.prototype.onBlur = function () {
        this.renderer.setElementClass(this.el, IS_FOCUSED, false);
        this.onTouchedCallback();
    };
    MdlCheckboxComponent.prototype.onClick = function () {
        if (this.disabled) {
            return;
        }
        this.value = !this.value;
    };
    return MdlCheckboxComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], MdlCheckboxComponent.prototype, "disabled", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], MdlCheckboxComponent.prototype, "tabindex", void 0);
MdlCheckboxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-checkbox',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
        host: {
            '(click)': 'onClick()',
            '[class.mdl-checkbox]': 'true',
            '[class.is-upgraded]': 'true',
            '[class.is-checked]': 'value',
            '[class.is-disabled]': 'disabled'
        },
        template: "\n  <input type=\"checkbox\" class=\"mdl-checkbox__input\" \n    (focus)=\"onFocus()\" \n    (blur)=\"onBlur()\"\n    [disabled]=\"disabled\"\n    [attr.tabindex]=\"tabindex\"\n    [ngModel]=\"value\">\n  <span class=\"mdl-checkbox__label\"><ng-content></ng-content></span>\n  <span class=\"mdl-checkbox__focus-helper\"></span>\n  <span class=\"mdl-checkbox__box-outline\">\n    <span class=\"mdl-checkbox__tick-outline\"></span>\n  </span>\n  ",
        inputs: ['value'],
        outputs: ['change'],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], MdlCheckboxComponent);

var MDL_CHECKBOX_DIRECTIVES = [MdlCheckboxComponent];
var MdlCheckboxModule = MdlCheckboxModule_1 = (function () {
    function MdlCheckboxModule() {
    }
    MdlCheckboxModule.forRoot = function () {
        return {
            ngModule: MdlCheckboxModule_1,
            providers: []
        };
    };
    return MdlCheckboxModule;
}());
MdlCheckboxModule = MdlCheckboxModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"]],
        exports: MDL_CHECKBOX_DIRECTIVES,
        declarations: MDL_CHECKBOX_DIRECTIVES,
    })
], MdlCheckboxModule);

var MdlCheckboxModule_1;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ripple_vendor__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlRippleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlButtonRippleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MdlCheckboxRippleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MdlRadioRippleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MdlIconToggleRippleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MdlSwitchRippleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return MdlMenuItemRippleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return MdlAnchorRippleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return MdlRippleModule; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// known bugs: https://github.com/google/material-design-lite/issues/4215
var MdlRippleDirective = (function () {
    function MdlRippleDirective(elementRef, renderer, cssContainerClasses) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cssContainerClasses = cssContainerClasses;
        this.RIPPLE = 'mdl-ripple';
        this.rippleActive = true;
        this.el = elementRef.nativeElement;
    }
    MdlRippleDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        // remove any existing ripple container
        if (this.rippleContainer) {
            this.el.removeChild(this.rippleContainer);
            delete this.rippleContainer;
            delete this.ripple;
        }
        // if used as mdl-ripple without property binding it is an empty string
        // otherwise (e.g. [mdl-ripple] it is a boolean - may be with the default value true.
        if (this.rippleActive === '' || this.rippleActive) {
            this.rippleContainer = this.renderer.createElement(null, 'span');
            this.cssContainerClasses.forEach(function (cssClass) {
                _this.renderer.setElementClass(_this.rippleContainer, cssClass, true);
            });
            var rippleElement = this.renderer.createElement(null, 'span');
            this.renderer.setElementClass(rippleElement, this.RIPPLE, true);
            this.rippleContainer.appendChild(rippleElement);
            this.el.appendChild(this.rippleContainer);
            this.ripple = new __WEBPACK_IMPORTED_MODULE_1__ripple_vendor__["a" /* MaterialRipple */](this.renderer, this.el);
        }
    };
    return MdlRippleDirective;
}());

var MdlButtonRippleDirective = (function (_super) {
    __extends(MdlButtonRippleDirective, _super);
    function MdlButtonRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-button__ripple-container']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlButtonRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    return MdlButtonRippleDirective;
}(MdlRippleDirective));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-ripple'),
    __metadata("design:type", Object)
], MdlButtonRippleDirective.prototype, "rippleActive", void 0);
MdlButtonRippleDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'mdl-button[mdl-ripple], button[mdl-ripple]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], MdlButtonRippleDirective);

var MdlCheckboxRippleDirective = (function (_super) {
    __extends(MdlCheckboxRippleDirective, _super);
    function MdlCheckboxRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-checkbox__ripple-container', 'mdl-ripple--center']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlCheckboxRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    return MdlCheckboxRippleDirective;
}(MdlRippleDirective));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-ripple'),
    __metadata("design:type", Object)
], MdlCheckboxRippleDirective.prototype, "rippleActive", void 0);
MdlCheckboxRippleDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'mdl-checkbox[mdl-ripple]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], MdlCheckboxRippleDirective);

var MdlRadioRippleDirective = (function (_super) {
    __extends(MdlRadioRippleDirective, _super);
    function MdlRadioRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-radio__ripple-container', 'mdl-ripple--center']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlRadioRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    return MdlRadioRippleDirective;
}(MdlRippleDirective));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-ripple'),
    __metadata("design:type", Object)
], MdlRadioRippleDirective.prototype, "rippleActive", void 0);
MdlRadioRippleDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'mdl-radio[mdl-ripple]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], MdlRadioRippleDirective);

var MdlIconToggleRippleDirective = (function (_super) {
    __extends(MdlIconToggleRippleDirective, _super);
    function MdlIconToggleRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-icon-toggle__ripple-container', 'mdl-ripple--center']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlIconToggleRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    return MdlIconToggleRippleDirective;
}(MdlRippleDirective));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-ripple'),
    __metadata("design:type", Object)
], MdlIconToggleRippleDirective.prototype, "rippleActive", void 0);
MdlIconToggleRippleDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'mdl-icon-toggle[mdl-ripple]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], MdlIconToggleRippleDirective);

var MdlSwitchRippleDirective = (function (_super) {
    __extends(MdlSwitchRippleDirective, _super);
    function MdlSwitchRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-switch__ripple-container', 'mdl-ripple--center']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlSwitchRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    return MdlSwitchRippleDirective;
}(MdlRippleDirective));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-ripple'),
    __metadata("design:type", Object)
], MdlSwitchRippleDirective.prototype, "rippleActive", void 0);
MdlSwitchRippleDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'mdl-switch[mdl-ripple]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], MdlSwitchRippleDirective);

var MdlMenuItemRippleDirective = (function (_super) {
    __extends(MdlMenuItemRippleDirective, _super);
    function MdlMenuItemRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-menu__item--ripple-container']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlMenuItemRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    return MdlMenuItemRippleDirective;
}(MdlRippleDirective));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-ripple'),
    __metadata("design:type", Object)
], MdlMenuItemRippleDirective.prototype, "rippleActive", void 0);
MdlMenuItemRippleDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'mdl-menu-item[mdl-ripple]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], MdlMenuItemRippleDirective);

var MdlAnchorRippleDirective = (function (_super) {
    __extends(MdlAnchorRippleDirective, _super);
    function MdlAnchorRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-tabs__ripple-container', 'mdl-layout__tab-ripple-container']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlAnchorRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    return MdlAnchorRippleDirective;
}(MdlRippleDirective));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-ripple'),
    __metadata("design:type", Object)
], MdlAnchorRippleDirective.prototype, "rippleActive", void 0);
MdlAnchorRippleDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'a[mdl-ripple],div[mdl-ripple]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], MdlAnchorRippleDirective);

var MDL_COMMON_DIRECTIVES = [
    MdlCheckboxRippleDirective,
    MdlButtonRippleDirective,
    MdlRadioRippleDirective,
    MdlIconToggleRippleDirective,
    MdlSwitchRippleDirective,
    MdlMenuItemRippleDirective,
    MdlAnchorRippleDirective
];
var MdlRippleModule = MdlRippleModule_1 = (function () {
    function MdlRippleModule() {
    }
    MdlRippleModule.forRoot = function () {
        return {
            ngModule: MdlRippleModule_1,
            providers: []
        };
    };
    return MdlRippleModule;
}());
MdlRippleModule = MdlRippleModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [],
        exports: MDL_COMMON_DIRECTIVES,
        declarations: MDL_COMMON_DIRECTIVES,
    })
], MdlRippleModule);

var MdlRippleModule_1;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_component__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdl_dialog_outlet_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdl_backdrop_overlay_component__ = __webpack_require__(17);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_component__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__mdl_dialog_outlet_service__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlDialogOutletModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PUBLIC_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_component__["b" /* MdlDialogInnerOutletComponent */]
];
var PRIVATE_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_component__["a" /* MdlDialogOutletComponent */],
    __WEBPACK_IMPORTED_MODULE_3__mdl_backdrop_overlay_component__["a" /* MdlBackdropOverlayComponent */]
];
var MdlDialogOutletModule = MdlDialogOutletModule_1 = (function () {
    function MdlDialogOutletModule() {
    }
    MdlDialogOutletModule.forRoot = function () {
        return {
            ngModule: MdlDialogOutletModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_2__mdl_dialog_outlet_service__["a" /* MdlDialogOutletService */]]
        };
    };
    return MdlDialogOutletModule;
}());
MdlDialogOutletModule = MdlDialogOutletModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [],
        exports: PUBLIC_COMPONENTS,
        declarations: PUBLIC_COMPONENTS.concat(PRIVATE_COMPONENTS),
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_component__["a" /* MdlDialogOutletComponent */],
            __WEBPACK_IMPORTED_MODULE_3__mdl_backdrop_overlay_component__["a" /* MdlBackdropOverlayComponent */]
        ]
    })
], MdlDialogOutletModule);

var MdlDialogOutletModule_1;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdl_tabs_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_tab_panel_component__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdl_tab_panel_title_component__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_mdl_ripple_directive__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_index__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__angular_common__);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__mdl_tabs_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__mdl_tab_panel_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__mdl_tab_panel_component__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__mdl_tab_panel_title_component__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTabsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var MDL_TABS_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_0__mdl_tabs_component__["a" /* MdlTabsComponent */],
    __WEBPACK_IMPORTED_MODULE_1__mdl_tab_panel_component__["b" /* MdlTabPanelComponent */],
    __WEBPACK_IMPORTED_MODULE_2__mdl_tab_panel_title_component__["a" /* MdlTabPanelTitleComponent */],
    __WEBPACK_IMPORTED_MODULE_1__mdl_tab_panel_component__["a" /* MdlTabPanelContent */]
];
var MdlTabsModule = MdlTabsModule_1 = (function () {
    function MdlTabsModule() {
    }
    MdlTabsModule.forRoot = function () {
        return {
            ngModule: MdlTabsModule_1,
            providers: []
        };
    };
    return MdlTabsModule;
}());
MdlTabsModule = MdlTabsModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_4__common_mdl_ripple_directive__["i" /* MdlRippleModule */], __WEBPACK_IMPORTED_MODULE_5__common_index__["a" /* MdlCommonsModule */], __WEBPACK_IMPORTED_MODULE_6__angular_common__["CommonModule"]],
        exports: MDL_TABS_DIRECTIVES,
        declarations: MDL_TABS_DIRECTIVES.slice(),
    })
], MdlTabsModule);

var MdlTabsModule_1;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toNumber;
function toNumber(value) {
    if (typeof value === 'undefined') {
        return null;
    }
    else if (typeof value === 'string') {
        return parseInt(value);
    }
    return value;
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_component__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdl_backdrop_overlay_component__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlDialogOutletService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MdlDialogOutletService = (function () {
    function MdlDialogOutletService(appRef, componentFactoryResolver) {
        this.appRef = appRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.backdropClickEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        var dialogOutletCompRef = null;
        try {
            dialogOutletCompRef = this.appRef.bootstrap(__WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_component__["a" /* MdlDialogOutletComponent */]);
        }
        catch (e) {
        }
        if (dialogOutletCompRef) {
            this.setViewContainerRef(dialogOutletCompRef.instance.viewContainerRef);
        }
    }
    MdlDialogOutletService.prototype.setDefaultViewContainerRef = function (vCRef) {
        this.setViewContainerRef(vCRef);
    };
    Object.defineProperty(MdlDialogOutletService.prototype, "viewContainerRef", {
        get: function () {
            return this.viewContainerRef_;
        },
        enumerable: true,
        configurable: true
    });
    MdlDialogOutletService.prototype.setViewContainerRef = function (value) {
        var _this = this;
        this.viewContainerRef_ = value;
        if (this.viewContainerRef_) {
            var cFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__mdl_backdrop_overlay_component__["a" /* MdlBackdropOverlayComponent */]);
            this.backdropComponent = this.viewContainerRef_.createComponent(cFactory).instance;
            this.backdropComponent.clickEmitter.subscribe(function () {
                _this.backdropClickEmitter.emit();
            });
        }
    };
    MdlDialogOutletService.prototype.hideBackdrop = function () {
        this.backdropComponent.hide();
    };
    MdlDialogOutletService.prototype.showBackdropWithZIndex = function (zIndex) {
        this.backdropComponent.showWithZIndex(zIndex);
    };
    return MdlDialogOutletService;
}());
MdlDialogOutletService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]])
], MdlDialogOutletService);



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_mdl_error__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_boolean_property__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_number_property__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mdl_layout_header_component__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mdl_layout_drawer_component__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mdl_layout_content_component__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LAYOUT_SCREEN_SIZE_THRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MdLUnsupportedLayoutTypeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MdlScreenSizeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var ESCAPE = 27;
var STANDARD = 'standard';
var WATERFALL = 'waterfall';
var SCROLL = 'scroll';
/**
 * The LAYOUT_SCREEN_SIZE_THRESHOLD can be changed at the root module. Just provide a value for this OpaqueToken:
 *
 * providers: [
 *  {provide:LAYOUT_SCREEN_SIZE_THRESHOLD, useValue: 768 }
 * ]
 *
 * you also need to change the scss variable to the same value: $layout-screen-size-threshold: 768px.
 *
 * It should be clear that this can only be used if you are using the scss and not the pre compiled css from getmdl.io.
 *
 * @type {OpaqueToken}
 */
var LAYOUT_SCREEN_SIZE_THRESHOLD = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('layoutScreenSizeThreshold');
var MdLUnsupportedLayoutTypeError = (function (_super) {
    __extends(MdLUnsupportedLayoutTypeError, _super);
    function MdLUnsupportedLayoutTypeError(type) {
        return _super.call(this, "Layout type \"" + type + "\" isn't supported by mdl-layout (allowed: standard, waterfall, scroll).") || this;
    }
    return MdLUnsupportedLayoutTypeError;
}(__WEBPACK_IMPORTED_MODULE_2__common_mdl_error__["a" /* MdlError */]));

var MdlScreenSizeService = (function () {
    function MdlScreenSizeService(ngZone, layoutScreenSizeThreshold) {
        var _this = this;
        this.ngZone = ngZone;
        this.layoutScreenSizeThreshold = layoutScreenSizeThreshold;
        this.sizesSubject = new __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        // if no value is injected the default size wil be used. same as $layout-screen-size-threshold in scss
        if (!this.layoutScreenSizeThreshold) {
            this.layoutScreenSizeThreshold = 1024;
        }
        // do not try to access the window object if rendered on the server
        if (typeof window === 'object' && 'matchMedia' in window) {
            var query_1 = window.matchMedia("(max-width: " + this.layoutScreenSizeThreshold + "px)");
            var queryListener_1 = function () {
                _this.ngZone.run(function () {
                    // looks like the query addListener runs not in NGZone - inform manually about changes
                    _this.sizesSubject.next(query_1.matches);
                });
            };
            query_1.addListener(queryListener_1);
            this.windowMediaQueryListener = function () {
                query_1.removeListener(queryListener_1);
            };
            // set the initial state
            this.sizesSubject.next(query_1.matches);
        }
    }
    MdlScreenSizeService.prototype.sizes = function () {
        return this.sizesSubject.asObservable();
    };
    MdlScreenSizeService.prototype.destroy = function () {
        if (this.windowMediaQueryListener) {
            this.windowMediaQueryListener();
            this.windowMediaQueryListener = null;
        }
    };
    return MdlScreenSizeService;
}());
MdlScreenSizeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(LAYOUT_SCREEN_SIZE_THRESHOLD)),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], Number])
], MdlScreenSizeService);

var MdlLayoutComponent = (function () {
    function MdlLayoutComponent(renderer, evm, el, ngZone, screenSizeService) {
        this.renderer = renderer;
        this.evm = evm;
        this.el = el;
        this.ngZone = ngZone;
        this.screenSizeService = screenSizeService;
        this.mode = STANDARD;
        this._isFixedDrawer = false;
        this._isFixedHeader = false;
        this._isSeamed = false;
        this._selectedIndex = 0;
        this._isNoDrawer = false;
        this.selectedTabEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.mouseoverTabEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.mouseoutTabEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onOpen = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isDrawerVisible = false;
        this.isSmallScreen = false;
    }
    Object.defineProperty(MdlLayoutComponent.prototype, "isFixedDrawer", {
        get: function () { return this._isFixedDrawer; },
        set: function (value) { this._isFixedDrawer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlLayoutComponent.prototype, "isFixedHeader", {
        get: function () { return this._isFixedHeader; },
        set: function (value) { this._isFixedHeader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlLayoutComponent.prototype, "isSeamed", {
        get: function () { return this._isSeamed; },
        set: function (value) { this._isSeamed = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlLayoutComponent.prototype, "selectedIndex", {
        get: function () { return this._selectedIndex; },
        set: function (value) { this._selectedIndex = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__common_number_property__["a" /* toNumber */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlLayoutComponent.prototype, "isNoDrawer", {
        get: function () { return this._isNoDrawer; },
        set: function (value) { this._isNoDrawer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlLayoutComponent.prototype.ngAfterContentInit = function () {
        this.validateMode();
        if (this.header && this.content && this.content.tabs) {
            this.header.tabs = this.content.tabs;
            this.updateSelectedTabIndex();
        }
        // set this.drawer to null, if the drawer is not a direct child if this layout. It may be a drywer of a sub layout.
        if (this.drawer && !this.drawer.isDrawerDirectChildOf(this)) {
            this.drawer = null;
        }
    };
    MdlLayoutComponent.prototype.ngOnChanges = function (changes) {
        if (changes['selectedIndex']) {
            this.updateSelectedTabIndex();
        }
    };
    MdlLayoutComponent.prototype.updateSelectedTabIndex = function () {
        if (this.header && this.header.tabs) {
            this.header.tabs.forEach(function (tab) { return tab.isActive = false; });
            if (this.header.tabs.toArray().length > 0 && this.selectedIndex < this.header.tabs.toArray().length) {
                this.header.tabs.toArray()[this.selectedIndex].isActive = true;
            }
        }
    };
    MdlLayoutComponent.prototype.validateMode = function () {
        var _this = this;
        if (this.mode === '') {
            this.mode = STANDARD;
        }
        if ([STANDARD, WATERFALL, SCROLL].indexOf(this.mode) === -1) {
            throw new MdLUnsupportedLayoutTypeError(this.mode);
        }
        if (this.header) {
            // inform the header about the mode
            this.header.mode = this.mode;
            this.header.isSeamed = this.isSeamed;
        }
        if (this.content) {
            this.scrollListener = this.renderer.listen(this.content.el, 'scroll', function (e) {
                _this.onScroll(_this.content.el.scrollTop);
            });
            this.screenSizeService.sizes().subscribe(function (isSmall) {
                _this.onQueryChange(isSmall);
            });
        }
    };
    MdlLayoutComponent.prototype.onScroll = function (scrollTop) {
        if (this.mode !== WATERFALL) {
            return;
        }
        if (this.header.isAnimating) {
            return;
        }
        var headerVisible = !this.isSmallScreen || this.isFixedHeader;
        if (scrollTop > 0 && !this.header.isCompact) {
            this.header.isCompact = true;
            if (headerVisible) {
                this.header.isAnimating = true;
            }
        }
        else if (scrollTop <= 0 && this.header.isCompact) {
            this.header.isCompact = false;
            if (headerVisible) {
                this.header.isAnimating = true;
            }
        }
    };
    MdlLayoutComponent.prototype.onQueryChange = function (isSmall) {
        if (isSmall) {
            this.isSmallScreen = true;
        }
        else {
            this.isSmallScreen = false;
            this.closeDrawer();
        }
    };
    MdlLayoutComponent.prototype.toggleDrawer = function () {
        this.isDrawerVisible = !this.isDrawerVisible;
        if (this.drawer) {
            this.setDrawerVisible(this.isDrawerVisible);
        }
    };
    MdlLayoutComponent.prototype.closeDrawer = function () {
        this.isDrawerVisible = false;
        if (this.drawer) {
            this.setDrawerVisible(false);
        }
    };
    MdlLayoutComponent.prototype.setDrawerVisible = function (visible) {
        this.drawer.isDrawerVisible = visible;
        this.drawer.isDrawerVisible ? this.onOpen.emit() : this.onClose.emit();
    };
    MdlLayoutComponent.prototype.obfuscatorKeyDown = function ($event) {
        if ($event.keyCode === ESCAPE) {
            this.toggleDrawer();
        }
    };
    MdlLayoutComponent.prototype.ngOnDestroy = function () {
        if (this.scrollListener) {
            this.scrollListener();
            this.scrollListener = null;
        }
        this.screenSizeService.destroy();
    };
    // triggered from mdl-layout-header.component
    MdlLayoutComponent.prototype.tabSelected = function (tab) {
        var index = this.header.tabs.toArray().indexOf(tab);
        if (index != this.selectedIndex) {
            this.selectedIndex = index;
            this.updateSelectedTabIndex();
            this.selectedTabEmitter.emit({ index: this.selectedIndex });
        }
    };
    // triggered from mdl-layout-header.component
    MdlLayoutComponent.prototype.onTabMouseover = function (tab) {
        var index = this.header.tabs.toArray().indexOf(tab);
        this.mouseoverTabEmitter.emit({ index: index });
    };
    // triggered from mdl-layout-header.component
    MdlLayoutComponent.prototype.onTabMouseout = function (tab) {
        var index = this.header.tabs.toArray().indexOf(tab);
        this.mouseoutTabEmitter.emit({ index: index });
    };
    MdlLayoutComponent.prototype.closeDrawerOnSmallScreens = function () {
        if (this.isSmallScreen && this.isDrawerVisible) {
            this.closeDrawer();
        }
    };
    MdlLayoutComponent.prototype.hasDrawer = function () {
        return !!this.drawer;
    };
    return MdlLayoutComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_5__mdl_layout_header_component__["a" /* MdlLayoutHeaderComponent */]),
    __metadata("design:type", Object)
], MdlLayoutComponent.prototype, "header", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_6__mdl_layout_drawer_component__["a" /* MdlLayoutDrawerComponent */]),
    __metadata("design:type", Object)
], MdlLayoutComponent.prototype, "drawer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_7__mdl_layout_content_component__["a" /* MdlLayoutContentComponent */]),
    __metadata("design:type", Object)
], MdlLayoutComponent.prototype, "content", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-layout-mode'),
    __metadata("design:type", String)
], MdlLayoutComponent.prototype, "mode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-layout-fixed-drawer'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdlLayoutComponent.prototype, "isFixedDrawer", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-layout-fixed-header'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdlLayoutComponent.prototype, "isFixedHeader", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-layout-header-seamed'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdlLayoutComponent.prototype, "isSeamed", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-layout-tab-active-index'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdlLayoutComponent.prototype, "selectedIndex", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-layout-no-drawer-button'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdlLayoutComponent.prototype, "isNoDrawer", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('mdl-layout-tab-active-changed'),
    __metadata("design:type", Object)
], MdlLayoutComponent.prototype, "selectedTabEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('mdl-layout-tab-mouseover'),
    __metadata("design:type", Object)
], MdlLayoutComponent.prototype, "mouseoverTabEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('mdl-layout-tab-mouseout'),
    __metadata("design:type", Object)
], MdlLayoutComponent.prototype, "mouseoutTabEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('open'),
    __metadata("design:type", Object)
], MdlLayoutComponent.prototype, "onOpen", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('close'),
    __metadata("design:type", Object)
], MdlLayoutComponent.prototype, "onClose", void 0);
MdlLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-layout',
        template: "\n    <div class=\"mdl-layout__container\" [ngClass]=\"{'has-scrolling-header': mode==='scroll'}\">\n     <div class=\"mdl-layout is-upgraded\"\n          [ngClass]=\"{\n          'is-small-screen': isSmallScreen,\n          'mdl-layout--fixed-drawer': isFixedDrawer,\n          'mdl-layout--fixed-header': isFixedHeader,\n          'mdl-layout--fixed-tabs': 'tabs.toArray().length > 0'\n          }\">\n        <ng-content select=\"mdl-layout-header\"></ng-content>\n        <ng-content select=\"mdl-layout-drawer\"></ng-content>\n        <div *ngIf=\"drawer && isNoDrawer==false\" class=\"mdl-layout__drawer-button\" (click)=\"toggleDrawer()\">\n           <mdl-icon>&#xE5D2;</mdl-icon>\n        </div>\n        <ng-content select=\"mdl-layout-content\"></ng-content>\n        <div class=\"mdl-layout__obfuscator\"\n             [ngClass]=\"{'is-visible':isDrawerVisible}\"\n             (click)=\"toggleDrawer()\"\n             (keydown)=\"obfuscatorKeyDown($event)\"></div>\n     </div>\n    </div>\n  ",
        exportAs: 'mdlLayout',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
        __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["EventManager"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
        MdlScreenSizeService])
], MdlLayoutComponent);



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_menu_item_component__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_mdl_error__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlMenuError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MdlMenuRegisty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlMenuComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BOTTOM_LEFT = 'bottom-left';
var BOTTOM_RIGHT = 'bottom-right';
var TOP_LEFT = 'top-left';
var TOP_RIGHT = 'top-right';
var UNALIGNED = 'unaligned';
// Total duration of the menu animation.
var TRANSITION_DURATION_SECONDS = 0.3;
// The fraction of the total duration we want to use for menu item animations.
var TRANSITION_DURATION_FRACTION = 0.8;
// How long the menu stays open after choosing an option (so the user can see
// the ripple).
var CLOSE_TIMEOUT = 175;
var CSS_ALIGN_MAP = {};
CSS_ALIGN_MAP[BOTTOM_LEFT] = 'mdl-menu--bottom-left';
CSS_ALIGN_MAP[BOTTOM_RIGHT] = 'mdl-menu--bottom-right';
CSS_ALIGN_MAP[TOP_LEFT] = 'mdl-menu--top-left';
CSS_ALIGN_MAP[TOP_RIGHT] = 'mdl-menu--top-right';
CSS_ALIGN_MAP[UNALIGNED] = 'mdl-menu--unaligned';
var MdlMenuError = (function (_super) {
    __extends(MdlMenuError, _super);
    function MdlMenuError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MdlMenuError;
}(__WEBPACK_IMPORTED_MODULE_2__common_mdl_error__["a" /* MdlError */]));

var MdlMenuRegisty = (function () {
    function MdlMenuRegisty() {
        this.menuComponents = [];
    }
    MdlMenuRegisty.prototype.add = function (menuComponent) {
        this.menuComponents.push(menuComponent);
    };
    MdlMenuRegisty.prototype.remove = function (menuComponent) {
        this.menuComponents.slice(this.menuComponents.indexOf(menuComponent), 1);
    };
    MdlMenuRegisty.prototype.hideAllExcept = function (menuComponent) {
        this.menuComponents.forEach(function (component) {
            if (component !== menuComponent) {
                component.hide();
            }
        });
    };
    return MdlMenuRegisty;
}());
MdlMenuRegisty = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], MdlMenuRegisty);

var MdlMenuComponent = (function () {
    function MdlMenuComponent(renderer, menuRegistry) {
        this.renderer = renderer;
        this.menuRegistry = menuRegistry;
        this.cssPosition = 'mdl-menu--bottom-left';
        this.isVisible = false;
        this.menuRegistry.add(this);
    }
    MdlMenuComponent.prototype.ngOnInit = function () {
        this.cssPosition = CSS_ALIGN_MAP[this.position] || BOTTOM_LEFT;
    };
    MdlMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.container = this.containerChild.nativeElement;
        this.menuElement = this.menuElementChild.nativeElement;
        this.outline = this.outlineChild.nativeElement;
        // Add a click listener to the document, to close the menu.
        var callback = function () {
            if (_this.isVisible) {
                _this.hide();
            }
        };
        this.renderer.listenGlobal('window', 'click', callback);
        this.renderer.listenGlobal('window', 'touchstart', callback);
    };
    MdlMenuComponent.prototype.toggle = function (event, mdlButton) {
        if (!mdlButton) {
            throw new MdlMenuError("MdlButtonComponent is required");
        }
        if (this.isVisible) {
            this.hide();
        }
        else {
            this.show(event, mdlButton);
        }
    };
    MdlMenuComponent.prototype.hideOnItemClicked = function () {
        var _this = this;
        // Wait some time before closing menu, so the user can see the ripple.
        setTimeout(function () {
            _this.hide();
        }, CLOSE_TIMEOUT);
    };
    MdlMenuComponent.prototype.hide = function () {
        // Remove all transition delays; menu items fade out concurrently.
        this.menuItemComponents.toArray().forEach(function (mi) {
            mi.element.style.removeProperty('transition-delay');
        });
        // Measure the inner element.
        var rect = this.menuElement.getBoundingClientRect();
        var height = rect.height;
        var width = rect.width;
        // Turn on animation, and apply the final clip. Also make invisible.
        // This triggers the transitions.
        this.renderer.setElementClass(this.menuElement, 'is-animating', true);
        this.applyClip(height, width);
        this.renderer.setElementClass(this.container, 'is-visible', false);
        // Clean up after the animation is complete.
        this.addAnimationEndListener();
        this.isVisible = false;
    };
    MdlMenuComponent.prototype.show = function (event, mdlButton) {
        var _this = this;
        this.menuRegistry.hideAllExcept(this);
        event.stopPropagation();
        var forElement = mdlButton.element;
        var rect = forElement.getBoundingClientRect();
        var forRect = forElement.parentElement.getBoundingClientRect();
        if (this.position == UNALIGNED) {
        }
        else if (this.position == BOTTOM_RIGHT) {
            // Position below the "for" element, aligned to its right.
            this.container.style.right = (forRect.right - rect.right) + 'px';
            this.container.style.top = forElement.offsetTop + forElement.offsetHeight + 'px';
        }
        else if (this.position == TOP_LEFT) {
            // Position above the "for" element, aligned to its left.
            this.container.style.left = forElement.offsetLeft + 'px';
            this.container.style.bottom = (forRect.bottom - rect.top) + 'px';
        }
        else if (this.position == TOP_RIGHT) {
            // Position above the "for" element, aligned to its right.
            this.container.style.right = (forRect.right - rect.right) + 'px';
            this.container.style.bottom = (forRect.bottom - rect.top) + 'px';
        }
        else {
            // Default: position below the "for" element, aligned to its left.
            this.container.style.left = forElement.offsetLeft + 'px';
            this.container.style.top = forElement.offsetTop + forElement.offsetHeight + 'px';
        }
        // Measure the inner element.
        var height = this.menuElement.getBoundingClientRect().height;
        var width = this.menuElement.getBoundingClientRect().width;
        this.container.style.width = width + 'px';
        this.container.style.height = height + 'px';
        this.outline.style.width = width + 'px';
        this.outline.style.height = height + 'px';
        var transitionDuration = TRANSITION_DURATION_SECONDS * TRANSITION_DURATION_FRACTION;
        this.menuItemComponents.toArray().forEach(function (mi) {
            var itemDelay = null;
            if ((_this.position == TOP_LEFT) || _this.position == TOP_RIGHT) {
                itemDelay = ((height - mi.element.offsetTop - mi.element.offsetHeight) / height * transitionDuration) + 's';
            }
            else {
                itemDelay = (mi.element.offsetTop / height * transitionDuration) + 's';
            }
            mi.element.style.transitionDelay = itemDelay;
        });
        // Apply the initial clip to the text before we start animating.
        this.applyClip(height, width);
        this.renderer.setElementClass(this.container, 'is-visible', true);
        this.menuElement.style.clip = 'rect(0 ' + width + 'px ' + height + 'px 0)';
        this.renderer.setElementClass(this.menuElement, 'is-animating', true);
        this.addAnimationEndListener();
        this.isVisible = true;
    };
    MdlMenuComponent.prototype.addAnimationEndListener = function () {
        var _this = this;
        this.renderer.listen(this.menuElement, 'transitionend', function () {
            _this.renderer.setElementClass(_this.menuElement, 'is-animating', false);
        });
    };
    MdlMenuComponent.prototype.applyClip = function (height, width) {
        if (this.position == UNALIGNED) {
            // Do not clip.
            this.menuElement.style.clip = '';
        }
        else if (this.position == BOTTOM_RIGHT) {
            // Clip to the top right corner of the menu.
            this.menuElement.style.clip = 'rect(0 ' + width + 'px ' + '0 ' + width + 'px)';
        }
        else if (this.position == TOP_LEFT) {
            // Clip to the bottom left corner of the menu.
            this.menuElement.style.clip = 'rect(' + height + 'px 0 ' + height + 'px 0)';
        }
        else if (this.position == TOP_RIGHT) {
            // Clip to the bottom right corner of the menu.
            this.menuElement.style.clip = 'rect(' + height + 'px ' + width + 'px ' + height + 'px ' + width + 'px)';
        }
        else {
            // Default: do not clip (same as clipping to the top left corner).
            this.menuElement.style.clip = '';
        }
    };
    MdlMenuComponent.prototype.ngOnDestroy = function () {
        this.menuRegistry.remove(this);
    };
    return MdlMenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-menu-position'),
    __metadata("design:type", String)
], MdlMenuComponent.prototype, "position", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('container'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], MdlMenuComponent.prototype, "containerChild", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('menuElement'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], MdlMenuComponent.prototype, "menuElementChild", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('outline'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], MdlMenuComponent.prototype, "outlineChild", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_1__mdl_menu_item_component__["a" /* MdlMenuItemComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], MdlMenuComponent.prototype, "menuItemComponents", void 0);
MdlMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-menu',
        host: {},
        exportAs: 'mdlMenu',
        template: "\n   <div #container class=\"mdl-menu__container is-upgraded\">\n      <div #outline class=\"mdl-menu__outline\"\n         [ngClass]=\"cssPosition\"\n      ></div>\n      <div class=\"mdl-menu\" #menuElement>\n         <ng-content></ng-content>\n      </div>\n   </div>\n  ",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], MdlMenuRegisty])
], MdlMenuComponent);



/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlBackdropOverlayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MdlBackdropOverlayComponent = (function () {
    function MdlBackdropOverlayComponent() {
        this.clickEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.visible = false;
        this.zIndex = 0;
    }
    Object.defineProperty(MdlBackdropOverlayComponent.prototype, "display", {
        get: function () {
            return this.visible ? null : 'none';
        },
        enumerable: true,
        configurable: true
    });
    MdlBackdropOverlayComponent.prototype.onBackdropClick = function (e) {
        this.clickEmitter.emit();
        e.stopPropagation();
    };
    MdlBackdropOverlayComponent.prototype.hide = function () {
        this.visible = false;
    };
    MdlBackdropOverlayComponent.prototype.showWithZIndex = function (zIndex) {
        this.zIndex = zIndex;
        this.visible = true;
    };
    return MdlBackdropOverlayComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.display'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], MdlBackdropOverlayComponent.prototype, "display", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.zIndex'),
    __metadata("design:type", Object)
], MdlBackdropOverlayComponent.prototype, "zIndex", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MdlBackdropOverlayComponent.prototype, "onBackdropClick", null);
MdlBackdropOverlayComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-backdrop-overlay',
        host: {
            '[class.dialog-backdrop]': 'true',
        },
        template: "",
        styles: [
            "    \n      .dialog-backdrop {\n        position: fixed;\n        top: 0; right: 0; bottom: 0; left: 0;\n        background: rgba(0,0,0,0.1);\n      }\n    "
        ],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], MdlBackdropOverlayComponent);



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_mdl_button_component__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_dialog_reference__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlDialogHostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var enterTransitionDuration = 300;
var leaveTransitionDuration = 250;
var enterTransitionEasingCurve = 'cubic-bezier(0.0, 0.0, 0.2, 1)';
var leaveTransitionEasingCurve = 'cubic-bezier(0.0, 0.0, 0.2, 1)';
// @experimental
var MdlDialogHostComponent = (function () {
    function MdlDialogHostComponent(ngZone, renderer, animDriver, elementRef, config, internalDialogRef) {
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.animDriver = animDriver;
        this.elementRef = elementRef;
        this.config = config;
        this.internalDialogRef = internalDialogRef;
        this.visible = false;
        this.showAnimationStartStyle = {
            top: '38%',
            opacity: '0',
            visibility: 'visible'
        };
        this.showStyle = {
            top: '50%',
            opacity: '1',
            visibility: 'visible'
        };
        this.hideAnimationEndStyle = {
            top: '63%',
            opacity: '0',
            visibility: 'visible'
        };
        this.zIndex = __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__["c" /* MIN_DIALOG_Z_INDEX */] + 1;
    }
    MdlDialogHostComponent.prototype.show = function () {
        var _this = this;
        if (!this.isAnimateEnabled()) {
            this.visible = true;
            // give the dialogs time to draw so that a focus can be set
            setTimeout(function () {
                _this.internalDialogRef.visible();
            });
        }
        else {
            if (this.config.openFrom || this.config.closeTo) {
                // transform is modified during anmiation and must be part of each animation keyframe.
                this.showStyle['transform'] = 'translate(0, -50%) scale(1.0)';
                var targetClientRect = this.elementRef.nativeElement.getBoundingClientRect();
                var openFromRect = this.getClientRect(this.config.openFrom);
                var closeToRect = this.config.closeTo ? this.getClientRect(this.config.closeTo) : openFromRect;
                var centerTarget = this.getCenterInScreen(targetClientRect);
                var centerFrom = this.getCenterInScreen(openFromRect);
                var centerTo = this.getCenterInScreen(closeToRect);
                var translationFrom = {
                    x: Math.round(centerFrom.cx - centerTarget.cx),
                    y: Math.round(centerFrom.cy - centerTarget.cy),
                    scaleX: Math.round(100 * Math.min(0.25, openFromRect.width / targetClientRect.width)) / 100,
                    scaleY: Math.round(100 * Math.min(0.25, openFromRect.height / targetClientRect.height)) / 100
                };
                this.showAnimationStartStyle = {
                    top: targetClientRect.top + "px",
                    opacity: '0',
                    visibility: 'visible',
                    transform: "translate(" + translationFrom.x + "px, " + translationFrom.y + "px) scale(" + translationFrom.scaleX + ", " + translationFrom.scaleY + ")"
                };
                var translationTo = {
                    x: Math.round(centerTo.cx - centerTarget.cx),
                    y: Math.round(centerTo.cy - centerTarget.cy),
                    scaleX: Math.round(100 * Math.min(0.25, closeToRect.width / targetClientRect.width)) / 100,
                    scaleY: Math.round(100 * Math.min(0.25, closeToRect.height / targetClientRect.height)) / 100
                };
                this.hideAnimationEndStyle = {
                    top: targetClientRect.top + "px",
                    opacity: '0',
                    visibility: 'visible',
                    transform: "translate(" + translationTo.x + "px, " + translationTo.y + "px) scale(" + translationTo.scaleX + ", " + translationTo.scaleY + ")"
                };
            }
            var animation = this.animDriver.animate(this.elementRef.nativeElement, [
                this.showAnimationStartStyle,
                this.showStyle
            ], this.config.enterTransitionDuration || enterTransitionDuration, 0, this.config.enterTransitionEasingCurve || enterTransitionEasingCurve);
            animation.onDone(function () {
                _this.ngZone.run(function () {
                    _this.visible = true;
                });
            });
            animation.play();
            this.internalDialogRef.visible();
        }
    };
    MdlDialogHostComponent.prototype.hide = function (selfComponentRef) {
        var _this = this;
        if (this.isAnimateEnabled()) {
            var animation = this.animDriver.animate(this.elementRef.nativeElement, [
                this.showStyle,
                this.hideAnimationEndStyle
            ], this.config.leaveTransitionDuration || leaveTransitionDuration, 0, this.config.leaveTransitionEasingCurve || leaveTransitionEasingCurve);
            animation.onDone(function () {
                _this.ngZone.run(function () {
                    selfComponentRef.destroy();
                });
            });
            animation.play();
        }
        else {
            selfComponentRef.destroy();
        }
    };
    MdlDialogHostComponent.prototype.ngOnInit = function () {
        this.applyStyle(this.config.styles);
        this.applyClasses(this.config.classes ? this.config.classes : '');
    };
    MdlDialogHostComponent.prototype.applyStyle = function (styles) {
        if (styles) {
            for (var style in styles) {
                this.renderer.setElementStyle(this.elementRef.nativeElement, style, styles[style]);
            }
        }
    };
    MdlDialogHostComponent.prototype.applyClasses = function (classes) {
        var _this = this;
        classes.split(' ').filter(function (cssClass) { return !!cssClass; }).forEach(function (cssClass) {
            _this.renderer.setElementClass(_this.elementRef.nativeElement, cssClass, true);
        });
    };
    MdlDialogHostComponent.prototype.isAnimateEnabled = function () {
        // not present?  assume it is true.
        if (typeof this.config.animate === 'undefined') {
            return true;
        }
        return this.config.animate;
    };
    MdlDialogHostComponent.prototype.getClientRect = function (input) {
        if (input instanceof __WEBPACK_IMPORTED_MODULE_2__button_mdl_button_component__["c" /* MdlButtonComponent */]) {
            var elRef = input.elementRef;
            var rect = elRef.nativeElement.getBoundingClientRect();
            return this.createOpenCloseRect(rect);
        }
        else if (input instanceof MouseEvent) {
            var evt = input;
            // just to make it possible to test this code with a fake event - target is
            // readonly and con not be mutated.
            var htmlElement = (evt.target || evt['testtarget']);
            var rect = htmlElement.getBoundingClientRect();
            return this.createOpenCloseRect(rect);
        }
        return input;
    };
    MdlDialogHostComponent.prototype.createOpenCloseRect = function (rect) {
        return {
            height: rect.top - rect.bottom,
            left: rect.left,
            top: rect.top,
            width: rect.right - rect.left
        };
    };
    MdlDialogHostComponent.prototype.getCenterInScreen = function (rect) {
        return {
            cx: Math.round(rect.left + (rect.width / 2)),
            cy: Math.round(rect.top + (rect.height / 2))
        };
    };
    return MdlDialogHostComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogTarget', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
    __metadata("design:type", Object)
], MdlDialogHostComponent.prototype, "dialogTarget", void 0);
MdlDialogHostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-dialog-host-component',
        host: {
            '[class.mdl-dialog]': 'true',
            '[class.open]': 'visible',
            '[style.zIndex]': 'zIndex',
        },
        template: "<div #dialogTarget></div>",
        styles: [
            "\n    mdl-dialog-host-component {\n      width: -moz-fit-content;\n      width: -webkit-fit-content;\n      width: fit-content;\n      height: -moz-fit-content;\n      height: -webkit-fit-content;\n      height: fit-content;\n      padding: 1em;\n      background: white;\n      color: black;\n      opacity: 1;\n      visibility: hidden;\n      display: block;\n      position: fixed;\n      margin: auto;\n      left: 0;\n      right: 0;\n      transition: all;\n      top: 50%;\n      transform: translate(0, -50%);\n    }\n    \n    mdl-dialog-host-component.open {\n      visibility: visible;\n    }\n    \n    "
        ],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(4, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__["a" /* MDL_CONFIGUARTION */]; }))),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
        __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["AnimationDriver"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], Object, __WEBPACK_IMPORTED_MODULE_3__internal_dialog_reference__["a" /* InternalMdlDialogReference */]])
], MdlDialogHostComponent);



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlSimpleDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MdlSimpleDialogComponent = (function () {
    // why do i need forwardRef at this point, the demo LoginDialog dosn't need this!?!?
    function MdlSimpleDialogComponent(dialogConfiguration, dialog) {
        var _this = this;
        this.dialogConfiguration = dialogConfiguration;
        this.dialog = dialog;
        dialog.onVisible().subscribe(function () {
            if (_this.buttons) {
                _this.buttons.first.nativeElement.focus();
            }
        });
    }
    MdlSimpleDialogComponent.prototype.actionClicked = function (action) {
        action.handler();
        this.dialog.hide();
    };
    MdlSimpleDialogComponent.prototype.onEsc = function () {
        // run the first action that is marked as closing action
        var closeAction = this.dialogConfiguration.actions.find(function (action) { return action.isClosingAction; });
        if (closeAction) {
            closeAction.handler();
            this.dialog.hide();
        }
    };
    return MdlSimpleDialogComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('button'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], MdlSimpleDialogComponent.prototype, "buttons", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown.esc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MdlSimpleDialogComponent.prototype, "onEsc", null);
MdlSimpleDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-dialog-component',
        template: "\n      <h3 class=\"mdl-dialog__title\" *ngIf=\"dialogConfiguration?.title\">{{dialogConfiguration?.title}}</h3>\n      <div class=\"mdl-dialog__content\" [innerHTML]=\"dialogConfiguration?.message\"></div>\n      <div \n        class=\"mdl-dialog__actions\" \n        [ngClass]=\"{'mdl-dialog__actions--full-width': dialogConfiguration?.fullWidthAction}\">\n        <button\n          #button\n          type=\"button\" \n          class=\"mdl-button mdl-color-text--primary\" \n          *ngFor=\"let action of dialogConfiguration?.actions\" \n          (click)=\"actionClicked(action)\"\n          [ngClass]=\"{'close': action.isClosingAction}\">{{action.text}}</button>\n      </div>\n  ",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__["a" /* MDL_CONFIGUARTION */]; }))),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__["b" /* MdlDialogReference */]; }))),
    __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__["b" /* MdlDialogReference */]])
], MdlSimpleDialogComponent);



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlBadgeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlBadgeOverlapDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MdlBadgeNoBackgroundDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MdlBadgeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MdlBadgeDirective = (function () {
    function MdlBadgeDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.el = elementRef.nativeElement;
    }
    MdlBadgeDirective.prototype.ngOnChanges = function (changes) {
        this.renderer.setElementAttribute(this.el, 'data-badge', this.mdlBadgeContent);
    };
    return MdlBadgeDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-badge'),
    __metadata("design:type", String)
], MdlBadgeDirective.prototype, "mdlBadgeContent", void 0);
MdlBadgeDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mdl-badge]',
        host: {
            '[class.mdl-badge]': 'true'
        }
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], MdlBadgeDirective);

var MdlBadgeOverlapDirective = (function () {
    function MdlBadgeOverlapDirective() {
    }
    return MdlBadgeOverlapDirective;
}());
MdlBadgeOverlapDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mdl-badge-overlap]',
        host: {
            '[class.mdl-badge--overlap]': 'true'
        }
    })
], MdlBadgeOverlapDirective);

var MdlBadgeNoBackgroundDirective = (function () {
    function MdlBadgeNoBackgroundDirective() {
    }
    return MdlBadgeNoBackgroundDirective;
}());
MdlBadgeNoBackgroundDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mdl-badge-no-background]',
        host: {
            '[class.mdl-badge--no-background]': 'true'
        }
    })
], MdlBadgeNoBackgroundDirective);

var MDL_BADGE_DIRECTIVES = [MdlBadgeDirective, MdlBadgeOverlapDirective, MdlBadgeNoBackgroundDirective];
var MdlBadgeModule = MdlBadgeModule_1 = (function () {
    function MdlBadgeModule() {
    }
    MdlBadgeModule.forRoot = function () {
        return {
            ngModule: MdlBadgeModule_1,
            providers: []
        };
    };
    return MdlBadgeModule;
}());
MdlBadgeModule = MdlBadgeModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [],
        exports: MDL_BADGE_DIRECTIVES,
        declarations: MDL_BADGE_DIRECTIVES,
    })
], MdlBadgeModule);

var MdlBadgeModule_1;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlCardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlCardChildStructure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MdlCardTitleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MdlCardSupportingTextComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MdlCardMediaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MdlCardActionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return MdlCardMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return MdlCardTitleTextDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return MdlCardBorderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return MdlCardExpandDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return MdlCardModule; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MdlCardComponent = (function () {
    function MdlCardComponent() {
    }
    return MdlCardComponent;
}());
MdlCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-card',
        host: {
            '[class.mdl-card]': 'true'
        },
        template: '<ng-content></ng-content>',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], MdlCardComponent);

var MdlCardChildStructure = (function () {
    function MdlCardChildStructure(mdlCardComponent, childComponentName) {
        this.mdlCardComponent = mdlCardComponent;
        this.childComponentName = childComponentName;
    }
    MdlCardChildStructure.prototype.ngOnInit = function () {
        if (this.mdlCardComponent === null) {
            throw new __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["b" /* MdlStructureError */](this.childComponentName, 'mdl-card');
        }
    };
    return MdlCardChildStructure;
}());

var MdlCardTitleComponent = (function (_super) {
    __extends(MdlCardTitleComponent, _super);
    function MdlCardTitleComponent(mdlCardComponent) {
        return _super.call(this, mdlCardComponent, 'mdl-card-title') || this;
    }
    MdlCardTitleComponent.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    return MdlCardTitleComponent;
}(MdlCardChildStructure));
MdlCardTitleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-card-title',
        host: {
            '[class.mdl-card__title]': 'true'
        },
        template: '<ng-content></ng-content>',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [MdlCardComponent])
], MdlCardTitleComponent);

var MdlCardSupportingTextComponent = (function (_super) {
    __extends(MdlCardSupportingTextComponent, _super);
    function MdlCardSupportingTextComponent(mdlCardComponent) {
        return _super.call(this, mdlCardComponent, 'mdl-card-supporting-text') || this;
    }
    MdlCardSupportingTextComponent.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    return MdlCardSupportingTextComponent;
}(MdlCardChildStructure));
MdlCardSupportingTextComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-card-supporting-text',
        host: {
            '[class.mdl-card__supporting-text]': 'true'
        },
        template: '<ng-content></ng-content>',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [MdlCardComponent])
], MdlCardSupportingTextComponent);

var MdlCardMediaComponent = (function (_super) {
    __extends(MdlCardMediaComponent, _super);
    function MdlCardMediaComponent(mdlCardComponent) {
        return _super.call(this, mdlCardComponent, 'mdl-card-media') || this;
    }
    MdlCardMediaComponent.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    return MdlCardMediaComponent;
}(MdlCardChildStructure));
MdlCardMediaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-card-media',
        host: {
            '[class.mdl-card__media]': 'true'
        },
        template: '<ng-content></ng-content>',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [MdlCardComponent])
], MdlCardMediaComponent);

var MdlCardActionsComponent = (function (_super) {
    __extends(MdlCardActionsComponent, _super);
    function MdlCardActionsComponent(mdlCardComponent) {
        return _super.call(this, mdlCardComponent, 'mdl-card-actions') || this;
    }
    MdlCardActionsComponent.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    return MdlCardActionsComponent;
}(MdlCardChildStructure));
MdlCardActionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-card-actions',
        host: {
            '[class.mdl-card__actions]': 'true'
        },
        template: '<ng-content></ng-content>',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [MdlCardComponent])
], MdlCardActionsComponent);

var MdlCardMenuComponent = (function (_super) {
    __extends(MdlCardMenuComponent, _super);
    function MdlCardMenuComponent(mdlCardComponent) {
        return _super.call(this, mdlCardComponent, 'mdl-card-menu') || this;
    }
    MdlCardMenuComponent.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    return MdlCardMenuComponent;
}(MdlCardChildStructure));
MdlCardMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-card-menu',
        host: {
            '[class.mdl-card__menu]': 'true'
        },
        template: '<ng-content></ng-content>',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [MdlCardComponent])
], MdlCardMenuComponent);

var MdlCardTitleTextDirective = (function () {
    function MdlCardTitleTextDirective() {
    }
    return MdlCardTitleTextDirective;
}());
MdlCardTitleTextDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mdl-card-title-text]',
        host: {
            '[class.mdl-card__title-text]': 'true'
        }
    })
], MdlCardTitleTextDirective);

var MdlCardBorderDirective = (function () {
    function MdlCardBorderDirective() {
    }
    return MdlCardBorderDirective;
}());
MdlCardBorderDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mdl-card-border]',
        host: {
            '[class.mdl-card--border]': 'true'
        }
    })
], MdlCardBorderDirective);

var MdlCardExpandDirective = (function () {
    function MdlCardExpandDirective() {
    }
    return MdlCardExpandDirective;
}());
MdlCardExpandDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mdl-card-expand]',
        host: {
            '[class.mdl-card--expand]': 'true'
        }
    })
], MdlCardExpandDirective);

var MDL_CARD_DIRECTIVES = [
    MdlCardComponent,
    MdlCardTitleComponent,
    MdlCardMediaComponent,
    MdlCardSupportingTextComponent,
    MdlCardActionsComponent,
    MdlCardMenuComponent,
    MdlCardTitleTextDirective,
    MdlCardBorderDirective,
    MdlCardExpandDirective
];
var MdlCardModule = MdlCardModule_1 = (function () {
    function MdlCardModule() {
    }
    MdlCardModule.forRoot = function () {
        return {
            ngModule: MdlCardModule_1,
            providers: []
        };
    };
    return MdlCardModule;
}());
MdlCardModule = MdlCardModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [],
        exports: MDL_CARD_DIRECTIVES,
        declarations: MDL_CARD_DIRECTIVES,
    })
], MdlCardModule);

var MdlCardModule_1;


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_mdl_icon_component__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdl_chip_component__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdl_chip_contact_directive__ = __webpack_require__(38);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__mdl_chip_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__mdl_chip_contact_directive__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlChipModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_3__mdl_chip_component__["a" /* MdlChipComponent */], __WEBPACK_IMPORTED_MODULE_4__mdl_chip_contact_directive__["a" /* MdlChipContactDirective */]];
var MdlChipModule = MdlChipModule_1 = (function () {
    function MdlChipModule() {
    }
    MdlChipModule.forRoot = function () {
        return {
            ngModule: MdlChipModule_1,
            providers: []
        };
    };
    return MdlChipModule;
}());
MdlChipModule = MdlChipModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__icon_mdl_icon_component__["b" /* MdlIconModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        exports: DIRECTIVES,
        declarations: DIRECTIVES,
    })
], MdlChipModule);

var MdlChipModule_1;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdl_dialog_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdl_dialog_component__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdl_simple_dialog_component__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_index__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mdl_dialog_host_component__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mdl_alert_component__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dialog_outlet_index__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__button_mdl_button_component__ = __webpack_require__(4);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__mdl_dialog_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__mdl_dialog_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__mdl_dialog_service__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__mdl_dialog_service__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__mdl_dialog_service__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_7__mdl_alert_component__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlDialogModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var PUBLIC_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_3__mdl_dialog_component__["a" /* MdlDialogComponent */],
    __WEBPACK_IMPORTED_MODULE_7__mdl_alert_component__["a" /* MdlAlertComponent */]
];
var PRIVATE_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_6__mdl_dialog_host_component__["a" /* MdlDialogHostComponent */],
    __WEBPACK_IMPORTED_MODULE_4__mdl_simple_dialog_component__["a" /* MdlSimpleDialogComponent */]
];
var MdlDialogModule = MdlDialogModule_1 = (function () {
    function MdlDialogModule() {
    }
    MdlDialogModule.forRoot = function () {
        return {
            ngModule: MdlDialogModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_2__mdl_dialog_service__["d" /* MdlDialogService */]]
        };
    };
    return MdlDialogModule;
}());
MdlDialogModule = MdlDialogModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__common_index__["a" /* MdlCommonsModule */],
            __WEBPACK_IMPORTED_MODULE_9__button_mdl_button_component__["d" /* MdlButtonModule */],
            __WEBPACK_IMPORTED_MODULE_8__dialog_outlet_index__["a" /* MdlDialogOutletModule */].forRoot()
        ],
        exports: PUBLIC_COMPONENTS.slice(),
        declarations: PUBLIC_COMPONENTS.concat(PRIVATE_COMPONENTS),
        entryComponents: PUBLIC_COMPONENTS.concat(PRIVATE_COMPONENTS)
    })
], MdlDialogModule);

var MdlDialogModule_1;


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icon_mdl_icon_component__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkbox_mdl_checkbox_component__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlIconToggleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlIconToggleModule; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MdlIconToggleComponent = MdlIconToggleComponent_1 = (function (_super) {
    __extends(MdlIconToggleComponent, _super);
    function MdlIconToggleComponent(elementRef, renderer) {
        return _super.call(this, elementRef, renderer) || this;
    }
    return MdlIconToggleComponent;
}(__WEBPACK_IMPORTED_MODULE_4__checkbox_mdl_checkbox_component__["b" /* MdlCheckboxComponent */]));
MdlIconToggleComponent = MdlIconToggleComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-icon-toggle',
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NG_VALUE_ACCESSOR"],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MdlIconToggleComponent_1; }),
                multi: true
            }],
        host: {
            '(click)': 'onClick()',
            '[class.mdl-icon-toggle]': 'true',
            '[class.is-upgraded]': 'true',
            '[class.is-checked]': 'value',
            '[class.is-disabled]': 'disabled'
        },
        outputs: ['change'],
        template: "\n  <input type=\"checkbox\" class=\"mdl-icon-toggle__input\" \n    (focus)=\"onFocus()\" \n    (blur)=\"onBlur()\"\n    [disabled]=\"disabled\"\n    [(ngModel)]=\"value\">\n  <mdl-icon class=\"mdl-icon-toggle__label\"><ng-content></ng-content></mdl-icon>\n  ",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], MdlIconToggleComponent);

var MDL_ICON_TOGGLE_DIRECTIVES = [MdlIconToggleComponent];
var MdlIconToggleModule = MdlIconToggleModule_1 = (function () {
    function MdlIconToggleModule() {
    }
    MdlIconToggleModule.forRoot = function () {
        return {
            ngModule: MdlIconToggleModule_1,
            providers: []
        };
    };
    return MdlIconToggleModule;
}());
MdlIconToggleModule = MdlIconToggleModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_3__icon_mdl_icon_component__["b" /* MdlIconModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]],
        exports: MDL_ICON_TOGGLE_DIRECTIVES,
        declarations: MDL_ICON_TOGGLE_DIRECTIVES,
    })
], MdlIconToggleModule);

var MdlIconToggleComponent_1, MdlIconToggleModule_1;


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdl_layout_header_component__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdl_layout_drawer_component__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdl_layout_content_component__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mdl_layout_header_transparent_directive__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mdl_layout_header_row_component__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mdl_layout_title_component__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mdl_layout_spacer_component__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mdl_layout_tab_panel_component__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__icon_mdl_icon_component__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_mdl_ripple_directive__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_index__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tabs_index__ = __webpack_require__(11);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__mdl_layout_header_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__mdl_layout_drawer_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_4__mdl_layout_content_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_5__mdl_layout_header_transparent_directive__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__mdl_layout_header_row_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_7__mdl_layout_title_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_8__mdl_layout_spacer_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_9__mdl_layout_tab_panel_component__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var MDL_LAYOUT_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__["a" /* MdlLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_2__mdl_layout_header_component__["a" /* MdlLayoutHeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_3__mdl_layout_drawer_component__["a" /* MdlLayoutDrawerComponent */],
    __WEBPACK_IMPORTED_MODULE_4__mdl_layout_content_component__["a" /* MdlLayoutContentComponent */],
    __WEBPACK_IMPORTED_MODULE_5__mdl_layout_header_transparent_directive__["a" /* MdlLayoutHeaderTransparentDirective */],
    __WEBPACK_IMPORTED_MODULE_6__mdl_layout_header_row_component__["a" /* MdlLayoutHeaderRowComponent */],
    __WEBPACK_IMPORTED_MODULE_7__mdl_layout_title_component__["a" /* MdlLayoutTitleComponent */],
    __WEBPACK_IMPORTED_MODULE_8__mdl_layout_spacer_component__["a" /* MdlLayoutSpacerComponent */],
    __WEBPACK_IMPORTED_MODULE_9__mdl_layout_tab_panel_component__["a" /* MdlLayoutTabPanelComponent */]
];









var MdlLayoutModule = MdlLayoutModule_1 = (function () {
    function MdlLayoutModule() {
    }
    MdlLayoutModule.forRoot = function () {
        return {
            ngModule: MdlLayoutModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__["d" /* MdlScreenSizeService */]
            ]
        };
    };
    return MdlLayoutModule;
}());
MdlLayoutModule = MdlLayoutModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_10__icon_mdl_icon_component__["b" /* MdlIconModule */], __WEBPACK_IMPORTED_MODULE_11__common_mdl_ripple_directive__["i" /* MdlRippleModule */], __WEBPACK_IMPORTED_MODULE_12__common_index__["a" /* MdlCommonsModule */], __WEBPACK_IMPORTED_MODULE_14__tabs_index__["a" /* MdlTabsModule */], __WEBPACK_IMPORTED_MODULE_13__angular_common__["CommonModule"]],
        exports: MDL_LAYOUT_DIRECTIVES,
        declarations: MDL_LAYOUT_DIRECTIVES,
    })
], MdlLayoutModule);

var MdlLayoutModule_1;


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_number_property__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlUnsupportedCountOfListItemLinesError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MdlListItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MdlListItemPrimaryContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MdlListItemSecondaryContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MdlListItemSecondaryActionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return MdlListItemSubTitleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return MdlListItemSecondaryInfoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return MdlListItemTextBodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return MdlListItemIconDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return MdlListItemAvatarDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return MdlListModule; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MdlUnsupportedCountOfListItemLinesError = (function (_super) {
    __extends(MdlUnsupportedCountOfListItemLinesError, _super);
    function MdlUnsupportedCountOfListItemLinesError(lines) {
        return _super.call(this, "\"" + lines + "\" is not supported - max 3 lines please.") || this;
    }
    return MdlUnsupportedCountOfListItemLinesError;
}(__WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["a" /* MdlError */]));

var MdlListComponent = (function () {
    function MdlListComponent() {
    }
    return MdlListComponent;
}());
MdlListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-list',
        host: {
            '[class.mdl-list]': 'true'
        },
        template: '<ng-content></ng-content>',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], MdlListComponent);

var MdlListItemComponent = (function () {
    function MdlListItemComponent(mdlListComponent) {
        this.mdlListComponent = mdlListComponent;
        this._lines = 1;
    }
    Object.defineProperty(MdlListItemComponent.prototype, "lines", {
        get: function () { return this._lines; },
        set: function (value) { this._lines = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_number_property__["a" /* toNumber */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlListItemComponent.prototype.ngOnInit = function () {
        if (this.mdlListComponent === null) {
            throw new __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["b" /* MdlStructureError */]('mdl-list-item', 'mdl-list');
        }
    };
    MdlListItemComponent.prototype.ngOnChanges = function (changes) {
        if (this.lines && this.lines > 3) {
            throw new MdlUnsupportedCountOfListItemLinesError(this.lines);
        }
    };
    return MdlListItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdlListItemComponent.prototype, "lines", null);
MdlListItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-list-item',
        host: {
            '[class.mdl-list__item]': 'true',
            '[class.mdl-list__item--two-line]': 'lines==2',
            '[class.mdl-list__item--three-line]': 'lines==3'
        },
        template: '<ng-content></ng-content>',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [MdlListComponent])
], MdlListItemComponent);

var MdlListItemPrimaryContentComponent = (function () {
    function MdlListItemPrimaryContentComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemPrimaryContentComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["b" /* MdlStructureError */]('mdl-list-item-primary-content', 'mdl-list-item');
        }
    };
    return MdlListItemPrimaryContentComponent;
}());
MdlListItemPrimaryContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-list-item-primary-content',
        host: {
            '[class.mdl-list__item-primary-content]': 'true'
        },
        template: '<ng-content></ng-content>',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [MdlListItemComponent])
], MdlListItemPrimaryContentComponent);

var MdlListItemSecondaryContentComponent = (function () {
    function MdlListItemSecondaryContentComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSecondaryContentComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["b" /* MdlStructureError */]('mdl-list-item-secondary-content', 'mdl-list-item');
        }
    };
    return MdlListItemSecondaryContentComponent;
}());
MdlListItemSecondaryContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-list-item-secondary-content',
        host: {
            '[class.mdl-list__item-secondary-content]': 'true'
        },
        template: '<ng-content></ng-content>',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [MdlListItemComponent])
], MdlListItemSecondaryContentComponent);

var MdlListItemSecondaryActionComponent = (function () {
    function MdlListItemSecondaryActionComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSecondaryActionComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["b" /* MdlStructureError */]('mdl-list-item-secondary-action', 'mdl-list-item');
        }
    };
    return MdlListItemSecondaryActionComponent;
}());
MdlListItemSecondaryActionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-list-item-secondary-action',
        host: {
            '[class.mdl-list__item-secondary-action]': 'true'
        },
        template: '<ng-content></ng-content>',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [MdlListItemComponent])
], MdlListItemSecondaryActionComponent);

var MdlListItemSubTitleComponent = (function () {
    function MdlListItemSubTitleComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSubTitleComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["b" /* MdlStructureError */]('mdl-list-item-sub-title', 'mdl-list-item-primary-content');
        }
    };
    return MdlListItemSubTitleComponent;
}());
MdlListItemSubTitleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-list-item-sub-title',
        host: {
            '[class.mdl-list__item-sub-title]': 'true'
        },
        template: '<ng-content></ng-content>',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [MdlListItemPrimaryContentComponent])
], MdlListItemSubTitleComponent);

var MdlListItemSecondaryInfoComponent = (function () {
    function MdlListItemSecondaryInfoComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSecondaryInfoComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["b" /* MdlStructureError */]('mdl-list-item-secondary-info', 'mdl-list-item-secondary-content');
        }
    };
    return MdlListItemSecondaryInfoComponent;
}());
MdlListItemSecondaryInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-list-item-secondary-info',
        host: {
            '[class.mdl-list__item-secondary-info]': 'true'
        },
        template: '<ng-content></ng-content>',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [MdlListItemSecondaryContentComponent])
], MdlListItemSecondaryInfoComponent);

var MdlListItemTextBodyComponent = (function () {
    function MdlListItemTextBodyComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemTextBodyComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["b" /* MdlStructureError */]('mdl-list-item-text-body', 'mdl-list-item');
        }
    };
    return MdlListItemTextBodyComponent;
}());
MdlListItemTextBodyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-list-item-text-body',
        host: {
            '[class.mdl-list__item-text-body]': 'true'
        },
        template: '<ng-content></ng-content>',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [MdlListItemComponent])
], MdlListItemTextBodyComponent);

var MdlListItemIconDirective = (function () {
    function MdlListItemIconDirective() {
    }
    return MdlListItemIconDirective;
}());
MdlListItemIconDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'mdl-icon[mdl-list-item-icon]',
        host: {
            '[class.mdl-list__item-icon]': 'true'
        }
    })
], MdlListItemIconDirective);

var MdlListItemAvatarDirective = (function () {
    function MdlListItemAvatarDirective() {
    }
    return MdlListItemAvatarDirective;
}());
MdlListItemAvatarDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'mdl-icon[mdl-list-item-avatar]',
        host: {
            '[class.mdl-list__item-avatar]': 'true'
        }
    })
], MdlListItemAvatarDirective);

var MDL_LIST_DIRECTIVES = [
    MdlListComponent,
    MdlListItemComponent,
    MdlListItemPrimaryContentComponent,
    MdlListItemIconDirective,
    MdlListItemAvatarDirective,
    MdlListItemSecondaryContentComponent,
    MdlListItemSecondaryActionComponent,
    MdlListItemSubTitleComponent,
    MdlListItemSecondaryInfoComponent,
    MdlListItemTextBodyComponent
];
var MdlListModule = MdlListModule_1 = (function () {
    function MdlListModule() {
    }
    MdlListModule.forRoot = function () {
        return {
            ngModule: MdlListModule_1,
            providers: []
        };
    };
    return MdlListModule;
}());
MdlListModule = MdlListModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [],
        exports: MDL_LIST_DIRECTIVES,
        declarations: MDL_LIST_DIRECTIVES,
    })
], MdlListModule);

var MdlListModule_1;


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_menu_component__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdl_menu_item_component__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdl_menu_item_directive__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mdl_toggle_menu_directive__ = __webpack_require__(64);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__mdl_menu_component__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__mdl_menu_component__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__mdl_menu_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__mdl_menu_item_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__mdl_menu_item_directive__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlMenuModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MDL_MENU_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_1__mdl_menu_component__["a" /* MdlMenuComponent */],
    __WEBPACK_IMPORTED_MODULE_2__mdl_menu_item_component__["a" /* MdlMenuItemComponent */],
    __WEBPACK_IMPORTED_MODULE_3__mdl_menu_item_directive__["a" /* MdlMenuItemFullBleedDeviderComponent */],
    __WEBPACK_IMPORTED_MODULE_5__mdl_toggle_menu_directive__["a" /* MdlToggleMenuDirective */]
];



var MdlMenuModule = MdlMenuModule_1 = (function () {
    function MdlMenuModule() {
    }
    MdlMenuModule.forRoot = function () {
        return {
            ngModule: MdlMenuModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_1__mdl_menu_component__["c" /* MdlMenuRegisty */]]
        };
    };
    return MdlMenuModule;
}());
MdlMenuModule = MdlMenuModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"]],
        exports: MDL_MENU_DIRECTIVES,
        declarations: MDL_MENU_DIRECTIVES,
    })
], MdlMenuModule);

var MdlMenuModule_1;


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_boolean_property__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_common__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlProgressModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MdlProgressComponent = (function () {
    function MdlProgressComponent() {
        this.progress = 0;
        this.buffer = 100;
        this.aux = 0;
        this._indeterminate = false;
    }
    Object.defineProperty(MdlProgressComponent.prototype, "indeterminate", {
        get: function () { return this._indeterminate; },
        set: function (value) { this._indeterminate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlProgressComponent.prototype.ngOnChanges = function (changes) {
        if (changes['buffer']) {
            this.setBuffer(changes['buffer'].currentValue);
        }
    };
    MdlProgressComponent.prototype.setBuffer = function (b) {
        this.aux = 100 - b;
    };
    return MdlProgressComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MdlProgressComponent.prototype, "progress", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MdlProgressComponent.prototype, "buffer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MdlProgressComponent.prototype, "aux", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdlProgressComponent.prototype, "indeterminate", null);
MdlProgressComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-progress',
        host: {
            '[class.mdl-progress]': 'true',
            '[class.mdl-progress__indeterminate]': 'indeterminate===true'
        },
        template: "\n    <div class=\"progressbar bar bar1\" [style.width]=\"progress + '%'\"></div>\n    <div class=\"bufferbar bar bar2\" [style.width]=\"buffer + '%'\"></div>\n    <div class=\"auxbar bar bar3\" [ngStyle]=\"{'width': aux+'%'}\"></div>\n  ",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
    })
], MdlProgressComponent);

var MDL_PROGRESS_DIRECTIVES = [MdlProgressComponent];
var MdlProgressModule = MdlProgressModule_1 = (function () {
    function MdlProgressModule() {
    }
    MdlProgressModule.forRoot = function () {
        return {
            ngModule: MdlProgressModule_1,
            providers: []
        };
    };
    return MdlProgressModule;
}());
MdlProgressModule = MdlProgressModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]],
        exports: MDL_PROGRESS_DIRECTIVES,
        declarations: MDL_PROGRESS_DIRECTIVES,
    })
], MdlProgressModule);

var MdlProgressModule_1;


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_boolean_property__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlRadioGroupRegisty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlRadioComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MdlRadioModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var noop = function () { };
var IS_FOCUSED = 'is-focused';
// Registry for mdl-readio compnents. Is responsible to keep the
// right state of the radio buttons of a radio group. It would be
// easier if i had a mdl-radio-group component. but this would be
// a big braking change.
var MdlRadioGroupRegisty = (function () {
    function MdlRadioGroupRegisty() {
        this.defaultFormGroup = 'defaultFromGroup';
        this.radioComponents = [];
    }
    MdlRadioGroupRegisty.prototype.add = function (radioComponent, formGroupName) {
        this.radioComponents.push({
            radio: radioComponent,
            group: formGroupName || this.defaultFormGroup
        });
    };
    MdlRadioGroupRegisty.prototype.remove = function (radioComponent) {
        this.radioComponents = this.radioComponents.filter(function (radioComponentInArray) {
            return (radioComponentInArray.radio !== radioComponent);
        });
    };
    MdlRadioGroupRegisty.prototype.select = function (radioComponent, formGroupName) {
        // unselect every radioComponent that is not the provided radiocomponent
        // and has the same name and is in teh same group.
        var groupToTest = formGroupName || this.defaultFormGroup;
        this.radioComponents.forEach(function (component) {
            if (component.radio.name === radioComponent.name && component.group === groupToTest) {
                if (component.radio !== radioComponent) {
                    component.radio.deselect(radioComponent.value);
                }
            }
        });
    };
    return MdlRadioGroupRegisty;
}());
MdlRadioGroupRegisty = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], MdlRadioGroupRegisty);

/*
 <mdl-radio name="group1" value="1" [(ngModel)]="radioOption">Value 1</mdl-radio>
 */
var MdlRadioComponent = MdlRadioComponent_1 = (function () {
    function MdlRadioComponent(elementRef, renderer, radioGroupRegistry, formGroupName) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.radioGroupRegistry = radioGroupRegistry;
        this.formGroupName = formGroupName;
        this._disabled = false;
        this.tabindex = null;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // the internal state - used to set the underlaying radio button state.
        this.checked = false;
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.el = elementRef.nativeElement;
    }
    Object.defineProperty(MdlRadioComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlRadioComponent.prototype.ngOnInit = function () {
        // we need a name and it must be the same as in the formcontrol.
        // a radio group without name is useless.
        this.checkName();
        // register the radio button - this is the only chance to unselect the
        // radio button that is no longer active - scope the radio button with it's group
        // if there is one.
        this.radioGroupRegistry.add(this, this.formGroupName);
    };
    MdlRadioComponent.prototype.ngOnDestroy = function () {
        this.radioGroupRegistry.remove(this);
    };
    MdlRadioComponent.prototype.writeValue = function (optionValue) {
        this.optionValue = optionValue;
        this.updateCheckState();
    };
    MdlRadioComponent.prototype.deselect = function (value) {
        // called from the registry. the value is the value of the selected radio button
        // e.g. the radio button get unselected if it isnÄt the selected one.
        this.writeValue(value);
    };
    MdlRadioComponent.prototype.registerOnChange = function (fn) {
        var _this = this;
        // wrap the callback, so that we can call select on the registry
        this.onChangeCallback = function () {
            fn(_this.value);
            _this.radioGroupRegistry.select(_this, _this.formGroupName);
        };
    };
    MdlRadioComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    MdlRadioComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MdlRadioComponent.prototype.onFocus = function () {
        this.renderer.setElementClass(this.el, IS_FOCUSED, true);
    };
    MdlRadioComponent.prototype.onBlur = function () {
        this.renderer.setElementClass(this.el, IS_FOCUSED, false);
    };
    MdlRadioComponent.prototype.onClick = function () {
        if (this.disabled) {
            return;
        }
        this.optionValue = this.value;
        this.updateCheckState();
        this.onChangeCallback();
        this.change.emit(this.optionValue);
    };
    MdlRadioComponent.prototype.updateCheckState = function () {
        this.checked = this.optionValue === this.value;
    };
    MdlRadioComponent.prototype.checkName = function () {
        if (this.name && this.formControlName && this.name !== this.formControlName) {
            this.throwNameError();
        }
        if (!this.name && this.formControlName) {
            this.name = this.formControlName;
        }
    };
    MdlRadioComponent.prototype.throwNameError = function () {
        throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <mdl-radio formControlName=\"food\" name=\"food\"></mdl-radio>\n    ");
    };
    MdlRadioComponent.prototype.spaceKeyPress = function (event) {
        this.checked = false; //in case of space key is pressed radio button value must remain same
    };
    return MdlRadioComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MdlRadioComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MdlRadioComponent.prototype, "formControlName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MdlRadioComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], MdlRadioComponent.prototype, "disabled", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MdlRadioComponent.prototype, "tabindex", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], MdlRadioComponent.prototype, "change", void 0);
MdlRadioComponent = MdlRadioComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-radio',
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MdlRadioComponent_1; }),
                multi: true
            }],
        host: {
            '(click)': 'onClick()',
            '[class.mdl-radio]': 'true',
            '[class.is-upgraded]': 'true',
            '[class.is-checked]': 'checked',
            '[class.is-disabled]': 'disabled'
        },
        template: "\n  <input type=\"checkbox\" class=\"mdl-radio__button\" \n    [attr.name]=\"name\"\n    (focus)=\"onFocus()\" \n    (blur)=\"onBlur()\"\n    (keyup.space)=\"spaceKeyPress($event)\"\n    [disabled]=\"disabled\"\n    [attr.tabindex]=\"tabindex\"\n    [(ngModel)]=\"checked\">\n  <span class=\"mdl-radio__label\"><ng-content></ng-content></span>\n  <span class=\"mdl-radio__outer-circle\"></span>\n  <span class=\"mdl-radio__inner-circle\"></span>\n  ",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
        MdlRadioGroupRegisty,
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroupName"]])
], MdlRadioComponent);

var MdlRadioModule = MdlRadioModule_1 = (function () {
    function MdlRadioModule() {
    }
    MdlRadioModule.forRoot = function () {
        return {
            ngModule: MdlRadioModule_1,
            providers: [MdlRadioGroupRegisty]
        };
    };
    return MdlRadioModule;
}());
MdlRadioModule = MdlRadioModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"]],
        exports: [MdlRadioComponent],
        declarations: [MdlRadioComponent]
    })
], MdlRadioModule);

var MdlRadioComponent_1, MdlRadioModule_1;


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_number_property__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlUnsupportedShadowValueError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlShadowDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MdlShadowModule; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MdlUnsupportedShadowValueError = (function (_super) {
    __extends(MdlUnsupportedShadowValueError, _super);
    function MdlUnsupportedShadowValueError(value) {
        return _super.call(this, "Shadow value \"" + value + "\" isn't supported (allowed: 2,3,4,6,8,16,24).") || this;
    }
    return MdlUnsupportedShadowValueError;
}(__WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["a" /* MdlError */]));

var MDL_SHADOW_VALUES = [0, 2, 3, 4, 6, 8, 16, 24];
var MdlShadowDirective = (function () {
    function MdlShadowDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._mdlShadow = 2;
        this.el = elementRef.nativeElement;
    }
    Object.defineProperty(MdlShadowDirective.prototype, "mdlShadow", {
        get: function () { return this._mdlShadow; },
        set: function (value) { this._mdlShadow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_number_property__["a" /* toNumber */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlShadowDirective.prototype.ngOnChanges = function (changes) {
        if (MDL_SHADOW_VALUES.indexOf(Number(this.mdlShadow)) === -1) {
            throw new MdlUnsupportedShadowValueError(this.mdlShadow);
        }
        var change = changes['mdlShadow'];
        if (!change.isFirstChange()) {
            this.renderer.setElementClass(this.el, "mdl-shadow--" + change.previousValue + "dp", false);
        }
        this.renderer.setElementClass(this.el, "mdl-shadow--" + change.currentValue + "dp", true);
    };
    return MdlShadowDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-shadow'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdlShadowDirective.prototype, "mdlShadow", null);
MdlShadowDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mdl-shadow]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], MdlShadowDirective);

var MDL_SHADOW_DIRECTIVES = [MdlShadowDirective];
var MdlShadowModule = MdlShadowModule_1 = (function () {
    function MdlShadowModule() {
    }
    MdlShadowModule.forRoot = function () {
        return {
            ngModule: MdlShadowModule_1,
            providers: []
        };
    };
    return MdlShadowModule;
}());
MdlShadowModule = MdlShadowModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [],
        exports: MDL_SHADOW_DIRECTIVES,
        declarations: MDL_SHADOW_DIRECTIVES,
    })
], MdlShadowModule);

var MdlShadowModule_1;


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_boolean_property__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlSliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlSliderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var noop = function (_) { };
var MdlSliderComponent = MdlSliderComponent_1 = (function () {
    function MdlSliderComponent(renderer, elRef) {
        this.renderer = renderer;
        this.elRef = elRef;
        this._disabled = false;
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(MdlSliderComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlSliderComponent.prototype, "value", {
        get: function () { return this.value_; },
        set: function (v) {
            this.value_ = v;
            this.updateSliderUI();
            this.onChangeCallback(v);
        },
        enumerable: true,
        configurable: true
    });
    ;
    MdlSliderComponent.prototype.writeValue = function (value) {
        this.value_ = value;
        this.updateSliderUI();
    };
    MdlSliderComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    MdlSliderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    MdlSliderComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MdlSliderComponent.prototype.updateSliderUI = function () {
        var fraction = (this.value_ - this.min) / (this.max - this.min);
        this.renderer.setElementClass(this.inputEl.nativeElement, 'is-lowest-value', fraction === 0);
        this.renderer.setElementStyle(this.lowerEl.nativeElement, 'flex', '' + fraction);
        this.renderer.setElementStyle(this.upperEl.nativeElement, 'flex', '' + (1 - fraction));
    };
    MdlSliderComponent.prototype.onMouseUp = function (event) {
        event.target.blur();
    };
    MdlSliderComponent.prototype.onMouseDown = function (event) {
        if (event.target !== this.elRef.nativeElement) {
            return;
        }
        // Discard the original event and create a new event that
        // is on the slider element.
        event.preventDefault();
        var newEvent = new MouseEvent('mousedown', {
            relatedTarget: event.relatedTarget,
            button: event.button,
            buttons: event.buttons,
            clientX: event.clientX,
            clientY: this.inputEl.nativeElement.getBoundingClientRect().y,
            screenX: event.screenX,
            screenY: event.screenY
        });
        this.renderer.invokeElementMethod(this.inputEl.nativeElement, 'dispatchEvent', [newEvent]);
    };
    return MdlSliderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], MdlSliderComponent.prototype, "min", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], MdlSliderComponent.prototype, "max", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], MdlSliderComponent.prototype, "step", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lower'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], MdlSliderComponent.prototype, "lowerEl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('uppper'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], MdlSliderComponent.prototype, "upperEl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], MdlSliderComponent.prototype, "inputEl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], MdlSliderComponent.prototype, "disabled", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdlSliderComponent.prototype, "value", null);
MdlSliderComponent = MdlSliderComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-slider',
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MdlSliderComponent_1; }),
                multi: true
            }],
        host: {
            '[class.mdl-slider__container]': 'true',
            '(mouseup)': 'onMouseUp($event)',
            '(mousedown)': 'onMouseDown($event)'
        },
        template: "\n    <input class=\"mdl-slider is-upgraded\" \n            type=\"range\" \n            [min]=\"min\" \n            [max]=\"max\" \n            [step]=\"step\" \n            [(ngModel)]=\"value\" \n            [disabled]=\"disabled\"\n            tabindex=\"0\"\n            #input>\n    <div class=\"mdl-slider__background-flex\">\n      <div class=\"mdl-slider__background-lower\" #lower></div>\n      <div class=\"mdl-slider__background-upper\" #uppper></div>\n  </div>\n  ",
        styles: [
            "\n    :host {\n        height: 22px;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n    }\n    "
        ],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], MdlSliderComponent);

var MDL_SLIDER_DIRECTIVES = [MdlSliderComponent];
var MdlSliderModule = MdlSliderModule_1 = (function () {
    function MdlSliderModule() {
    }
    MdlSliderModule.forRoot = function () {
        return {
            ngModule: MdlSliderModule_1,
            providers: []
        };
    };
    return MdlSliderModule;
}());
MdlSliderModule = MdlSliderModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]],
        exports: MDL_SLIDER_DIRECTIVES,
        declarations: MDL_SLIDER_DIRECTIVES,
    })
], MdlSliderModule);

var MdlSliderComponent_1, MdlSliderModule_1;


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_outlet_mdl_dialog_outlet_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialog_outlet_index__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlSnackbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlSnackbarService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MdlSnackbaModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ANIMATION_TIME = 250;
var MdlSnackbarComponent = (function () {
    function MdlSnackbarComponent() {
        this.showIt = false;
    }
    MdlSnackbarComponent.prototype.onClick = function () {
        this.onAction();
    };
    MdlSnackbarComponent.prototype.isActive = function () {
        return this.showIt;
    };
    MdlSnackbarComponent.prototype.show = function () {
        var _this = this;
        var result = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        // wait unit the dom is in place - then showIt will change the css class
        setTimeout(function () {
            _this.showIt = true;
            // fire after the view animation is done
            setTimeout(function () {
                result.next(null);
                result.complete();
            }, ANIMATION_TIME);
        }, ANIMATION_TIME);
        return result.asObservable();
    };
    MdlSnackbarComponent.prototype.hide = function () {
        this.showIt = false;
        var result = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        // fire after the view animation is done
        setTimeout(function () {
            result.next(null);
            result.complete();
        }, ANIMATION_TIME);
        return result.asObservable();
    };
    return MdlSnackbarComponent;
}());
MdlSnackbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-snackbar-component',
        template: "\n    <div id=\"demo-toast-example\" class=\" mdl-snackbar\" [ngClass]=\"{'mdl-snackbar--active': showIt }\">\n      <div class=\"mdl-snackbar__text\">{{message}}</div>\n      <button *ngIf=\"onAction\" class=\"mdl-snackbar__action\" type=\"button\" (click)=\"onClick()\" >{{actionText}}</button>\n    </div>\n  ",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], MdlSnackbarComponent);

var MdlSnackbarService = (function () {
    function MdlSnackbarService(componentFactoryResolver, dialogOutletService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.dialogOutletService = dialogOutletService;
        this.cFactory = this.componentFactoryResolver.resolveComponentFactory(MdlSnackbarComponent);
    }
    MdlSnackbarService.prototype.showToast = function (message, timeout) {
        return this.showSnackbar({
            message: message,
            timeout: timeout
        });
    };
    MdlSnackbarService.prototype.showSnackbar = function (snackbarMessage) {
        var optTimeout = snackbarMessage.timeout || 2750;
        var closeAfterTimeout = !!snackbarMessage.closeAfterTimeout;
        var viewContainerRef = this.dialogOutletService.viewContainerRef;
        if (!viewContainerRef) {
            throw new Error('You did not provide a ViewContainerRef. ' +
                'Please see https://github.com/mseemann/angular2-mdl/wiki/How-to-use-the-MdlDialogService');
        }
        var cRef = viewContainerRef.createComponent(this.cFactory, viewContainerRef.length);
        var mdlSnackbarComponent = cRef.instance;
        mdlSnackbarComponent.message = snackbarMessage.message;
        if (this.previousSnack) {
            var previousSnack_1 = this.previousSnack;
            var subscription_1 = previousSnack_1.component.hide()
                .subscribe(function () {
                previousSnack_1.cRef.destroy();
                subscription_1.unsubscribe();
            });
        }
        this.previousSnack = {
            component: mdlSnackbarComponent,
            cRef: cRef
        };
        if (snackbarMessage.action) {
            if (closeAfterTimeout) {
                this.hideAndDestroySnack(mdlSnackbarComponent, cRef, optTimeout);
            }
            mdlSnackbarComponent.actionText = snackbarMessage.action.text;
            mdlSnackbarComponent.onAction = function () {
                mdlSnackbarComponent.hide().subscribe(function () {
                    cRef.destroy();
                    snackbarMessage.action.handler();
                });
            };
        }
        else {
            this.hideAndDestroySnack(mdlSnackbarComponent, cRef, optTimeout);
        }
        var result = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        mdlSnackbarComponent.show().subscribe(function () {
            result.next(mdlSnackbarComponent);
            result.complete();
        });
        return result.asObservable();
    };
    MdlSnackbarService.prototype.hideAndDestroySnack = function (component, componentRef, timeOut) {
        setTimeout(function () {
            component.hide()
                .subscribe(function () {
                componentRef.destroy();
            });
        }, timeOut);
    };
    return MdlSnackbarService;
}());
MdlSnackbarService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"],
        __WEBPACK_IMPORTED_MODULE_2__dialog_outlet_mdl_dialog_outlet_service__["a" /* MdlDialogOutletService */]])
], MdlSnackbarService);

var MdlSnackbaModule = MdlSnackbaModule_1 = (function () {
    function MdlSnackbaModule() {
    }
    MdlSnackbaModule.forRoot = function () {
        return {
            ngModule: MdlSnackbaModule_1,
            providers: [MdlSnackbarService]
        };
    };
    return MdlSnackbaModule;
}());
MdlSnackbaModule = MdlSnackbaModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__dialog_outlet_index__["a" /* MdlDialogOutletModule */].forRoot()],
        exports: [MdlSnackbarComponent],
        declarations: [MdlSnackbarComponent],
        entryComponents: [MdlSnackbarComponent]
    })
], MdlSnackbaModule);

var MdlSnackbaModule_1;


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_boolean_property__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_common__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlSpinnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlSpinnerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MdlSpinnerComponent = (function () {
    function MdlSpinnerComponent() {
        this.layers = [1, 2, 3, 4];
        this._active = false;
        this._singleColor = false;
    }
    Object.defineProperty(MdlSpinnerComponent.prototype, "active", {
        get: function () { return this._active; },
        set: function (value) { this._active = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlSpinnerComponent.prototype, "singleColor", {
        get: function () { return this._singleColor; },
        set: function (value) { this._singleColor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    return MdlSpinnerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdlSpinnerComponent.prototype, "active", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('single-color'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdlSpinnerComponent.prototype, "singleColor", null);
MdlSpinnerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-spinner',
        host: {
            '[class.mdl-spinner]': 'true',
            '[class.is-upgraded]': 'true',
            '[class.is-active]': 'active',
            '[class.mdl-spinner--single-color]': 'singleColor',
        },
        // must be one line - otherwise the spinner is broken in the ui
        /* tslint:disable */
        template: "\n    <div *ngFor=\"let layer of layers;\" \n            class=\"mdl-spinner__layer mdl-spinner__layer-{{layer}}\">\n      <div class=\"mdl-spinner__circle-clipper mdl-spinner__left\">\n         <div class=\"mdl-spinner__circle\"></div>\n      </div><div class=\"mdl-spinner__gap-patch\"><div class=\"mdl-spinner__circle\"></div></div><div class=\"mdl-spinner__circle-clipper mdl-spinner__right\"><div class=\"mdl-spinner__circle\"></div></div>\n    </div>\n  ",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], MdlSpinnerComponent);

var MDL_SPINNER_DIRECTIVES = [MdlSpinnerComponent];
var MdlSpinnerModule = MdlSpinnerModule_1 = (function () {
    function MdlSpinnerModule() {
    }
    MdlSpinnerModule.forRoot = function () {
        return {
            ngModule: MdlSpinnerModule_1,
            providers: []
        };
    };
    return MdlSpinnerModule;
}());
MdlSpinnerModule = MdlSpinnerModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]],
        exports: MDL_SPINNER_DIRECTIVES,
        declarations: MDL_SPINNER_DIRECTIVES,
    })
], MdlSpinnerModule);

var MdlSpinnerModule_1;


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkbox_mdl_checkbox_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_common__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlSwitchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlSwitchModule; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MdlSwitchComponent = MdlSwitchComponent_1 = (function (_super) {
    __extends(MdlSwitchComponent, _super);
    function MdlSwitchComponent(elementRef, renderer) {
        return _super.call(this, elementRef, renderer) || this;
    }
    return MdlSwitchComponent;
}(__WEBPACK_IMPORTED_MODULE_2__checkbox_mdl_checkbox_component__["b" /* MdlCheckboxComponent */]));
MdlSwitchComponent = MdlSwitchComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-switch',
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MdlSwitchComponent_1; }),
                multi: true
            }],
        host: {
            '(click)': 'onClick()',
            '[class.mdl-switch]': 'true',
            '[class.is-upgraded]': 'true',
            '[class.is-checked]': 'value',
            '[class.is-disabled]': 'disabled'
        },
        outputs: ['change'],
        template: "\n    <input type=\"checkbox\" class=\"mdl-switch__input\" \n      (focus)=\"onFocus()\" \n      (blur)=\"onBlur()\"\n      [disabled]=\"disabled\"\n      [(ngModel)]=\"value\">\n    <span class=\"mdl-switch__label\"><ng-content></ng-content></span>\n    <div class=\"mdl-switch__track\"></div>\n    <div class=\"mdl-switch__thumb\"><span class=\"mdl-switch__focus-helper\"></span></div>\n  ",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], MdlSwitchComponent);

var MDL_SWITCH_DIRECTIVES = [MdlSwitchComponent];
var MdlSwitchModule = MdlSwitchModule_1 = (function () {
    function MdlSwitchModule() {
    }
    MdlSwitchModule.forRoot = function () {
        return {
            ngModule: MdlSwitchModule_1,
            providers: []
        };
    };
    return MdlSwitchModule;
}());
MdlSwitchModule = MdlSwitchModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"]],
        exports: MDL_SWITCH_DIRECTIVES,
        declarations: MDL_SWITCH_DIRECTIVES,
    })
], MdlSwitchModule);

var MdlSwitchComponent_1, MdlSwitchModule_1;


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_table_component__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkbox_mdl_checkbox_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_mdl_ripple_directive__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_forms__);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__mdl_table_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__mdl_table_component__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__mdl_table_component__["c"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTableModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MDL_TABLE_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_1__mdl_table_component__["b" /* MdlTableComponent */],
    __WEBPACK_IMPORTED_MODULE_1__mdl_table_component__["c" /* MdlSelectableTableComponent */]
];
var MdlTableModule = MdlTableModule_1 = (function () {
    function MdlTableModule() {
    }
    MdlTableModule.forRoot = function () {
        return {
            ngModule: MdlTableModule_1,
            providers: []
        };
    };
    return MdlTableModule;
}());
MdlTableModule = MdlTableModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__checkbox_mdl_checkbox_component__["c" /* MdlCheckboxModule */], __WEBPACK_IMPORTED_MODULE_3__common_mdl_ripple_directive__["i" /* MdlRippleModule */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"]],
        exports: MDL_TABLE_DIRECTIVES,
        declarations: MDL_TABLE_DIRECTIVES,
    })
], MdlTableModule);

var MdlTableModule_1;


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_boolean_property__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_number_property__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__button_mdl_button_component__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icon_mdl_icon_component__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__angular_common__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DISABLE_NATIVE_VALIDITY_CHECKING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlTextFieldComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MdlTextFieldModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var DISABLE_NATIVE_VALIDITY_CHECKING = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('disableNativeValidityChecking');
var noop = function (_) { };
var nextId = 0;
var IS_FOCUSED = 'is-focused';
var IS_DISABLED = 'is-disabled';
var IS_INVALID = 'is-invalid';
var IS_DIRTY = 'is-dirty';
var MdlTextFieldComponent = MdlTextFieldComponent_1 = (function () {
    function MdlTextFieldComponent(renderer, elmRef, nativeCheckGlobalDisabled) {
        this.renderer = renderer;
        this.elmRef = elmRef;
        this.nativeCheckGlobalDisabled = nativeCheckGlobalDisabled;
        this.blurEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.focusEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.keyupEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.type = 'text';
        this.id = "mdl-textfield-" + nextId++;
        this._disabled = false;
        this._readonly = false;
        this._required = false;
        this._autofocus = false;
        this._isFloatingLabel = false;
        this._rows = null;
        this._maxrows = -1;
        this.tabindex = null;
        this.maxlength = null;
        // @experimental
        this._disableNativeValidityChecking = false;
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.el = elmRef.nativeElement;
    }
    Object.defineProperty(MdlTextFieldComponent.prototype, "value", {
        get: function () { return this.value_; },
        set: function (v) {
            this.value_ = this.type === 'number' ? (v === '' ? null : parseFloat(v)) : v;
            this.onChangeCallback(this.value);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(MdlTextFieldComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "readonly", {
        get: function () { return this._readonly; },
        set: function (value) { this._readonly = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "required", {
        get: function () { return this._required; },
        set: function (value) { this._required = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "autofocus", {
        get: function () { return this._autofocus; },
        set: function (value) { this._autofocus = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "isFloatingLabel", {
        get: function () { return this._isFloatingLabel; },
        set: function (value) { this._isFloatingLabel = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "rows", {
        get: function () { return this._rows; },
        set: function (value) { this._rows = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_number_property__["a" /* toNumber */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "maxrows", {
        get: function () { return this._maxrows; },
        set: function (value) { this._maxrows = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_number_property__["a" /* toNumber */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "disableNativeValidityChecking", {
        get: function () { return this._disableNativeValidityChecking; },
        set: function (value) { this._disableNativeValidityChecking = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlTextFieldComponent.prototype.writeValue = function (value) {
        this.value_ = value;
        this.checkDirty();
    };
    MdlTextFieldComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    MdlTextFieldComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    MdlTextFieldComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MdlTextFieldComponent.prototype.ngOnChanges = function (changes) {
        this.checkDisabled();
    };
    MdlTextFieldComponent.prototype.ngDoCheck = function () {
        this.checkValidity();
        this.checkDirty();
    };
    MdlTextFieldComponent.prototype.setFocus = function () {
        if (!this.inputEl) {
            return;
        }
        this.renderer.invokeElementMethod(this.inputEl.nativeElement, 'focus', []);
    };
    MdlTextFieldComponent.prototype.onFocus = function (event) {
        this.renderer.setElementClass(this.el, IS_FOCUSED, true);
        this.focusEmitter.emit(event);
    };
    MdlTextFieldComponent.prototype.onBlur = function (event) {
        this.renderer.setElementClass(this.el, IS_FOCUSED, false);
        this.onTouchedCallback();
        this.blurEmitter.emit(event);
    };
    MdlTextFieldComponent.prototype.onKeyup = function (event) {
        this.keyupEmitter.emit(event);
    };
    MdlTextFieldComponent.prototype.checkDisabled = function () {
        this.renderer.setElementClass(this.el, IS_DISABLED, this.disabled);
    };
    MdlTextFieldComponent.prototype.checkValidity = function () {
        // check the global setting - if globally disabled do no check
        if (this.nativeCheckGlobalDisabled === true) {
            return;
        }
        // check local setting - if locally disabled do no check
        if (this.disableNativeValidityChecking) {
            return;
        }
        if (this.inputEl && this.inputEl.nativeElement.validity) {
            this.renderer.setElementClass(this.el, IS_INVALID, !this.inputEl.nativeElement.validity.valid);
        }
    };
    MdlTextFieldComponent.prototype.checkDirty = function () {
        var dirty = this.inputEl && this.inputEl.nativeElement.value && this.inputEl.nativeElement.value.length > 0;
        this.renderer.setElementClass(this.el, IS_DIRTY, dirty);
    };
    MdlTextFieldComponent.prototype.keydownTextarea = function ($event) {
        var currentRowCount = this.inputEl.nativeElement.value.split('\n').length;
        if ($event.keyCode === 13) {
            if (currentRowCount >= this.maxrows && this.maxrows !== -1) {
                $event.preventDefault();
            }
        }
    };
    // hm only for test purposes to simulate a change to the input field that will change the
    // model value.
    MdlTextFieldComponent.prototype.triggerChange = function (event) {
        this.value = event.target.value;
        this.onTouchedCallback();
    };
    return MdlTextFieldComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('blur'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], MdlTextFieldComponent.prototype, "blurEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('focus'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], MdlTextFieldComponent.prototype, "focusEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('keyup'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], MdlTextFieldComponent.prototype, "keyupEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], MdlTextFieldComponent.prototype, "inputEl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdlTextFieldComponent.prototype, "value", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MdlTextFieldComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MdlTextFieldComponent.prototype, "label", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MdlTextFieldComponent.prototype, "pattern", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MdlTextFieldComponent.prototype, "min", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MdlTextFieldComponent.prototype, "max", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MdlTextFieldComponent.prototype, "step", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MdlTextFieldComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MdlTextFieldComponent.prototype, "id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('error-msg'),
    __metadata("design:type", Object)
], MdlTextFieldComponent.prototype, "errorMessage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], MdlTextFieldComponent.prototype, "disabled", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdlTextFieldComponent.prototype, "readonly", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdlTextFieldComponent.prototype, "required", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdlTextFieldComponent.prototype, "autofocus", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('floating-label'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdlTextFieldComponent.prototype, "isFloatingLabel", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MdlTextFieldComponent.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MdlTextFieldComponent.prototype, "autocomplete", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdlTextFieldComponent.prototype, "rows", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdlTextFieldComponent.prototype, "maxrows", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MdlTextFieldComponent.prototype, "icon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], MdlTextFieldComponent.prototype, "tabindex", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], MdlTextFieldComponent.prototype, "maxlength", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdlTextFieldComponent.prototype, "disableNativeValidityChecking", null);
MdlTextFieldComponent = MdlTextFieldComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-textfield',
        host: {
            '[class.mdl-textfield]': 'true',
            '[class.is-upgraded]': 'true',
            '[class.mdl-textfield--expandable]': 'icon',
            '[class.mdl-textfield--floating-label]': 'isFloatingLabel',
            '[class.has-placeholder]': 'placeholder'
        },
        template: "\n   <div *ngIf=\"!icon\">\n     <textarea\n        *ngIf=\"rows\"\n        #input\n        [rows]=\"rows\"\n        class=\"mdl-textfield__input\"\n        type=\"text\"\n        [attr.name]=\"name\"\n        [id]=\"id\"\n        [placeholder]=\"placeholder ? placeholder : ''\"\n        (focus)=\"onFocus($event)\"\n        (blur)=\"onBlur($event)\"\n        (keydown)=\"keydownTextarea($event)\"\n        (keyup)=\"onKeyup($event)\"\n        [(ngModel)]=\"value\"\n        [disabled]=\"disabled\"\n        [required]=\"required\"\n        [autofocus]=\"autofocus\"\n        [readonly]=\"readonly\"\n        ></textarea>\n     <input\n        *ngIf=\"!rows\"\n        #input\n        class=\"mdl-textfield__input\"\n        [type]=\"type\"\n        [attr.name]=\"name\"\n        [id]=\"id\"\n        [pattern]=\"pattern ? pattern : '.*'\"\n        [attr.min]=\"min\"\n        [attr.max]=\"max\"\n        [attr.step]=\"step\"\n        [placeholder]=\"placeholder ? placeholder : ''\"\n        [autocomplete]=\"autocomplete ? autocomplete : ''\"\n        (focus)=\"onFocus($event)\"\n        (blur)=\"onBlur($event)\"\n        (keyup)=\"onKeyup($event)\"\n        [(ngModel)]=\"value\"\n        [disabled]=\"disabled\"\n        [required]=\"required\"\n        [autofocus]=\"autofocus\"\n        [readonly]=\"readonly\"\n        [attr.tabindex]=\"tabindex\"\n        [maxlength]=\"maxlength\"\n        >\n     <label class=\"mdl-textfield__label\" [attr.for]=\"id\">{{label}}</label>\n     <span class=\"mdl-textfield__error\">{{errorMessage}}</span>\n   </div>\n   <div *ngIf=\"icon\">\n      <button mdl-button mdl-button-type=\"icon\" (click)=\"setFocus()\">\n         <mdl-icon>{{icon}}</mdl-icon>\n      </button>\n      <div class=\"mdl-textfield__expandable-holder\">\n       <input\n          #input\n          class=\"mdl-textfield__input\"\n          [type]=\"type\"\n          [attr.name]=\"name\"\n          [id]=\"id\"\n          [pattern]=\"pattern ? pattern : '.*'\"\n          [attr.min]=\"min\"\n          [attr.max]=\"max\"\n          [attr.step]=\"step\"\n          [placeholder]=\"placeholder ? placeholder : ''\"\n          [autocomplete]=\"autocomplete ? autocomplete : ''\"\n          (focus)=\"onFocus($event)\"\n          (blur)=\"onBlur($event)\"\n          (keyup)=\"onKeyup($event)\"\n          [(ngModel)]=\"value\"\n          [disabled]=\"disabled\"\n          [required]=\"required\"\n          [autofocus]=\"autofocus\"\n          [readonly]=\"readonly\"\n          [attr.tabindex]=\"tabindex\"\n          [maxlength]=\"maxlength\"\n         >\n     <label class=\"mdl-textfield__label\" [attr.for]=\"id\">{{label}}</label>\n     <span class=\"mdl-textfield__error\">{{errorMessage}}</span>\n      </div>\n   </div>\n   ",
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MdlTextFieldComponent_1; }),
                multi: true
            }],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(DISABLE_NATIVE_VALIDITY_CHECKING)),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
        Boolean])
], MdlTextFieldComponent);

var MdlTextFieldModule = MdlTextFieldModule_1 = (function () {
    function MdlTextFieldModule() {
    }
    MdlTextFieldModule.forRoot = function () {
        return {
            ngModule: MdlTextFieldModule_1,
            providers: []
        };
    };
    return MdlTextFieldModule;
}());
MdlTextFieldModule = MdlTextFieldModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_5__icon_mdl_icon_component__["b" /* MdlIconModule */], __WEBPACK_IMPORTED_MODULE_4__button_mdl_button_component__["d" /* MdlButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_6__angular_common__["CommonModule"]],
        exports: [MdlTextFieldComponent],
        declarations: [MdlTextFieldComponent],
    })
], MdlTextFieldModule);

var MdlTextFieldComponent_1, MdlTextFieldModule_1;


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_component__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdl_tooltip_directive__ = __webpack_require__(61);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_component__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__mdl_tooltip_directive__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__mdl_tooltip_directive__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__mdl_tooltip_directive__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTooltipModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MDL_TOOLTIP_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_component__["a" /* MdlTooltipComponent */],
    __WEBPACK_IMPORTED_MODULE_2__mdl_tooltip_directive__["a" /* MdlTooltipLargeDirective */],
    __WEBPACK_IMPORTED_MODULE_2__mdl_tooltip_directive__["b" /* MdlTooltipDirective */]
];


var MdlTooltipModule = MdlTooltipModule_1 = (function () {
    function MdlTooltipModule() {
    }
    MdlTooltipModule.forRoot = function () {
        return {
            ngModule: MdlTooltipModule_1,
            providers: []
        };
    };
    return MdlTooltipModule;
}());
MdlTooltipModule = MdlTooltipModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [],
        exports: MDL_TOOLTIP_DIRECTIVES,
        declarations: MDL_TOOLTIP_DIRECTIVES.concat([__WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_component__["b" /* MdlSimpleTooltipComponent */]]),
        entryComponents: [__WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_component__["b" /* MdlSimpleTooltipComponent */]]
    })
], MdlTooltipModule);

var MdlTooltipModule_1;


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_chip_component__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_mdl_error__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlChipContactDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MdlChipContactDirective = (function () {
    function MdlChipContactDirective(mdlChipComponent) {
        this.mdlChipComponent = mdlChipComponent;
    }
    MdlChipContactDirective.prototype.ngOnInit = function () {
        if (!this.mdlChipComponent) {
            throw new __WEBPACK_IMPORTED_MODULE_2__common_mdl_error__["b" /* MdlStructureError */]('mdl-chip-contact', 'mdl-chip');
        }
    };
    return MdlChipContactDirective;
}());
MdlChipContactDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mdl-chip-contact]',
        host: {
            '[class.mdl-chip__contact]': 'true'
        }
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_1__mdl_chip_component__["a" /* MdlChipComponent */]; }))),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__mdl_chip_component__["a" /* MdlChipComponent */]])
], MdlChipContactDirective);



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_chip_contact_directive__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlChipComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MdlChipComponent = (function () {
    function MdlChipComponent() {
        this.actionClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MdlChipComponent.prototype.action = function () {
        this.actionClick.emit();
    };
    return MdlChipComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-label'),
    __metadata("design:type", Object)
], MdlChipComponent.prototype, "mdlLabel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-action-icon'),
    __metadata("design:type", Object)
], MdlChipComponent.prototype, "mdlActionIcon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('action-click'),
    __metadata("design:type", Object)
], MdlChipComponent.prototype, "actionClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_1__mdl_chip_contact_directive__["a" /* MdlChipContactDirective */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__mdl_chip_contact_directive__["a" /* MdlChipContactDirective */])
], MdlChipComponent.prototype, "chipContact", void 0);
MdlChipComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-chip',
        host: {
            '[class.mdl-chip]': 'true',
            '[class.mdl-chip--contact]': 'chipContact'
        },
        template: "\n    <ng-content></ng-content>\n    <span *ngIf=\"mdlLabel\" class=\"mdl-chip__text\">{{mdlLabel}}</span>\n    <button *ngIf=\"mdlActionIcon\" (click)=\"action()\" type=\"button\" class=\"mdl-chip__action\">\n      <mdl-icon>{{mdlActionIcon}}</mdl-icon>\n    </button>\n  ",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], MdlChipComponent);



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__append_view_container_ref_directive__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlCommonsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MdlCommonsModule = (function () {
    function MdlCommonsModule() {
    }
    return MdlCommonsModule;
}());
MdlCommonsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [],
        exports: [__WEBPACK_IMPORTED_MODULE_1__append_view_container_ref_directive__["a" /* AppendViewContainerRefDirective */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__append_view_container_ref_directive__["a" /* AppendViewContainerRefDirective */]],
    })
], MdlCommonsModule);



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlDialogOutletComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlDialogInnerOutletComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


// the componnet is used outside the app-root. injecting MdlDialogService would not work
// this component is not exported - needs to be instanciated by
//    let x = this.appRef.bootstrap(MdlDialogOutletComponent);
var MdlDialogOutletComponent = (function () {
    function MdlDialogOutletComponent(vCRef) {
        this.vCRef = vCRef;
    }
    Object.defineProperty(MdlDialogOutletComponent.prototype, "viewContainerRef", {
        get: function () {
            return this.vCRef;
        },
        enumerable: true,
        configurable: true
    });
    return MdlDialogOutletComponent;
}());
MdlDialogOutletComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dialog-outlet',
        template: ''
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
], MdlDialogOutletComponent);

// the component is used inside the app-root. this is possible because this component
// is exported from the module
var MdlDialogInnerOutletComponent = (function () {
    function MdlDialogInnerOutletComponent(vCRef, service) {
        this.vCRef = vCRef;
        service.setDefaultViewContainerRef(vCRef);
    }
    return MdlDialogInnerOutletComponent;
}());
MdlDialogInnerOutletComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dialog-outlet',
        template: ''
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_service__["a" /* MdlDialogOutletService */]; }))),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
        __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_service__["a" /* MdlDialogOutletService */]])
], MdlDialogInnerOutletComponent);



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_layout_tab_panel_component__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MdlLayoutContentComponent = (function () {
    function MdlLayoutContentComponent(elRef) {
        this.elRef = elRef;
        this.el = elRef.nativeElement;
    }
    return MdlLayoutContentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_1__mdl_layout_tab_panel_component__["a" /* MdlLayoutTabPanelComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], MdlLayoutContentComponent.prototype, "tabs", void 0);
MdlLayoutContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-layout-content',
        host: {
            '[class.mdl-layout__content]': 'true',
        },
        template: "<ng-content></ng-content>",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], MdlLayoutContentComponent);



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutDrawerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MdlLayoutDrawerComponent = (function () {
    function MdlLayoutDrawerComponent(parentLayout) {
        this.parentLayout = parentLayout;
        this.isDrawerVisible = false;
    }
    MdlLayoutDrawerComponent.prototype.isDrawerDirectChildOf = function (layout) {
        return this.parentLayout === layout;
    };
    return MdlLayoutDrawerComponent;
}());
MdlLayoutDrawerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-layout-drawer',
        host: {
            '[class.mdl-layout__drawer]': 'true',
            '[class.is-visible]': 'isDrawerVisible'
        },
        template: "<ng-content></ng-content>",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__["a" /* MdlLayoutComponent */]; }))),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__["a" /* MdlLayoutComponent */]])
], MdlLayoutDrawerComponent);



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MdlLayoutHeaderComponent = (function () {
    function MdlLayoutHeaderComponent(elementRef, renderer, mdlLayout) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.mdlLayout = mdlLayout;
        this.isCompact = false;
        this.isAnimating = false;
        this.isSeamed = false;
        this.isRipple = true;
        this.el = elementRef.nativeElement;
    }
    MdlLayoutHeaderComponent.prototype.onTransitionEnd = function () {
        this.isAnimating = false;
    };
    MdlLayoutHeaderComponent.prototype.onClick = function () {
        if (this.isCompact) {
            this.isCompact = false;
            this.isAnimating = true;
        }
    };
    return MdlLayoutHeaderComponent;
}());
MdlLayoutHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-layout-header',
        host: {
            '[class.mdl-layout__header]': 'true',
            '[class.is-casting-shadow]': 'mode==="standard" || isCompact',
            '[class.mdl-layout__header--seamed]': 'isSeamed',
            '[class.mdl-layout__header--waterfall]': 'mode==="waterfall"',
            '[class.mdl-layout__header--scroll]': 'mode==="scroll"',
            '[class.is-compact]': 'isCompact',
            '(transitionend)': 'onTransitionEnd()',
            '(click)': 'onClick()'
        },
        template: "\n     <ng-content></ng-content>\n     <div *ngIf=\"tabs?.toArray()?.length > 0\" class=\"mdl-layout__tab-bar-container\">\n         <div class=\"mdl-layout__tab-bar is-casting-shadow\">\n           <div *ngFor=\"let tab of tabs.toArray()\" \n                class=\"mdl-layout__tab\" \n                [ngClass]=\"{'is-active': tab.isActive}\"\n                (mouseover)=\"mdlLayout.onTabMouseover(tab)\" \n                (mouseout)=\"mdlLayout.onTabMouseout(tab)\">\n              <div \n                *ngIf=\"tab.titleComponent\" \n                (click)=\"mdlLayout.tabSelected(tab)\"\n                [mdl-ripple]=\"isRipple\"\n                [append-view-container-ref]=\"tab.titleComponent.vcRef\"></div>\n              <a *ngIf=\"!tab.titleComponent\" \n                    href=\"javascript:void(0)\"   \n                    (click)=\"mdlLayout.tabSelected(tab)\"\n                    class=\"mdl-layout__tab\" \n                    [ngClass]=\"{'is-active': tab.isActive}\"\n                    [mdl-ripple]=\"isRipple\"\n                   >{{tab.title}}</a>\n             </div>\n         </div>\n     </div>\n  ",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__["a" /* MdlLayoutComponent */]; }))),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
        __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__["a" /* MdlLayoutComponent */]])
], MdlLayoutHeaderComponent);



/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabs_index__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutTabPanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MdlLayoutTabPanelComponent = (function () {
    function MdlLayoutTabPanelComponent() {
        this.isActive = false;
    }
    return MdlLayoutTabPanelComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_1__tabs_index__["e" /* MdlTabPanelTitleComponent */]),
    __metadata("design:type", Object)
], MdlLayoutTabPanelComponent.prototype, "titleComponent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-layout-tab-panel-title'),
    __metadata("design:type", Object)
], MdlLayoutTabPanelComponent.prototype, "title", void 0);
MdlLayoutTabPanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-layout-tab-panel',
        host: {
            '[class.mdl-layout__tab-panel]': 'true',
            '[class.is-active]': 'isActive'
        },
        template: "\n   <ng-content *ngIf=\"titleComponent\" select=\"mdl-tab-panel-content\"></ng-content>\n   <ng-content *ngIf=\"!titleComponent\"></ng-content>\n   ",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], MdlLayoutTabPanelComponent);



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_menu_component__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_boolean_property__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlMenuItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MdlMenuItemComponent = (function () {
    // forwardRef is needed because of he circular dependency menu queries menuitems; menuitem needs the parent
    function MdlMenuItemComponent(elementRef, renderer, mdlMenu) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.mdlMenu = mdlMenu;
        this._disabled = false;
        this.element = elementRef.nativeElement;
    }
    Object.defineProperty(MdlMenuItemComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlMenuItemComponent.prototype.onClick = function ($event) {
        $event.stopPropagation();
        if (this.disabled) {
            this.mdlMenu.hide();
            return;
        }
        this.mdlMenu.hideOnItemClicked();
    };
    // we need to register a touchstart at the window to get informed if the user taps outside the menu.
    // But if we register a touchstart event - safari will no longer convert touch events to click events.
    // So we need to convert touch to click and the user still needs to register a (click) listener to be
    // informed if the menu item has clicked.
    MdlMenuItemComponent.prototype.onTouch = function ($event) {
        // ensure that this event is totally consumed
        $event.stopPropagation();
        $event.preventDefault();
        var event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(this.element, 'dispatchEvent', [event]);
    };
    return MdlMenuItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], MdlMenuItemComponent.prototype, "disabled", null);
MdlMenuItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-menu-item',
        host: {
            '[class.mdl-menu__item]': 'true',
            'tabindex': '-1',
            '(click)': 'onClick($event)',
            '(touchstart)': 'onTouch($event)'
        },
        template: '<ng-content></ng-content>',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_1__mdl_menu_component__["a" /* MdlMenuComponent */]; }))),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
        __WEBPACK_IMPORTED_MODULE_1__mdl_menu_component__["a" /* MdlMenuComponent */]])
], MdlMenuItemComponent);



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTabPanelTitleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MdlTabPanelTitleComponent = (function () {
    function MdlTabPanelTitleComponent(vcRef) {
        this.vcRef = vcRef;
    }
    return MdlTabPanelTitleComponent;
}());
MdlTabPanelTitleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-tab-panel-title',
        template: "\n   <ng-content></ng-content>\n   ",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
], MdlTabPanelTitleComponent);



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_tab_panel_title_component__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTabPanelContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlTabPanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MdlTabPanelContent = (function () {
    function MdlTabPanelContent() {
    }
    return MdlTabPanelContent;
}());
MdlTabPanelContent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-tab-panel-content',
        template: '<ng-content></ng-content>',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], MdlTabPanelContent);

var MdlTabPanelComponent = (function () {
    function MdlTabPanelComponent() {
        this.isActive = false;
    }
    return MdlTabPanelComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_1__mdl_tab_panel_title_component__["a" /* MdlTabPanelTitleComponent */]),
    __metadata("design:type", Object)
], MdlTabPanelComponent.prototype, "titleComponent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-tab-panel-title'),
    __metadata("design:type", Object)
], MdlTabPanelComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('disabled'),
    __metadata("design:type", Object)
], MdlTabPanelComponent.prototype, "disabled", void 0);
MdlTabPanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-tab-panel',
        host: {
            '[class.mdl-tabs__panel]': 'true',
            '[class.is-active]': 'isActive'
        },
        template: "\n   <ng-content *ngIf=\"titleComponent\" select=\"mdl-tab-panel-content\"></ng-content>\n   <ng-content *ngIf=\"!titleComponent\"></ng-content>\n   ",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], MdlTabPanelComponent);



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_position_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlSimpleTooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTooltipComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IS_ACTIVE = 'is-active';
var host = {
    '[class.mdl-tooltip]': 'true',
    '[class.mdl-tooltip--large]': 'large',
    '[class.mdl-tooltip--left]': 'position=="left"',
    '[class.mdl-tooltip--right]': 'position=="right"',
    '[class.mdl-tooltip--top]': 'position=="top"',
    '[class.mdl-tooltip--bottom]': 'position=="bottom"'
};
var MdlSimpleTooltipComponent = (function () {
    function MdlSimpleTooltipComponent(elRef, renderer, mdlTooltipPositionService) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.mdlTooltipPositionService = mdlTooltipPositionService;
        this.large = false;
        this.active = false;
        this.element = elRef.nativeElement;
    }
    MdlSimpleTooltipComponent.prototype.mouseLeave = function () {
        if (this.delayTimeout) {
            clearTimeout(this.delayTimeout);
        }
        this.setActive(false);
    };
    MdlSimpleTooltipComponent.prototype.mouseEnter = function (event) {
        var _this = this;
        if (this.delay) {
            this.delayTimeout = setTimeout(function () {
                _this.show(event.target);
            }, this.delay);
        }
        else {
            this.show(event.target);
        }
    };
    MdlSimpleTooltipComponent.prototype.show = function (element) {
        var props = element.getBoundingClientRect();
        var offsetWidth = this.element.offsetWidth;
        var offsetHeight = this.element.offsetHeight;
        var style = this.mdlTooltipPositionService.calcStyle(offsetWidth, offsetHeight, props, this.position);
        for (var key in style) {
            this.renderer.setElementStyle(this.elRef.nativeElement, key, style[key]);
        }
        this.setActive(true);
    };
    MdlSimpleTooltipComponent.prototype.hide = function () {
        this.mouseLeave();
    };
    MdlSimpleTooltipComponent.prototype.setActive = function (active) {
        this.active = active;
        this.renderer.setElementClass(this.elRef.nativeElement, IS_ACTIVE, active);
    };
    MdlSimpleTooltipComponent.prototype.isActive = function () {
        return this.active;
    };
    return MdlSimpleTooltipComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], MdlSimpleTooltipComponent.prototype, "delay", void 0);
MdlSimpleTooltipComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-simple-tooltip',
        host: host,
        template: '<div>{{tooltipText}}</div>',
        providers: [__WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_position_service__["a" /* MdlTooltipPositionService */]],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
        __WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_position_service__["a" /* MdlTooltipPositionService */]])
], MdlSimpleTooltipComponent);

var MdlTooltipComponent = (function (_super) {
    __extends(MdlTooltipComponent, _super);
    function MdlTooltipComponent(elRef, renderer, mdlTooltipPositionService) {
        return _super.call(this, elRef, renderer, mdlTooltipPositionService) || this;
    }
    return MdlTooltipComponent;
}(MdlSimpleTooltipComponent));
MdlTooltipComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-tooltip',
        template: '<div><ng-content></ng-content></div>',
        exportAs: 'mdlTooltip',
        host: host,
        providers: [__WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_position_service__["a" /* MdlTooltipPositionService */]],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_position_service__["a" /* MdlTooltipPositionService */]])
], MdlTooltipComponent);



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppendViewContainerRefDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppendViewContainerRefDirective = (function () {
    function AppendViewContainerRefDirective(viewRef, renderer) {
        this.viewRef = viewRef;
        this.renderer = renderer;
    }
    AppendViewContainerRefDirective.prototype.ngAfterViewInit = function () {
        this.renderer.projectNodes(this.viewRef.element.nativeElement, [this.viewContainerRefToAppend.element.nativeElement]);
    };
    return AppendViewContainerRefDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('append-view-container-ref'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"])
], AppendViewContainerRefDirective.prototype, "viewContainerRefToAppend", void 0);
AppendViewContainerRefDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[append-view-container-ref]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], AppendViewContainerRefDirective);



/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternalMdlDialogReference; });


/**
 * Internal representation of the dialog ref. the service
 * user should not have access to the created components
 * and internal implementations.
 */
var InternalMdlDialogReference = (function () {
    function InternalMdlDialogReference(config) {
        this.config = config;
        this.onHideSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.onVisibleSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.isModal = false;
        this.dialogRef = new __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__["b" /* MdlDialogReference */](this);
    }
    Object.defineProperty(InternalMdlDialogReference.prototype, "hostDialog", {
        get: function () {
            return this.hostDialogComponentRef.instance;
        },
        enumerable: true,
        configurable: true
    });
    InternalMdlDialogReference.prototype.hide = function (data) {
        this.onHideSubject.next(data);
        this.onHideSubject.complete();
        this.closeCallback();
    };
    InternalMdlDialogReference.prototype.visible = function () {
        this.onVisibleSubject.next();
        this.onVisibleSubject.complete();
    };
    InternalMdlDialogReference.prototype.onHide = function () {
        return this.onHideSubject.asObservable();
    };
    InternalMdlDialogReference.prototype.onVisible = function () {
        return this.onVisibleSubject.asObservable();
    };
    return InternalMdlDialogReference;
}());



/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlAlertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MdlAlertComponent = (function () {
    function MdlAlertComponent(mdlDialogService) {
        this.mdlDialogService = mdlDialogService;
        this.confirmed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MdlAlertComponent.prototype.show = function () {
        var _this = this;
        this.mdlDialogService.alert(this.message, this.okText, this.title).subscribe(function () {
            _this.confirmed.emit();
        });
    };
    return MdlAlertComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MdlAlertComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MdlAlertComponent.prototype, "message", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MdlAlertComponent.prototype, "okText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MdlAlertComponent.prototype, "confirmed", void 0);
MdlAlertComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-alert',
        host: {
            '[style.display]': '"none"'
        },
        template: "\n  ",
        exportAs: 'mdlAlert'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__["d" /* MdlDialogService */]])
], MdlAlertComponent);



/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdl_dialog_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_boolean_property__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MdlDialogComponent = (function () {
    function MdlDialogComponent(dialogService) {
        this.dialogService = dialogService;
        this.showEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.hideEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isShown = false;
        this.dialogRef = null;
    }
    Object.defineProperty(MdlDialogComponent.prototype, "modal", {
        get: function () { return this._modal; },
        set: function (value) { this._modal = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlDialogComponent.prototype.show = function () {
        var _this = this;
        if (this.isShown) {
            throw new Error('Only one instance of an embedded mdl-dialog can exist!');
        }
        this.isShown = true;
        var mergedConfig = this.config || {};
        // mdl-modal overwrites config.isModal if present
        mergedConfig.isModal = typeof this.modal !== 'undefined' ? this.modal : mergedConfig.isModal;
        // default is true
        if (typeof mergedConfig.isModal === 'undefined') {
            mergedConfig.isModal = true;
        }
        var result = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        var p = this.dialogService.showDialogTemplate(this.template, mergedConfig);
        p.subscribe(function (dialogRef) {
            _this.dialogRef = dialogRef;
            _this.dialogRef.onVisible().subscribe(function () {
                _this.showEmitter.emit(dialogRef);
                result.next(dialogRef);
                result.complete();
            });
            _this.dialogRef.onHide().subscribe(function () {
                _this.hideEmitter.emit(null);
                _this.dialogRef = null;
                _this.isShown = false;
            });
        });
        return result.asObservable();
    };
    MdlDialogComponent.prototype.close = function () {
        if (this.dialogRef) {
            this.dialogRef.hide();
        }
    };
    return MdlDialogComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
], MdlDialogComponent.prototype, "template", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-modal'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], MdlDialogComponent.prototype, "modal", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-dialog-config'),
    __metadata("design:type", Object)
], MdlDialogComponent.prototype, "config", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('show'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], MdlDialogComponent.prototype, "showEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('hide'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], MdlDialogComponent.prototype, "hideEmitter", void 0);
MdlDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-dialog',
        template: "\n    <div *dialogTemplate>\n      <ng-content></ng-content>\n    </div>\n  ",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__mdl_dialog_service__["d" /* MdlDialogService */]])
], MdlDialogComponent);



/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutHeaderRowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MdlLayoutHeaderRowComponent = (function () {
    function MdlLayoutHeaderRowComponent() {
    }
    return MdlLayoutHeaderRowComponent;
}());
MdlLayoutHeaderRowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-layout-header-row',
        host: {
            '[class.mdl-layout__header-row]': 'true'
        },
        template: '<ng-content></ng-content>',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], MdlLayoutHeaderRowComponent);



/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutHeaderTransparentDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MdlLayoutHeaderTransparentDirective = (function () {
    function MdlLayoutHeaderTransparentDirective() {
    }
    return MdlLayoutHeaderTransparentDirective;
}());
MdlLayoutHeaderTransparentDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'mdl-layout-header[mdl-layout-header-transparent]',
        host: {
            '[class.mdl-layout__header--transparent]': 'true'
        }
    })
], MdlLayoutHeaderTransparentDirective);



/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutSpacerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MdlLayoutSpacerComponent = (function () {
    function MdlLayoutSpacerComponent() {
    }
    return MdlLayoutSpacerComponent;
}());
MdlLayoutSpacerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-layout-spacer',
        host: {
            '[class.mdl-layout-spacer]': 'true'
        },
        template: '',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], MdlLayoutSpacerComponent);



/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutTitleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MdlLayoutTitleComponent = (function () {
    function MdlLayoutTitleComponent() {
    }
    return MdlLayoutTitleComponent;
}());
MdlLayoutTitleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-layout-title',
        host: {
            '[class.mdl-layout-title]': 'true'
        },
        template: '<ng-content></ng-content>',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], MdlLayoutTitleComponent);



/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlMenuItemFullBleedDeviderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MdlMenuItemFullBleedDeviderComponent = (function () {
    function MdlMenuItemFullBleedDeviderComponent() {
    }
    return MdlMenuItemFullBleedDeviderComponent;
}());
MdlMenuItemFullBleedDeviderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mdl-menu-item-full-bleed-divider]',
        host: {
            '[class.mdl-menu__item--full-bleed-divider]': 'true'
        }
    })
], MdlMenuItemFullBleedDeviderComponent);



/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlDefaultTableModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MdlSelectableTableComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MdlDefaultTableModel = (function () {
    function MdlDefaultTableModel(columns) {
        this.data = [];
        this.columns = columns;
    }
    MdlDefaultTableModel.prototype.addAll = function (data) {
        (_a = this.data).push.apply(_a, data);
        var _a;
    };
    return MdlDefaultTableModel;
}());

var template = "\n        <table class=\"mdl-data-table\">\n           <thead>\n           <tr>\n              <th *ngIf=\"selectable\">\n                 <mdl-checkbox mdl-ripple [ngModel]=\"isAllSelected()\" (ngModelChange)=\"toogleAll()\"></mdl-checkbox>\n              </th>\n              <th *ngFor=\"let column of model.columns\"\n                  [ngClass]=\"{'mdl-data-table__cell--non-numeric': !column.numeric}\">\n                 {{column.name}}\n              </th>\n           </tr>\n           </thead>\n           <tbody>\n           <tr *ngFor=\"let data of model.data; let i = index\" [ngClass]=\"{'is-selected': selectable && data.selected}\">\n              <td *ngIf=\"selectable\">\n                 <mdl-checkbox mdl-ripple\n                      [(ngModel)]=\"data.selected\"\n                      (ngModelChange)=\"selectionChanged(data)\"></mdl-checkbox>\n              </td>\n              <td *ngFor=\"let column of model.columns\"\n                  [ngClass]=\"{'mdl-data-table__cell--non-numeric': !column.numeric}\"\n                  [innerHTML]=\"data[column.key]\">\n              </td>\n           </tr>\n           </tbody>\n        </table>  \n    ";
var styles = [
    "\n    :host{\n      display:inline-block;\n    }\n    "
];
var MdlTableComponent = (function () {
    function MdlTableComponent() {
        this.selectable = false;
    }
    return MdlTableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('table-model'),
    __metadata("design:type", Object)
], MdlTableComponent.prototype, "model", void 0);
MdlTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-table',
        template: template,
        styles: styles,
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], MdlTableComponent);

var MdlSelectableTableComponent = (function (_super) {
    __extends(MdlSelectableTableComponent, _super);
    function MdlSelectableTableComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.selectable = true;
        _this.allSelected = false;
        return _this;
    }
    MdlSelectableTableComponent.prototype.isAllSelected = function () {
        return this.model.data.every(function (data) { return data.selected; });
    };
    MdlSelectableTableComponent.prototype.toogleAll = function () {
        var selected = !this.isAllSelected();
        this.model.data.forEach(function (data) { return data.selected = selected; });
        this.updateSelected();
    };
    MdlSelectableTableComponent.prototype.updateSelected = function () {
        this.selected = this.model.data.filter(function (data) { return data.selected; });
        this.selectionChange.emit({ value: this.selected });
    };
    MdlSelectableTableComponent.prototype.selectionChanged = function (data) {
        this.updateSelected();
    };
    return MdlSelectableTableComponent;
}(MdlTableComponent));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('table-model'),
    __metadata("design:type", Object)
], MdlSelectableTableComponent.prototype, "model", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('table-model-selected'),
    __metadata("design:type", Array)
], MdlSelectableTableComponent.prototype, "selected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('table-model-selectionChanged'),
    __metadata("design:type", Object)
], MdlSelectableTableComponent.prototype, "selectionChange", void 0);
MdlSelectableTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-table-selectable',
        template: template,
        styles: styles,
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], MdlSelectableTableComponent);



/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_boolean_property__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_number_property__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdl_tab_panel_component__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTabsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MdlTabsComponent = (function () {
    function MdlTabsComponent() {
        this._selectedIndex = 0;
        this._isRipple = false;
        this.selectedTabEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(MdlTabsComponent.prototype, "selectedIndex", {
        get: function () { return this._selectedIndex; },
        set: function (value) { this._selectedIndex = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_number_property__["a" /* toNumber */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTabsComponent.prototype, "isRipple", {
        get: function () { return this._isRipple; },
        set: function (value) { this._isRipple = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlTabsComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // the initial tabs
        this.updateSelectedTabIndex();
        // listen to tab changes - this would not be necessary if this would be fixed:
        // https://github.com/angular/angular/issues/12818
        this.tabs.changes.subscribe(function () {
            _this.updateSelectedTabIndex();
        });
    };
    MdlTabsComponent.prototype.ngOnChanges = function (changes) {
        if (changes['selectedIndex']) {
            this.updateSelectedTabIndex();
        }
    };
    MdlTabsComponent.prototype.updateSelectedTabIndex = function () {
        var _this = this;
        if (this.tabs) {
            // https://github.com/angular/angular/issues/6005
            // this would not be necessare if this would be fixed: https://github.com/angular/angular/issues/12818
            setTimeout(function () {
                _this.tabs.forEach(function (tab, idx) {
                    tab.isActive = _this.selectedIndex === idx;
                });
            }, 1);
        }
    };
    MdlTabsComponent.prototype.tabSelected = function (tab) {
        if (tab.disabled) {
            return;
        }
        var index = this.tabs.toArray().indexOf(tab);
        if (index != this.selectedIndex) {
            this.selectedIndex = index;
            this.updateSelectedTabIndex();
            this.selectedTabEmitter.emit({ index: this.selectedIndex });
        }
    };
    return MdlTabsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-tab-active-index'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdlTabsComponent.prototype, "selectedIndex", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-ripple'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdlTabsComponent.prototype, "isRipple", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('mdl-tab-active-changed'),
    __metadata("design:type", Object)
], MdlTabsComponent.prototype, "selectedTabEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_3__mdl_tab_panel_component__["b" /* MdlTabPanelComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], MdlTabsComponent.prototype, "tabs", void 0);
MdlTabsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-tabs',
        host: {
            '[class.mdl-tabs]': 'true',
            '[class.is-upgraded]': 'true'
        },
        template: "\n   <div class=\"mdl-tabs__tab-bar\">\n      <div *ngFor=\"let tab of tabs.toArray()\">\n        <div\n          *ngIf=\"tab.titleComponent\"\n          class=\"mdl-tabs__tab\"\n          (click)=\"tabSelected(tab)\"\n          [mdl-ripple]=\"isRipple && !tab.disabled\"\n          [ngClass]=\"{'is-active': tab.isActive, 'disabled': tab.disabled}\"\n          [append-view-container-ref]=\"tab.titleComponent.vcRef\"></div>\n        <a *ngIf=\"!tab.titleComponent\" href=\"javascript:void(0)\"\n              (click)=\"tabSelected(tab)\"\n              class=\"mdl-tabs__tab\"\n              [mdl-ripple]=\"isRipple && !tab.disabled\"\n              [ngClass]=\"{'is-active': tab.isActive, 'disabled': tab.disabled}\">{{tab.title}}</a>\n       </div>\n  </div>\n  <ng-content></ng-content>\n  ",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], MdlTabsComponent);



/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_component__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AbstractMdlTooltipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlTooltipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTooltipLargeDirective; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AbstractMdlTooltipDirective = (function () {
    function AbstractMdlTooltipDirective(vcRef, large, componentFactoryResolver, renderer) {
        this.vcRef = vcRef;
        this.large = large;
        this.componentFactoryResolver = componentFactoryResolver;
        this.renderer = renderer;
    }
    AbstractMdlTooltipDirective.prototype.ngOnInit = function () {
        // if the tooltip is not an instance of MdlTooltipComponent
        // we create a simpleTooltipComponent on the fly.
        if (!(this.tooltip instanceof __WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_component__["a" /* MdlTooltipComponent */])) {
            var cFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_component__["b" /* MdlSimpleTooltipComponent */]);
            var cRef = this.vcRef.createComponent(cFactory);
            this.tooltipComponent = cRef.instance;
            this.tooltipComponent.tooltipText = this.tooltip;
            this.configureTooltipComponent();
        }
        else {
            this.tooltipComponent = this.tooltip;
            this.configureTooltipComponent();
        }
    };
    AbstractMdlTooltipDirective.prototype.configureTooltipComponent = function () {
        this.tooltipComponent.large = this.large;
        this.tooltipComponent.position = this.position;
    };
    AbstractMdlTooltipDirective.prototype.onMouseEnter = function (event) {
        this.tooltipComponent.mouseEnter(event);
    };
    AbstractMdlTooltipDirective.prototype.onMouseLeave = function () {
        this.tooltipComponent.mouseLeave();
    };
    return AbstractMdlTooltipDirective;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:touchstart'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AbstractMdlTooltipDirective.prototype, "onMouseLeave", null);
var host = {
    '(mouseenter)': 'onMouseEnter($event)',
    '(touchend)': 'onMouseEnter($event)',
    '(mouseleave)': 'onMouseLeave()'
};
var MdlTooltipDirective = (function (_super) {
    __extends(MdlTooltipDirective, _super);
    function MdlTooltipDirective(vcRef, componentFactoryResolver, renderer) {
        return _super.call(this, vcRef, false, componentFactoryResolver, renderer) || this;
    }
    MdlTooltipDirective.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    return MdlTooltipDirective;
}(AbstractMdlTooltipDirective));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-tooltip'),
    __metadata("design:type", Object)
], MdlTooltipDirective.prototype, "tooltip", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-tooltip-position'),
    __metadata("design:type", String)
], MdlTooltipDirective.prototype, "position", void 0);
MdlTooltipDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mdl-tooltip]',
        host: host
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], MdlTooltipDirective);

var MdlTooltipLargeDirective = (function (_super) {
    __extends(MdlTooltipLargeDirective, _super);
    function MdlTooltipLargeDirective(vcRef, componentFactoryResolver, renderer) {
        return _super.call(this, vcRef, true, componentFactoryResolver, renderer) || this;
    }
    MdlTooltipLargeDirective.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    return MdlTooltipLargeDirective;
}(AbstractMdlTooltipDirective));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-tooltip-large'),
    __metadata("design:type", Object)
], MdlTooltipLargeDirective.prototype, "tooltip", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-tooltip-position'),
    __metadata("design:type", String)
], MdlTooltipLargeDirective.prototype, "position", void 0);
MdlTooltipLargeDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mdl-tooltip-large]',
        host: host
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], MdlTooltipLargeDirective);



/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_62__;

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = MaterialRipple;
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Class constructor for Ripple MDL component.
 * Implements MDL component design pattern defined at:
 * https://github.com/jasonmayes/mdl-component-design-pattern
 *
 * @constructor
 * @param {HTMLElement} element The element that will be upgraded.
 */
function MaterialRipple(renderer, element) {
    this.renderer_ = renderer;
    this.element_ = element;
    // Initialize instance.
    this.init();
}
;
/**
 * Store constants in one place so they can be updated easily.
 *
 * @enum {string | number}
 * @private
 */
MaterialRipple.prototype.Constant_ = {
    INITIAL_SCALE: 'scale(0.0001, 0.0001)',
    INITIAL_SIZE: '1px',
    INITIAL_OPACITY: '0.4',
    FINAL_OPACITY: '0',
    FINAL_SCALE: ''
};
/**
 * Store strings for class names defined by this component that are used in
 * JavaScript. This allows us to simply change it in one place should we
 * decide to modify at a later date.
 *
 * @enum {string}
 * @private
 */
MaterialRipple.prototype.CssClasses_ = {
    RIPPLE_CENTER: 'mdl-ripple--center',
    RIPPLE_EFFECT_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
    RIPPLE: 'mdl-ripple',
    IS_ANIMATING: 'is-animating',
    IS_VISIBLE: 'is-visible'
};
/**
 * Handle mouse / finger down on element.
 *
 * @param {Event} event The event that fired.
 * @private
 */
MaterialRipple.prototype.downHandler_ = function (event) {
    if (!this.rippleElement_.style.width && !this.rippleElement_.style.height) {
        var rect = this.element_.getBoundingClientRect();
        this.boundHeight = rect.height;
        this.boundWidth = rect.width;
        this.rippleSize_ = Math.sqrt(rect.width * rect.width +
            rect.height * rect.height) * 2 + 2;
        this.rippleElement_.style.width = this.rippleSize_ + 'px';
        this.rippleElement_.style.height = this.rippleSize_ + 'px';
    }
    this.renderer_.setElementClass(this.rippleElement_, this.CssClasses_.IS_VISIBLE, true);
    if (event.type === 'mousedown' && this.ignoringMouseDown_) {
        this.ignoringMouseDown_ = false;
    }
    else {
        if (event.type === 'touchstart') {
            this.ignoringMouseDown_ = true;
        }
        var frameCount = this.getFrameCount();
        if (frameCount > 0) {
            return;
        }
        this.setFrameCount(1);
        var bound = event.currentTarget.getBoundingClientRect();
        var x;
        var y;
        // Check if we are handling a keyboard click.
        if (event.clientX === 0 && event.clientY === 0) {
            x = Math.round(bound.width / 2);
            y = Math.round(bound.height / 2);
        }
        else {
            var clientX = event.clientX !== undefined ? event.clientX : event.touches[0].clientX;
            var clientY = event.clientY !== undefined ? event.clientY : event.touches[0].clientY;
            x = Math.round(clientX - bound.left);
            y = Math.round(clientY - bound.top);
        }
        this.setRippleXY(x, y);
        this.setRippleStyles(true);
        window.requestAnimationFrame(this.animFrameHandler.bind(this));
    }
};
/**
 * Handle mouse / finger up on element.
 *
 * @param {Event} event The event that fired.
 * @private
 */
MaterialRipple.prototype.upHandler_ = function (event) {
    // Don't fire for the artificial "mouseup" generated by a double-click.
    if (event && event.detail !== 2) {
        // Allow a repaint to occur before removing this class, so the animation
        // shows for tap events, which seem to trigger a mouseup too soon after
        // mousedown.
        setTimeout(function () {
            this.renderer_.setElementClass(this.rippleElement_, this.CssClasses_.IS_VISIBLE, false);
        }.bind(this), 0);
    }
};
/**
 * Initialize element.
 */
MaterialRipple.prototype.init = function () {
    if (this.element_) {
        var recentering = this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);
        if (!this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)) {
            this.rippleElement_ = this.element_.querySelector('.' +
                this.CssClasses_.RIPPLE);
            this.frameCount_ = 0;
            this.rippleSize_ = 0;
            this.x_ = 0;
            this.y_ = 0;
            // Touch start produces a compat mouse down event, which would cause a
            // second ripples. To avoid that, we use this property to ignore the first
            // mouse down after a touch start.
            this.ignoringMouseDown_ = false;
            this.boundDownHandler = this.downHandler_.bind(this);
            this.element_.addEventListener('mousedown', this.boundDownHandler);
            this.element_.addEventListener('touchstart', this.boundDownHandler);
            this.boundUpHandler = this.upHandler_.bind(this);
            this.element_.addEventListener('mouseup', this.boundUpHandler);
            this.element_.addEventListener('mouseleave', this.boundUpHandler);
            this.element_.addEventListener('touchend', this.boundUpHandler);
            this.element_.addEventListener('blur', this.boundUpHandler);
            /**
             * Getter for frameCount_.
             * @return {number} the frame count.
             */
            this.getFrameCount = function () {
                return this.frameCount_;
            };
            /**
             * Setter for frameCount_.
             * @param {number} fC the frame count.
             */
            this.setFrameCount = function (fC) {
                this.frameCount_ = fC;
            };
            /**
             * Getter for rippleElement_.
             * @return {Element} the ripple element.
             */
            this.getRippleElement = function () {
                return this.rippleElement_;
            };
            /**
             * Sets the ripple X and Y coordinates.
             * @param  {number} newX the new X coordinate
             * @param  {number} newY the new Y coordinate
             */
            this.setRippleXY = function (newX, newY) {
                this.x_ = newX;
                this.y_ = newY;
            };
            /**
             * Sets the ripple styles.
             * @param  {boolean} start whether or not this is the start frame.
             */
            this.setRippleStyles = function (start) {
                if (this.rippleElement_ !== null) {
                    var transformString;
                    var scale;
                    var size;
                    var offset = 'translate(' + this.x_ + 'px, ' + this.y_ + 'px)';
                    if (start) {
                        scale = this.Constant_.INITIAL_SCALE;
                        size = this.Constant_.INITIAL_SIZE;
                    }
                    else {
                        scale = this.Constant_.FINAL_SCALE;
                        size = this.rippleSize_ + 'px';
                        if (recentering) {
                            offset = 'translate(' + this.boundWidth / 2 + 'px, ' +
                                this.boundHeight / 2 + 'px)';
                        }
                    }
                    transformString = 'translate(-50%, -50%) ' + offset + scale;
                    this.rippleElement_.style.webkitTransform = transformString;
                    this.rippleElement_.style.msTransform = transformString;
                    this.rippleElement_.style.transform = transformString;
                    this.renderer_.setElementClass(this.rippleElement_, this.CssClasses_.IS_ANIMATING, !start);
                }
            };
            /**
             * Handles an animation frame.
             */
            this.animFrameHandler = function () {
                if (this.frameCount_-- > 0) {
                    window.requestAnimationFrame(this.animFrameHandler.bind(this));
                }
                else {
                    this.setRippleStyles(false);
                }
            };
        }
    }
};


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_menu_component__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_mdl_button_component__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlToggleMenuDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MdlToggleMenuDirective = (function () {
    function MdlToggleMenuDirective(button) {
        this.button = button;
    }
    MdlToggleMenuDirective.prototype.onClick = function ($event) {
        this.menu.toggle($event, this.button);
    };
    return MdlToggleMenuDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdl-toggle-menu'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__mdl_menu_component__["a" /* MdlMenuComponent */])
], MdlToggleMenuDirective.prototype, "menu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MdlToggleMenuDirective.prototype, "onClick", null);
MdlToggleMenuDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mdl-button][mdl-toggle-menu]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__button_mdl_button_component__["c" /* MdlButtonComponent */]])
], MdlToggleMenuDirective);



/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTooltipPositionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MdlTooltipPositionService = (function () {
    function MdlTooltipPositionService() {
    }
    MdlTooltipPositionService.prototype.calcStyle = function (offsetWidth, offsetHeight, props, position) {
        var result = {};
        var left = props.left + (props.width / 2);
        var top = props.top + (props.height / 2);
        var marginLeft = -1 * (offsetWidth / 2);
        var marginTop = -1 * (offsetHeight / 2);
        if (position == 'left' || position == 'right') {
            left = (props.width / 2);
            if (top + marginTop < 0) {
                result.top = '0';
                result.marginTop = '0';
            }
            else {
                result.top = top + 'px';
                result.marginTop = marginTop + 'px';
            }
        }
        else {
            if (left + marginLeft < 0) {
                result.left = '0';
                result.marginLeft = '0';
            }
            else {
                result.left = left + 'px';
                result.marginLeft = marginLeft + 'px';
            }
        }
        if (position == 'top') {
            result.top = props.top - offsetHeight - 10 + 'px';
        }
        else if (position == 'right') {
            result.left = props.left + props.width + 10 + 'px';
        }
        else if (position == 'left') {
            result.left = props.left - offsetWidth - 10 + 'px';
        }
        else {
            result.top = props.top + props.height + 10 + 'px';
        }
        return result;
    };
    return MdlTooltipPositionService;
}());
MdlTooltipPositionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], MdlTooltipPositionService);



/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_66__;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_67__;

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_mdl_ripple_directive__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_mdl_button_component__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__badge_mdl_badge_directive__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shadow_mdl_shadow_directive__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__card_mdl_card_component__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chips_index__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialog_index__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dialog_outlet_index__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__checkbox_mdl_checkbox_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__radio_mdl_radio_component__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__progress_mdl_progress_component__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__icon_mdl_icon_component__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__icon_toggle_mdl_icon_toggle_component__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__list_mdl_list_component__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__spinner_mdl_spinner_component__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__slider_mdl_slider_component__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__switch_mdl_switch_component__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__snackbar_mdl_snackbar_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__tooltip_index__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__table_index__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__menu_index__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__layout_index__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__tabs_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__textfield_mdl_textfield_component__ = __webpack_require__(36);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlRippleDirective", function() { return __WEBPACK_IMPORTED_MODULE_1__common_mdl_ripple_directive__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlButtonRippleDirective", function() { return __WEBPACK_IMPORTED_MODULE_1__common_mdl_ripple_directive__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlCheckboxRippleDirective", function() { return __WEBPACK_IMPORTED_MODULE_1__common_mdl_ripple_directive__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlRadioRippleDirective", function() { return __WEBPACK_IMPORTED_MODULE_1__common_mdl_ripple_directive__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlIconToggleRippleDirective", function() { return __WEBPACK_IMPORTED_MODULE_1__common_mdl_ripple_directive__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlSwitchRippleDirective", function() { return __WEBPACK_IMPORTED_MODULE_1__common_mdl_ripple_directive__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlMenuItemRippleDirective", function() { return __WEBPACK_IMPORTED_MODULE_1__common_mdl_ripple_directive__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlAnchorRippleDirective", function() { return __WEBPACK_IMPORTED_MODULE_1__common_mdl_ripple_directive__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlRippleModule", function() { return __WEBPACK_IMPORTED_MODULE_1__common_mdl_ripple_directive__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlBadgeDirective", function() { return __WEBPACK_IMPORTED_MODULE_3__badge_mdl_badge_directive__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlBadgeOverlapDirective", function() { return __WEBPACK_IMPORTED_MODULE_3__badge_mdl_badge_directive__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlBadgeNoBackgroundDirective", function() { return __WEBPACK_IMPORTED_MODULE_3__badge_mdl_badge_directive__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlBadgeModule", function() { return __WEBPACK_IMPORTED_MODULE_3__badge_mdl_badge_directive__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlUnsupportedButtonTypeError", function() { return __WEBPACK_IMPORTED_MODULE_2__button_mdl_button_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlUnsupportedColoredTypeError", function() { return __WEBPACK_IMPORTED_MODULE_2__button_mdl_button_component__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlButtonComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__button_mdl_button_component__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlButtonModule", function() { return __WEBPACK_IMPORTED_MODULE_2__button_mdl_button_component__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlCardComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__card_mdl_card_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlCardChildStructure", function() { return __WEBPACK_IMPORTED_MODULE_5__card_mdl_card_component__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlCardTitleComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__card_mdl_card_component__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlCardSupportingTextComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__card_mdl_card_component__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlCardMediaComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__card_mdl_card_component__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlCardActionsComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__card_mdl_card_component__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlCardMenuComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__card_mdl_card_component__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlCardTitleTextDirective", function() { return __WEBPACK_IMPORTED_MODULE_5__card_mdl_card_component__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlCardBorderDirective", function() { return __WEBPACK_IMPORTED_MODULE_5__card_mdl_card_component__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlCardExpandDirective", function() { return __WEBPACK_IMPORTED_MODULE_5__card_mdl_card_component__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlCardModule", function() { return __WEBPACK_IMPORTED_MODULE_5__card_mdl_card_component__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return __WEBPACK_IMPORTED_MODULE_9__checkbox_mdl_checkbox_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlCheckboxComponent", function() { return __WEBPACK_IMPORTED_MODULE_9__checkbox_mdl_checkbox_component__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlCheckboxModule", function() { return __WEBPACK_IMPORTED_MODULE_9__checkbox_mdl_checkbox_component__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlChipModule", function() { return __WEBPACK_IMPORTED_MODULE_6__chips_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlChipComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__chips_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlChipContactDirective", function() { return __WEBPACK_IMPORTED_MODULE_6__chips_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlDialogModule", function() { return __WEBPACK_IMPORTED_MODULE_7__dialog_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlDialogComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__dialog_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MDL_CONFIGUARTION", function() { return __WEBPACK_IMPORTED_MODULE_7__dialog_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MIN_DIALOG_Z_INDEX", function() { return __WEBPACK_IMPORTED_MODULE_7__dialog_index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlDialogReference", function() { return __WEBPACK_IMPORTED_MODULE_7__dialog_index__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlDialogService", function() { return __WEBPACK_IMPORTED_MODULE_7__dialog_index__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlAlertComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__dialog_index__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlDialogOutletModule", function() { return __WEBPACK_IMPORTED_MODULE_8__dialog_outlet_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlDialogOutletComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__dialog_outlet_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlDialogInnerOutletComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__dialog_outlet_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlDialogOutletService", function() { return __WEBPACK_IMPORTED_MODULE_8__dialog_outlet_index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlIconComponent", function() { return __WEBPACK_IMPORTED_MODULE_12__icon_mdl_icon_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlIconModule", function() { return __WEBPACK_IMPORTED_MODULE_12__icon_mdl_icon_component__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlUnsupportedCountOfListItemLinesError", function() { return __WEBPACK_IMPORTED_MODULE_14__list_mdl_list_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlListComponent", function() { return __WEBPACK_IMPORTED_MODULE_14__list_mdl_list_component__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlListItemComponent", function() { return __WEBPACK_IMPORTED_MODULE_14__list_mdl_list_component__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlListItemPrimaryContentComponent", function() { return __WEBPACK_IMPORTED_MODULE_14__list_mdl_list_component__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlListItemSecondaryContentComponent", function() { return __WEBPACK_IMPORTED_MODULE_14__list_mdl_list_component__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlListItemSecondaryActionComponent", function() { return __WEBPACK_IMPORTED_MODULE_14__list_mdl_list_component__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlListItemSubTitleComponent", function() { return __WEBPACK_IMPORTED_MODULE_14__list_mdl_list_component__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlListItemSecondaryInfoComponent", function() { return __WEBPACK_IMPORTED_MODULE_14__list_mdl_list_component__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlListItemTextBodyComponent", function() { return __WEBPACK_IMPORTED_MODULE_14__list_mdl_list_component__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlListItemIconDirective", function() { return __WEBPACK_IMPORTED_MODULE_14__list_mdl_list_component__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlListItemAvatarDirective", function() { return __WEBPACK_IMPORTED_MODULE_14__list_mdl_list_component__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlListModule", function() { return __WEBPACK_IMPORTED_MODULE_14__list_mdl_list_component__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlIconToggleComponent", function() { return __WEBPACK_IMPORTED_MODULE_13__icon_toggle_mdl_icon_toggle_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlIconToggleModule", function() { return __WEBPACK_IMPORTED_MODULE_13__icon_toggle_mdl_icon_toggle_component__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlProgressComponent", function() { return __WEBPACK_IMPORTED_MODULE_11__progress_mdl_progress_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlProgressModule", function() { return __WEBPACK_IMPORTED_MODULE_11__progress_mdl_progress_component__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlRadioGroupRegisty", function() { return __WEBPACK_IMPORTED_MODULE_10__radio_mdl_radio_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlRadioComponent", function() { return __WEBPACK_IMPORTED_MODULE_10__radio_mdl_radio_component__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlRadioModule", function() { return __WEBPACK_IMPORTED_MODULE_10__radio_mdl_radio_component__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlUnsupportedShadowValueError", function() { return __WEBPACK_IMPORTED_MODULE_4__shadow_mdl_shadow_directive__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlShadowDirective", function() { return __WEBPACK_IMPORTED_MODULE_4__shadow_mdl_shadow_directive__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlShadowModule", function() { return __WEBPACK_IMPORTED_MODULE_4__shadow_mdl_shadow_directive__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlSpinnerComponent", function() { return __WEBPACK_IMPORTED_MODULE_15__spinner_mdl_spinner_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlSpinnerModule", function() { return __WEBPACK_IMPORTED_MODULE_15__spinner_mdl_spinner_component__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlSliderComponent", function() { return __WEBPACK_IMPORTED_MODULE_16__slider_mdl_slider_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlSliderModule", function() { return __WEBPACK_IMPORTED_MODULE_16__slider_mdl_slider_component__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlSnackbarComponent", function() { return __WEBPACK_IMPORTED_MODULE_18__snackbar_mdl_snackbar_service__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlSnackbarService", function() { return __WEBPACK_IMPORTED_MODULE_18__snackbar_mdl_snackbar_service__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlSnackbaModule", function() { return __WEBPACK_IMPORTED_MODULE_18__snackbar_mdl_snackbar_service__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlSwitchComponent", function() { return __WEBPACK_IMPORTED_MODULE_17__switch_mdl_switch_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlSwitchModule", function() { return __WEBPACK_IMPORTED_MODULE_17__switch_mdl_switch_component__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlTableModule", function() { return __WEBPACK_IMPORTED_MODULE_20__table_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlDefaultTableModel", function() { return __WEBPACK_IMPORTED_MODULE_20__table_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlTableComponent", function() { return __WEBPACK_IMPORTED_MODULE_20__table_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlSelectableTableComponent", function() { return __WEBPACK_IMPORTED_MODULE_20__table_index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlTooltipModule", function() { return __WEBPACK_IMPORTED_MODULE_19__tooltip_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlSimpleTooltipComponent", function() { return __WEBPACK_IMPORTED_MODULE_19__tooltip_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlTooltipComponent", function() { return __WEBPACK_IMPORTED_MODULE_19__tooltip_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AbstractMdlTooltipDirective", function() { return __WEBPACK_IMPORTED_MODULE_19__tooltip_index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlTooltipDirective", function() { return __WEBPACK_IMPORTED_MODULE_19__tooltip_index__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlTooltipLargeDirective", function() { return __WEBPACK_IMPORTED_MODULE_19__tooltip_index__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlMenuModule", function() { return __WEBPACK_IMPORTED_MODULE_21__menu_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlMenuError", function() { return __WEBPACK_IMPORTED_MODULE_21__menu_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlMenuRegisty", function() { return __WEBPACK_IMPORTED_MODULE_21__menu_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlMenuComponent", function() { return __WEBPACK_IMPORTED_MODULE_21__menu_index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlMenuItemComponent", function() { return __WEBPACK_IMPORTED_MODULE_21__menu_index__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlMenuItemFullBleedDeviderComponent", function() { return __WEBPACK_IMPORTED_MODULE_21__menu_index__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlLayoutModule", function() { return __WEBPACK_IMPORTED_MODULE_22__layout_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_SCREEN_SIZE_THRESHOLD", function() { return __WEBPACK_IMPORTED_MODULE_22__layout_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdLUnsupportedLayoutTypeError", function() { return __WEBPACK_IMPORTED_MODULE_22__layout_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlScreenSizeService", function() { return __WEBPACK_IMPORTED_MODULE_22__layout_index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlLayoutComponent", function() { return __WEBPACK_IMPORTED_MODULE_22__layout_index__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlLayoutHeaderComponent", function() { return __WEBPACK_IMPORTED_MODULE_22__layout_index__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlLayoutDrawerComponent", function() { return __WEBPACK_IMPORTED_MODULE_22__layout_index__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlLayoutContentComponent", function() { return __WEBPACK_IMPORTED_MODULE_22__layout_index__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlLayoutHeaderTransparentDirective", function() { return __WEBPACK_IMPORTED_MODULE_22__layout_index__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlLayoutHeaderRowComponent", function() { return __WEBPACK_IMPORTED_MODULE_22__layout_index__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlLayoutTitleComponent", function() { return __WEBPACK_IMPORTED_MODULE_22__layout_index__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlLayoutSpacerComponent", function() { return __WEBPACK_IMPORTED_MODULE_22__layout_index__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlLayoutTabPanelComponent", function() { return __WEBPACK_IMPORTED_MODULE_22__layout_index__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlTabsModule", function() { return __WEBPACK_IMPORTED_MODULE_23__tabs_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlTabsComponent", function() { return __WEBPACK_IMPORTED_MODULE_23__tabs_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlTabPanelContent", function() { return __WEBPACK_IMPORTED_MODULE_23__tabs_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlTabPanelComponent", function() { return __WEBPACK_IMPORTED_MODULE_23__tabs_index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlTabPanelTitleComponent", function() { return __WEBPACK_IMPORTED_MODULE_23__tabs_index__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DISABLE_NATIVE_VALIDITY_CHECKING", function() { return __WEBPACK_IMPORTED_MODULE_24__textfield_mdl_textfield_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlTextFieldComponent", function() { return __WEBPACK_IMPORTED_MODULE_24__textfield_mdl_textfield_component__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlTextFieldModule", function() { return __WEBPACK_IMPORTED_MODULE_24__textfield_mdl_textfield_component__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__dialog_outlet_mdl_backdrop_overlay_component__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Private1", function() { return __WEBPACK_IMPORTED_MODULE_25__dialog_outlet_mdl_backdrop_overlay_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__dialog_mdl_dialog_host_component__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Private2", function() { return __WEBPACK_IMPORTED_MODULE_26__dialog_mdl_dialog_host_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__dialog_mdl_simple_dialog_component__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Private3", function() { return __WEBPACK_IMPORTED_MODULE_27__dialog_mdl_simple_dialog_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__common_append_view_container_ref_directive__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Private4", function() { return __WEBPACK_IMPORTED_MODULE_28__common_append_view_container_ref_directive__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdlModule", function() { return MdlModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdlNonRootModule", function() { return MdlNonRootModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















































// AOT :( https://github.com/angular/angular/issues/11606




var MDL_MODULES = [
    __WEBPACK_IMPORTED_MODULE_2__button_mdl_button_component__["d" /* MdlButtonModule */],
    __WEBPACK_IMPORTED_MODULE_22__layout_index__["a" /* MdlLayoutModule */],
    __WEBPACK_IMPORTED_MODULE_9__checkbox_mdl_checkbox_component__["c" /* MdlCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_6__chips_index__["a" /* MdlChipModule */],
    __WEBPACK_IMPORTED_MODULE_7__dialog_index__["a" /* MdlDialogModule */],
    __WEBPACK_IMPORTED_MODULE_8__dialog_outlet_index__["a" /* MdlDialogOutletModule */],
    __WEBPACK_IMPORTED_MODULE_15__spinner_mdl_spinner_component__["b" /* MdlSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_1__common_mdl_ripple_directive__["i" /* MdlRippleModule */],
    __WEBPACK_IMPORTED_MODULE_3__badge_mdl_badge_directive__["d" /* MdlBadgeModule */],
    __WEBPACK_IMPORTED_MODULE_4__shadow_mdl_shadow_directive__["c" /* MdlShadowModule */],
    __WEBPACK_IMPORTED_MODULE_5__card_mdl_card_component__["k" /* MdlCardModule */],
    __WEBPACK_IMPORTED_MODULE_10__radio_mdl_radio_component__["c" /* MdlRadioModule */],
    __WEBPACK_IMPORTED_MODULE_11__progress_mdl_progress_component__["b" /* MdlProgressModule */],
    __WEBPACK_IMPORTED_MODULE_12__icon_mdl_icon_component__["b" /* MdlIconModule */],
    __WEBPACK_IMPORTED_MODULE_13__icon_toggle_mdl_icon_toggle_component__["b" /* MdlIconToggleModule */],
    __WEBPACK_IMPORTED_MODULE_14__list_mdl_list_component__["l" /* MdlListModule */],
    __WEBPACK_IMPORTED_MODULE_16__slider_mdl_slider_component__["b" /* MdlSliderModule */],
    __WEBPACK_IMPORTED_MODULE_17__switch_mdl_switch_component__["b" /* MdlSwitchModule */],
    __WEBPACK_IMPORTED_MODULE_18__snackbar_mdl_snackbar_service__["c" /* MdlSnackbaModule */],
    __WEBPACK_IMPORTED_MODULE_19__tooltip_index__["a" /* MdlTooltipModule */],
    __WEBPACK_IMPORTED_MODULE_20__table_index__["a" /* MdlTableModule */],
    __WEBPACK_IMPORTED_MODULE_21__menu_index__["a" /* MdlMenuModule */],
    __WEBPACK_IMPORTED_MODULE_23__tabs_index__["a" /* MdlTabsModule */],
    __WEBPACK_IMPORTED_MODULE_24__textfield_mdl_textfield_component__["c" /* MdlTextFieldModule */]
];
var MdlModule = (function () {
    function MdlModule() {
    }
    return MdlModule;
}());
MdlModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__button_mdl_button_component__["d" /* MdlButtonModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_22__layout_index__["a" /* MdlLayoutModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9__checkbox_mdl_checkbox_component__["c" /* MdlCheckboxModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__chips_index__["a" /* MdlChipModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__dialog_index__["a" /* MdlDialogModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__dialog_outlet_index__["a" /* MdlDialogOutletModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_15__spinner_mdl_spinner_component__["b" /* MdlSpinnerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_1__common_mdl_ripple_directive__["i" /* MdlRippleModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__badge_mdl_badge_directive__["d" /* MdlBadgeModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__shadow_mdl_shadow_directive__["c" /* MdlShadowModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__card_mdl_card_component__["k" /* MdlCardModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10__radio_mdl_radio_component__["c" /* MdlRadioModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11__progress_mdl_progress_component__["b" /* MdlProgressModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12__icon_mdl_icon_component__["b" /* MdlIconModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_13__icon_toggle_mdl_icon_toggle_component__["b" /* MdlIconToggleModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_14__list_mdl_list_component__["l" /* MdlListModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_16__slider_mdl_slider_component__["b" /* MdlSliderModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_17__switch_mdl_switch_component__["b" /* MdlSwitchModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_18__snackbar_mdl_snackbar_service__["c" /* MdlSnackbaModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_19__tooltip_index__["a" /* MdlTooltipModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_20__table_index__["a" /* MdlTableModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_21__menu_index__["a" /* MdlMenuModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_23__tabs_index__["a" /* MdlTabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_24__textfield_mdl_textfield_component__["c" /* MdlTextFieldModule */].forRoot()
        ],
        exports: MDL_MODULES,
        providers: []
    })
], MdlModule);

var MdlNonRootModule = (function () {
    function MdlNonRootModule() {
    }
    MdlNonRootModule.forRoot = function () {
        return { ngModule: MdlModule };
    };
    return MdlNonRootModule;
}());
MdlNonRootModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: MDL_MODULES,
        exports: MDL_MODULES
    })
], MdlNonRootModule);



/***/ })
/******/ ]);
});
//# sourceMappingURL=angular2-mdl.js.map