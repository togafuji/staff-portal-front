/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { defineComponent } from 'vue';
import BulletinBoardPostForm from '@/components/BulletinBoardPostForm.vue';
import { useBulletinBoardStore } from '@/stores/bulletinBoard.store';
export default defineComponent({
    name: 'BulletinBoardCreate',
    components: { BulletinBoardPostForm },
    setup() {
        const store = useBulletinBoardStore();
        const handleSubmit = async (formData) => {
            try {
                await store.createBulletin({
                    title: formData.title,
                    content: formData.content,
                    files: formData.files
                });
                alert('投稿が作成されました。');
                // 必要に応じてリダイレクト
            }
            catch (error) {
                alert('投稿の作成に失敗しました。');
            }
        };
        return {
            handleSubmit
        };
    }
});
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{ BulletinBoardPostForm },
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container mx-auto p-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-bold mb-4") }, });
    (__VLS_ctx.$t('Home.postform.new'));
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.BulletinBoardPostForm;
    /** @type { [typeof __VLS_components.BulletinBoardPostForm, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onSubmit': {} }, }));
    const __VLS_2 = __VLS_1({ ...{ 'onSubmit': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onSubmit: (__VLS_ctx.handleSubmit)
    };
    let __VLS_3;
    let __VLS_4;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-4'];
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
