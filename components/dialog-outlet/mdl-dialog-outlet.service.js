import { Injectable, ApplicationRef, ComponentFactoryResolver, EventEmitter } from '@angular/core';
import { MdlDialogOutletComponent } from './mdl-dialog-outlet.component';
import { MdlBackdropOverlayComponent } from './mdl-backdrop-overlay.component';
var MdlDialogOutletService = (function () {
    function MdlDialogOutletService(appRef, componentFactoryResolver) {
        this.appRef = appRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.backdropClickEmitter = new EventEmitter();
        var dialogOutletCompRef = null;
        try {
            dialogOutletCompRef = this.appRef.bootstrap(MdlDialogOutletComponent);
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
            var cFactory = this.componentFactoryResolver.resolveComponentFactory(MdlBackdropOverlayComponent);
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
export { MdlDialogOutletService };
MdlDialogOutletService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MdlDialogOutletService.ctorParameters = function () { return [
    { type: ApplicationRef, },
    { type: ComponentFactoryResolver, },
]; };
//# sourceMappingURL=mdl-dialog-outlet.service.js.map