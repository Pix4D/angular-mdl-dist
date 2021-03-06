var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ElementRef, Renderer, ViewEncapsulation, Input } from '@angular/core';
import { MdlTooltipPositionService } from './mdl-tooltip-position.service';
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
export { MdlSimpleTooltipComponent };
MdlSimpleTooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdl-simple-tooltip',
                host: host,
                template: '<div>{{tooltipText}}</div>',
                providers: [MdlTooltipPositionService],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
MdlSimpleTooltipComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
    { type: MdlTooltipPositionService, },
]; };
MdlSimpleTooltipComponent.propDecorators = {
    'delay': [{ type: Input },],
};
var MdlTooltipComponent = (function (_super) {
    __extends(MdlTooltipComponent, _super);
    function MdlTooltipComponent(elRef, renderer, mdlTooltipPositionService) {
        return _super.call(this, elRef, renderer, mdlTooltipPositionService) || this;
    }
    return MdlTooltipComponent;
}(MdlSimpleTooltipComponent));
export { MdlTooltipComponent };
MdlTooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdl-tooltip',
                template: '<div><ng-content></ng-content></div>',
                exportAs: 'mdlTooltip',
                host: host,
                providers: [MdlTooltipPositionService],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
MdlTooltipComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
    { type: MdlTooltipPositionService, },
]; };
//# sourceMappingURL=mdl-tooltip.component.js.map