/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { defineComponent, onMounted } from 'vue';
import PaginationControl from '@/components/form/Pagination.vue';
import { useBulletinBoard } from '@/composition/bulletinBoard.composition';
export default defineComponent({
    name: 'HomeView',
    components: {
        PaginationControl
    },
    setup() {
        const { paginatedPosts, currentPage, totalPages, loading, error, fetchPosts, handleChangePage, goToDetail, goToCreatePost, formatDate } = useBulletinBoard();
        // データ取得のトリガー
        onMounted(async () => {
            await fetchPosts(); // データを取得
        });
        return {
            paginatedPosts,
            currentPage,
            totalPages,
            loading,
            error,
            handleChangePage,
            goToDetail,
            goToCreatePost,
            formatDate
        };
    }
});
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            PaginationControl
        },
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home-container flex flex-col items-center mt-10") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("bg-black text-white text-3xl font-bold px-6 py-4 rounded-md w-2/5 text-center") }, ...{ style: ({}) }, });
    (__VLS_ctx.$t('Home.title'));
    if (__VLS_ctx.loading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-20 text-3xl text-gray-500") }, });
    }
    else if (__VLS_ctx.error) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-20 text-3xl text-red-500") }, });
        (__VLS_ctx.error);
    }
    else if (__VLS_ctx.paginatedPosts.length === 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-20 text-3xl text-gray-500 justify-center") }, });
        (__VLS_ctx.$t('Home.nopost'));
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-white overflow-hidden mt-6 w-3/5 border border-black rounded-md") }, });
        for (const [post] of __VLS_getVForSourceType((__VLS_ctx.paginatedPosts))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((post.id)), ...{ class: ("flex items-center justify-between border border-black px-3 py-4 leading-loose") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex w-full") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-lg font-semibold w-1/4 text-left") }, });
            (__VLS_ctx.formatDate(post.createdAt));
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: (({ 'text-gray-500': post.isRead, 'text-black': !post.isRead })) }, ...{ class: ("w-2/4 text-center text-xl") }, });
            (post.title);
            if (!post.isRead) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-orange-500 font-bold w-1/4 text-right px-3") }, });
                (__VLS_ctx.$t('Home.unread'));
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                        if (__VLS_ctx.loading)
                            return;
                        if (__VLS_ctx.error)
                            return;
                        if (__VLS_ctx.paginatedPosts.length === 0)
                            return;
                        __VLS_ctx.goToDetail(post.id);
                    } }, ...{ class: ("text-gray-400 hover:text-gray-600") }, });
        }
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.PaginationControl;
        /** @type { [typeof __VLS_components.PaginationControl, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onChangePage': {} }, currentPage: ((__VLS_ctx.currentPage)), totalPages: ((__VLS_ctx.totalPages)), }));
        const __VLS_2 = __VLS_1({ ...{ 'onChangePage': {} }, currentPage: ((__VLS_ctx.currentPage)), totalPages: ((__VLS_ctx.totalPages)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        let __VLS_6;
        const __VLS_7 = {
            onChangePage: (__VLS_ctx.handleChangePage)
        };
        let __VLS_3;
        let __VLS_4;
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full flex justify-center mt-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.goToCreatePost) }, ...{ class: ("px-20 py-3 bg-blue-500 text-2xl text-white font-bold rounded-md hover:bg-blue-600") }, });
    (__VLS_ctx.$t('Home.button.post'));
    __VLS_styleScopedClasses['home-container'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['mt-10'];
    __VLS_styleScopedClasses['bg-black'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['text-3xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['px-6'];
    __VLS_styleScopedClasses['py-4'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['w-2/5'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mt-20'];
    __VLS_styleScopedClasses['text-3xl'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['mt-20'];
    __VLS_styleScopedClasses['text-3xl'];
    __VLS_styleScopedClasses['text-red-500'];
    __VLS_styleScopedClasses['mt-20'];
    __VLS_styleScopedClasses['text-3xl'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['mt-6'];
    __VLS_styleScopedClasses['w-3/5'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-black'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-black'];
    __VLS_styleScopedClasses['px-3'];
    __VLS_styleScopedClasses['py-4'];
    __VLS_styleScopedClasses['leading-loose'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['w-1/4'];
    __VLS_styleScopedClasses['text-left'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['text-black'];
    __VLS_styleScopedClasses['w-2/4'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['text-orange-500'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['w-1/4'];
    __VLS_styleScopedClasses['text-right'];
    __VLS_styleScopedClasses['px-3'];
    __VLS_styleScopedClasses['text-gray-400'];
    __VLS_styleScopedClasses['hover:text-gray-600'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['mt-3'];
    __VLS_styleScopedClasses['px-20'];
    __VLS_styleScopedClasses['py-3'];
    __VLS_styleScopedClasses['bg-blue-500'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['font-bold'];
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
