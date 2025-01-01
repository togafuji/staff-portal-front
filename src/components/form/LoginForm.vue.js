/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import InputField from './InputField.vue';
import SubmitButton from './SubmitButton.vue';
export default (await import('vue')).defineComponent({
    components: {
        InputField,
        SubmitButton
    },
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        submit() {
            this.$emit('submit', { username: this.username, password: this.password });
        }
    }
});
;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            InputField,
            SubmitButton
        },
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.submit) }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.InputField;
    /** @type { [typeof __VLS_components.InputField, typeof __VLS_components.inputField, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ label: ("ユーザー名"), modelValue: ((__VLS_ctx.username)), type: ("text"), }));
    const __VLS_2 = __VLS_1({ label: ("ユーザー名"), modelValue: ((__VLS_ctx.username)), type: ("text"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.InputField;
    /** @type { [typeof __VLS_components.InputField, typeof __VLS_components.inputField, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ label: ("パスワード"), modelValue: ((__VLS_ctx.password)), type: ("password"), }));
    const __VLS_8 = __VLS_7({ label: ("パスワード"), modelValue: ((__VLS_ctx.password)), type: ("password"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.SubmitButton;
    /** @type { [typeof __VLS_components.SubmitButton, typeof __VLS_components.submitButton, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ label: ("ログイン"), }));
    const __VLS_14 = __VLS_13({ label: ("ログイン"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
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
