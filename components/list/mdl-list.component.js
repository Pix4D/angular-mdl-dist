var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, Directive, Input, Optional, ViewEncapsulation, NgModule } from '@angular/core';
import { MdlError, MdlStructureError } from '../common/mdl-error';
import { toNumber } from '../common/number.property';
var MdlUnsupportedCountOfListItemLinesError = (function (_super) {
    __extends(MdlUnsupportedCountOfListItemLinesError, _super);
    function MdlUnsupportedCountOfListItemLinesError(lines) {
        return _super.call(this, "\"" + lines + "\" is not supported - max 3 lines please.") || this;
    }
    return MdlUnsupportedCountOfListItemLinesError;
}(MdlError));
export { MdlUnsupportedCountOfListItemLinesError };
var MdlListComponent = (function () {
    function MdlListComponent() {
    }
    return MdlListComponent;
}());
export { MdlListComponent };
MdlListComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdl-list',
                host: {
                    '[class.mdl-list]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
MdlListComponent.ctorParameters = function () { return []; };
var MdlListItemComponent = (function () {
    function MdlListItemComponent(mdlListComponent) {
        this.mdlListComponent = mdlListComponent;
        this._lines = 1;
    }
    Object.defineProperty(MdlListItemComponent.prototype, "lines", {
        get: function () { return this._lines; },
        set: function (value) { this._lines = toNumber(value); },
        enumerable: true,
        configurable: true
    });
    MdlListItemComponent.prototype.ngOnInit = function () {
        if (this.mdlListComponent === null) {
            throw new MdlStructureError('mdl-list-item', 'mdl-list');
        }
    };
    MdlListItemComponent.prototype.ngOnChanges = function (changes) {
        if (this.lines && this.lines > 3) {
            throw new MdlUnsupportedCountOfListItemLinesError(this.lines);
        }
    };
    return MdlListItemComponent;
}());
export { MdlListItemComponent };
/**
 * TODO check these conditions
 * .mdl-list__item-secondary-content	Defines the secondary content sub-division
 * requires .mdl-list__item-two-line or .mdl-list__item-three-line
 .mdl-list__item-secondary-info	Defines the information sub-division
 requires .mdl-list__item-two-line or .mdl-list__item-three-line
 .mdl-list__item-secondary-action	Defines the Action sub-division
 requires .mdl-list__item-two-line or .mdl-list__item-three-line
 .mdl-list__item-text-body	Defines the Text Body sub-division
 requires .mdl-list__item-three-line
 */
MdlListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdl-list-item',
                host: {
                    '[class.mdl-list__item]': 'true',
                    '[class.mdl-list__item--two-line]': 'lines==2',
                    '[class.mdl-list__item--three-line]': 'lines==3'
                },
                template: '<ng-content></ng-content>',
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
MdlListItemComponent.ctorParameters = function () { return [
    { type: MdlListComponent, decorators: [{ type: Optional },] },
]; };
MdlListItemComponent.propDecorators = {
    'lines': [{ type: Input },],
};
var MdlListItemPrimaryContentComponent = (function () {
    function MdlListItemPrimaryContentComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemPrimaryContentComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new MdlStructureError('mdl-list-item-primary-content', 'mdl-list-item');
        }
    };
    return MdlListItemPrimaryContentComponent;
}());
export { MdlListItemPrimaryContentComponent };
MdlListItemPrimaryContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdl-list-item-primary-content',
                host: {
                    '[class.mdl-list__item-primary-content]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
MdlListItemPrimaryContentComponent.ctorParameters = function () { return [
    { type: MdlListItemComponent, decorators: [{ type: Optional },] },
]; };
var MdlListItemSecondaryContentComponent = (function () {
    function MdlListItemSecondaryContentComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSecondaryContentComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new MdlStructureError('mdl-list-item-secondary-content', 'mdl-list-item');
        }
    };
    return MdlListItemSecondaryContentComponent;
}());
export { MdlListItemSecondaryContentComponent };
MdlListItemSecondaryContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdl-list-item-secondary-content',
                host: {
                    '[class.mdl-list__item-secondary-content]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
MdlListItemSecondaryContentComponent.ctorParameters = function () { return [
    { type: MdlListItemComponent, decorators: [{ type: Optional },] },
]; };
var MdlListItemSecondaryActionComponent = (function () {
    function MdlListItemSecondaryActionComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSecondaryActionComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new MdlStructureError('mdl-list-item-secondary-action', 'mdl-list-item');
        }
    };
    return MdlListItemSecondaryActionComponent;
}());
export { MdlListItemSecondaryActionComponent };
MdlListItemSecondaryActionComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdl-list-item-secondary-action',
                host: {
                    '[class.mdl-list__item-secondary-action]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
MdlListItemSecondaryActionComponent.ctorParameters = function () { return [
    { type: MdlListItemComponent, decorators: [{ type: Optional },] },
]; };
var MdlListItemSubTitleComponent = (function () {
    function MdlListItemSubTitleComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSubTitleComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new MdlStructureError('mdl-list-item-sub-title', 'mdl-list-item-primary-content');
        }
    };
    return MdlListItemSubTitleComponent;
}());
export { MdlListItemSubTitleComponent };
MdlListItemSubTitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdl-list-item-sub-title',
                host: {
                    '[class.mdl-list__item-sub-title]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
MdlListItemSubTitleComponent.ctorParameters = function () { return [
    { type: MdlListItemPrimaryContentComponent, decorators: [{ type: Optional },] },
]; };
var MdlListItemSecondaryInfoComponent = (function () {
    function MdlListItemSecondaryInfoComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSecondaryInfoComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new MdlStructureError('mdl-list-item-secondary-info', 'mdl-list-item-secondary-content');
        }
    };
    return MdlListItemSecondaryInfoComponent;
}());
export { MdlListItemSecondaryInfoComponent };
MdlListItemSecondaryInfoComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdl-list-item-secondary-info',
                host: {
                    '[class.mdl-list__item-secondary-info]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
MdlListItemSecondaryInfoComponent.ctorParameters = function () { return [
    { type: MdlListItemSecondaryContentComponent, decorators: [{ type: Optional },] },
]; };
var MdlListItemTextBodyComponent = (function () {
    function MdlListItemTextBodyComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemTextBodyComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new MdlStructureError('mdl-list-item-text-body', 'mdl-list-item');
        }
    };
    return MdlListItemTextBodyComponent;
}());
export { MdlListItemTextBodyComponent };
MdlListItemTextBodyComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdl-list-item-text-body',
                host: {
                    '[class.mdl-list__item-text-body]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
MdlListItemTextBodyComponent.ctorParameters = function () { return [
    { type: MdlListItemComponent, decorators: [{ type: Optional },] },
]; };
var MdlListItemIconDirective = (function () {
    function MdlListItemIconDirective() {
    }
    return MdlListItemIconDirective;
}());
export { MdlListItemIconDirective };
MdlListItemIconDirective.decorators = [
    { type: Directive, args: [{
                selector: 'mdl-icon[mdl-list-item-icon]',
                host: {
                    '[class.mdl-list__item-icon]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlListItemIconDirective.ctorParameters = function () { return []; };
var MdlListItemAvatarDirective = (function () {
    function MdlListItemAvatarDirective() {
    }
    return MdlListItemAvatarDirective;
}());
export { MdlListItemAvatarDirective };
MdlListItemAvatarDirective.decorators = [
    { type: Directive, args: [{
                selector: 'mdl-icon[mdl-list-item-avatar]',
                host: {
                    '[class.mdl-list__item-avatar]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlListItemAvatarDirective.ctorParameters = function () { return []; };
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
var MdlListModule = (function () {
    function MdlListModule() {
    }
    MdlListModule.forRoot = function () {
        return {
            ngModule: MdlListModule,
            providers: []
        };
    };
    return MdlListModule;
}());
export { MdlListModule };
MdlListModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                exports: MDL_LIST_DIRECTIVES,
                declarations: MDL_LIST_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlListModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-list.component.js.map