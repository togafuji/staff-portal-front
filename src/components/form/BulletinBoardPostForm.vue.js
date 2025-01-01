/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { defineComponent, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useBulletinBoardStore } from '@/stores/bulletinBoard.store';
import PostButton from '@/components/button/PostButton.vue';
import AttachmentPreview from '@/components/AttachmentPreview.vue';
import BulletinBoardForm from '@/components/form/BulletinBoardForm.vue';
import PreviewModal from '@/components/PreviewModal.vue';
export default defineComponent({
    name: 'BulletinBoardPostForm',
    components: {
        PostButton,
        AttachmentPreview,
        BulletinBoardForm,
        PreviewModal
    },
    props: {
        isEdit: {
            type: Boolean,
            default: false
        },
        postId: {
            type: Number,
            required: false
        },
        initialData: {
            type: Object,
            required: false,
            default: () => ({ title: '', content: '' })
        },
        allowFileChange: {
            type: Boolean,
            default: true
        }
    },
    setup(props) {
        const router = useRouter();
        const bulletinBoardStore = useBulletinBoardStore();
        const files = ref([]);
        const isPreviewVisible = ref(false);
        // フォームデータ
        const formData = ref({
            title: props.initialData.title,
            content: props.initialData.content
        });
        const errorMessages = computed(() => {
            if (bulletinBoardStore.state.error) {
                if (Array.isArray(bulletinBoardStore.state.error)) {
                    return bulletinBoardStore.state.error;
                }
                else {
                    return [bulletinBoardStore.state.error];
                }
            }
            return [];
        });
        // ファイルの変更
        const onFileChange = (event) => {
            const target = event.target;
            if (target.files) {
                files.value = Array.from(target.files);
            }
        };
        // 子フォームが emit('submit', submittedData) → このメソッドを呼ぶ
        const submitPost = async (submittedData) => {
            try {
                if (props.isEdit && props.postId) {
                    // 更新
                    await bulletinBoardStore.updatePost(props.postId, {
                        title: submittedData.title,
                        content: submittedData.content
                        // files -> 必要あれば
                    });
                    alert('投稿が更新されました。');
                    router.push(`/detail/${props.postId}`);
                }
                else {
                    // 新規
                    await bulletinBoardStore.createBulletin({
                        title: submittedData.title,
                        content: submittedData.content,
                        files: files.value
                    });
                    alert('投稿が作成されました。');
                    router.push('/home');
                }
            }
            catch (error) {
                console.error('投稿の作成または更新に失敗しました:', error);
            }
        };
        // 新規: 特になし、編集: もし親自身でfetchしたいならここで fetch して formData更新
        // ただし今回は 'BulletinBoardEdit.vue' が fetch しているのでダブルフェッチ不要
        // 戻る
        const goBack = () => {
            router.push('/home');
        };
        // プレビュー
        const openPreview = () => {
            isPreviewVisible.value = true;
        };
        const closePreview = () => {
            isPreviewVisible.value = false;
        };
        return {
            formData,
            files,
            isPreviewVisible,
            errorMessages,
            onFileChange,
            submitPost,
            goBack,
            openPreview,
            closePreview,
            state: bulletinBoardStore.state
        };
    }
});
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            PostButton,
            AttachmentPreview,
            BulletinBoardForm,
            PreviewModal
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mx-auto p-4 max-w-xl flex-col") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-bold mb-4") }, });
    (__VLS_ctx.isEdit ? __VLS_ctx.$t('Home.postform.edit') : __VLS_ctx.$t('Home.postform.title'));
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.BulletinBoardForm;
    /** @type { [typeof __VLS_components.BulletinBoardForm, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onSubmit': {} }, modelValue: ((__VLS_ctx.formData)), isReadOnly: ((false)), isEdit: ((__VLS_ctx.isEdit)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onSubmit': {} }, modelValue: ((__VLS_ctx.formData)), isReadOnly: ((false)), isEdit: ((__VLS_ctx.isEdit)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onSubmit: (__VLS_ctx.submitPost)
    };
    let __VLS_3;
    let __VLS_4;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (__VLS_ctx.errorMessages.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-red-500 mt-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
        for (const [msg, index] of __VLS_getVForSourceType((__VLS_ctx.errorMessages))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((index)), });
            (msg);
        }
    }
    if (__VLS_ctx.state.loading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-blue-500") }, });
        (__VLS_ctx.$t('Home.postform.load'));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-2 mt-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onChange: (__VLS_ctx.onFileChange) }, type: ("file"), multiple: (true), ...{ class: ("w-full text-gray-700") }, disabled: ((__VLS_ctx.isEdit && !__VLS_ctx.allowFileChange)), });
    const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.AttachmentPreview;
    /** @type { [typeof __VLS_components.AttachmentPreview, ] } */
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ files: ((__VLS_ctx.files)), }));
    const __VLS_10 = __VLS_9({ files: ((__VLS_ctx.files)), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-between space-x-4 mt-4") }, });
    const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.PostButton;
    /** @type { [typeof __VLS_components.PostButton, typeof __VLS_components.PostButton, ] } */
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ ...{ 'onClick': {} }, type: ("preview"), }));
    const __VLS_16 = __VLS_15({ ...{ 'onClick': {} }, type: ("preview"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    let __VLS_20;
    const __VLS_21 = {
        onClick: (__VLS_ctx.openPreview)
    };
    let __VLS_17;
    let __VLS_18;
    (__VLS_ctx.$t('Button.preview'));
    __VLS_nonNullable(__VLS_19.slots).default;
    const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    const __VLS_22 = __VLS_resolvedLocalAndGlobalComponents.PostButton;
    /** @type { [typeof __VLS_components.PostButton, typeof __VLS_components.PostButton, ] } */
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({ ...{ 'onClick': {} }, type: ("back"), }));
    const __VLS_24 = __VLS_23({ ...{ 'onClick': {} }, type: ("back"), }, ...__VLS_functionalComponentArgsRest(__VLS_23));
    let __VLS_28;
    const __VLS_29 = {
        onClick: (__VLS_ctx.goBack)
    };
    let __VLS_25;
    let __VLS_26;
    (__VLS_ctx.$t('Button.back'));
    __VLS_nonNullable(__VLS_27.slots).default;
    const __VLS_27 = __VLS_pickFunctionalComponentCtx(__VLS_22, __VLS_24);
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.PreviewModal;
    /** @type { [typeof __VLS_components.PreviewModal, typeof __VLS_components.PreviewModal, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ 'onClose': {} }, isVisible: ((__VLS_ctx.isPreviewVisible)), title: ("プレビュー"), }));
    const __VLS_32 = __VLS_31({ ...{ 'onClose': {} }, isVisible: ((__VLS_ctx.isPreviewVisible)), title: ("プレビュー"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    let __VLS_36;
    const __VLS_37 = {
        onClose: (__VLS_ctx.closePreview)
    };
    let __VLS_33;
    let __VLS_34;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.$t('Home.BulletinBoard.title'));
    (__VLS_ctx.formData.title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.$t('Home.BulletinBoard.content'));
    (__VLS_ctx.formData.content);
    __VLS_nonNullable(__VLS_35.slots).default;
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['max-w-xl'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['text-red-500'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['text-blue-500'];
    __VLS_styleScopedClasses['space-y-2'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['space-x-4'];
    __VLS_styleScopedClasses['mt-4'];
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
