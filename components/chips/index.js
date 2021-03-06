import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlIconModule } from '../icon/mdl-icon.component';
import { MdlChipComponent } from './mdl-chip.component';
import { MdlChipContactDirective } from './mdl-chip-contact.directive';
export * from './mdl-chip.component';
export * from './mdl-chip-contact.directive';
var DIRECTIVES = [MdlChipComponent, MdlChipContactDirective];
var MdlChipModule = (function () {
    function MdlChipModule() {
    }
    MdlChipModule.forRoot = function () {
        return {
            ngModule: MdlChipModule,
            providers: []
        };
    };
    return MdlChipModule;
}());
export { MdlChipModule };
MdlChipModule.decorators = [
    { type: NgModule, args: [{
                imports: [MdlIconModule, CommonModule],
                exports: DIRECTIVES,
                declarations: DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlChipModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map