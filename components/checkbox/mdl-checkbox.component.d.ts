import { ElementRef, EventEmitter, Renderer, ModuleWithProviders } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class MdlCheckboxComponent implements ControlValueAccessor {
    private elementRef;
    private renderer;
    private _disabled;
    disabled: boolean;
    tabindex: number;
    change: EventEmitter<boolean>;
    private value_;
    private el;
    constructor(elementRef: ElementRef, renderer: Renderer);
    value: boolean;
    writeValue(value: any): void;
    private onTouchedCallback;
    private onChangeCallback;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    onFocus(): void;
    onBlur(): void;
    onClick(): void;
}
export declare class MdlCheckboxModule {
    static forRoot(): ModuleWithProviders;
}
