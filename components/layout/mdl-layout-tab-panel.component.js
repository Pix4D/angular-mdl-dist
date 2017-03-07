import { Component, Input, ContentChild, ViewEncapsulation } from '@angular/core';
import { MdlTabPanelTitleComponent } from '../tabs/index';
var MdlLayoutTabPanelComponent = (function () {
    function MdlLayoutTabPanelComponent() {
        this.isActive = false;
    }
    return MdlLayoutTabPanelComponent;
}());
export { MdlLayoutTabPanelComponent };
MdlLayoutTabPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdl-layout-tab-panel',
                host: {
                    '[class.mdl-layout__tab-panel]': 'true',
                    '[class.is-active]': 'isActive'
                },
                template: "\n   <ng-content *ngIf=\"titleComponent\" select=\"mdl-tab-panel-content\"></ng-content>\n   <ng-content *ngIf=\"!titleComponent\"></ng-content>\n   ",
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
MdlLayoutTabPanelComponent.ctorParameters = function () { return []; };
MdlLayoutTabPanelComponent.propDecorators = {
    'titleComponent': [{ type: ContentChild, args: [MdlTabPanelTitleComponent,] },],
    'title': [{ type: Input, args: ['mdl-layout-tab-panel-title',] },],
};
//# sourceMappingURL=mdl-layout-tab-panel.component.js.map