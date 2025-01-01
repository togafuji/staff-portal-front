declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    isVisible: {
        type: BooleanConstructor;
        required: true;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {}, {
    close(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    isVisible: {
        type: BooleanConstructor;
        required: true;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onClose?: ((...args: any[]) => any) | undefined;
}>, {
    title: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
