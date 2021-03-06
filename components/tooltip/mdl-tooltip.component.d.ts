import { ElementRef, Renderer } from '@angular/core';
import { MdlTooltipPositionService } from './mdl-tooltip-position.service';
export declare class MdlSimpleTooltipComponent {
    private elRef;
    private renderer;
    private mdlTooltipPositionService;
    tooltipText: string;
    element: HTMLElement;
    large: boolean;
    position: 'left' | 'right' | 'top' | 'bottom';
    private active;
    delay: Number;
    private delayTimeout;
    constructor(elRef: ElementRef, renderer: Renderer, mdlTooltipPositionService: MdlTooltipPositionService);
    mouseLeave(): void;
    mouseEnter(event: any): void;
    private show(element);
    private hide();
    private setActive(active);
    isActive(): boolean;
}
export declare class MdlTooltipComponent extends MdlSimpleTooltipComponent {
    constructor(elRef: ElementRef, renderer: Renderer, mdlTooltipPositionService: MdlTooltipPositionService);
}
