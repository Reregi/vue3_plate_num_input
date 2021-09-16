import { StyleValue } from 'vue';
declare const _default: import("vue").DefineComponent<{
    isProvinceInput: BooleanConstructor;
}, {
    province: string[][];
    alphanumeric: string[][];
    done: () => void;
    inputNum: (str: string) => void;
    deleteNum: () => void;
    inputPanelStyle: StyleValue;
    style: {
        inputPanelBgColor: string;
        btnColor: string;
        btnActiveColor: string;
        btnFontColor: string;
        inputPanelFontSize: string;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("done" | "inputNum" | "deleteNum")[], "done" | "inputNum" | "deleteNum", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    isProvinceInput?: unknown;
} & {
    isProvinceInput: boolean;
} & {}> & {
    onDone?: ((...args: any[]) => any) | undefined;
    onInputNum?: ((...args: any[]) => any) | undefined;
    onDeleteNum?: ((...args: any[]) => any) | undefined;
}, {
    isProvinceInput: boolean;
}>;
export default _default;
