import type { BulletinBoardItem } from '@/entity/bulletinBoard.entity';
declare const _default: import("vue").DefineComponent<{}, {
    formData: import("vue").Ref<{
        title: string;
        content: string;
    }, {
        title: string;
        content: string;
    } | {
        title: string;
        content: string;
    }>;
    bulletin: import("vue").ComputedRef<BulletinBoardItem | null>;
    bulletinFiles: import("vue").ComputedRef<import("@/entity/bulletinBoard.entity").BulletinBoardFile[]>;
    isOwner: import("vue").ComputedRef<boolean>;
    goBack: () => void;
    goToEdit: () => void;
    confirmDelete: () => void;
    cancelDelete: () => void;
    deleteBulletinBoard: () => Promise<void>;
    error: import("vue").Ref<string | null, string | null>;
    showDeleteModal: import("vue").Ref<boolean, boolean>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
    PostButton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            required: true;
        };
        onClick: {
            type: FunctionConstructor;
            required: false;
        };
    }>, {}, {}, {
        buttonClass(): "px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" | "px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600" | "px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400";
    }, {
        handleClick(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            required: true;
        };
        onClick: {
            type: FunctionConstructor;
            required: false;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    AttachmentPreview: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        files: {
            type: ArrayConstructor;
            default: () => never[];
        };
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        files: {
            type: ArrayConstructor;
            default: () => never[];
        };
    }>> & Readonly<{}>, {
        files: unknown[];
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    BulletinBoardForm: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        modelValue: {
            type: () => Partial<import("@/entity/bulletinBoard.entity").FormData>;
            required: false;
            default: () => {
                title: string;
                content: string;
            };
        };
        isReadOnly: {
            type: BooleanConstructor;
            default: boolean;
        };
        isEdit: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        formData: {
            title: string;
            content: string;
            files?: {
                readonly lastModified: number;
                readonly name: string;
                readonly webkitRelativePath: string;
                readonly size: number;
                readonly type: string;
                arrayBuffer: () => Promise<ArrayBuffer>;
                slice: (start?: number, end?: number, contentType?: string) => Blob;
                stream: () => ReadableStream<Uint8Array>;
                text: () => Promise<string>;
            }[] | undefined;
        };
        handleSubmit: () => void;
        handleFileChange: (event: Event) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "submit")[], "update:modelValue" | "submit", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: () => Partial<import("@/entity/bulletinBoard.entity").FormData>;
            required: false;
            default: () => {
                title: string;
                content: string;
            };
        };
        isReadOnly: {
            type: BooleanConstructor;
            default: boolean;
        };
        isEdit: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onSubmit?: ((...args: any[]) => any) | undefined;
    }>, {
        modelValue: Partial<import("@/entity/bulletinBoard.entity").FormData>;
        isReadOnly: boolean;
        isEdit: boolean;
    }, {}, {
        PostButton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            type: {
                type: StringConstructor;
                required: true;
            };
            onClick: {
                type: FunctionConstructor;
                required: false;
            };
        }>, {}, {}, {
            buttonClass(): "px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" | "px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600" | "px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400";
        }, {
            handleClick(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            type: {
                type: StringConstructor;
                required: true;
            };
            onClick: {
                type: FunctionConstructor;
                required: false;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
