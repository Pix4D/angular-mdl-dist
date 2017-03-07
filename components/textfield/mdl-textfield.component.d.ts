import { Renderer, ElementRef, OnChanges, DoCheck, OpaqueToken, EventEmitter, ModuleWithProviders, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const DISABLE_NATIVE_VALIDITY_CHECKING: OpaqueToken;
export declare class MdlTextFieldComponent implements ControlValueAccessor, OnChanges, DoCheck {
    private renderer;
    private elmRef;
    private nativeCheckGlobalDisabled;
    private value_;
    private el;
    blurEmitter: EventEmitter<FocusEvent>;
    focusEmitter: EventEmitter<FocusEvent>;
    keyupEmitter: EventEmitter<KeyboardEvent>;
    inputEl: ElementRef;
    value: any;
    type: string;
    label: any;
    pattern: any;
    min: any;
    max: any;
    step: any;
    name: any;
    id: string;
    errorMessage: any;
    private _disabled;
    disabled: boolean;
    private _readonly;
    readonly: boolean;
    private _required;
    required: boolean;
    private _autofocus;
    autofocus: boolean;
    private _isFloatingLabel;
    isFloatingLabel: boolean;
    placeholder: string;
    autocomplete: string;
    private _rows;
    rows: number;
    private _maxrows;
    maxrows: number;
    icon: string;
    tabindex: number;
    maxlength: number;
    private _disableNativeValidityChecking;
    disableNativeValidityChecking: boolean;
    constructor(renderer: Renderer, elmRef: ElementRef, nativeCheckGlobalDisabled: Boolean);
    writeValue(value: any): void;
    private onTouchedCallback;
    private onChangeCallback;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    setFocus(): void;
    protected onFocus(event: FocusEvent): void;
    protected onBlur(event: FocusEvent): void;
    protected onKeyup(event: KeyboardEvent): void;
    private checkDisabled();
    private checkValidity();
    private checkDirty();
    keydownTextarea($event: KeyboardEvent): void;
    triggerChange(event: Event): void;
}
export declare class MdlTextFieldModule {
    static forRoot(): ModuleWithProviders;
}
