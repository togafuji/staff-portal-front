/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { defineComponent, ref, watch } from 'vue';
export default defineComponent({
    name: 'PaginationControl',
    props: {
        currentPage: {
            type: Number,
            required: true
        },
        totalPages: {
            type: Number,
            required: true
        }
    },
    emits: ['changePage'],
    setup(props, { emit }) {
        // 入力したページ番号を保持
        const pageInput = ref(props.currentPage);
        // PropsのcurrentPageが変わったらpageInputも更新
        watch(() => props.currentPage, (newPage) => {
            pageInput.value = newPage;
        });
        /**
         * 特定のページへ移動
         */
        const goToPage = (page) => {
            emit('changePage', page);
            pageInput.value = page;
        };
        /**
         * 入力欄からジャンプ
         */
        const jumpToPage = () => {
            let page = pageInput.value;
            if (page < 1)
                page = 1;
            if (page > props.totalPages)
                page = props.totalPages;
            if (page !== props.currentPage) {
                emit('changePage', page);
            }
        };
        return {
            pageInput,
            goToPage,
            jumpToPage
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col items-center space-y-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex space-x-2") }, });
    if (__VLS_ctx.totalPages > 1) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.totalPages > 1)))
                        return;
                    __VLS_ctx.goToPage(1);
                } }, ...{ class: (([
                    'px-4 py-2 rounded-md',
                    __VLS_ctx.currentPage === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-gray-400'
                ])) }, });
    }
    if (__VLS_ctx.totalPages > 2) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-gray-500 px-2") }, });
    }
    if (__VLS_ctx.totalPages > 1) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.totalPages > 1)))
                        return;
                    __VLS_ctx.goToPage(__VLS_ctx.totalPages);
                } }, ...{ class: (([
                    'px-4 py-2 rounded-md',
                    __VLS_ctx.currentPage === __VLS_ctx.totalPages ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-gray-400'
                ])) }, });
        (__VLS_ctx.totalPages);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center space-x-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("pageInput"), ...{ class: ("text-sm font-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onKeyup: (__VLS_ctx.jumpToPage) }, id: ("pageInput"), type: ("number"), ...{ class: ("w-20 px-2 py-1 border border-gray-300 rounded-md") }, min: ((1)), max: ((__VLS_ctx.totalPages)), });
    (__VLS_ctx.pageInput);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.jumpToPage) }, ...{ class: ("px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600") }, });
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['space-y-2'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['space-x-2'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['space-x-2'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['w-20'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['py-1'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-300'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['px-3'];
    __VLS_styleScopedClasses['py-1'];
    __VLS_styleScopedClasses['bg-blue-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['hover:bg-blue-600'];
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
