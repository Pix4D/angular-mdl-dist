var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, Input, ElementRef, Renderer, NgModule, ViewEncapsulation } from '@angular/core';
import { MdlError } from '../common/mdl-error';
import { toBoolean } from '../common/boolean-property';
var MdlUnsupportedButtonTypeError = (function (_super) {
    __extends(MdlUnsupportedButtonTypeError, _super);
    function MdlUnsupportedButtonTypeError(type) {
        return _super.call(this, "Button type \"" + type + "\" isn't supported (allowed: raised, fab, mini-fab, icon, '').") || this;
    }
    return MdlUnsupportedButtonTypeError;
}(MdlError));
export { MdlUnsupportedButtonTypeError };
var MdlUnsupportedColoredTypeError = (function (_super) {
    __extends(MdlUnsupportedColoredTypeError, _super);
    function MdlUnsupportedColoredTypeError(type) {
        return _super.call(this, "Colored type \"" + type + "\" isn't supported (allowed: primary, accent, '').") || this;
    }
    return MdlUnsupportedColoredTypeError;
}(MdlError));
export { MdlUnsupportedColoredTypeError };
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
        set: function (value) { this._disabled = toBoolean(value); },
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
export { MdlButtonComponent };
MdlButtonComponent.decorators = [
    { type: Component, args: [{
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
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
MdlButtonComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
]; };
MdlButtonComponent.propDecorators = {
    'mdlButtonType': [{ type: Input, args: ['mdl-button-type',] },],
    'mdlColoredType': [{ type: Input, args: ['mdl-colored',] },],
    'disabled': [{ type: Input },],
};
var MDL_BUTTON_DIRECTIVES = [MdlButtonComponent];
var MdlButtonModule = (function () {
    function MdlButtonModule() {
    }
    MdlButtonModule.forRoot = function () {
        return {
            ngModule: MdlButtonModule,
            providers: []
        };
    };
    return MdlButtonModule;
}());
export { MdlButtonModule };
MdlButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                exports: MDL_BUTTON_DIRECTIVES,
                declarations: MDL_BUTTON_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlButtonModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-button.component.js.map