import { AfterContentInit, OnDestroy, Renderer, ElementRef, EventEmitter, OnChanges, SimpleChanges, NgZone, OpaqueToken } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { MdlError } from '../common/mdl-error';
import { Observable } from 'rxjs/Observable';
/**
 * The LAYOUT_SCREEN_SIZE_THRESHOLD can be changed at the root module. Just provide a value for this OpaqueToken:
 *
 * providers: [
 *  {provide:LAYOUT_SCREEN_SIZE_THRESHOLD, useValue: 768 }
 * ]
 *
 * you also need to change the scss variable to the same value: $layout-screen-size-threshold: 768px.
 *
 * It should be clear that this can only be used if you are using the scss and not the pre compiled css from getmdl.io.
 *
 * @type {OpaqueToken}
 */
export declare const LAYOUT_SCREEN_SIZE_THRESHOLD: OpaqueToken;
export declare class MdLUnsupportedLayoutTypeError extends MdlError {
    constructor(type: string);
}
export declare class MdlScreenSizeService {
    private ngZone;
    private layoutScreenSizeThreshold;
    private sizesSubject;
    private windowMediaQueryListener;
    constructor(ngZone: NgZone, layoutScreenSizeThreshold: number);
    sizes(): Observable<boolean>;
    destroy(): void;
}
export declare class MdlLayoutComponent implements AfterContentInit, OnDestroy, OnChanges {
    private renderer;
    private evm;
    private el;
    private ngZone;
    private screenSizeService;
    header: any;
    drawer: any;
    content: any;
    mode: string;
    private _isFixedDrawer;
    isFixedDrawer: boolean;
    private _isFixedHeader;
    isFixedHeader: boolean;
    private _isSeamed;
    isSeamed: boolean;
    private _selectedIndex;
    selectedIndex: number;
    private _isNoDrawer;
    isNoDrawer: boolean;
    selectedTabEmitter: EventEmitter<{}>;
    mouseoverTabEmitter: EventEmitter<{}>;
    mouseoutTabEmitter: EventEmitter<{}>;
    onOpen: EventEmitter<void>;
    onClose: EventEmitter<void>;
    isDrawerVisible: boolean;
    isSmallScreen: boolean;
    private scrollListener;
    constructor(renderer: Renderer, evm: EventManager, el: ElementRef, ngZone: NgZone, screenSizeService: MdlScreenSizeService);
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): any;
    private updateSelectedTabIndex();
    private validateMode();
    private onScroll(scrollTop);
    private onQueryChange(isSmall);
    toggleDrawer(): void;
    closeDrawer(): void;
    private setDrawerVisible(visible);
    obfuscatorKeyDown($event: any): void;
    ngOnDestroy(): void;
    tabSelected(tab: any): void;
    onTabMouseover(tab: any): void;
    onTabMouseout(tab: any): void;
    closeDrawerOnSmallScreens(): void;
    hasDrawer(): boolean;
}
