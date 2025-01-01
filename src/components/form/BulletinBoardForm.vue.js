/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { defineComponent, reactive, watch } from 'vue';
import PostButton from '@/components/button/PostButton.vue';
export default defineComponent({
    name: 'BulletinBoardForm',
    components: { PostButton },
    props: {
        modelValue: {
            type: Object,
            required: false,
            default: () => ({ title: '', content: '' })
        },
        isReadOnly: {
            type: Boolean,
            default: false
        },
        isEdit: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:modelValue', 'submit'],
    setup(props, { emit }) {
        const formData = reactive({
            title: props.modelValue.title || '',
            content: props.modelValue.content || '',
            files: []
        });
        // 親から v-model で受け取った変更を適用
        watch(() => props.modelValue, (newData) => {
            formData.title = newData.title || '';
            formData.content = newData.content || '';
            // filesは通常ここでは上書きしない
        }, { immediate: true, deep: true });
        // ファイル選択時
        const handleFileChange = (event) => {
            const target = event.target;
            if (target.files) {
                formData.files = Array.from(target.files);
                emit('update:modelValue', { ...formData });
            }
        };
        // 入力値が変わるたびに v-model を更新
        watch(formData, (newFormData) => {
            emit('update:modelValue', { ...newFormData });
        }, { deep: true });
        // フォーム送信ボタンをクリックすると発火
        const handleSubmit = () => {
            // 親コンポーネントの submitPost(submittedData) が呼ばれる
            emit('submit', { ...formData });
        };
        return {
            formData,
            handleSubmit,
            handleFileChange
        };
    }
});
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{ PostButton },
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.handleSubmit) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("block text-gray-700 text-sm font-bold mb-2") }, for: ("title"), });
    (__VLS_ctx.$t('Home.BulletinBoard.title'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ value: ((__VLS_ctx.formData.title)), id: ("title"), type: ("text"), readonly: ((__VLS_ctx.isReadOnly)), required: (true), ...{ class: ("shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("block text-gray-700 text-sm font-bold mb-2") }, for: ("content"), });
    (__VLS_ctx.$t('Home.BulletinBoard.content'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ value: ((__VLS_ctx.formData.content)), id: ("content"), readonly: ((__VLS_ctx.isReadOnly)), required: (true), rows: ("5"), ...{ class: ("shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("block text-gray-700 text-sm font-bold mb-2") }, for: ("files"), });
    (__VLS_ctx.$t('Home.postform.attachment'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onChange: (__VLS_ctx.handleFileChange) }, id: ("files"), type: ("file"), multiple: (true), disabled: ((__VLS_ctx.isReadOnly)), ...{ class: ("shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline") }, });
    if (!__VLS_ctx.isReadOnly) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-end") }, });
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.PostButton;
        /** @type { [typeof __VLS_components.PostButton, typeof __VLS_components.PostButton, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ type: ("submit"), }));
        const __VLS_2 = __VLS_1({ type: ("submit"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        (__VLS_ctx.isEdit ? __VLS_ctx.$t('Button.save') : __VLS_ctx.$t('Button.submit'));
        __VLS_nonNullable(__VLS_5.slots).default;
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['shadow'];
    __VLS_styleScopedClasses['appearance-none'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['px-3'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['leading-tight'];
    __VLS_styleScopedClasses['focus:outline-none'];
    __VLS_styleScopedClasses['focus:shadow-outline'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['shadow'];
    __VLS_styleScopedClasses['appearance-none'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['px-3'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['leading-tight'];
    __VLS_styleScopedClasses['focus:outline-none'];
    __VLS_styleScopedClasses['focus:shadow-outline'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['shadow'];
    __VLS_styleScopedClasses['appearance-none'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['px-3'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['leading-tight'];
    __VLS_styleScopedClasses['focus:outline-none'];
    __VLS_styleScopedClasses['focus:shadow-outline'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-end'];
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
