/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'PostButton',
    props: {
        type: {
            type: String,
            required: true // 'preview', 'back', 'submit' など
        },
        onClick: {
            type: Function,
            required: false
        }
    },
    computed: {
        buttonClass() {
            switch (this.type) {
                case 'preview':
                    return 'px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600';
                case 'back':
                    return 'px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400';
                case 'submit':
                    return 'px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600';
                default:
                    return 'px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600';
            }
        }
    },
    methods: {
        handleClick() {
            if (this.onClick) {
                this.onClick();
            }
        }
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.handleClick) }, ...{ class: ((__VLS_ctx.buttonClass)) }, });
    var __VLS_0 = {};
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
