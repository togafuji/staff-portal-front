declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    currentPage: {
        type: NumberConstructor;
        required: true;
    };
    totalPages: {
        type: NumberConstructor;
        required: true;
    };
}>, {
    pageInput: import("vue").Ref<number, number>;
    goToPage: (page: any) => void;
    jumpToPage: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "changePage"[], "changePage", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    currentPage: {
        type: NumberConstructor;
        required: true;
    };
    totalPages: {
        type: NumberConstructor;
        required: true;
    };
}>> & Readonly<{
    onChangePage?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
