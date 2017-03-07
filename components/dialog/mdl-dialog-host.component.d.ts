import { Renderer, ElementRef, OnInit, ComponentRef, NgZone } from '@angular/core';
import { IMdlDialogConfiguration } from './mdl-dialog-configuration';
import { InternalMdlDialogReference } from './internal-dialog-reference';
import { AnimationDriver } from '@angular/platform-browser/animations';
export declare class MdlDialogHostComponent implements OnInit {
    private ngZone;
    private renderer;
    private animDriver;
    private elementRef;
    private config;
    private internalDialogRef;
    dialogTarget: any;
    visible: boolean;
    private showAnimationStartStyle;
    private showStyle;
    private hideAnimationEndStyle;
    constructor(ngZone: NgZone, renderer: Renderer, animDriver: AnimationDriver, elementRef: ElementRef, config: IMdlDialogConfiguration, internalDialogRef: InternalMdlDialogReference);
    zIndex: number;
    show(): void;
    hide(selfComponentRef: ComponentRef<MdlDialogHostComponent>): void;
    ngOnInit(): void;
    private applyStyle(styles);
    private applyClasses(classes);
    private isAnimateEnabled();
    private getClientRect(input);
    private createOpenCloseRect(rect);
    private getCenterInScreen(rect);
}
