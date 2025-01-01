/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
export default defineComponent({
    setup() {
        const router = useRouter();
        const authStore = useAuthStore();
        // ログアウト処理
        const handleLogout = async () => {
            try {
                await authStore.logout();
                router.push('/login');
            }
            catch (err) {
                console.error('ログアウトに失敗しました');
            }
        };
        return {
            authStore,
            handleLogout
        };
    }
});
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({ ...{ class: ("bg-[#78c2f683] h-20 flex items-center justify-between px-10 fixed top-0 left-0 right-0 z-50") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-red-700 text-4xl") }, });
    (__VLS_ctx.$t('Header.title'));
    if (__VLS_ctx.authStore.isLoggedIn) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center space-x-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.authStore.userIcon)), alt: ("User Icon"), ...{ class: ("w-10 h-10 rounded-full mr-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-lg font-semibold") }, });
        (__VLS_ctx.authStore.userName);
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.handleLogout) }, ...{ class: ("bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline") }, });
        (__VLS_ctx.$t('Login.out'));
    }
    if (__VLS_ctx.authStore.isLoggedIn) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("min-h-[45px] text-2xl border-b border-black bg-white fixed top-20 left-0 right-0 z-40") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("flex justify-between items-center w-full px-10") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/home"), ...{ class: ("flex items-center text-gray-400") }, exactActiveClass: ("text-green-600"), }));
        const __VLS_2 = __VLS_1({ to: ("/home"), ...{ class: ("flex items-center text-gray-400") }, exactActiveClass: ("text-green-600"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.FontAwesomeIcon;
        /** @type { [typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ icon: ((['fas', 'home'])), ...{ class: ("mr-2") }, }));
        const __VLS_8 = __VLS_7({ icon: ((['fas', 'home'])), ...{ class: ("mr-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        (__VLS_ctx.$t('Header.nav.home'));
        __VLS_nonNullable(__VLS_5.slots).default;
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ to: ("/chat"), ...{ class: ("text-gray-300 flex items-center") }, exactActiveClass: ("text-green-600"), }));
        const __VLS_14 = __VLS_13({ to: ("/chat"), ...{ class: ("text-gray-300 flex items-center") }, exactActiveClass: ("text-green-600"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.FontAwesomeIcon;
        /** @type { [typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ] } */
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ icon: ((['fas', 'comments'])), ...{ class: ("mr-2") }, }));
        const __VLS_20 = __VLS_19({ icon: ((['fas', 'comments'])), ...{ class: ("mr-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        (__VLS_ctx.$t('Header.nav.chat'));
        __VLS_nonNullable(__VLS_17.slots).default;
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ to: ("/schedule"), ...{ class: ("text-gray-300 flex items-center") }, exactActiveClass: ("text-green-600"), }));
        const __VLS_26 = __VLS_25({ to: ("/schedule"), ...{ class: ("text-gray-300 flex items-center") }, exactActiveClass: ("text-green-600"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.FontAwesomeIcon;
        /** @type { [typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ] } */
        // @ts-ignore
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ icon: ((['fas', 'calendar'])), ...{ class: ("mr-2") }, }));
        const __VLS_32 = __VLS_31({ icon: ((['fas', 'calendar'])), ...{ class: ("mr-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        (__VLS_ctx.$t('Header.nav.schedule'));
        __VLS_nonNullable(__VLS_29.slots).default;
        const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
        // @ts-ignore
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ to: ("/attendance"), ...{ class: ("text-gray-300 flex items-center") }, exactActiveClass: ("text-green-600"), }));
        const __VLS_38 = __VLS_37({ to: ("/attendance"), ...{ class: ("text-gray-300 flex items-center") }, exactActiveClass: ("text-green-600"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.FontAwesomeIcon;
        /** @type { [typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ] } */
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ icon: ((['fas', 'user-check'])), ...{ class: ("mr-2") }, }));
        const __VLS_44 = __VLS_43({ icon: ((['fas', 'user-check'])), ...{ class: ("mr-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        (__VLS_ctx.$t('Header.nav.attendance'));
        __VLS_nonNullable(__VLS_41.slots).default;
        const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
        // @ts-ignore
        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ to: ("/share"), ...{ class: ("text-gray-300 flex items-center") }, exactActiveClass: ("text-green-600"), }));
        const __VLS_50 = __VLS_49({ to: ("/share"), ...{ class: ("text-gray-300 flex items-center") }, exactActiveClass: ("text-green-600"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
        const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.FontAwesomeIcon;
        /** @type { [typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ] } */
        // @ts-ignore
        const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ icon: ((['fas', 'share-alt'])), ...{ class: ("mr-2") }, }));
        const __VLS_56 = __VLS_55({ icon: ((['fas', 'share-alt'])), ...{ class: ("mr-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_55));
        (__VLS_ctx.$t('Header.nav.share'));
        __VLS_nonNullable(__VLS_53.slots).default;
        const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
        // @ts-ignore
        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ to: ("/config"), ...{ class: ("text-gray-300 flex items-center") }, exactActiveClass: ("text-green-600"), }));
        const __VLS_62 = __VLS_61({ to: ("/config"), ...{ class: ("text-gray-300 flex items-center") }, exactActiveClass: ("text-green-600"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
        const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.FontAwesomeIcon;
        /** @type { [typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ] } */
        // @ts-ignore
        const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ icon: ((['fas', 'cog'])), ...{ class: ("mr-2") }, }));
        const __VLS_68 = __VLS_67({ icon: ((['fas', 'cog'])), ...{ class: ("mr-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_67));
        (__VLS_ctx.$t('Header.nav.config'));
        __VLS_nonNullable(__VLS_65.slots).default;
        const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ class: ("mt-[65px] pt-[65px]") }, });
    const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.RouterView;
    /** @type { [typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ] } */
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({}));
    const __VLS_74 = __VLS_73({}, ...__VLS_functionalComponentArgsRest(__VLS_73));
    __VLS_styleScopedClasses['bg-[#78c2f683]'];
    __VLS_styleScopedClasses['h-20'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['px-10'];
    __VLS_styleScopedClasses['fixed'];
    __VLS_styleScopedClasses['top-0'];
    __VLS_styleScopedClasses['left-0'];
    __VLS_styleScopedClasses['right-0'];
    __VLS_styleScopedClasses['z-50'];
    __VLS_styleScopedClasses['text-red-700'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['space-x-4'];
    __VLS_styleScopedClasses['w-10'];
    __VLS_styleScopedClasses['h-10'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['mr-4'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['bg-red-500'];
    __VLS_styleScopedClasses['hover:bg-red-700'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['focus:outline-none'];
    __VLS_styleScopedClasses['focus:shadow-outline'];
    __VLS_styleScopedClasses['min-h-[45px]'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['border-b'];
    __VLS_styleScopedClasses['border-black'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['fixed'];
    __VLS_styleScopedClasses['top-20'];
    __VLS_styleScopedClasses['left-0'];
    __VLS_styleScopedClasses['right-0'];
    __VLS_styleScopedClasses['z-40'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['px-10'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['text-gray-400'];
    __VLS_styleScopedClasses['mr-2'];
    __VLS_styleScopedClasses['text-gray-300'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['mr-2'];
    __VLS_styleScopedClasses['text-gray-300'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['mr-2'];
    __VLS_styleScopedClasses['text-gray-300'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['mr-2'];
    __VLS_styleScopedClasses['text-gray-300'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['mr-2'];
    __VLS_styleScopedClasses['text-gray-300'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['mr-2'];
    __VLS_styleScopedClasses['mt-[65px]'];
    __VLS_styleScopedClasses['pt-[65px]'];
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
