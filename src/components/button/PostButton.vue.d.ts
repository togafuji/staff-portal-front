declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        required: true;
    };
    onClick: {
        type: FunctionConstructor;
        required: false;
    };
}>, {}, {}, {
    buttonClass(): "px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" | "px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600" | "px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400";
}, {
    handleClick(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        required: true;
    };
    onClick: {
        type: FunctionConstructor;
        required: false;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
