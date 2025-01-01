/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export default (await import('vue')).defineComponent({
    name: 'TimeFooters',
    data() {
        return {
            currentYear: new Date().getFullYear()
        };
    }
});
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.footer, __VLS_intrinsicElements.footer)({ ...{ class: ("bg-gray-700 text-white text-2xl text-center py-4 w-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container mx-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.currentYear);
    __VLS_styleScopedClasses['bg-gray-700'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['py-4'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['mx-auto'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
let __VLS_self;
