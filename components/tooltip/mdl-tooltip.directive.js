var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Directive, Input, ViewContainerRef, Renderer, ComponentFactoryResolver, HostListener } from '@angular/core';
import { MdlSimpleTooltipComponent, MdlTooltipComponent } from './mdl-tooltip.component';
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
        if (!(this.tooltip instanceof MdlTooltipComponent)) {
            var cFactory = this.componentFactoryResolver.resolveComponentFactory(MdlSimpleTooltipComponent);
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
export { AbstractMdlTooltipDirective };
AbstractMdlTooltipDirective.propDecorators = {
    'onMouseLeave': [{ type: HostListener, args: ['window:touchstart',] },],
};
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
export { MdlTooltipDirective };
MdlTooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdl-tooltip]',
                host: host
            },] },
];
/** @nocollapse */
MdlTooltipDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
    { type: ComponentFactoryResolver, },
    { type: Renderer, },
]; };
MdlTooltipDirective.propDecorators = {
    'tooltip': [{ type: Input, args: ['mdl-tooltip',] },],
    'position': [{ type: Input, args: ['mdl-tooltip-position',] },],
};
var MdlTooltipLargeDirective = (function (_super) {
    __extends(MdlTooltipLargeDirective, _super);
    function MdlTooltipLargeDirective(vcRef, componentFactoryResolver, renderer) {
        return _super.call(this, vcRef, true, componentFactoryResolver, renderer) || this;
    }
    MdlTooltipLargeDirective.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    return MdlTooltipLargeDirective;
}(AbstractMdlTooltipDirective));
export { MdlTooltipLargeDirective };
MdlTooltipLargeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdl-tooltip-large]',
                host: host
            },] },
];
/** @nocollapse */
MdlTooltipLargeDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
    { type: ComponentFactoryResolver, },
    { type: Renderer, },
]; };
MdlTooltipLargeDirective.propDecorators = {
    'tooltip': [{ type: Input, args: ['mdl-tooltip-large',] },],
    'position': [{ type: Input, args: ['mdl-tooltip-position',] },],
};
//# sourceMappingURL=mdl-tooltip.directive.js.map