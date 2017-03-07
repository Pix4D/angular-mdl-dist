import { Directive, ViewContainerRef, Renderer, Input } from '@angular/core';
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
export { AppendViewContainerRefDirective };
AppendViewContainerRefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[append-view-container-ref]'
            },] },
];
/** @nocollapse */
AppendViewContainerRefDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
    { type: Renderer, },
]; };
AppendViewContainerRefDirective.propDecorators = {
    'viewContainerRefToAppend': [{ type: Input, args: ['append-view-container-ref',] },],
};
//# sourceMappingURL=append-view-container-ref-directive.js.map