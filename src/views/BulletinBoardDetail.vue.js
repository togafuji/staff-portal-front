/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { defineComponent, computed, onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useBulletinBoardStore } from '@/stores/bulletinBoard.store';
import { useAuthStore } from '@/stores/auth';
import PostButton from '@/components/button/PostButton.vue';
import AttachmentPreview from '@/components/AttachmentPreview.vue';
import BulletinBoardForm from '@/components/form/BulletinBoardForm.vue';
import { useBulletinBoard } from '@/composition/bulletinBoard.composition';
export default defineComponent({
    name: 'BulletinBoardDetail',
    components: { PostButton, AttachmentPreview, BulletinBoardForm },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const store = useBulletinBoardStore();
        const authStore = useAuthStore();
        const { markAsRead } = useBulletinBoard();
        const id = Number(route.params.id);
        const error = ref(null);
        // 読み取り専用フォームのデータ
        const formData = ref({ title: '', content: '' });
        // モーダルの表示管理
        const showDeleteModal = ref(false);
        // onMounted で詳細をフェッチ
        onMounted(async () => {
            try {
                await store.fetchPostDetail(id);
                await markAsRead(id); // 既読
                // 所有者チェック
                if (authStore.userId !== store.postDetail?.userId) {
                    alert('この投稿を編集する権限がありません。');
                    router.push('/home');
                }
                else {
                    // 所有者なら formData にストアから反映
                    if (store.postDetail) {
                        formData.value = {
                            title: store.postDetail.title,
                            content: store.postDetail.content
                        };
                    }
                }
            }
            catch (err) {
                error.value = '投稿詳細の取得に失敗しました。';
            }
        });
        // コンピューテッド
        const bulletin = computed(() => store.postDetail);
        const bulletinFiles = computed(() => bulletin.value?.files || []);
        // 所有者判定
        const isOwner = computed(() => {
            if (authStore.userId === null || bulletin.value?.userId === undefined) {
                return false;
            }
            return authStore.userId === bulletin.value.userId;
        });
        // 編集ボタン
        const goToEdit = () => {
            router.push(`/detail/${id}/edit`);
        };
        // 戻る
        const goBack = () => {
            router.push('/home');
        };
        // 削除ボタンが押された時
        const confirmDelete = () => {
            showDeleteModal.value = true;
        };
        // モーダルのキャンセル
        const cancelDelete = () => {
            showDeleteModal.value = false;
        };
        // 実際に投稿を削除
        const deleteBulletinBoard = async () => {
            try {
                await store.deletePost(id);
                showDeleteModal.value = false;
                alert('投稿を削除しました。');
                router.push('/home');
            }
            catch (err) {
                console.error('削除に失敗しました', err);
                alert('削除に失敗しました。');
            }
        };
        return {
            formData,
            bulletin,
            bulletinFiles,
            isOwner,
            goBack,
            goToEdit,
            confirmDelete,
            cancelDelete,
            deleteBulletinBoard,
            error,
            showDeleteModal
        };
    }
});
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{ PostButton, AttachmentPreview, BulletinBoardForm },
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container mx-auto p-4 max-w-xl space-y-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-bold mb-4") }, });
    (__VLS_ctx.$t('Home.detail.content'));
    if (__VLS_ctx.bulletin) {
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.BulletinBoardForm;
        /** @type { [typeof __VLS_components.BulletinBoardForm, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ modelValue: ((__VLS_ctx.formData)), isReadOnly: ((true)), }));
        const __VLS_2 = __VLS_1({ modelValue: ((__VLS_ctx.formData)), isReadOnly: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    }
    if (__VLS_ctx.bulletin) {
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.AttachmentPreview;
        /** @type { [typeof __VLS_components.AttachmentPreview, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ files: ((__VLS_ctx.bulletinFiles)), ...{ class: ("mt-4") }, }));
        const __VLS_8 = __VLS_7({ files: ((__VLS_ctx.bulletinFiles)), ...{ class: ("mt-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    }
    if (__VLS_ctx.isOwner) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex space-x-4 mt-4") }, });
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.PostButton;
        /** @type { [typeof __VLS_components.PostButton, typeof __VLS_components.PostButton, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ 'onClick': {} }, type: ("edit"), ...{ class: ("bg-yellow-500 hover:bg-yellow-700") }, }));
        const __VLS_14 = __VLS_13({ ...{ 'onClick': {} }, type: ("edit"), ...{ class: ("bg-yellow-500 hover:bg-yellow-700") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        let __VLS_18;
        const __VLS_19 = {
            onClick: (__VLS_ctx.goToEdit)
        };
        let __VLS_15;
        let __VLS_16;
        (__VLS_ctx.$t('Button.edit'));
        __VLS_nonNullable(__VLS_17.slots).default;
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
        const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.PostButton;
        /** @type { [typeof __VLS_components.PostButton, typeof __VLS_components.PostButton, ] } */
        // @ts-ignore
        const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{ 'onClick': {} }, type: ("delete"), ...{ class: ("bg-red-500 hover:bg-red-700") }, }));
        const __VLS_22 = __VLS_21({ ...{ 'onClick': {} }, type: ("delete"), ...{ class: ("bg-red-500 hover:bg-red-700") }, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
        let __VLS_26;
        const __VLS_27 = {
            onClick: (__VLS_ctx.confirmDelete)
        };
        let __VLS_23;
        let __VLS_24;
        (__VLS_ctx.$t('Button.delete'));
        __VLS_nonNullable(__VLS_25.slots).default;
        const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    }
    const __VLS_28 = __VLS_resolvedLocalAndGlobalComponents.PostButton;
    /** @type { [typeof __VLS_components.PostButton, typeof __VLS_components.PostButton, ] } */
    // @ts-ignore
    const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({ ...{ 'onClick': {} }, type: ("back"), ...{ class: ("mt-6") }, }));
    const __VLS_30 = __VLS_29({ ...{ 'onClick': {} }, type: ("back"), ...{ class: ("mt-6") }, }, ...__VLS_functionalComponentArgsRest(__VLS_29));
    let __VLS_34;
    const __VLS_35 = {
        onClick: (__VLS_ctx.goBack)
    };
    let __VLS_31;
    let __VLS_32;
    (__VLS_ctx.$t('Button.back'));
    __VLS_nonNullable(__VLS_33.slots).default;
    const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30);
    if (__VLS_ctx.showDeleteModal) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-white p-6 rounded shadow-lg w-80") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-xl font-bold mb-4") }, });
        (__VLS_ctx.$t('Home.detail.modal.confirm'));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.$t('Home.detail.modal.caution'));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-end space-x-4 mt-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.cancelDelete) }, ...{ class: ("bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded") }, });
        (__VLS_ctx.$t('Home.detail.cancel'));
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.deleteBulletinBoard) }, ...{ class: ("bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded") }, });
        (__VLS_ctx.$t('Home.detail.delete'));
    }
    if (__VLS_ctx.error) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-red-500 text-xs italic mt-4") }, });
        (__VLS_ctx.error);
    }
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['max-w-xl'];
    __VLS_styleScopedClasses['space-y-4'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['space-x-4'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['bg-yellow-500'];
    __VLS_styleScopedClasses['hover:bg-yellow-700'];
    __VLS_styleScopedClasses['bg-red-500'];
    __VLS_styleScopedClasses['hover:bg-red-700'];
    __VLS_styleScopedClasses['mt-6'];
    __VLS_styleScopedClasses['fixed'];
    __VLS_styleScopedClasses['inset-0'];
    __VLS_styleScopedClasses['bg-gray-600'];
    __VLS_styleScopedClasses['bg-opacity-50'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['w-80'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-end'];
    __VLS_styleScopedClasses['space-x-4'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['bg-gray-300'];
    __VLS_styleScopedClasses['hover:bg-gray-400'];
    __VLS_styleScopedClasses['text-black'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['bg-red-500'];
    __VLS_styleScopedClasses['hover:bg-red-700'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['text-red-500'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['italic'];
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
