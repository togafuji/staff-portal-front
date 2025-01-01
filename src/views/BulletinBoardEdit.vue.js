/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import BulletinBoardPostForm from '@/components/form/BulletinBoardPostForm.vue';
import { useBulletinBoardStore } from '@/stores/bulletinBoard.store';
export default defineComponent({
    name: 'BulletinBoardEdit',
    components: { BulletinBoardPostForm },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const store = useBulletinBoardStore();
        const postId = Number(route.params.id);
        const postDetail = ref({ title: '', content: '' });
        const loading = ref(true);
        onMounted(async () => {
            try {
                await store.fetchPostDetail(postId);
                if (store.postDetail) {
                    postDetail.value = {
                        title: store.postDetail.title,
                        content: store.postDetail.content
                    };
                }
            }
            catch (error) {
                alert('投稿詳細の取得に失敗しました。');
                router.push('/home');
            }
            finally {
                loading.value = false;
            }
        });
        return {
            postId,
            postDetail,
            loading
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
    if (__VLS_ctx.loading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.BulletinBoardPostForm;
        /** @type { [typeof __VLS_components.BulletinBoardPostForm, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ isEdit: ((true)), postId: ((__VLS_ctx.postId)), initialData: ((__VLS_ctx.postDetail)), allowFileChange: ((true)), }));
        const __VLS_2 = __VLS_1({ isEdit: ((true)), postId: ((__VLS_ctx.postId)), initialData: ((__VLS_ctx.postDetail)), allowFileChange: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    }
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['p-4'];
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
