import { EventEmitter } from "@angular/core";
import * as common from "../common";
export declare class NumberEditorComponent {
    schema: common.NumberSchema;
    initialValue: number;
    title?: string;
    updateValue: EventEmitter<{}>;
    theme: common.Theme;
    icon: common.Icon;
    locale: common.Locale;
    onDelete?: () => void;
    readonly?: boolean;
    required?: boolean;
    value?: number;
    errorMessage: string;
    constructor();
    onChange(e: {
        target: {
            value: string;
        };
    }): void;
    validate(): void;
    toggleOptional(): void;
}