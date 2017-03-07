import { Directive, Input, ElementRef, Renderer, NgModule } from '@angular/core';
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
export { MdlBadgeDirective };
MdlBadgeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdl-badge]',
                host: {
                    '[class.mdl-badge]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlBadgeDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
]; };
MdlBadgeDirective.propDecorators = {
    'mdlBadgeContent': [{ type: Input, args: ['mdl-badge',] },],
};
var MdlBadgeOverlapDirective = (function () {
    function MdlBadgeOverlapDirective() {
    }
    return MdlBadgeOverlapDirective;
}());
export { MdlBadgeOverlapDirective };
MdlBadgeOverlapDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdl-badge-overlap]',
                host: {
                    '[class.mdl-badge--overlap]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlBadgeOverlapDirective.ctorParameters = function () { return []; };
var MdlBadgeNoBackgroundDirective = (function () {
    function MdlBadgeNoBackgroundDirective() {
    }
    return MdlBadgeNoBackgroundDirective;
}());
export { MdlBadgeNoBackgroundDirective };
MdlBadgeNoBackgroundDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdl-badge-no-background]',
                host: {
                    '[class.mdl-badge--no-background]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlBadgeNoBackgroundDirective.ctorParameters = function () { return []; };
var MDL_BADGE_DIRECTIVES = [MdlBadgeDirective, MdlBadgeOverlapDirective, MdlBadgeNoBackgroundDirective];
var MdlBadgeModule = (function () {
    function MdlBadgeModule() {
    }
    MdlBadgeModule.forRoot = function () {
        return {
            ngModule: MdlBadgeModule,
            providers: []
        };
    };
    return MdlBadgeModule;
}());
export { MdlBadgeModule };
MdlBadgeModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                exports: MDL_BADGE_DIRECTIVES,
                declarations: MDL_BADGE_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlBadgeModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-badge.directive.js.map