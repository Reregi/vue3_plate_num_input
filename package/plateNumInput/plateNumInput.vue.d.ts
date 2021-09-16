import { Ref } from 'vue';
declare const _default: import("vue").DefineComponent<{
    defaultPlateNum: {
        type: StringConstructor;
    };
    isNewEnergy: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: StringConstructor;
    };
    height: {
        type: StringConstructor;
    };
    fontSize: {
        type: StringConstructor;
    };
    fontColor: {
        type: StringConstructor;
    };
    borderColor: {
        type: StringConstructor;
    };
    inputPanelBgColor: {
        type: StringConstructor;
    };
    btnColor: {
        type: StringConstructor;
    };
    btnActiveColor: {
        type: StringConstructor;
    };
    btnFontColor: {
        type: StringConstructor;
    };
    inputPanelFontSize: {
        type: StringConstructor;
    };
}, {
    plateNumArr: Ref<string[]>;
    showInput: Ref<boolean>;
    openInput: () => void;
    close: () => void;
    inputNum: (str: string) => void;
    deleteNum: () => void;
    isProvinceInput: Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    defaultPlateNum?: unknown;
    isNewEnergy?: unknown;
    width?: unknown;
    height?: unknown;
    fontSize?: unknown;
    fontColor?: unknown;
    borderColor?: unknown;
    inputPanelBgColor?: unknown;
    btnColor?: unknown;
    btnActiveColor?: unknown;
    btnFontColor?: unknown;
    inputPanelFontSize?: unknown;
} & {
    isNewEnergy: boolean;
} & {
    defaultPlateNum?: string | undefined;
    width?: string | undefined;
    height?: string | undefined;
    fontSize?: string | undefined;
    fontColor?: string | undefined;
    borderColor?: string | undefined;
    inputPanelBgColor?: string | undefined;
    btnColor?: string | undefined;
    btnActiveColor?: string | undefined;
    btnFontColor?: string | undefined;
    inputPanelFontSize?: string | undefined;
}> & {}, {
    isNewEnergy: boolean;
}>;
export default _default;
